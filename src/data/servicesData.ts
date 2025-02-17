export interface ServiceDetailProps {
  id: number;
  title: string;
  intro: string;
  description: string;
  benefits: string[];
  examples: string[];
  imageUrl: string;
  ctaText: string;
}

export const services: ServiceDetailProps[] = [
  {
    id: 1,
    title: 'Boost Your Business with a Powerful Website',
    intro:
      'Turn visitors into customers with a website that is fast, modern, and designed for conversions.',
    description:
      'A professional website is more than just an online presence — it’s your digital storefront, a 24/7 sales tool, and a powerful way to build trust with potential clients. We design and develop high-converting, mobile-friendly websites that captivate visitors, increase engagement, and drive more sales. Whether you need a business website, an online store, or a personal portfolio, we ensure that your site works for you, not the other way around.',
    benefits: [
      'Get more leads & sales with a website optimized for conversions',
      'Strengthen your brand and build trust with a modern, professional design',
      'Attract more visitors with SEO-friendly site structure',
      'Ensure a seamless experience on all devices (mobile, tablet, desktop)',
      'Load faster to keep customers engaged and reduce bounce rates',
      'Save time with easy management and automation of key processes',
    ],
    examples: [
      'Attract new customers with a business website',
      'Sell your products online with an easy-to-manage e-commerce store',
      'Showcase your work and grow your personal brand with a portfolio',
      'Generate more leads with a high-converting landing page',
      'Streamline operations with an automated booking or contact system',
    ],
    imageUrl: '/temp.jpg',
    ctaText: 'Let’s build a website that grows your business!',
  },
  {
    id: 2,
    title: 'Boost Efficiency with Process Automation',
    intro:
      'Eliminate repetitive tasks, reduce costs, and increase productivity with smart automation solutions tailored to your business.',
    description:
      "Manual processes slow down your operations and drain valuable resources. With our automation solutions, you can optimize workflows, minimize human error, and scale your business more efficiently. Whether it's automating customer interactions, financial operations, or internal workflows, we tailor solutions to your needs to save time and money while boosting operational efficiency.",
    benefits: [
      'Increase efficiency by reducing time spent on repetitive tasks',
      'Enhance accuracy by minimizing human error in critical workflows',
      'Save costs by optimizing resource allocation and reducing manual labor',
      'Scale effortlessly with automation that grows with your business',
      'Improve customer experience with faster response times and seamless service',
      'Gain valuable insights through automated data collection and reporting',
    ],
    examples: [
      'Automated invoicing and payment processing to streamline financial operations',
      'AI-driven customer support chatbots for instant query resolution',
      'Automated lead nurturing and email marketing sequences',
      'Workflow automation for internal approvals and document management',
      'Data scraping and aggregation for market research and competitor analysis',
      'Inventory and supply chain automation to reduce delays and overstocking',
    ],
    imageUrl: '/temp.jpg',
    ctaText: 'Let’s optimize your business with automation!',
  },
  {
    id: 3,
    title: 'AI Implementation',
    intro:
      'Leverage artificial intelligence to optimize your business operations, reduce costs, and gain a competitive edge.',
    description:
      'AI is revolutionizing industries by automating tasks, predicting trends, and personalizing user experiences. Whether you need AI-powered automation, predictive analytics, or natural language processing, we provide tailor-made solutions that drive business growth and efficiency.',
    benefits: [
      'Increases operational efficiency by automating repetitive tasks.',
      'Enhances decision-making with AI-driven insights and predictions.',
      'Reduces costs by optimizing processes and resource allocation.',
      'Improves customer engagement with AI-powered chatbots and recommendation systems.',
      'Boosts security by detecting fraudulent activities in real time.',
    ],
    examples: [
      'Predictive analytics to forecast demand and optimize supply chain management.',
      'Chatbots and virtual assistants for automated customer support.',
      'AI-driven fraud detection for financial transactions.',
      'Image recognition and object detection for e-commerce or security applications.',
      'Personalized recommendation systems to increase sales and user engagement.',
    ],
    imageUrl: '/temp.jpg',
    ctaText: 'Transform Your Business with AI',
  },
  {
    id: 4,
    title: 'Blockchain & Web3 Solutions',
    intro:
      'Enhance security, transparency, and efficiency with blockchain technology.',
    description:
      'Blockchain is revolutionizing industries by providing secure, transparent, and decentralized solutions. Businesses leveraging blockchain gain trust, automation, and cost efficiency, staying ahead of the competition.',
    benefits: [
      'Full transparency and security for transactions and data.',
      'Automated operations with smart contracts, reducing human errors.',
      'Elimination of intermediaries, leading to cost savings.',
      'Seamless integration with decentralized finance (DeFi) and token economies.',
      'Improved customer trust with immutable data records.',
    ],
    examples: [
      'Secure and fraud-resistant financial transactions.',
      'Tokenization of assets for investment and fractional ownership.',
      'Smart contract-based automation for supply chains.',
      'Decentralized identity verification systems.',
      'Loyalty programs and digital collectibles with NFTs.',
    ],
    imageUrl: '/temp.jpg',
    ctaText: 'Integrate Blockchain Today!',
  },
];
