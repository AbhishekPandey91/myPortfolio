export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const achievements = [
  {
    id: 1,
    title: 'Amazon ML Summer School 2026',
    award: 'Selected Participant',
    badge: 'National Selection',
    date: 'July 2026',
    organization: 'Amazon India',
    description:
      'Selected among top engineering students across India for Amazon ML Summer School 2026, gaining hands-on knowledge in Deep Learning, LLMs, and Scalable AI Systems.',
    type: 'gold',
  },
  {
    id: 2,
    title: 'Hack36 Flagship Hackathon',
    award: 'Second Runner-Up (3rd Rank)',
    badge: 'Podium Finish',
    date: 'Nov 2025',
    organization: 'CC Club | MNNIT Allahabad',
    description:
      'Secured 2nd Runner-Up at Hack36, MNNIT Allahabad’s annual flagship hackathon, building high-impact real-time security and systems solutions under tight 36-hour constraints.',
    type: 'amber',
  },
  {
    id: 3,
    title: 'Logical Rhythm AI/ML Hackathon',
    award: 'Winner (1st Place)',
    badge: 'Champion',
    date: 'Oct 2025',
    organization: 'CC Club | MNNIT Allahabad',
    description:
      'Awarded 1st place in the flagship AI/ML Hackathon organized by Computer Coding Club MNNIT for engineering automated LLM & vision workflows.',
    type: 'emerald',
  },
  {
    id: 4,
    title: 'Hacktivate AI/ML Hackathon',
    award: 'Winner (1st Place)',
    badge: 'Champion',
    date: 'April 2025',
    organization: 'Robotics Club | MNNIT Allahabad',
    description:
      'Won 1st place in Hacktivate AI/ML Hackathon at Botrush 3.0, organized by Robotics Club MNNIT Allahabad.',
    type: 'emerald',
  },
  {
    id: 5,
    title: 'LeetCode Competitive Programming',
    award: 'Knight Badge (Rating: 1870)',
    badge: 'Top Performer',
    date: 'Continuous',
    organization: 'LeetCode',
    description:
      'Earned Knight Badge on LeetCode with max contest rating of 1870 (handle: code_Abhishek_pandey_), solving complex DSA & algorithmic challenges.',
    type: 'purple',
  },
  {
    id: 6,
    title: 'Network Security Bootcamp (ISEA-III)',
    award: 'Certified Participant',
    badge: 'Certification',
    date: 'Nov 2025',
    organization: 'ISEA-III',
    description:
      'Certified participant in Network Security: Practices and Applications Bootcamp under ISEA Phase-III, covering advanced Linux networking and application security.',
    type: 'cyan',
  },
];

export const clientReviews = achievements;

export const myProjects = [
  {
    title: 'AgentForge — AI Agent Orchestration Platform',
    desc: 'Multi-Tenant SaaS for LLM Agent Fleets allowing users to spin up AI agents and dynamically switch between 5 LLMs on the fly based on cost, speed, or reasoning depth.',
    subdesc:
      'Integrates Model Context Protocol (MCP) to provide isolated tool servers (Gmail, GitHub, Google Calendar) backed by a credential vault with instant key revocation. Built with LangGraph, PostgreSQL, and MCP.',
    href: 'https://github.com/AbhishekPandey91/Agent-tool-saas',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'LangGraph',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'PostgreSQL',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'MCP',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Meddit — Healthcare Community Platform',
    desc: 'AI-moderated platform connecting doctors and patients. Features AI + keyword-based content filtering that auto-blocks irrelevant posts, and a Gemini Vision moderation layer for medical image verification.',
    subdesc:
      'Includes a global doctor discovery system with direct patient-doctor messaging for noise-free medical discussions. Built with Node.js, Groq API (Llama 3.3), and Google Gemini Vision API.',
    href: 'https://meddit-two.vercel.app',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Groq (Llama 3.3)',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Gemini Vision',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'React.js',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'eBPF Network Micro-Segmentation',
    desc: 'Real-time eBPF-based application-layer network security platform providing process-level visibility (PID, executable path) and application-aware access control on Linux.',
    subdesc:
      'Engineered kernel-level tracing hooks and network packet inspection probes paired with an interactive real-time Streamlit dashboard. Built with eBPF, Linux Kernel, C, and Linux Networking.',
    href: 'https://github.com/MNNITAK/hack-insightx/tree/ebpf-microseg',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'eBPF',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Linux Kernel',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'C',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Streamlit',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Computer Coding Club (CC Club)',
    pos: 'CC Executive — MNNIT Allahabad',
    duration: 'Present',
    title: "Executive member at MNNIT's premier coding club. Organize college-wide hackathons (Hack36, Logical Rhythm) and conduct workshops on Data Structures, Algorithms, and Systems programming.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Student Mentorship Program (SMP)',
    pos: 'SMP Mentor — MNNIT Allahabad',
    duration: 'Present',
    title: "Official Student Mentor at MNNIT Allahabad, guiding junior undergraduates in computer science fundamentals, DSA problem solving, competitive programming, and engineering career roadmaps.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Amazon ML Summer School 2026',
    pos: 'Selected Participant',
    duration: 'July 2026',
    title: "Selected by Amazon Scientists to undergo rigorous training in Machine Learning algorithms, Deep Learning models, Large Language Models (LLMs), and high-throughput AI infrastructure.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];
