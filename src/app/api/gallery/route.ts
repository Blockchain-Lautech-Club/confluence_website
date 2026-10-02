import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

export async function GET(request: Request) {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'zz3ptcjd';
    const apiKey = process.env.CLOUDINARY_API_KEY || '277748733633444';
    const apiSecret = process.env.CLOUDINARY_API_SECRET || 's3HaHcFAK4hRVRYi8JL92j9qUes';

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
    // Fallback static items from Cloudinary Confluence 1.0
    const fallbackItems = [
      { image: 'https://res.cloudinary.com/zz3ptcjd/image/upload/v1789731686/img-9944_uigdeq.jpg', text: 'Community Keynote', track: 'community' },
      { image: 'https://res.cloudinary.com/zz3ptcjd/image/upload/v1789731685/img-9943_nju0fh.jpg', text: 'Panel Discussion', track: 'community' },
      { image: 'https://res.cloudinary.com/zz3ptcjd/image/upload/v1789731684/img-9940_qd8qch.jpg', text: 'Networking Session', track: 'community' },
      { image: 'https://res.cloudinary.com/zz3ptcjd/image/upload/v1789733101/IMG_20251107_115424_nz2rto.jpg', text: 'Dev Hackathon Prep', track: 'dev' },
      { image: 'https://res.cloudinary.com/zz3ptcjd/image/upload/v1789733099/IMG_20251107_115427_brxxnl.jpg', text: 'Workshop Coding', track: 'dev' },
      { image: 'https://res.cloudinary.com/zz3ptcjd/image/upload/v1789733098/IMG_20251107_115427_1_uhgxxs.jpg', text: 'Developer Keynote', track: 'dev' },
    ];
    return NextResponse.json(
      { configured: true, items: fallbackItems, count: fallbackItems.length },
      { status: 200 }
    );
  }
}
