'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import {
  Upload,
  Download,
  Share2,
  Copy,
  Check,
  RefreshCw,
  
  ZoomIn,
  Move,
  ArrowLeft,
  Camera,
  Layers,
  Palette,
  Calendar,
  MapPin,
  Twitter,
  Image as ImageIcon
} from 'lucide-react';

type AspectRatio = 'square' | 'story';
type TemplateStyle = 'official' | 'cyber';

const CONFLUENCE_THEME = {
  id: 'lime',
  name: 'Confluence Lime',
  primary: '#ccff00',
  secondary: '#286cfd',
  glow: 'rgba(204, 255, 0, 0.45)',
};

const PRESET_ROLES = [
  'Attendee',
  'Developer',
  'Designer & Creative',
  'Student Builder',
  'Speaker / VIP',
  'Volunteer & Team',
  'Convener',
];

export default function AvatarGeneratorPage() {
  // Form State
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('Attendee');
  const [customRole, setCustomRole] = useState<string>('');
  const [handle, setHandle] = useState<string>('');
  const theme = CONFLUENCE_THEME;
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('square');
  const [template, setTemplate] = useState<TemplateStyle>('official');

  // Image & Transform State
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState<number>(1.0);
  const [panX, setPanX] = useState<number>(0);
  const [panY, setPanY] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Canvas Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Active Role text
  const activeRole = role === 'Custom' ? customRole : role;

  // Load Confluence background graphic on mount
  useEffect(() => {
    // 1. Load CONFLUENCEprev.jpg as official background
    const bg = new window.Image();
    bg.crossOrigin = 'anonymous';
    bg.src = '/CONFLUENCEprev.jpg';
    bg.onload = () => {
      setBgImage(bg);
    };
  }, []);

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        setUserImage(img);
        setZoom(1.0);
        setPanX(0);
        setPanY(0);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  // Canvas Drawing Logic
  const drawFlyer = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isSquare = aspectRatio === 'square';
    const W = isSquare ? 1080 : 1080;
    const H = isSquare ? 1080 : 1920;

    canvas.width = W;
    canvas.height = H;

    // ──────────────────────────────────────────
    // 1. BACKGROUND RENDERING
    // ──────────────────────────────────────────
    if (template === 'official' && bgImage) {
      // Draw official Confluence 2026 Key Art
      ctx.drawImage(bgImage, 0, 0, W, H);

      // Central dark focus card to frame the attendee's photo and details
      const cardW = isSquare ? 760 : 820;
      const cardH = isSquare ? 590 : 880;
      const cardX = (W - cardW) / 2;
      const cardY = isSquare ? 330 : 660;
      const cardRadius = 36;

      // Dark translucent backdrop with soft shadow
      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
      ctx.shadowBlur = 40;
      ctx.fillStyle = 'rgba(4, 7, 12, 0.88)';
      ctx.beginPath();
      ctx.roundRect(cardX, cardY, cardW, cardH, cardRadius);
      ctx.fill();

      // Glowing neon border around the focus card
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 2.5;
      ctx.shadowColor = theme.glow;
      ctx.shadowBlur = 20;
      ctx.stroke();
      ctx.restore();

      // ──────────────────────────────────────────
      // 2. ATTENDEE PHOTO FRAME (OFFICIAL TEMPLATE)
      // ──────────────────────────────────────────
      const frameSize = isSquare ? 300 : 420;
      const frameX = W / 2 - frameSize / 2;
      const frameY = isSquare ? 360 : 700;
      const borderRadius = isSquare ? 36 : 48;

      // Outer glow for attendee photo
      ctx.save();
      ctx.shadowColor = theme.primary;
      ctx.shadowBlur = 24;
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 3.5;
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameSize, frameSize, borderRadius);
      ctx.stroke();
      ctx.restore();

      // Clip & Draw Photo
      ctx.save();
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameSize, frameSize, borderRadius);
      ctx.clip();

      if (userImage) {
        const imgRatio = userImage.width / userImage.height;
        let drawW: number;
        let drawH: number;

        if (imgRatio > 1) {
          drawH = frameSize * zoom;
          drawW = drawH * imgRatio;
        } else {
          drawW = frameSize * zoom;
          drawH = drawW / imgRatio;
        }

        const drawX = frameX + (frameSize - drawW) / 2 + panX;
        const drawY = frameY + (frameSize - drawH) / 2 + panY;

        ctx.drawImage(userImage, drawX, drawY, drawW, drawH);

        // Soft bottom gradient inside frame
        const vignette = ctx.createLinearGradient(0, frameY, 0, frameY + frameSize);
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0.2)');
        vignette.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
        ctx.fillStyle = vignette;
        ctx.fillRect(frameX, frameY, frameSize, frameSize);
      } else {
        // Minimalist stylish avatar silhouette placeholder
        ctx.fillStyle = '#090a0f';
        ctx.fillRect(frameX, frameY, frameSize, frameSize);

        const centerX = frameX + frameSize / 2;
        const centerY = frameY + frameSize / 2 - 12;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.arc(centerX, centerY - 25, 52, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX, centerY + 95, 88, Math.PI * 1.1, Math.PI * 1.9);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '800 12px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '2px';
        ctx.fillText('UPLOAD PHOTO', centerX, frameY + frameSize - 40);
        ctx.letterSpacing = '0px';
      }
      ctx.restore();

      // ──────────────────────────────────────────
      // 3. "I WILL BE AT \n CONFLUENCE 2.0" FLOATING BADGE (2 LINES)
      // ──────────────────────────────────────────
      const ribbonY = frameY + frameSize - (isSquare ? 26 : 28);
      const ribbonW = isSquare ? 280 : 330;
      const ribbonH = isSquare ? 54 : 60;

      ctx.save();
      ctx.shadowColor = theme.primary;
      ctx.shadowBlur = 24;

      ctx.fillStyle = theme.primary;
      ctx.beginPath();
      ctx.roundRect(W / 2 - ribbonW / 2, ribbonY, ribbonW, ribbonH, ribbonH / 2);
      ctx.fill();

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';

      // Line 1: "I WILL BE AT"
      ctx.font = isSquare ? '900 11px Montserrat, sans-serif' : '900 12px Montserrat, sans-serif';
      ctx.letterSpacing = '2.5px';
      ctx.fillText('I WILL BE AT', W / 2, ribbonY + (isSquare ? 21 : 23));

      // Line 2: "CONFLUENCE 2.0"
      ctx.font = isSquare ? '900 16px Montserrat, sans-serif' : '900 18px Montserrat, sans-serif';
      ctx.letterSpacing = '1.5px';
      ctx.fillText('CONFLUENCE 2.0', W / 2, ribbonY + (isSquare ? 41 : 46));
      ctx.letterSpacing = '0px';

      // ──────────────────────────────────────────
      // 4. ATTENDEE NAME & ROLE
      // ──────────────────────────────────────────
      const infoStartY = isSquare ? 725 : 1190;

      const hasName = Boolean(name.trim());
      const displayName = hasName ? name.trim().toUpperCase() : 'YOUR NAME';
      ctx.fillStyle = hasName ? '#ffffff' : 'rgba(255, 255, 255, 0.4)';
      ctx.textAlign = 'center';

      let nameFontSize = isSquare ? 38 : 48;
      if (displayName.length > 20) nameFontSize = isSquare ? 28 : 36;
      else if (displayName.length > 14) nameFontSize = isSquare ? 32 : 40;

      ctx.font = `900 ${nameFontSize}px Montserrat, sans-serif`;
      ctx.fillText(displayName, W / 2, infoStartY);

      // Track / Role Pill
      const rolePillY = infoStartY + (isSquare ? 36 : 46);
      const roleText = (activeRole.trim() || 'ATTENDEE').toUpperCase();
      ctx.font = '800 13px Montserrat, sans-serif';
      const roleTextWidth = ctx.measureText(roleText).width;
      const rolePillWidth = Math.max(180, roleTextWidth + 40);
      const rolePillHeight = 30;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.beginPath();
      ctx.roundRect(W / 2 - rolePillWidth / 2, rolePillY - 20, rolePillWidth, rolePillHeight, 15);
      ctx.fill();

      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = theme.primary;
      ctx.letterSpacing = '2px';
      ctx.fillText(roleText, W / 2, rolePillY);
      ctx.letterSpacing = '0px';

      // Social Handle
      const hasHandle = Boolean(handle.trim());
      const cleanHandle = hasHandle ? handle.trim() : '@yourhandle';
      const handleY = rolePillY + (isSquare ? 28 : 36);
      ctx.fillStyle = hasHandle ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 255, 255, 0.3)';
      ctx.font = '600 13px Montserrat, sans-serif';
      ctx.fillText(cleanHandle.startsWith('@') ? cleanHandle : `@${cleanHandle}`, W / 2, handleY);

      // Date & Venue inside card
      const dateVenueY = isSquare ? 870 : 1440;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = '800 13px Montserrat, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText('NOV 12–14, 2026  •  THE ASSEMBLY, OGBOMOSO', W / 2, dateVenueY);
      ctx.letterSpacing = '0px';

    } else {
      // ──────────────────────────────────────────
      // CYBER OBSIDIAN TEMPLATE
      // ──────────────────────────────────────────
      const bgGradient = ctx.createLinearGradient(0, 0, W, H);
      bgGradient.addColorStop(0, '#06080d');
      bgGradient.addColorStop(0.5, '#040508');
      bgGradient.addColorStop(1, '#020305');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, W, H);

      // Radial neon glow
      const primaryGlow = ctx.createRadialGradient(
        W * 0.5,
        isSquare ? 420 : 680,
        50,
        W * 0.5,
        isSquare ? 420 : 680,
        isSquare ? 520 : 700
      );
      primaryGlow.addColorStop(0, theme.glow);
      primaryGlow.addColorStop(0.6, 'rgba(40, 108, 253, 0.12)');
      primaryGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = primaryGlow;
      ctx.fillRect(0, 0, W, H);

      // Tech grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      const gridSize = isSquare ? 60 : 72;
      for (let x = 0; x <= W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y <= H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      // Corner brackets
      const margin = isSquare ? 48 : 56;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(margin, margin, W - margin * 2, H - margin * 2);

      const bracketSize = 32;
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 3.5;
      // Top-Left
      ctx.beginPath();
      ctx.moveTo(margin, margin + bracketSize);
      ctx.lineTo(margin, margin);
      ctx.lineTo(margin + bracketSize, margin);
      ctx.stroke();
      // Top-Right
      ctx.beginPath();
      ctx.moveTo(W - margin - bracketSize, margin);
      ctx.lineTo(W - margin, margin);
      ctx.lineTo(W - margin, margin + bracketSize);
      ctx.stroke();
      // Bottom-Left
      ctx.beginPath();
      ctx.moveTo(margin, H - margin - bracketSize);
      ctx.lineTo(margin, H - margin);
      ctx.lineTo(margin + bracketSize, H - margin);
      ctx.stroke();
      // Bottom-Right
      ctx.beginPath();
      ctx.moveTo(W - margin - bracketSize, H - margin);
      ctx.lineTo(W - margin, H - margin);
      ctx.lineTo(W - margin, H - margin - bracketSize);
      ctx.stroke();

      // Top Header
      const headerY = isSquare ? 100 : 160;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '700 13px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '6px';
      ctx.fillText('BLOCKCHAIN LAUTECH PRESENTS', W / 2, headerY);
      ctx.letterSpacing = '0px';

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 44px Montserrat, sans-serif';
      ctx.fillText('CONFLUENCE', W / 2 - 42, headerY + 50);

      ctx.fillStyle = theme.primary;
      ctx.font = '900 44px Montserrat, sans-serif';
      ctx.fillText('2.0', W / 2 + 138, headerY + 50);

      const pillY = headerY + 84;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
      const pillW = 260;
      const pillH = 26;
      ctx.beginPath();
      ctx.roundRect(W / 2 - pillW / 2, pillY - 18, pillW, pillH, 13);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.font = '800 11px Montserrat, sans-serif';
      ctx.letterSpacing = '3px';
      ctx.fillText('CODE  •  CREATE  •  CONNECT', W / 2, pillY);
      ctx.letterSpacing = '0px';

      // Photo Frame
      const frameSize = isSquare ? 380 : 540;
      const frameX = W / 2 - frameSize / 2;
      const frameY = isSquare ? 260 : 420;
      const borderRadius = isSquare ? 42 : 56;

      ctx.save();
      ctx.shadowColor = theme.primary;
      ctx.shadowBlur = 28;
      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameSize, frameSize, borderRadius);
      ctx.stroke();
      ctx.restore();

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(frameX, frameY, frameSize, frameSize, borderRadius);
      ctx.clip();

      if (userImage) {
        const imgRatio = userImage.width / userImage.height;
        let drawW: number;
        let drawH: number;

        if (imgRatio > 1) {
          drawH = frameSize * zoom;
          drawW = drawH * imgRatio;
        } else {
          drawW = frameSize * zoom;
          drawH = drawW / imgRatio;
        }

        const drawX = frameX + (frameSize - drawW) / 2 + panX;
        const drawY = frameY + (frameSize - drawH) / 2 + panY;

        ctx.drawImage(userImage, drawX, drawY, drawW, drawH);

        const vignette = ctx.createLinearGradient(0, frameY, 0, frameY + frameSize);
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0.25)');
        vignette.addColorStop(0.7, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(1, 'rgba(0, 0, 0, 0.55)');
        ctx.fillStyle = vignette;
        ctx.fillRect(frameX, frameY, frameSize, frameSize);
      } else {
        // Minimalist stylish avatar silhouette placeholder
        ctx.fillStyle = '#090a0f';
        ctx.fillRect(frameX, frameY, frameSize, frameSize);

        const centerX = frameX + frameSize / 2;
        const centerY = frameY + frameSize / 2 - 12;

        ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
        ctx.beginPath();
        ctx.arc(centerX, centerY - 25, 52, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(centerX, centerY + 95, 88, Math.PI * 1.1, Math.PI * 1.9);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
        ctx.font = '800 12px Montserrat, sans-serif';
        ctx.textAlign = 'center';
        ctx.letterSpacing = '2px';
        ctx.fillText('UPLOAD PHOTO', centerX, frameY + frameSize - 40);
        ctx.letterSpacing = '0px';
      }
      ctx.restore();

      // Ribbon (2 lines)
      const ribbonY = frameY + frameSize - 24;
      const ribbonW = isSquare ? 280 : 330;
      const ribbonH = isSquare ? 54 : 60;

      ctx.save();
      ctx.shadowColor = theme.primary;
      ctx.shadowBlur = 24;

      ctx.fillStyle = theme.primary;
      ctx.beginPath();
      ctx.roundRect(W / 2 - ribbonW / 2, ribbonY, ribbonW, ribbonH, ribbonH / 2);
      ctx.fill();

      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';

      // Line 1: "I WILL BE AT"
      ctx.font = isSquare ? '900 12px Montserrat, sans-serif' : '900 13px Montserrat, sans-serif';
      ctx.letterSpacing = '2.5px';
      ctx.fillText('I WILL BE AT', W / 2, ribbonY + (isSquare ? 22 : 24));

      // Line 2: "CONFLUENCE 2.0"
      ctx.font = isSquare ? '900 16px Montserrat, sans-serif' : '900 18px Montserrat, sans-serif';
      ctx.letterSpacing = '1.5px';
      ctx.fillText('CONFLUENCE 2.0', W / 2, ribbonY + (isSquare ? 42 : 46));
      ctx.letterSpacing = '0px';

      // Attendee Name
      const infoStartY = isSquare ? 730 : 1060;
      const hasName = Boolean(name.trim());
      const displayName = hasName ? name.trim().toUpperCase() : 'YOUR NAME';
      ctx.fillStyle = hasName ? '#ffffff' : 'rgba(255, 255, 255, 0.4)';
      ctx.textAlign = 'center';

      let nameFontSize = isSquare ? 44 : 56;
      if (displayName.length > 20) nameFontSize = isSquare ? 32 : 40;
      else if (displayName.length > 14) nameFontSize = isSquare ? 38 : 48;

      ctx.font = `900 ${nameFontSize}px Montserrat, sans-serif`;
      ctx.fillText(displayName, W / 2, infoStartY);

      // Attendee Role
      const rolePillY = infoStartY + (isSquare ? 42 : 54);
      const roleText = (activeRole.trim() || 'ATTENDEE').toUpperCase();
      ctx.font = '800 14px Montserrat, sans-serif';
      const roleTextWidth = ctx.measureText(roleText).width;
      const rolePillWidth = Math.max(200, roleTextWidth + 48);
      const rolePillHeight = 34;

      ctx.fillStyle = 'rgba(255, 255, 255, 0.07)';
      ctx.beginPath();
      ctx.roundRect(W / 2 - rolePillWidth / 2, rolePillY - 22, rolePillWidth, rolePillHeight, 17);
      ctx.fill();

      ctx.strokeStyle = theme.primary;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.fillStyle = theme.primary;
      ctx.letterSpacing = '2px';
      ctx.fillText(roleText, W / 2, rolePillY);
      ctx.letterSpacing = '0px';

      const hasHandle = Boolean(handle.trim());
      const cleanHandle = hasHandle ? handle.trim() : '@yourhandle';
      const handleY = rolePillY + (isSquare ? 34 : 44);
      ctx.fillStyle = hasHandle ? 'rgba(255, 255, 255, 0.55)' : 'rgba(255, 255, 255, 0.3)';
      ctx.font = '600 15px Montserrat, sans-serif';
      ctx.fillText(cleanHandle.startsWith('@') ? cleanHandle : `@${cleanHandle}`, W / 2, handleY);

      // Footer
      const footerY = isSquare ? 970 : 1720;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W / 2 - 240, footerY - 45);
      ctx.lineTo(W / 2 + 240, footerY - 45);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '800 17px Montserrat, sans-serif';
      ctx.letterSpacing = '1.5px';
      ctx.fillText('NOVEMBER 12–14, 2026', W / 2, footerY - 18);

      ctx.fillStyle = theme.primary;
      ctx.font = '700 13px Montserrat, sans-serif';
      ctx.letterSpacing = '2px';
      ctx.fillText('THE ASSEMBLY  •  OGBOMOSO, NIGERIA', W / 2, footerY + 8);
      ctx.letterSpacing = '0px';

      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.font = '600 12px Montserrat, sans-serif';
      ctx.letterSpacing = '1px';
      ctx.fillText('#Confluence2026  •  confluence.blockchainlautech.club', W / 2, footerY + 34);
      ctx.letterSpacing = '0px';
    }

  }, [name, activeRole, handle, theme, aspectRatio, template, userImage, bgImage, zoom, panX, panY]);

  // Redraw whenever parameters change
  useEffect(() => {
    drawFlyer();
  }, [drawFlyer]);

  // Download Action
  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsExporting(true);
    try {
      const link = document.createElement('a');
      const safeName = (name || 'attendee').toLowerCase().replace(/[^a-z0-9]/g, '-');
      link.download = `confluence-2026-${safeName}-${aspectRatio}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();

      // Trigger Celebration Confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: [theme.primary, theme.secondary, '#ffffff', '#fbbf24'],
      });
    } finally {
      setIsExporting(false);
    }
  };

  // Copy to Clipboard
  const handleCopy = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({ 'image/png': blob }),
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    } catch {
      handleDownload();
    }
  };

  // Share to X (Twitter)
  const handleShareTwitter = () => {
    const tweetText = encodeURIComponent(
      `I'm attending Confluence 2.0 — the Largest Student-led Blockchain Conference in Africa! @ConfluenceEvent\n\nCode. Create. Connect.\n🗓️ Nov 12–14, 2026\n📍 The Assembly, Ogbomoso\n\nGet your personalized DP and meet me there👇\nhttps://confluence.blockchainlautech.club/avatar\n\n#Confluence2026 #BlockchainLAUTECH`
    );
    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
  };

  // Share to WhatsApp
  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `I will be at Confluence 2.0 (Nov 12-14, 2026)! 🚀\n\nCreate your own customized attendee DP and flyer here:\nhttps://confluence.blockchainlautech.club/avatar`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col relative overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 transition-all duration-700"
          style={{ backgroundColor: theme.primary }}
        />
        <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] bg-[#286cfd] opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-20 border-b border-white/10 bg-black/60 backdrop-blur-xl px-4 sm:px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Confluence</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-black uppercase tracking-widest text-slate-300 hidden sm:inline">
              Confluence <span style={{ color: theme.primary }}>2.0</span>
            </span>
            <div className="h-4 w-px bg-white/20 hidden sm:block" />
            <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full text-slate-300">
               DP Generator
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Title & Headline */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-widest text-[#ccff00]">
            Official Attendee Badge
          </div>
          <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            I Will Be At <span style={{ color: theme.primary }}>Confluence 2.0</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base font-medium">
            Customize and download your official 2026 digital badge. Share it across X, WhatsApp, and LinkedIn to let the ecosystem know you&apos;re attending!
          </p>
        </div>

        {/* Studio Grid: Controls on left, Preview on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── RIGHT COLUMN (ORDER-1 ON MOBILE, ORDER-2 ON DESKTOP): LIVE CANVAS PREVIEW ── */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center space-y-6 lg:sticky lg:top-28">
            
            {/* Live Canvas Card Container */}
            <div className="relative group w-full max-w-[480px] flex justify-center">
              {/* Outer decorative ambient glow */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-40 blur-xl transition-all duration-500 group-hover:opacity-60"
                style={{ backgroundColor: theme.primary }}
              />

              {/* The Actual HTML5 Canvas */}
              <div className="relative bg-black rounded-3xl border border-white/20 overflow-hidden shadow-2xl w-full flex justify-center items-center">
                <canvas
                  ref={canvasRef}
                  className="w-full h-auto object-contain block max-h-[640px]"
                />
              </div>
            </div>

            {/* Actions: Download & Share (Immediately after image preview) */}
            <div className="w-full max-w-[480px] space-y-3">
              {/* Primary Download Button */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={isExporting}
                className="w-full bg-[#ccff00] hover:bg-[#b5e000] text-black font-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2.5 cursor-pointer transition-all uppercase tracking-wider text-sm shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:scale-[1.02] active:scale-[0.99]"
              >
                <Download className="w-5 h-5" />
                <span>{isExporting ? 'Generating...' : 'Download High-Res Badge'}</span>
              </button>

              {/* Secondary Actions Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {/* Copy to Clipboard */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-white/10 hover:bg-white/15 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-all border border-white/10 hover:border-white/25 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#ccff00]" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> Copy
                    </>
                  )}
                </button>

                {/* Share on X */}
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  className="bg-[#286cfd]/20 hover:bg-[#286cfd]/30 text-white font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-all border border-[#286cfd]/40 hover:border-[#286cfd] cursor-pointer"
                >
                  <Twitter className="w-4 h-4 text-[#286cfd]" /> Share on X
                </button>

                {/* Share on WhatsApp */}
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-all border border-emerald-500/30 hover:border-emerald-400 cursor-pointer"
                >
                  <Share2 className="w-4 h-4 text-emerald-400" /> WhatsApp
                </button>
              </div>

              {/* Pro-tip helper */}
              <div className="pt-2 text-center">
                <p className="text-slate-400 text-xs">
                  💡 <strong className="text-slate-300">Tip:</strong> Set your exported badge as your profile picture on X, Telegram, and WhatsApp to connect with fellow attendees before Nov 12!
                </p>
              </div>
            </div>

          </div>

          {/* ── LEFT COLUMN (ORDER-2 ON MOBILE, ORDER-1 ON DESKTOP): CUSTOMIZATION CONTROLS ── */}
          <div className="order-2 lg:order-1 lg:col-span-5 space-y-6 bg-white/[0.03] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            
            {/* 1. Photo Upload & Framing Controls (Immediately below preview on mobile) */}
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Camera className="w-3.5 h-3.5 text-[#ccff00]" /> Your Photo
                </span>
                <span className="text-[10px] text-slate-500 font-semibold">JPG, PNG, WebP</span>
              </label>

              <div className="flex gap-3 items-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 bg-[#ccff00] hover:bg-[#b5e000] text-black font-black text-xs py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider shadow-[0_0_20px_rgba(204,255,0,0.25)] hover:scale-[1.01]"
                >
                  <Upload className="w-4 h-4" /> Upload New Photo
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </div>

              {/* Adjustments: Zoom & Pan */}
              <div className="bg-black/40 border border-white/5 rounded-2xl p-4 space-y-3 mt-3">
                {/* Zoom */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ZoomIn className="w-3 h-3 text-[#286cfd]" /> Photo Zoom
                    </span>
                    <span className="text-white font-mono">{Math.round(zoom * 100)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.05"
                    value={zoom}
                    onChange={(e) => setZoom(parseFloat(e.target.value))}
                    className="w-full accent-[#ccff00] cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                  />
                </div>

                {/* Vertical Pan */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Move className="w-3 h-3 text-[#286cfd]" /> Move Vertical (Y)
                    </span>
                    <span className="text-white font-mono">{panY}px</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="2"
                    value={panY}
                    onChange={(e) => setPanY(parseInt(e.target.value))}
                    className="w-full accent-[#ccff00] cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                  />
                </div>

                {/* Horizontal Pan */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Move className="w-3 h-3 text-[#286cfd]" /> Move Horizontal (X)
                    </span>
                    <span className="text-white font-mono">{panX}px</span>
                  </div>
                  <input
                    type="range"
                    min="-180"
                    max="180"
                    step="2"
                    value={panX}
                    onChange={(e) => setPanX(parseInt(e.target.value))}
                    className="w-full accent-[#ccff00] cursor-pointer h-1.5 bg-white/10 rounded-lg appearance-none"
                  />
                </div>

                {/* Reset adjustments button */}
                <button
                  type="button"
                  onClick={() => {
                    setZoom(1.0);
                    setPanX(0);
                    setPanY(0);
                  }}
                  className="text-[10px] text-slate-400 hover:text-white uppercase font-bold tracking-wider flex items-center gap-1 pt-1 cursor-pointer transition-colors"
                >
                  <RefreshCw className="w-3 h-3" /> Reset Photo Position
                </button>
              </div>
            </div>

            {/* 2. Personal Details */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Your Full Name
                </label>
                <input
                  type="text"
                  maxLength={30}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. John Doe"
                  className="w-full bg-black/50 border border-white/15 focus:border-[#ccff00] focus:outline-none rounded-xl py-3 px-4 text-white text-sm font-bold transition-colors"
                />
              </div>

              {/* Role / Track Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Your Track / Role
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {PRESET_ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`py-2 px-3 rounded-xl border text-[11px] font-extrabold uppercase tracking-wide transition-all text-left truncate cursor-pointer ${
                        role === r
                          ? 'bg-[#ccff00]/20 text-[#ccff00] border-[#ccff00]/60'
                          : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>

                {/* Custom Role Input */}
                <div className="pt-2">
                  <input
                    type="text"
                    maxLength={24}
                    placeholder="Or type a custom role (e.g. Protocol Engineer)"
                    value={customRole}
                    onChange={(e) => {
                      setCustomRole(e.target.value);
                      setRole('Custom');
                    }}
                    className="w-full bg-black/50 border border-white/15 focus:border-[#ccff00] focus:outline-none rounded-xl py-2 px-3 text-white text-xs font-medium transition-colors"
                  />
                </div>
              </div>

              {/* Social Handle */}
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300">
                  Social Handle (Optional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    maxLength={25}
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@yourhandle"
                    className="w-full bg-black/50 border border-white/15 focus:border-[#ccff00] focus:outline-none rounded-xl py-2.5 px-4 text-white text-sm font-semibold transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* 3. Flyer Template & Size */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Template Style Switcher */}
              <div className="space-y-2.5">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <ImageIcon className="w-3.5 h-3.5 text-[#ccff00]" /> Flyer Template
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTemplate('official')}
                    className={`py-3 px-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      template === 'official'
                        ? 'bg-[#ccff00] text-black border-[#ccff00] shadow-[0_0_20px_rgba(204,255,0,0.3)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    Official 2026 Art
                  </button>
                  <button
                    type="button"
                    onClick={() => setTemplate('cyber')}
                    className={`py-3 px-3 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      template === 'cyber'
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Obsidian Cyber
                  </button>
                </div>
              </div>

              {/* Format Toggle (1:1 vs 9:16) */}
              <div className="space-y-2.5 pt-3 border-t border-white/10">
                <label className="text-xs font-black uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#ccff00]" /> Format / Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAspectRatio('square')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      aspectRatio === 'square'
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="w-3.5 h-3.5 rounded border-2 border-current inline-block" />
                    Square (1:1 DP)
                  </button>
                  <button
                    type="button"
                    onClick={() => setAspectRatio('story')}
                    className={`py-3 px-4 rounded-2xl border text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      aspectRatio === 'story'
                        ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                        : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="w-2.5 h-4 rounded-sm border-2 border-current inline-block" />
                    Story (9:16)
                  </button>
                </div>
              </div>
            </div>



          </div>

        </div>

        {/* Event Quick Details Banner */}
        <div className="mt-16 border-t border-white/10 pt-10 text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-400">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#ccff00]" /> November 12–14, 2026
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#286cfd]" /> The Assembly, Ogbomoso, Nigeria
            </span>
            <span>•</span>
            <span className="text-[#ccff00] font-black uppercase">Confluence 2.0</span>
          </div>

          <p className="text-xs text-slate-500">
            Powered by Blockchain Club LAUTECH. All generated badges are rendered 100% locally on your device for complete privacy.
          </p>
        </div>

      </main>
    </div>
  );
}
