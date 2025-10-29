export interface Speaker {
  id: number;
  name: string;
  title: string[];
  image: string;
}

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "𝐇𝐢𝐬 𝐈𝐦𝐩𝐞𝐫𝐢𝐚𝐥 𝐌𝐚𝐣𝐞𝐬𝐭𝐲, 𝐎𝐛𝐚 𝐆𝐡𝐚𝐧𝐝𝐢 𝐀𝐟𝐨𝐥𝐚𝐛𝐢 𝐎𝐥𝐚𝐨𝐲𝐞, 𝐎𝐫𝐮𝐦𝐨𝐠𝐞𝐠𝐞 𝐈𝐈𝐈.",
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
    name: "Eniola Mercy",
    title: ["Web3 Community and Partnerships manager"],
    image: "/eniolamercy.jpg",
  },
  {
    id: 4,
    name: "Uchenna Agams Onuegbu",
    title: ["Arbitrum Ambassador"],
    image: "/uchenna_agams.jpg",
  },
  {
    id: 5,
    name: "Deborah Enyone Oni",
    title: [
      "Founder, Hilton Top Solicitors",
      "Founder, Hilton Innovations Hub",
    ],
    image: "/1000017551.jpg",
  },
  {
    id: 6,
    name: "Dr. Adeyemi C. Aderinto",
    title: ["C.E.O & Director of SQI College of ICT"],
    image: "/Director (236).jpg",
  },
  {
    id: 7,
    name: "Adam Saheed",
    title: ["Core contributor at CeloAfricaDAO"],
    image: "/adam.jpg",
  },
  {
    id: 8,
    name: "Israel Akinloye",
    title: ["Qubic Nigeria Community Lead"],
    image: "/DSC_7598.jpg",
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
    src: "/sponsor1.png",
    alt: "Sponsor 2",
    width: 150,
  },
  {
    src: "/sponsor3.png",
    alt: "Sponsor 3",
    width: 150,
  },
  {
    src: "/sponsor4.png",
    alt: "Sponsor 4",
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