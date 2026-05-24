import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  netflix,
  gourmetgo,
  scribble,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2023 - Dec 2023",
    points: [
      "Built responsive and user-friendly web interfaces using React.js and Tailwind CSS for personal and client-based projects.",
      "Developed reusable UI components and improved website performance for better user experience.",
      "Worked closely with designers and project collaborators to deliver clean and modern web applications.",
      "Implemented mobile responsiveness and optimized applications for cross-browser compatibility.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Open Source Contributor",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Aug 2023",
    points: [
      "Contributed to open-source projects and collaborated with developers through GitHub workflows.",
      "Built dynamic applications using React.js, REST APIs, and modern JavaScript frameworks.",
      "Improved code quality by participating in peer reviews and debugging application issues.",
      "Integrated APIs and authentication systems for real-world project implementations.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Self Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2023 - May 2024",
    points: [
      "Developed full-stack applications including Scribble Club, Gourmet Go, and a Netflix Clone using MERN stack technologies.",
      "Designed scalable backend APIs with Node.js and Express.js connected to MongoDB databases.",
      "Implemented authentication, responsive layouts, and modern UI/UX practices across projects.",
      "Deployed and maintained projects while continuously improving performance and usability.",
    ],
  },
  {
    title: "AI & Full Stack Developer",
    company_name: "GRIN Project",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Currently building GRIN, a personalized AI assistant integrating modern AI inference technologies and full-stack architecture.",
      "Working with React, Vite, Node.js, and AI APIs to create intelligent and interactive user experiences.",
      "Implementing authentication systems, responsive interfaces, and scalable backend services.",
      "Exploring AI-driven features, automation workflows, and cloud-based integrations for advanced functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Scribble Club",
    description:
      "A collaborative digital platform for creators and artists to share ideas, showcase sketches, participate in creative challenges, and connect with a vibrant artistic community in real time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: scribble,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gourmet Go",
    description:
      "A modern food delivery and restaurant discovery web application that allows users to browse menus, place orders, track deliveries, and explore top-rated cuisines with a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: gourmetgo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Netflix Clone",
    description:
      "A responsive streaming platform inspired by Netflix, featuring dynamic movie browsing, categorized content sections, video previews, and an immersive UI powered by modern web technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };