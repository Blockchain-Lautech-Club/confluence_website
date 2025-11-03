export interface Speaker {
  id: number;
  name: string;
  title: string[];
  image: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "𝐇𝐈𝐒 𝐈𝐌𝐏𝐄𝐑𝐈𝐀𝐋 𝐌𝐀𝐉𝐄𝐒𝐓𝐘, 𝐎𝐁𝐀 𝐆𝐇𝐀𝐍𝐃𝐈 𝐀𝐅𝐎𝐋𝐀𝐁𝐈 𝐎𝐋𝐀𝐎𝐘𝐄, 𝐎𝐑𝐔𝐌𝐎𝐆𝐄𝐆𝐄 𝐈𝐈𝐈.",
    title: ["Soun of Ogbomoso land,"],
    image: "/Soun of Ogbomoso.jpg",
  },
  {
    id: 2,
    name: 'Jesudamilare "JD" Adesegun-David',
    title: ["Co-founder and CEO of Ennovate Lab"],
    image: "/JD's Headshot.jpg",
  },
  {
    id: 3,
    name: "Karla Nwaeke",
    title: [
      "Founder Bitsave Protocol"
      ,"Lead Partner B<>rder/ess."
    ],
    image: "/DSC00431-Enhanced-NR.jpg",
  },
  {
    id: 4,
    name: "John ADEKUNJO",
    title: [
      "Convener, Confluence", 
      "Co-founder, Blockchain LAUTECH."
    ],
    image: "/johnadek.jpg",
  },
  {
    id: 5,
    name: "Thelma OPURUM",
    title: ["Founder, Blockchain Lautech."],
    image: "/thelma.jpg",
  },
  {
    id: 6,
    name: "Dr. Adeyemi C. Aderinto",
    title: ["C.E.O & Director of SQI College of ICT"],
    image: "/Director (236).jpg",
  },
  {
    id: 7,
    name: "Eniola Mercy",
    title: ["Web3 Community and Partnerships manager"],
    image: "/eniolamercy.jpg",
  },
  {
    id: 8,
    name: "Uchenna Agams Onuegbu",
    title: ["Arbitrum Ambassador"],
    image: "/uchenna_agams.jpg",
  },
  {
    id: 9,
    name: "Israel Akinloye",
    title: ["Qubic Nigeria Community Lead"],
    image: "/DSC_7598.jpg",
  },
  {
    id: 10,
    name: "Blessing Oluwabamidele",
    title: [
      "Co-founder, Blockchain Lautech",
    ],
    image: "/missblessing.jpg",
  },
  {
    id: 11,
    name: "Deborah Enyone Oni",
    title: [
      "Founder, Hilton Top Solicitors",
      "Founder, Hilton Innovations Hub",
    ],
    image: "/1000017551.jpg",
  },
  {
    id: 12,
    name: "Adam Saheed",
    title: ["Core contributor at CeloAfricaDAO"],
    image: "/adam.jpg",
  },
  {
    id: 13,
    name: "Olaoluwa Oluwasina",
    title: ["Founder, 03 Finance School Blockchain and Web3 educator"],
    image: "/olaoluwa.jpg",
  },
  {
    id: 14,
    name: "Favour ABIDOYE-OLADEJO",
    title: ["Lead CM, Blockchain Club Lautech"],
    image: "/favour.jpg",
  },
  {
    id: 15,
    name: "Samuel Babalola",
    title: [
      "Web3 Ecosystem Builder",
      "Program & Operations Manager",
    ],
    image: "/IMG_5284.jpg",
  },
];

export interface Logo {
  src: string;
  alt: string;
  width: number;
  href?: string;
}

export const sponsorLogos: Logo[] = [
  {
    src: "/sponsor2.png",
    alt: "Sponsor 1",
    width: 150,
  },
  {
    src: "/celo-logo.png",
    alt: "Sponsor 2",
    width: 200,
  },
  {
    src: "/sponsor1.png",
    alt: "Sponsor 3",
    width: 150,
  },
  {
    src: "/sponsor3.png",
    alt: "Sponsor 4",
    width: 150,
  },
  {
    src: "/sponsor4.png",
    alt: "Sponsor 5",
    width: 150,
  },
];

export const partnerLogos: Logo[] = [
  {
    src: "/Asset 1.png",
    alt: "The Assembly",
    width: 150,
  },
  {
    src: "/sqiremovebg.png",
    alt: "SQI College of ICT ",
    width: 130,
  },
  {
    src: "/partner2.png",
    alt: "Unilorin Block Community",
    width: 150,
  },
  {
    src: "/partner3.png",
    alt: "Google Developer Group on LAUTECH",
    width: 150,
  },
  {
    src: "/partner4.png",
    alt: "Crypto Asset Buyer",
    width: 150,
  },
  {
    src: "/partner5.png",
    alt: "web3Nigeria",
    width: 150,
  },
  {
    src: "/partner6.png",
    alt: "Coin Gabbar",
    href: "https://www.coingabbar.com",
    width: 150,
  },
  {
    src: "/partner7.png",
    alt: "Coinpedia",
    href: "https://www.coinpedia.org",
    width: 150,
  },
  {
    src: "/partner8.png",
    alt: "The News Crypto",
    href: "https://thenewscrypto.com",
    width: 150,
  },
  {
    src: "/partner9.png",
    alt: "NACOS LAUTECH",
    href: "https://nacoslautech.org",
    width: 150,
  },
];
