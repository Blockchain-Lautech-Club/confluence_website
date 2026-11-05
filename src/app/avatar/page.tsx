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
  ChevronDown,
  AlertCircle,
  Gift,
  Sparkles,
  X,
  Trophy,
  ExternalLink
} from 'lucide-react';

type AspectRatio = 'square' | 'story';

interface GiftRollData {
  rolled: boolean;
  won: boolean;
  code?: string;
  timestamp?: number;
}

const OFFICIAL_WINNING_CODES = [
  'USDT-CONF-8F2X9',
  'USDT-CONF-4M7KP',
  'USDT-CONF-9V3TL',
  'USDT-CONF-6R8QH',
  'USDT-CONF-2W5NY',
] as const;

const CONFLUENCE_THEME = {
  id: 'lime',
  name: 'Confluence Lime',
  primary: '#ccff00',
  secondary: '#286cfd',
  glow: 'rgba(204, 255, 0, 0.45)',
};

const PRESET_ROLES = [
  'Attendee',
  'Speaker',
  'Volunteer & Team',
];

const isRestrictedRole = (val: string): boolean => {
  const normalized = val.trim().toLowerCase().replace(/[\s\-_]+/g, '');
  return (
    normalized.includes('convener') ||
    normalized.includes('convenor') ||
    normalized.includes('founder') ||
    normalized.includes('founding')
  );
};

export default function AvatarGeneratorPage() {
  // Form State
  const [name, setName] = useState<string>('');
  const [role, setRole] = useState<string>('Attendee');
  const [customRole, setCustomRole] = useState<string>('');
  const [handle, setHandle] = useState<string>('');
  const theme = CONFLUENCE_THEME;
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('square');

  // Image & Transform State
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [bgImage, setBgImage] = useState<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState<number>(1.0);
  const [panX, setPanX] = useState<number>(0);
  const [panY, setPanY] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [isExporting, setIsExporting] = useState<boolean>(false);

  // Lucky USDT Gift State
  const [isGiftModalOpen, setIsGiftModalOpen] = useState<boolean>(false);
  const [giftRoll, setGiftRoll] = useState<GiftRollData | null>(null);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [bep20Address, setBep20Address] = useState<string>('');
  const [postLink, setPostLink] = useState<string>('');
  const [copiedClaim, setCopiedClaim] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  // Load lucky gift status from localStorage
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const testWinParam = params.get('test_win');
        if (testWinParam !== null) {
          const codeIndex = parseInt(testWinParam, 10);
          const chosenCode = (!isNaN(codeIndex) && codeIndex >= 1 && codeIndex <= 5)
            ? OFFICIAL_WINNING_CODES[codeIndex - 1]
            : OFFICIAL_WINNING_CODES[0];

          setGiftRoll({
            rolled: true,
            won: true,
            code: chosenCode,
            timestamp: Date.now(),
          });
          return;
        }
      }
      const saved = localStorage.getItem('confluence_usdt_gift_v1');
      if (saved) {
        setGiftRoll(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const rollLuckyBox = () => {
    if (isRolling) return;
    setIsRolling(true);

    setTimeout(() => {
      // 5% chance (1 in 20, or debug override via ?test_win=true or ?test_win=1..5)
      const params = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
      const isTestWin = params?.get('test_win') !== null;
      const isLucky = isTestWin || Math.random() < 0.05;

      let chosenCode: string | undefined = undefined;
      if (isLucky) {
        if (isTestWin && params) {
          const codeIndex = parseInt(params.get('test_win') || '1', 10);
          chosenCode = (!isNaN(codeIndex) && codeIndex >= 1 && codeIndex <= 5)
            ? OFFICIAL_WINNING_CODES[codeIndex - 1]
            : OFFICIAL_WINNING_CODES[0];
        } else {
          chosenCode = OFFICIAL_WINNING_CODES[Math.floor(Math.random() * OFFICIAL_WINNING_CODES.length)];
        }
      }

      const newRoll: GiftRollData = {
        rolled: true,
        won: isLucky,
        code: chosenCode,
        timestamp: Date.now(),
      };

      try {
        localStorage.setItem('confluence_usdt_gift_v1', JSON.stringify(newRoll));
      } catch {
        // ignore
      }

      setGiftRoll(newRoll);
      setIsRolling(false);

      if (isLucky) {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#ccff00', '#22c55e', '#fbbf24', '#ffffff'],
        });
      }
    }, 1800);
  };

  const getClaimMessage = () => {
    const claimerName = name.trim() || 'Attendee';
    const code = giftRoll?.code || 'USDT-CONF-8F2X9';
    const wallet = bep20Address.trim() || '[Paste here]';
    const post = postLink.trim() || '[Paste here]';

    return `Hi! I just unlocked the Lucky USDT Drop on the Confluence DP Generator! 🎉\nName: ${claimerName}\nClaim Code: ${code}\nMy USDT (BEP20) Address: ${wallet}\nthis is my post link: ${post}`;
  };

  const handleClaimWhatsApp = () => {
    const text = encodeURIComponent(getClaimMessage());
    window.open(`https://wa.me/2349075166596?text=${text}`, '_blank');
  };

  const handleCopyClaim = () => {
    navigator.clipboard.writeText(getClaimMessage());
    setCopiedClaim(true);
    setTimeout(() => setCopiedClaim(false), 2500);
  };

  // Canvas Refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Active Role text (Disallows reserved roles like Convener & Co-convener)
  const isRestricted = isRestrictedRole(role === 'Custom' ? customRole : role);
  const activeRole = isRestricted
    ? 'Attendee'
    : role === 'Custom'
    ? customRole
    : role;

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
    if (bgImage) {
      // Draw official Confluence 2026 Key Art
      ctx.drawImage(bgImage, 0, 0, W, H);
    } else {
      ctx.fillStyle = '#06080d';
      ctx.fillRect(0, 0, W, H);
    }

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

  }, [name, activeRole, handle, theme, aspectRatio, userImage, bgImage, zoom, panX, panY]);

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

      // Automatically invite user to check the Lucky USDT Drop!
      setTimeout(() => {
        setIsGiftModalOpen(true);
      }, 1000);
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
      <header className="relative z-20 border-b border-white/10 bg-black/60 backdrop-blur-xl px-4 sm:px-8 py-3 sm:py-4">
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
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-6 lg:py-12">
        {/* Title & Headline - ultra-compact on mobile */}
        <div className="text-center mb-2 sm:mb-8">
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-extrabold uppercase tracking-widest text-[#ccff00] mb-2">
            Official Attendee Badge
          </div>
          <h1 className="text-lg sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
            Confluence 2.0 <span style={{ color: theme.primary }}>DP Generator</span>
          </h1>
          <p className="hidden sm:block text-slate-400 max-w-xl mx-auto text-sm font-medium leading-tight mt-1">
            Customize and download your official 2026 digital badge.
          </p>
        </div>

        {/* Studio Grid: Controls on left, Preview on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-start">
          
          {/* ── RIGHT COLUMN (ORDER-1 ON MOBILE, ORDER-2 ON DESKTOP): LIVE CANVAS PREVIEW ── */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col items-center space-y-2 sm:space-y-6 lg:sticky lg:top-28">
            
            {/* Live Canvas Card Container - Compact on mobile (210px) so controls peek clearly above fold */}
            <div className="relative group w-full max-w-[210px] sm:max-w-[340px] lg:max-w-[480px] flex justify-center">
              {/* Outer decorative ambient glow */}
              <div
                className="absolute -inset-1 rounded-2xl sm:rounded-3xl opacity-40 blur-xl transition-all duration-500 group-hover:opacity-60"
                style={{ backgroundColor: theme.primary }}
              />

              {/* The Actual HTML5 Canvas */}
              <div className="relative bg-black rounded-xl sm:rounded-3xl border border-white/20 overflow-hidden shadow-2xl w-full flex justify-center items-center">
                <canvas
                  ref={canvasRef}
                  className="w-full h-auto object-contain block max-h-[260px] sm:max-h-[460px] lg:max-h-[640px]"
                />
              </div>
            </div>

            {/* Actions: Download & Share (Immediately after image preview) */}
            <div className="w-full max-w-[250px] sm:max-w-[340px] lg:max-w-[480px] space-y-1.5 sm:space-y-3">
              {/* Primary Download Button */}
              <button
                type="button"
                onClick={handleDownload}
                disabled={isExporting}
                className="w-full bg-[#ccff00] hover:bg-[#b5e000] text-black font-black py-2 sm:py-4 px-3 sm:px-6 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider text-xs sm:text-sm shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:scale-[1.02] active:scale-[0.99]"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{isExporting ? 'Generating...' : 'Download Badge'}</span>
              </button>

              {/* Secondary Actions Grid */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5">
                {/* Copy to Clipboard */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="bg-white/10 hover:bg-white/15 text-white font-bold py-1.5 sm:py-3 px-1.5 sm:px-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs transition-all border border-white/10 hover:border-white/25 cursor-pointer truncate"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#ccff00]" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </>
                  )}
                </button>

                {/* Share on X */}
                <button
                  type="button"
                  onClick={handleShareTwitter}
                  className="bg-[#286cfd]/20 hover:bg-[#286cfd]/30 text-white font-bold py-1.5 sm:py-3 px-1.5 sm:px-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs transition-all border border-[#286cfd]/40 hover:border-[#286cfd] cursor-pointer"
                >
                  <Twitter className="w-3.5 h-3.5 text-[#286cfd]" /> Share
                </button>

                {/* Share on WhatsApp */}
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold py-1.5 sm:py-3 px-1.5 sm:px-3 rounded-lg sm:rounded-xl flex items-center justify-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs transition-all border border-emerald-500/30 hover:border-emerald-400 cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
                </button>
              </div>

              {/* Lucky USDT Drop Teaser Card / Button */}
              <button
                type="button"
                onClick={() => setIsGiftModalOpen(true)}
                className="w-full bg-gradient-to-r from-emerald-950/70 via-black/90 to-blue-950/70 hover:from-emerald-900/90 hover:to-blue-900/90 border border-emerald-400/40 hover:border-[#ccff00] p-2.5 sm:p-3 rounded-xl sm:rounded-2xl flex items-center justify-between gap-2.5 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.15)] group cursor-pointer text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Gift className="w-4 h-4 text-[#ccff00] animate-pulse" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white">
                        Lucky USDT Drop
                      </span>
                      <span className="bg-[#ccff00]/20 text-[#ccff00] border border-[#ccff00]/40 text-[9px] font-black px-1.5 py-0.2 rounded uppercase">
                        Mystery Drop
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium truncate">
                      {giftRoll?.rolled
                        ? (giftRoll.won ? '🏆 You won! Tap to view claim details' : '🎁 Post your DP anyway — surprise gifts ongoing!')
                        : '5 Lucky winners total · Tap to open box'}
                    </p>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-[#ccff00] flex-shrink-0 group-hover:rotate-12 transition-transform" />
              </button>

              {/* Clickable single-line scroll indicator */}
              <button
                type="button"
                onClick={() => document.getElementById('customize-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex lg:hidden items-center justify-center gap-1.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#ccff00] hover:underline cursor-pointer w-full text-center"
              >
                <span>Customize photo & name</span>
                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
              </button>
            </div>

          </div>

          {/* ── LEFT COLUMN (ORDER-2 ON MOBILE, ORDER-1 ON DESKTOP): CUSTOMIZATION CONTROLS ── */}
          <div
            id="customize-section"
            className="order-2 lg:order-1 lg:col-span-5 space-y-4 sm:space-y-5 bg-white/[0.03] border border-white/10 rounded-2xl sm:rounded-3xl p-3.5 sm:p-6 lg:p-8 backdrop-blur-xl shadow-2xl"
          >
            
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
                    className={`w-full bg-black/50 border focus:outline-none rounded-xl py-2 px-3 text-white text-xs font-medium transition-colors ${
                      isRestrictedRole(customRole)
                        ? 'border-amber-500/80 focus:border-amber-400'
                        : 'border-white/15 focus:border-[#ccff00]'
                    }`}
                  />
                  {isRestrictedRole(customRole) && (
                    <p className="text-[11px] text-amber-400 font-semibold mt-1.5 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>choose another title.</span>
                    </p>
                  )}
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

            {/* 3. Flyer Format & Size */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              {/* Format Toggle (1:1 vs 9:16) */}
              <div className="space-y-2.5">
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

      {/* ── LUCKY USDT DROP MODAL ── */}
      {isGiftModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative bg-[#0c1017] border border-white/20 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-[0_0_50px_rgba(0,0,0,0.9)] overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsGiftModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors cursor-pointer z-10"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Content */}
            {!giftRoll?.rolled ? (
              // ── UNOPENED STATE ──
              <div className="text-center space-y-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-[#ccff00]/20 border border-[#ccff00]/40 mx-auto flex items-center justify-center shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                  <Gift className={`w-8 h-8 text-[#ccff00] ${isRolling ? 'animate-bounce' : 'animate-pulse'}`} />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2">
                    <Sparkles className="w-3 h-3 text-[#ccff00]" /> 5 Lucky Winners Total
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    Lucky USDT Airdrop
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Test your luck! 5 randomly selected attendees who generate their Confluence 2.0 badge win a <strong className="text-[#ccff00]">Mystery USDT Drop (BEP20)</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-left text-xs space-y-1.5 text-slate-300">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#ccff00]" /> Rules to Claim if you win:
                  </p>
                  <p className="text-[11px] text-slate-400">• Post your DP on X or WhatsApp status with #Confluence2026</p>
                  <p className="text-[11px] text-slate-400">• Send your unique Claim Code, BEP20 address &amp; post link</p>
                  <p className="text-[11px] text-slate-400">• First 5 verified winners receive the USDT reward</p>
                </div>

                <button
                  type="button"
                  onClick={rollLuckyBox}
                  disabled={isRolling}
                  className="w-full bg-[#ccff00] hover:bg-[#b5e000] text-black font-black py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider text-xs sm:text-sm shadow-[0_0_25px_rgba(204,255,0,0.35)] hover:scale-[1.02] active:scale-[0.99] disabled:opacity-60"
                >
                  <Gift className="w-4 h-4" />
                  <span>{isRolling ? 'Opening Box...' : 'Open My Lucky Box'}</span>
                </button>
              </div>
            ) : giftRoll.won ? (
              // ── WINNER STATE ──
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#ccff00]/30 to-emerald-400/30 border border-[#ccff00] mx-auto flex items-center justify-center shadow-[0_0_40px_rgba(204,255,0,0.4)] animate-pulse">
                  <Trophy className="w-8 h-8 text-[#ccff00]" />
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ccff00]/20 border border-[#ccff00]/60 text-[10px] font-black uppercase tracking-widest text-[#ccff00] mb-1.5">
                    🎉 Winner! 1 of 5 Lucky Attendees
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                    You Won $1 USDT!
                  </h3>
                  <p className="text-slate-300 text-xs mt-1">
                    Congratulations! Post your DP and submit your claim below:
                  </p>
                </div>

                {/* Claim Code Box */}
                <div className="bg-black/60 border border-[#ccff00]/40 rounded-2xl p-3 flex items-center justify-between gap-2">
                  <div className="text-left">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Your Claim Code</span>
                    <span className="text-sm sm:text-base font-mono font-black text-[#ccff00] tracking-wider">
                      {giftRoll.code}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (giftRoll.code) {
                        navigator.clipboard.writeText(giftRoll.code);
                        setCopiedCode(true);
                        setTimeout(() => setCopiedCode(false), 2000);
                      }
                    }}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all text-white flex items-center gap-1 cursor-pointer"
                  >
                    {copiedCode ? <Check className="w-3.5 h-3.5 text-[#ccff00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span className="text-[10px] uppercase">{copiedCode ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Optional inputs to pre-fill WhatsApp message */}
                <div className="space-y-2 text-left">
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Your USDT (BEP20) Address:
                    </label>
                    <input
                      type="text"
                      placeholder="0x..."
                      value={bep20Address}
                      onChange={(e) => setBep20Address(e.target.value)}
                      className="w-full bg-black/50 border border-white/15 focus:border-[#ccff00] focus:outline-none rounded-xl py-2 px-3 text-white text-xs font-mono transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Your Post Link (X / WhatsApp):
                    </label>
                    <input
                      type="text"
                      placeholder="https://x.com/... or status link"
                      value={postLink}
                      onChange={(e) => setPostLink(e.target.value)}
                      className="w-full bg-black/50 border border-white/15 focus:border-[#ccff00] focus:outline-none rounded-xl py-2 px-3 text-white text-xs transition-colors"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={handleClaimWhatsApp}
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider text-xs shadow-[0_0_20px_rgba(16,185,129,0.35)]"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>WhatsApp to Claim</span>
                  </button>
                  <p className="text-[10px] text-slate-400 text-center font-medium">
                    Direct chat with 09075166596 to receive your $1 USDT
                  </p>
                  <button
                    type="button"
                    onClick={handleCopyClaim}
                    className="w-full bg-white/10 hover:bg-white/15 text-white font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-all text-xs border border-white/10"
                  >
                    {copiedClaim ? <Check className="w-3.5 h-3.5 text-[#ccff00]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedClaim ? 'Claim Message Copied!' : 'Copy Full Claim Message'}</span>
                  </button>
                </div>
              </div>
            ) : (
              // ── NON-WINNER STATE ──
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-[#ccff00]/20 border border-amber-400/40 mx-auto flex items-center justify-center text-3xl shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  🎁
                </div>

                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-[10px] font-black uppercase tracking-widest text-amber-300 mb-1.5">
                    <Sparkles className="w-3 h-3 text-[#ccff00]" /> Don&apos;t Stop Here!
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">
                    Post Your DP Anyway!
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm mt-1.5 leading-relaxed">
                    Didn&apos;t unlock the instant drop? <strong className="text-[#ccff00]">You might still get rewarded!</strong> We&apos;re monitoring community posts leading up to the event.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 text-left text-xs space-y-2 text-slate-200">
                  <p className="font-extrabold text-white flex items-center gap-1.5 text-xs">
                    <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" /> Surprise Rewards for Active Posters:
                  </p>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    Post your badge on <strong className="text-white">X (Twitter)</strong> or your <strong className="text-white">WhatsApp Status</strong> with <span className="text-[#ccff00] font-mono font-bold">#Confluence2026</span>. Random active posters will be selected for surprise perks, bounties &amp; airdrops!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsGiftModalOpen(false);
                      handleShareTwitter();
                    }}
                    className="bg-[#286cfd] hover:bg-[#1d58d8] text-white font-black py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-all shadow-[0_0_20px_rgba(40,108,253,0.35)] cursor-pointer uppercase tracking-wider"
                  >
                    <Twitter className="w-3.5 h-3.5" /> Post on X
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsGiftModalOpen(false);
                      handleShareWhatsApp();
                    }}
                    className="bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3 px-3 rounded-xl flex items-center justify-center gap-1.5 text-xs transition-all shadow-[0_0_20px_rgba(16,185,129,0.35)] cursor-pointer uppercase tracking-wider"
                  >
                    <Share2 className="w-3.5 h-3.5" /> WhatsApp Status
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
