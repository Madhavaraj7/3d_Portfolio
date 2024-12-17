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
  Work,
  blog,
  task
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
    name: "WorkNet",
    description:
      "WorkNet is a platform that connects clients with skilled professionals for booking services like carpenters and electricians. It offers seamless booking, secure payments, and real-time communication, making it easy for users to find the help they need quickly and efficiently.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "socketio",
        color: "blue-text-gradient",
      },
    ],
    image: Work,
    source_code_link: "https://github.com/Madhavaraj7/WorkNet",
    live_link: "https://worknet.com", // Add your live link here
    details: [
      "Utilized React with TypeScript for a dynamic and type-safe front end, enhancing user experience.",
      "Implemented Node.js and Express for efficient server-side routing and scalable backend operations.",
      "Employed a layered architecture for a clean, modular codebase, ensuring maintainability.",
      "Used MongoDB for secure and scalable data storage.",
      "Integrated Cloudinary for fast and efficient image storage.",
      "Implemented secure JWT authentication and OTP verification via Nodemailer for enhanced user protection.",
      "Enabled real-time chat with Socket.io for smooth communication between users.",
      "Handled payments seamlessly with Stripe integration for secure transactions.",
      "Hosted on Microsoft Azure VM, using Nginx as a reverse proxy to optimize performance.",
      "Technologies Used: Node.js, Express.js, Tailwind CSS, Material UI, TypeScript, MongoDB, Socket.io, Cloudinary, Firebase, JWT, Stripe",
    ],
  },
  {
    name: "Smart Store",
    description:
      "Smart Store is an e-commerce platform designed to simplify online shopping, offering a wide range of tech products. Users can browse and purchase items like earphones and smartwatches with ease, while the platform ensures secure transactions and smooth order processing.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "razorpay",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Madhavaraj7/smart-store",
    live_link: "https://smartstore.com", // Add your live link here
    details: [
      "Developed an e-commerce platform, including product listing, cart management and order processing functionalities.",
      "Architected scalable and maintainable software solutions using Node.js, Express.js, MongoDB.",
      "Implemented separate modules for administrators and users, enabling efficient product and category management for admins and a user-friendly interface for browsing and purchasing for users.",
      "Implemented Nodemailer for sending OTPs securely.",
      "Utilized Nginx as a reverse proxy to enhance server performance.",
      "Integrated payment gateways like RazorPay to facilitate secure and seamless transactions.",
      "Technologies used: Node, Express, MongoDB, Bootstrap, Nginx, AWS EC2",
    ],
  },
  {
    name: "Chatify",
    description:
      "Chatify is a real-time messaging app that supports one-on-one and group chats. With a user-friendly interface and seamless communication, it allows users to connect instantly and share messages securely in both private and group settings.",
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
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "expressjs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: Chat,
    source_code_link: "https://github.com/Madhavaraj7/Chatify",
    live_link: "https://chatify.com", // Add your live link here
    details: [
      "Developed a real-time chat application supporting one-on-one and group messaging.",
      "Leveraged React with TypeScript for a dynamic and responsive front-end experience.",
      "Implemented a clean and modern user interface using Chakra UI for efficient navigation and usability.",
      "Used Node.js and Express for the backend, handling requests and data efficiently.",
      "Integrated Socket.io for real-time messaging and MongoDB for secure data storage, facilitating efficient user data management.",
    ],
  },
  {
    name: "StorySphere",
    description:
      "StorySphere is a blog management platform that lets users easily create, update, and delete blog posts. With user authentication and a clean design, it allows writers to share their stories while maintaining control over their content.",
    tags: [
      {
        name: "reactjs",
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
    image: blog,
    source_code_link: "https://github.com/Madhavaraj7/StorySphere",
    live_link: "https://storysphere.com", // Add your live link here
    details: [
      "Developed a feature-rich blog management platform with full CRUD functionality.",
      "Implemented secure user authentication and authorization using JWT.",
      "Designed a clean and responsive user interface with React.js and Tailwind CSS.",
      "Integrated seamless image uploading to associate visual content with blog posts.",
      "Built a robust backend using Node.js and Express.js, with efficient data storage in MongoDB.",
      "Ensured scalability and performance with well-structured API endpoints and clean schema design.",
    ],
  },
  {
    name: "Taskmaster",
    description:
      "Taskmaster is a task management app that helps users organize their day by creating, updating, and deleting tasks. With a clean interface and real-time updates, it makes task tracking easy and efficient for personal and team use.",
    tags: [
      {
        name: "reactjs",
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
    image: task,
    source_code_link: "https://github.com/Madhavaraj7/Taskmaster",
    live_link: "https://taskmaster.com", // Add your live link here
    details: [
      "Created an elegant task manager with user authentication, enabling effortless task management.",
      "Designed a sleek, responsive interface using React.js and Tailwind CSS for optimal user engagement.",
      "Incorporated real-time updates via Socket.io, ensuring instant notifications on task changes.",
      "Built the backend with Node.js, Express, and MongoDB for efficient data handling and storage.",
    ],
  },
  {
    name: "Tic-Tac-Toe Game",
    description:
      "Tic-Tac-Toe is a simple browser-based game that lets two players compete against each other. With a straightforward interface and clean design, it offers a fun and competitive experience for all ages.",
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
    live_link: "https://tictactoe.com", 
    details: [
      "Developed a simple and interactive Tic-Tac-Toe game that provides fun gameplay for users of all ages.",
      "Built using React.js for a responsive and fluid gaming experience, ensuring smooth interactions.",
      "Utilized Tailwind CSS to create a clean and modern design that enhances user engagement.",
      "Implemented game logic to ensure fair play and an intuitive user interface for easy navigation.",
    ],
  },
];




export { services, technologies, experiences, testimonials, projects };
