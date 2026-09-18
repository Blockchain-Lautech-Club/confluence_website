import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export async function GET(request: Request) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.warn('Cloudinary API credentials missing in process.env');
      return NextResponse.json({
        configured: false,
        message: 'Cloudinary environment variables not set.',
        items: [],
      });
    }

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });

    const { searchParams } = new URL(request.url);
    const track = searchParams.get('track');

    let expression = 'asset_folder:"gallery/Confluence 1.0 Nov 2025*"';
    if (track === 'community') {
      expression = 'asset_folder:"gallery/Confluence 1.0 Nov 2025/Community Track [November 8,2025]"';
    } else if (track === 'dev') {
      expression = 'asset_folder:"gallery/Confluence 1.0 Nov 2025/Dev Track [November 7,2025]"';
    }

    const result = await cloudinary.search
      .expression(expression)
      .sort_by('public_id', 'asc')
      .max_results(500)
      .execute();

    const items = (result.resources || []).map((resource: { secure_url: string; public_id: string; asset_folder?: string }) => {
      const assetFolder = resource.asset_folder || '';
      const publicId = resource.public_id || '';
      const isDevTrack = assetFolder.includes('Dev Track') || publicId.includes('Dev');
      const isCommunityTrack = assetFolder.includes('Community Track') || publicId.includes('Community');

      let trackName = 'all';
      if (isDevTrack) trackName = 'dev';
      if (isCommunityTrack) trackName = 'community';

      const rawName = publicId.split('/').pop() || 'Confluence 2025';
      const cleanName = rawName.replace(/[-_]/g, ' ').replace(/\.\w+$/, '');

      return {
        image: resource.secure_url,
        text: cleanName,
        track: trackName,
        publicId,
      };
    });

    return NextResponse.json({
      configured: true,
      items,
      count: items.length,
    });
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return NextResponse.json(
      { configured: false, error: 'Failed to fetch gallery images', items: [] },
      { status: 500 }
    );
  }
}
