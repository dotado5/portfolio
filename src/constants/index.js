import {
  // mobile,
  // backend,
  // creator,
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
  pm1,
  python,
  writing,
  trone,
  nnpc,
  binance,
  motion,
  next,
  medium,
  comp,
  linkedin,
  blog,
  pizza,
  linkedinpage,
  manage,
  pizzapage,
  tronepage,
  doyenify,
  teslaHome,
  disneyHome,
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
    title: "Fullstack Engineer",
    icon: web,
  },
  {
    title: "Python Developer",
    // icon: backend,
    icon: python,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Framer Motion",
    icon: motion,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Medium",
    icon: medium,
  },
  {
    name: "Styled Components",
    icon: comp,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Trone Capitals",
    icon: trone,
    iconBg: "#5e7b46",
    date: "December 2022 - April 2023",
    points: [
      "Developed a web application using React.js and other related technologies.",
      "Worked as the project manager during the development of the web application",
      "Collaborated with a team which included designers, product managers, and a backend engineer to create a high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews, receiving constructive feedback from bosses and providing constructive feedbacks to team members.",
    ],
  },
  {
    title: "Project Management Intern",
    company_name: "NNPC",
    icon: nnpc,
    iconBg: "white",
    date: "Jun 2021 - Dec 2021",
    points: [
      "Management of IT projects and management of the change that follows and is required for the successful implementation of the projects.",
      "Working as teams to ensure the successful operationalization of IT projects in the organization.",
      "Active engagement with users, to create awareness of the product available to then and to reinforce change brought about by such product.",
    ],
  },
  {
    title: "Content Writing",
    company_name: "Binance",
    icon: binance,
    iconBg: "black",
    date: "Apr 2022 - Jul 2022",
    points: [
      "Promotion of company products through content writing and posting on medium for readers.",
      "Creation of awareness of different offerings of company's mobile and web applications through content writing.",
    ],
  },
  {
    title: "Full stack Engineer",
    company_name: "Doyenify",
    icon: doyenify,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Present",
    points: [
      "Developing and maintaining web applications.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Linkedin Clone",
    description:
      "LinkedIn is a social networking platform designed for professionals and businesses to connect and network with each other..",
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
        name: "styled Components",
        color: "pink-text-gradient",
      },
    ],
    image: linkedinpage,
    webImage: linkedin,
    git_link: "https://github.com/dotado5/linkedin-clone",
    live_link: "https://linkedin-clone-swart-chi.vercel.app/",
  },
  {
    name: "Manage Task Site",
    description:
      "A website that shows a little of the offerings of the company Manage.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: manage,
    webImage: blog,
    git_link: "https://github.com/dotado5/blog-site",
    live_link: "https://blog-site-two-alpha.vercel.app/",
  },
  {
    name: "Pizza Joint",
    description:
      "A pizza ordering site that allows you to select what you'd like to order. The site has some beautiful animations from framer motion on it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer motion",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: pizzapage,
    webImage: pizza,
    git_link: "https://github.com/dotado5/pizza-order-site",
    live_link: "https://pizza-order-site.vercel.app/",
  },
  {
    name: "Trone Webapp",
    description:
      "A financial tech Webapp that allows client to register, login into their accounts, make deposit, check their balance, perform some other functions and logout of their accounts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask API",
        color: "green-text-gradient",
      },
      {
        name: "styled component",
        color: "pink-text-gradient",
      },
    ],
    image: tronepage,
    webImage: trone,
    git_link: "https://github.com/dotado5/Trone-web",
    live_link: "https://trone-web.vercel.app/",
  },
  {
    name: "Tesla clone",
    description:
      "A clone of the website of the world's leading electronic car company.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: teslaHome,
    webImage: tesla,
    git_link: "https://github.com/dotado5/tesla-clone.git",
    live_link: "https://tesla-clone-topaz-six.vercel.app/",
  },
  {
    name: "Disney plus clone",
    description: "",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: disneyHome,
    webImage: tesla,
    git_link: "https://github.com/dotado5/disneyplus-clone.git",
    live_link: "https://disneyplus-clone-wheat.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
