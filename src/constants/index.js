import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Netflix,
  TicTacToe,
  AccuWheather,
  // firebase,
  Chat,
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
    title: "Stunning Web Development",
    icon: web,
  },
  {
    title: "Innovative Frontend Engineering",
    icon: mobile,
  },
  {
    title: "Robust Backend Solutions",
    icon: backend,
  },
  {
    title: "Engaging Video Creation",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Full Stack Intern",
    company_name: "Brototype",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "June 2023 - present",
    points: [
      "Currently leading the development of an innovative e-learning platform with course management, multi-tiered payment gateways, and an admin dashboard, utilizing Node.js, Next.js, and AWS.",
      "Designed and built an advanced e-commerce platform for shoe sales, featuring product viewing, zoom capabilities, cart management, diverse payment options, and automated PDF invoicing, with a robust backend powered by Node.js and Express.js.",
      "Contributed to a variety of impactful projects at Brototype, demonstrating adaptability and problem-solving skills while enhancing both user experience and backend performance.",
      "As a dedicated self-learner, successfully completed multiple projects, continuously expanding my skill set and staying updated with the latest technologies.",
    ],
  },
  {
    title: "Bachelor of Computer Application",
    company_name: "Hindustan College of Arts and Science",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2020-2023",
    points: [
      "Studied the fundamentals of coding, gaining a strong foundation in various programming languages and technologies.",
      "Actively pursued and earned multiple certificates to enhance my skills and stay updated with industry standards.",
      "Developed a comprehensive e-commerce website as my main project, showcasing my ability to apply theoretical knowledge to real-world applications.",
      "Collaborated on a group project using Kotlin, enhancing my teamwork and problem-solving skills.",
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
    name: "Smart Store",
    description:
      "Empowering seamless shopping experiences with a robust Node.js backend, EJS templating, and MongoDB for dynamic data management.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Madhavaraj7/smart-store-ecommerce-project",
  },
  {
    name: "Chatify",
    description:
      "Connect in real-time with Chatify, a responsive chat application powered by ReactJS, Chakra UI, and Socket.io for instant communication.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "socketio",
        color: "pink-text-gradient",
      },
    ],
    image: Chat,
    source_code_link: "https://github.com/Madhavaraj7/Chatify",
  },
  {
    name: "Netflix Clone",
    description:
      "Stream your favorite shows with our Netflix clone, crafted using ReactJS, Firebase for real-time updates, and Tailwind CSS for sleek, responsive design.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: Netflix,
    source_code_link: "https://github.com/Madhavaraj7/Netflix-Clone",
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "Challenge your friends with a classic Tic-Tac-Toe game, built with ReactJS and styled using Tailwind CSS for a modern look and feel.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: TicTacToe,
    source_code_link: "https://github.com/Madhavaraj7/Tic-Tac-Toe",
  },
  {
    name: "Weather App",
    description:
      "Stay ahead of the weather with our user-friendly app, created with JavaScript, HTML, and CSS for accurate forecasts and a smooth user experience.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: AccuWheather,
    source_code_link: "https://github.com/Madhavaraj7/Accuweather",
  },
  
];


export { services, technologies, experiences, testimonials, projects };
