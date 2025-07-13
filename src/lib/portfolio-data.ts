// src/lib/portfolio-data.ts
export type PortfolioItem = {
  id: string;
  name: string;
  logo: string; // Path to logo image
  category: 'DeFi' | 'NFT' | 'Gaming' | 'Infrastructure' | 'DAO' | 'Tooling';
  description: string;
  caseStudyLink?: string; // Link to a detailed case study page/modal
  metrics?: {
    label: string;
    value: string;
  }[];
  imageUrl: string; // Main image for the card
  websiteLink?: string;
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'defi-protocol-x',
    name: 'DeFi Protocol X',
    logo: '/logos/defi-protocol-x.png',
    category: 'DeFi',
    description: 'Helped scale a decentralized lending protocol from MVP to $50M TVL with optimized tokenomics and liquidity strategies.',
    caseStudyLink: '/portfolio/defi-protocol-x',
    metrics: [
      { label: 'TVL Growth', value: '50M+' },
      { label: 'Users', value: '10K+' },
    ],
    imageUrl: 'https://placehold.co/600x400/222/fff?text=DeFi+Protocol+X',
    websiteLink: 'https://www.example.com/defi-x',
  },
  {
    id: 'nft-marketplace-y',
    name: 'NFT Marketplace Y',
    logo: '/logos/nft-marketplace-y.png',
    category: 'NFT',
    description: 'Designed and launched a gas-efficient NFT marketplace, attracting a vibrant community of artists and collectors.',
    caseStudyLink: '/portfolio/nft-marketplace-y',
    metrics: [
      { label: 'NFTs Minted', value: '50K+' },
      { label: 'Volume', value: '$5M+' },
    ],
    imageUrl: 'https://placehold.co/600x400/222/fff?text=NFT+Marketplace+Y',
    websiteLink: 'https://www.example.com/nft-y',
  },
  // Add more portfolio items here later
];