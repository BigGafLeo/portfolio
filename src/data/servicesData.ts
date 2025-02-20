export interface ServiceDetailProps {
  id: number;
  title: string;
  intro: string;
  description: string;
  benefits: Tiles[];
  examples: Tiles[];
  imageUrl: string;
  ctaText: string;
}

export interface Tiles {
  image: string;
  description: string;
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
      {
        image: '/icons/mainPage/convertion.svg',
        description:
          'Get more leads & sales with a website optimized for conversions',
      },
      {
        image: '/icons/mainPage/brand.svg',
        description:
          'Strengthen your brand and build trust with a modern, professional design',
      },
      {
        image: '/icons/mainPage/seo.svg',
        description: 'Attract more visitors with SEO-friendly site structure',
      },
      {
        image: '/icons/mainPage/mobile.svg',
        description:
          'Ensure a seamless experience on all devices (mobile, tablet, desktop)',
      },
      {
        image: '/icons/mainPage/fast.svg',
        description:
          'Load faster to keep customers engaged and reduce bounce rates',
      },
      {
        image: '/icons/mainPage/time.svg',
        description:
          'Save time with easy management and automation of key processes',
      },
    ],
    examples: [
      {
        image: '/icons/mainPage/newCustomer.svg',
        description: 'Attract new customers with a business website',
      },
      {
        image: '/icons/mainPage/sell.svg',
        description:
          'Sell your products online with an easy-to-manage e-commerce store',
      },
      {
        image: '/icons/mainPage/portfolio.svg',
        description:
          'Showcase your work and grow your personal brand with a portfolio',
      },
      {
        image: '/icons/mainPage/newCustomer.svg',
        description: 'Generate more leads with a high-converting landing page',
      },
      {
        image: '/icons/mainPage/calendar.svg',
        description:
          'Streamline operations with an automated booking or contact system',
      },
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
      {
        image: '/icons/mainPage/notRepeat.svg',
        description:
          'Increase efficiency by reducing time spent on repetitive tasks',
      },
      {
        image: '/icons/mainPage/precision.svg',
        description:
          'Enhance accuracy by minimizing human error in critical workflows',
      },
      {
        image: '/icons/mainPage/savingResources.svg',
        description:
          'Save costs by optimizing resource allocation and reducing manual labor',
      },
      {
        image: '/icons/mainPage/optymalize.svg',
        description:
          'Scale effortlessly with automation that grows with your business',
      },
      {
        image: '/icons/mainPage/fast.svg',
        description:
          'Improve customer experience with faster response times and seamless service',
      },
      {
        image: '/icons/mainPage/data.svg',
        description:
          'Gain valuable insights through automated data collection and reporting',
      },
    ],
    examples: [
      {
        image: '/icons/mainPage/payment.svg',
        description:
          'Automated invoicing and payment processing to streamline financial operations',
      },
      {
        image: '/icons/mainPage/customerSupport.svg',
        description:
          'AI-driven customer support chatbots for instant query resolution',
      },
      {
        image: '/icons/mainPage/email.svg',
        description: 'Automated lead nurturing and email marketing sequences',
      },
      {
        image: '/icons/mainPage/document.svg',
        description:
          'Workflow automation for internal approvals and document management',
      },
      {
        image: '/icons/mainPage/podium.svg',
        description:
          'Data scraping and aggregation for market research and competitor analysis',
      },
      {
        image: '/icons/mainPage/supply.svg',
        description:
          'Inventory and supply chain automation to reduce delays and overstocking',
      },
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
      {
        image: '/icons/mainPage/notRepeat.svg',
        description: 'Increases operational efficiency by automating tasks.',
      },
      {
        image: '/icons/mainPage/decisionMaking.svg',
        description:
          'Enhances decision-making with AI-driven insights and predictions.',
      },
      {
        image: '/icons/mainPage/savingResources.svg',
        description:
          'Reduces costs by optimizing processes and resource allocation.',
      },
      {
        image: '/icons/mainPage/chat.svg',
        description:
          'Improves customer engagement with AI-powered chatbots and recommendation systems.',
      },
      {
        image: '/icons/mainPage/security.svg',
        description:
          'Boosts security by detecting fraudulent activities in real time.',
      },
    ],
    examples: [
      {
        image: '/icons/mainPage/savingResources.svg',
        description:
          'Predictive analytics to forecast demand and optimize supply chain management.',
      },
      {
        image: '/icons/mainPage/customerSupport.svg',
        description:
          'Chatbots and virtual assistants for automated customer support.',
      },
      {
        image: '/icons/mainPage/security.svg',
        description: 'AI-driven fraud detection for financial transactions.',
      },
      {
        image: '/icons/mainPage/image.svg',
        description:
          'Image recognition and object detection for e-commerce or security applications.',
      },
      {
        image: '/icons/mainPage/optymalize.svg',
        description:
          'Personalized recommendation systems to increase sales and user engagement.',
      },
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
      {
        image: '/icons/mainPage/security.svg',
        description:
          'Full transparency and security for transactions and data.',
      },
      {
        image: '/icons/mainPage/payment.svg',
        description:
          'Automated operations with smart contracts, reducing human errors.',
      },
      {
        image: '/icons/mainPage/savingResources.svg',
        description: 'Elimination of intermediaries, leading to cost savings.',
      },
      {
        image: '/icons/mainPage/bitcoin.svg',
        description:
          'Seamless integration with decentralized finance (DeFi) and token economies.',
      },
      {
        image: '/icons/mainPage/hands.svg',
        description: 'Improved customer trust with immutable data records.',
      },
    ],
    examples: [
      {
        image: '/icons/mainPage/security.svg',
        description: 'Secure and fraud-resistant financial transactions.',
      },
      {
        image: '/icons/mainPage/divide.svg',
        description:
          'Tokenization of assets for investment and fractional ownership.',
      },
      {
        image: '/icons/mainPage/commodity.svg',
        description: 'Smart contract-based automation for supply chains.',
      },
      {
        image: '/icons/mainPage/security.svg',
        description: 'Decentralized identity verification systems.',
      },
      {
        image: '/icons/mainPage/nft.svg',
        description: 'Loyalty programs and digital collectibles with NFTs.',
      },
    ],
    imageUrl: '/temp.jpg',
    ctaText: 'Integrate Blockchain Today!',
  },
];
