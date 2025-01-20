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
  id,
  ck,
  ecomexpress,
  netflix,
  sm,
  next,
  threejs,
  woxro,
idendt,
apro,
media,
vm,
ev,

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
    title: "React js & Next js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Digital Marketing & Word Press Developer",
    company_name: "MEDIACROW Digital marketing and SEO Agency ",
    icon: media,
    iconBg: "#383E56",
    date: "Dec 2019 - Dec 2021 (2 YEARS)",
    points: [
      "SMM, SEO, CONTENT MANAGEMENT",
      "website designing in word press, keyword research for SEO",
      "Learing HTML CSS Web Designing and also data entry in MS excel and MS word",
      "Handling different tools for digital marketing for Implementing and reviewing social media ads",
    ],
  },
  {
    title: "MERN Stack Trainee",
    company_name: "APRO- IT SOLUTION, Chalakudy Thrissur",
    icon: apro,
    iconBg: "#E6DEDD",
    date: " Jan 2022 - October/2022",
    points: [
      "MERN stack development",
      "Self-learning platform where weekly Tasks are assigned (Industry experts assign and review our projects",
      "completing the tasks and the industry Experts will ensure the quality and review the code ",
      "Participating in code reviews and providing constructive feedback to other developers assigned with different task",
    ],
  },
  {
    title: "REACT JS Developer",
    company_name: "Worxo ",
    icon: woxro,
    iconBg: "#383E56",
    date: "October - Mar/2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Focusing the frontend development Implementing responsive design and ensuring cross-browser compatibility.",
      "working in the Web app called clickekart using React js and PHP as Back-end",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Idendt",
    icon: idendt,
    iconBg: "#E6DEDD",
    date: " April /2023 - Mar/2024 ",
    points: [
      "Developing creative websites using React.js and HTML CSS ",
      "Mainly working in UI Development and learning new Technologies like Next js",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Virtual Minds Trading LLC",
    icon: vm,
    iconBg: "#E6DEDD",
    date: " Mar/2023 - Present",
    points: [
      "Fullstack Developer in MERN Stack ",
      "Mainly working in UI Development and Admin Panel for E-commerce Services",
      "Implementing responsive design and ensuring cross-browser compatibility. and Optimization for performance",
    ],
  },
];



const projects = [
  {
    name: "E-COMMERCE APP",
    description:
    [
      "– feature-rich e-commerce app for online shopping ",
      "Implemented all the necessary e-commerce functionalities like product listing, cart, orders, etc",
      "features include",
      "Edit products, Delete Products, Search Products",
      "Product, user & category Management on the Admin side",
      "Payment gateways integrated: Razorpay",
      "Technologies used MongoDB ,Node js, npm modules, HBS template engine, Express",
    ],
   
    tags: [
      {
        name: "HBS Tenplate Engine",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ecomexpress,
    source_code_link: " https://github.com/GokulkrishnaTU/shopping-cart--nodejs",
  },
  {
    name: "Netflix -react",
    description:[
      "Netflix dynamic website with React js ",
      "using API from TMDB for datas",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://github.com/GokulkrishnaTU/Netflix-react",
  },
  {
    name: "Social Media application",
    description:   [
      "worked in the project that is a social media application for Developers",
      "using technologies Node & Expressjs REST API , React js as front-end &MongoDB",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
        tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sm,
    source_code_link: "https://github.com/GokulkrishnaTU/Social-media",
  },

  {
    name: "Clickekart",
    description:   [
      "Developing creative websites using React.js and HTML CSS ",
      "Mainly working in UI Development and learing new Techologies like Next js",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ck,
    source_code_link: "https://github.com/",
  },

  {
    name: "E-commerce App",
    description:
    [
      "Developing and working on E-commerce app using Next.js and Tailwind ",
      "currently working in UI Development and learing new Techologies like Next js",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "using Techonologies like MongoDb as Database ,NPM Modules for features",
    ],    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDb",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },

      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: next,
    source_code_link: "https://github.com/GokulkrishnaTU/E-commerce-Nextjs",
  },
  {
    name: "idenDT Projects",
    description:
    [
      "Developing creative websites using React.js and HTML CSS ",
      "Mainly working in UI Development and learing new Techologies like Next js",
      "Implementing responsive design and ensuring cross-browser compatibility.",

      
    ],    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: id,
    source_code_link: "https://github.com/",
  },


  {
    name: "Vitual Mind Projects",
    description:
    [
      "working on a e-commerce app E-vouchr project in MERN Stack",
      "Mainly working in UI Development and and Optimization part of the Main Project",
      "Focused in the UI Development and Optimization part of the admin Panel with Role Based Admin Features and complex data calculations",

      
    ],    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ev,
    source_code_link: "https://evouchr.com/bd/en",
  },
];

export { services, technologies, experiences, projects  };
