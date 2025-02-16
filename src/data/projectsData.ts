export interface ProjectData {
  id: string;
  title: string;
  shortDescription: string;
  nonTechnicalDescription: string;
  technicalDescription: string;
  technologies: string[];
  imageUrl: string;
}

export const projects: ProjectData[] = [
  {
    id: '1',
    title: 'Web3 Contract Management Platform',
    shortDescription:
      'A no-code platform that enables businesses and community leaders to create, deploy, and manage smart contracts effortlessly.',
    nonTechnicalDescription:
      'The platform helps businesses and communities integrate Web3 into their projects without coding skills. Users can deploy and manage ERC-20 tokens, NFTs, staking pools, DAOs, and escrow contracts through an intuitive UI.',
    technicalDescription: `
The platform offers a no-code deployment experience, allowing users to create and manage smart contracts through an intuitive form-based interface. The Contract Management Dashboard provides real-time monitoring and execution, ensuring seamless on-chain interactions without API calls. Built-in contract validation minimizes errors, while secure authentication ensures only authorized users can execute transactions. Gas fee optimization reduces costs, and planned Layer 2 support (Polygon, Optimism, Arbitrum) will enhance scalability and efficiency.

Pre-built Smart Contracts:  
  - ERC-20 – Token issuance, transfers, and supply management  
  - ERC-721 (NFTs) – Minting, trading, and metadata storage  (underdevelopment)
  - Staking Contracts – Token reward pools with flexible parameters  (future)
  - DAO Governance – Decentralized voting and decision-making mechanisms  (future)
  - Escrow Contracts – Secure conditional payments  (future)
  - Vesting Schedules – Gradual token distribution over time  (future)


This project aims to bridge the gap between Web3 and mainstream adoption, offering businesses a simple yet powerful way to leverage blockchain technology without technical expertise. 🚀
    `,
    imageUrl: '/temp.jpg',
    technologies: [
      'TypeScript',
      'Solidity',
      'Node.js',
      'React',
      'Wagmi',
      'GraphQL',
      'PostgreSQL',
      'Ethereum',
    ],
  },
  {
    id: '2',
    title: 'Investment Strategy Testing and Learning System',
    shortDescription:
      'An advanced tool for testing investment strategies in a simulated environment and real-time market conditions.',
    nonTechnicalDescription:
      'This system allows testing investment strategies using historical data and real-time market analysis. It consists of two main components: an advanced testing environment and algorithmically controlled trading bots.',
    imageUrl: '/temp.jpg',
    technicalDescription: `
      The system consists of three main components:

      1️⃣ Testing and Learning Environment
      - Fetching and processing historical and real-time market data from trading APIs.  
      - Supporting multiple asset classes (stocks, forex, cryptocurrencies, indices).  
      - Implementing advanced analytical tools:  
        - Technical analysis indicators (RSI, MACD, Bollinger Bands, moving averages).  
        - Quantitative analysis (regression modeling, time-series forecasting).  
        - Strategy evaluation using backtesting and Monte Carlo simulations.  

      2️⃣ Algorithmic Trading Bots (Currently Under Development) 
      - The system includes heuristic and metaheuristic-driven bots, using:  
        - Genetic Algorithms for optimizing strategy parameters.  
        - Simulated Annealing and Swarm Intelligence for finding optimal entry points.  
        - Tabu Search and Cash Flow Analysis for minimizing risk exposure.  

      3️⃣ AI-Based Trading Bots (Future Development)  
      - Experimental Reinforcement Learning models (DQN, PPO) for learning market strategies.  
      - Deep learning algorithms analyzing historical transactions and market volatility.  
      - Adaptive market behavior models incorporating macroeconomic data.  
    `,
    technologies: [
      'Python',
      'TypeScript',
      'PostgreSQL',
      'TA-Lib',
      'Backtrader',
      'Docker',
      'Kubernetes',
    ],
  },
  {
    id: '3',
    title: 'Traveling Salesman Problem Solver',
    shortDescription: 'An advanced solver for the Traveling Salesman Problem.',
    nonTechnicalDescription:
      'This project finds the shortest route for a salesman visiting multiple cities and returning to the start.',
    technicalDescription: `
This project implements several algorithms to solve the Traveling Salesman Problem, including heuristic and metaheuristic approaches. The primary methods used are:

- Nearest Neighbor Algorithm – A simple heuristic method that starts from a random city and visits the nearest unvisited city until all cities are visited and returns to the start.
- Minimum Spanning Tree (MST) Approximation – A strategy based on constructing a minimum spanning tree and converting it into a Hamiltonian cycle.
- Genetic Algorithm (GA) – A nature-inspired optimization method using selection, crossover, and mutation to improve solutions iteratively.
- Simulated Annealing (SA) – A probabilistic approach inspired by metal annealing, allowing non-greedy moves to escape local minima.
- Tabu Search – A local search method that employs a tabu list to avoid revisiting previously explored solutions and enhance exploration.
- Branch and Bound (B&B) – An exact method that explores all possible paths but dynamically prunes the search space to reduce computational cost.

The project also features a graphical user interface (GUI) for route visualization and a statistical analysis module to evaluate the effectiveness of different algorithms based on the number of cities and their spatial distribution.
    `,
    technologies: [
      'Python',
      'NumPy',
      'Matplotlib',
      'Tkinter',
      'Graph Theory',
      'Genetic Algorithms',
      'Simulated Annealing',
      'Tabu Search',
      'Branch and Bound',
    ],
    imageUrl: 'temp.jpg',
  },
  {
    id: '4',
    title: 'Custom Compiler',
    shortDescription:
      'A custom-built compiler that translates high-level code into executable instructions.',
    nonTechnicalDescription:
      'This project is a self-developed compiler that processes programming code step by step, ensuring correct interpretation and optimization before execution.',
    technicalDescription:
      'The compiler is built upon a well-structured modular approach, where each component plays a vital role in the compilation pipeline. The first phase involves lexical analysis which scans and tokenizes the input source code, ensuring that the syntax follows predefined rules. The next step, syntactic and semantic analysis ensures that the code structure is valid and that logical operations adhere to expected programming constructs.\n\n' +
      'Following this, the code generation module translates the analyzed source code into an intermediate representation, optimizing its structure for efficient execution. The memory management system is responsible for allocating and tracking variable storage, preventing memory leaks, and ensuring efficient resource utilization. Additionally, a pre-compilation analysis module runs various optimizations before the final code is produced, refining instruction sets and eliminating redundant operations.\n\n' +
      'The compiler also includes an instruction set reference which defines the available operations that can be translated into executable commands. By combining these elements, the project creates a fully functional compilation environment capable of processing custom programming languages while maintaining efficiency and flexibility.',
    technologies: [
      'Python',
      'Lexical Analysis',
      'Parsing',
      'Semantic Analysis',
      'Code Optimization',
      'Memory Management',
      'Intermediate Representation',
      'Instruction Set Design',
    ],
    imageUrl: '/temp.jpg',
  },
];
