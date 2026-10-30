// ─────────────────────────────────────────────
// CONFLUENCE 2.0 (2026) — Data Constants
// ─────────────────────────────────────────────

// ── Social & Community Links ─────────────────
export const WHATSAPP_GROUP_URL = "https://chat.whatsapp.com/CIBPtotDSDyG6qSj9ymjT8?s=cl&p=i&mlu=4&ilr=4&iam=2";

// ── Speakers ─────────────────────────────────
export interface Speaker {
  id: number;
  name: string;
  /** One or more role / title lines */
  title: string[];
  image: string;
  /** Custom CSS classes for image object positioning */
  imageClass?: string;
  /** Track this speaker is associated with */
  // track: string;
  /** Short topic / talk description */
  topic: string;
  /** Whether this is a confirmed speaker or a mystery placeholder */
  confirmed: boolean;
}

export const speakers: Speaker[] = [
  // ── Confirmed speakers (shown first in carousel) ──
  {
    id: 1,
    name: "His Imperial Majesty, Oba Ghandi Afolabi Olaoye, Orumogege III",
    title: ["Soun of Ogbomoso Land"],
    image: "/soun.jpg",
    imageClass: "object-top",
    // track: "ROYAL KEYNOTE",
    topic: "Royal Keynote Address",
    confirmed: true,
  },
   {
    id: 2,
    name: "John ADEKUNJO",
    title: [
      "Convener, Confluence",
      "Co-founder, Blockchain LAUTECH",
    ],
    image: "/johnadek.jpg",
    // track: "ALL TRACKS",
    topic: "Web3 & Emerging Technologies",
    confirmed: true,
  },
  {
    id: 3,
    name: "Thelma OPURUM",
    title: [
      "Co-convener, Confluence",
      "Founder, Blockchain Lautech",
    ],
    image: "/thelma.jpg",
    // track: "ALL TRACKS",
    topic: "Design & Creative Innovation",
    confirmed: true,
  },
  {
    id: 4,
    name: "Blessing OLUWABAMIDELE",
    title: ["Co-founder, Blockchain Lautech"],
    image: "/missblessing.jpg",
    // track: "ALL TRACKS",
    topic: "Community & Ecosystem Growth",
    confirmed: true,
  },
  {
    id: 5,
    name: "Dr. Eloho Erezi-Kesi",
    title: ["ZCash Global Ambassador"],
    image: "/eloho.jpg",
    imageClass: "object-center",
    // track: "ALL TRACKS",
    topic: "Privacy, Financial Freedom & Zcash Ecosystem",
    confirmed: true,
  },
  {
    id: 6,
    name: "Jerry Ojumah",
    title: ["Country Lead (Nigeria), Arc"],
    image: "/ojumah.jpg",
    // track: "DEV TRACK",
    topic: "Build on Arc Ecosystem",
    confirmed: true,
  },
  {
    id: 7,
    name: "Oluwaseyi R. Odekomaya",
    title: ["Director of Academics and Corporate Affairs", "SQI College of ICT"],
    image: "/Seyi.png",
    topic: "Tech Education & Corporate Affairs",
    confirmed: true,
  },
  {
    id: 8,
    name: "Faith Ogunsina",
    title: ["Staff Adviser, Blockchain LAUTECH"],
    image: "/FaithOgunsina.jpg",
    imageClass: "object-center",
    topic: "Student Innovation & Blockchain Advisory",
    confirmed: true,
  },
  {
    id: 9,
    name: "Prof. Oluyinka T. Adedeji",
    title: ["HOD, Department of Information Systems, LAUTECH"],
    image: "/adedeji.jpg",
    imageClass: "object-top",
    topic: "Building relevant skills for the digital economy",
    confirmed: true,
  },
  {
    id: 10,
    name: "Eniola Mercy",
    title: ["Legal Practitioner"],
    image: "/eniola.jpg",
    imageClass: "object-top",
    // track: "KEYNOTE",
    topic: "Legal & Regulation: What does the Nigerian Law say about Blockchain & Crypto?",
    confirmed: true,
  },

  // ── Mystery / TBA speakers ──
  // {
  //   id: 101,
  //   name: "[ Mystery Speaker ]",
  //   title: ["TBA"],
  //   image: "",
  //   track: "CODE TRACK",
  //   topic: "Protocol Infrastructure & Dev Tools",
  //   confirmed: false,
  // },
  // {
  //   id: 102,
  //   name: "[ Mystery Speaker ]",
  //   title: ["TBA"],
  //   image: "",
  //   track: "FOUNDERS TRACK",
  //   topic: "Venture Capital & Product-Market Scale",
  //   confirmed: false,
  // },
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
  // {
  //   name: "Platinum Sponsors",
  //   description: "Headline branding, hackathon naming rights, keynotes.",
  //   slots: 2,
  //   cols: "grid-cols-1 sm:grid-cols-2",
  //   height: "h-24",
  //   sponsors: [],
  // },
  {
    name: "Gold Sponsors",
    description: "Track sponsorship, custom workshops, talent access.",
    slots: 1,
    cols: "grid-cols-1 max-w-md mx-auto",
    height: "h-20",
    sponsors: [
      {
        src: "/zcash_white.png",
        alt: "Zcash",
        width: 220,
        height: 48,
        href: "https://z.cash",
      }
    ],
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
       {
        src: "/beaconlab_logo_white.png",
        alt: "Beacon Labs",
        width: 120,
        height: 48,
      },
      {
        src: "/nectos_horizontal_white.png",
        alt: "Nectos Smart Tags",
        width: 160,
        height: 36,
      },
      {
        src: "/pointzero.png",
        alt: "Point Zero",
        width: 140,
        height: 44,
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
  bg?: string;
  padding?: string;
  className?: string;
}

export const partnerLogos: PartnerLogo[] = [
  {
    src: "/the_assembly.png",
    alt: "The Assembly",
    width: 160,
    height: 70,
    category: "Community Partner",
    bg: "bg-white",
    padding: "p-2",
  },
  {
    src: "/arc_white.png",
    alt: "Arc",
    width: 140,
    height: 60,
    category: "Ecosystem Partner",
  },
  {
    src: "/explore ogbomoso.png",
    alt: "Explore Ogbomoso",
    width: 160,
    height: 70,
    category: "Media Partner",
    bg: "bg-white",
  },
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
    src: "/BNUGLogo.png",
    alt: "BNUG",
    width: 160,
    height: 70,
    category: "Ecosystem Partner",
    bg: "bg-white",
  },
  {
    src: "/web3kitpartner.png",
    alt: "WEB3KIT",
    width: 160,
    height: 70,
    category: "Ecosystem Partner",
  },
  {
    src: "/Eventsparks.png",
    alt: "Eventsparks",
    width: 160,
    height: 70,
    category: "Event Partner",
  },
  {
    src: "/Krypto Extract.png",
    alt: "Krypto Extract",
    width: 160,
    height: 70,
    category: "Media Partner",
  },

  {
    src: "/onigbinpartner.png",
    alt: "Oluseun Onigbinde Resource Centre",
    width: 240,
    height: 150,
    category: "Ecosystem Partner",
    bg: "bg-white",
    padding: "p-2",
    className: "scale-115",
  },
  {
    src: "/Gdgoc lautech logo.png",
    alt: "GDG on Campus LAUTECH",
    width: 160,
    height: 70,
    category: "Community Partner",
    bg: "bg-white",
  },
  {
    src: "/acoms-logo.jpg",
    alt: "ACOMS LAUTECH",
    width: 160,
    height: 70,
    category: "Community Partner",
    bg: "bg-white",
  },
  {
    src: "/nacos_lautech_wordmark_dark.png",
    alt: "NACOS LAUTECH",
    // href: "https://nacoslautech.org",
    width: 160,
    height: 70,
    category: "Community Partner",
   
  },
  {
    src: '/awspartner.png',
    alt: 'AWS Student Builder Group',
    width: 160,
    height: 70,
    category: "Community Partner",
    bg: "bg-[#161d27]",
  },
  {
    src: '/Gabbar.png',
    alt: 'Gabbar',
    width: 160,
    height: 70,
    category: "Media Partner",
    // bg: "bg-[#161d27]",
  },
  {
    src: "/onedosh.png",
    alt: "OneDosh",
    width: 160,
    height: 70,
    category: "Ecosystem Partner",
    bg: "bg-white",
  },
  {
    src: "/routa.png",
    alt: "Routa",
    width: 160,
    height: 70,
    category: "Ecosystem Partner",
    bg: "bg-white",
  },
  {
    src: "/inssa-logo.png",
    alt: "INSSA - Information Systems Students Association, LAUTECH",
    width: 160,
    height: 70,
    category: "Ecosystem Partner",
    bg: "bg-white",
  }
];
