// ─────────────────────────────────────────────
// CONFLUENCE 2.0 (2026) — Data Constants
// ─────────────────────────────────────────────

// ── Speakers ─────────────────────────────────

export interface Speaker {
  id: number;
  name: string;
  /** One or more role / title lines */
  title: string[];
  image: string;
  /** Track this speaker is associated with */
  track: string;
  /** Short topic / talk description */
  topic: string;
  /** Whether this is a confirmed speaker or a mystery placeholder */
  confirmed: boolean;
}

export const speakers: Speaker[] = [
  // ── Confirmed speakers (shown first in carousel) ──
  {
    id: 1,
    name: "Pawel Barylski",
    title: ["Co-founder, Candao"],
    image: "/pawel-barylski.jpg",
    track: "ALL TRACKS",
    topic: "TBA",
    confirmed: true,
  },
  {
    id: 2,
    name: "Robert Wesker",
    title: ["Co-founder, Candao"],
    image: "/robert-wesker.jpg",
    track: "ALL TRACKS",
    topic: "TBA",
    confirmed: true,
  },
    
  {
    id: 3,
    name: "John ADEKUNJO",
    title: [
      "Convener, Confluence",
      "Co-founder, Blockchain LAUTECH",
    ],
    image: "/johnadek.jpg",
    track: "ALL TRACKS",
    topic: "Web3 & Emerging Technologies",
    confirmed: true,
  },
  {
    id: 4,
    name: "Thelma OPURUM",
    title: [
      "Co-convener, Confluence",
      "Founder, Blockchain Lautech",
    ],
    image: "/thelma.jpg",
    track: "ALL TRACKS",
    topic: "Design & Creative Innovation",
    confirmed: true,
  },
  {
    id: 5,
    name: "Blessing OLUWABAMIDELE",
    title: ["Co-founder, Blockchain Lautech"],
    image: "/missblessing.jpg",
    track: "ALL TRACKS",
    topic: "Community & Ecosystem Growth",
    confirmed: true,
  },

  // ── Mystery / TBA speakers ──
  {
    id: 101,
    name: "[ Mystery Speaker ]",
    title: ["TBA"],
    image: "",
    track: "CODE TRACK",
    topic: "Protocol Infrastructure & Dev Tools",
    confirmed: false,
  },
  {
    id: 102,
    name: "[ Mystery Speaker ]",
    title: ["TBA"],
    image: "",
    track: "FOUNDERS TRACK",
    topic: "Venture Capital & Product-Market Scale",
    confirmed: false,
  },
];

// ── Sponsors ──────────────────────────────────

export interface SponsorTier {
  name: string;
  description: string;
  slots: number;
  /** Tailwind grid-cols class string */
  cols: string;
  /** Tailwind height class string for each sponsor card */
  height: string;
  sponsors: SponsorLogo[];
}

export interface SponsorLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href?: string;
}

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Platinum Sponsors",
    description: "Headline branding, hackathon naming rights, keynotes.",
    slots: 2,
    cols: "grid-cols-1 sm:grid-cols-2",
    height: "h-24",
    sponsors: [
      {
        src: "/candao_full_white.svg",
        alt: "Candao",
        width: 200,
        height: 80,
        href: "https://candao.io",
      },
    ],
  },
  {
    name: "Gold Sponsors",
    description: "Track sponsorship, custom workshops, talent access.",
    slots: 3,
    cols: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    height: "h-20",
    sponsors: [],
  },
  {
    name: "Bronze Sponsors",
    description: "Exhibition booth, brand merchandise placement.",
    slots: 4,
    cols: "grid-cols-2 sm:grid-cols-4",
    height: "h-16",
    sponsors: [
      {
        src: "/FaucetDrops2026.png",
        alt: "FaucetDrops",
        width: 120,
        height: 48,
      },
    ],
  },
];

// ── Partners ──────────────────────────────────

export interface PartnerLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  href?: string;
  category?: string;
}

export const partnerLogos: PartnerLogo[] = [
  {
    src: "/web3ogbomoso2026.png",
    alt: "Web3 Ogbomoso",
    width: 140,
    height: 60,
    category: "Ecosystem Partner",
  },
  {
    src: "/CABMedia.png",
    alt: "CAB Media",
    width: 160,
    height: 70,
    category: "Media Partner",
  },
  {
    src: "/BNUGnew.png",
    alt: "BNUG",
    width: 160,
    height: 70,
    category: "Ecosystem Partner",
  },
];
