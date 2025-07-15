// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import golangLogo from './assets/tech_logo/golang.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import renderLogo from './assets/tech_logo/render.png';

// Experience Section Logo's
import nibhainfotechLogo from './assets/company_logo/Nibha_Infotech_logo.png';
import geekroomLogo from './assets/company_logo/Geek_room_logo.png';
import ecellLogo from './assets/company_logo/eCell_logo.png';

// Education Section Logo's
import davLogo from './assets/education_logo/Dav_logo.png';
import msitLogo from './assets/education_logo/Msit_logo.png';

// Project Section Logo's
import amazonLogo from './assets/work_logo/Amazon.png';
import EcommerceLogo from './assets/work_logo/Ecommerce_Website.png';
import SortingVisualizerLogo from './assets/work_logo/Sorting_Visualizer.png';
import spotifyLogo from './assets/work_logo/Spotify.png';
import wanderlustLogo from './assets/work_logo/wanderlust.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Mongo Atlas', logo: mcLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Golang', logo: golangLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Render', logo: renderLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: nibhainfotechLogo,
    role: "Web Developer",
    company: "Nibha Infotech Pvt. Ltd.",
    date: "July 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Express JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
    ],
  },
  {
    id: 1,
    img: geekroomLogo,
    role: "Management Member",
    company: "Geek Room MSIT",
    date: "August 2023 - Present",
    desc: "Managed and coordinated college events from planning to execution, collaborating with teams to oversee logistics, scheduling, and on-site operations, ensuring successful and engaging experiences in fast-paced environments.",
    skills: [
      "Public Speaking",
      "Creativity",
      "Innovation",
      "Team Collaboration", 
      "Leadership",
      "Logistics & Scheduling",
      "Event Planning",
    ],
  },
  {
    id: 2,
    img: ecellLogo,
    role: "Technical Member",
    company: "eCell MSIT",
    date: "September 2024 - Present",
    desc: "Assisted in the development and maintenance of their website, contributing to design improvements, feature implementation, and overall performance enhancements. Engaged with team members to ensure responsive design, optimized load times, and seamless user experience across different devices and browsers.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Material UI",
      "React JS",
      "Express JS",
      "Node JS",
      "MongoDB"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: msitLogo,
    school: "Maharaja Surajmal Institute of Technology, Delhi",
    date: "September 2022 - Present",
    grade: "9.44 CGPA",
    desc: "I'm a final-year B.Tech CSE student at MSIT, Delhi, with knowledge in programming, software development, and subjects like DSA, OOPs, DBMS, OS, CN, and Web Development. Participating in hackathons, coding contests, and workshops has strengthened my practical and problem-solving skills.",
    degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
  },
  {
    id: 1,
    img: davLogo,
    school: "DAV Public School Mausam Vihar, Delhi",
    date: "April 2021 - March 2022",
    grade: "94.2%",
    desc: "I completed my Class 12 education from DAV Public School, Mausam Vihar, Delhi, under the CBSE board, with a Non-Medical stream that included Physics, Chemistry, Mathematics, and Computer Science. This academic background laid the foundation for my interest in technology and logical problem-solving.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: davLogo,
    school: "DAV Public School Mausam Vihar, Delhi",
    date: "Apr 2019 - March 2020",
    grade: "87%",
    desc: "I completed my Class 10 education from DAV Public School, Mausam Vihar, Delhi, under the CBSE board, with a focus on Science and Information Technology. This early introduction to IT nurtured my interest in computers and set the foundation for my journey in the field of technology.",
    degree: "CBSE(X), Science with Information Technology",
  },
];

export const projects = [
  {
    id: 0,
    title: "WanderLust - Ultimate Travelling Guide",
    description:
      "Wanderlust - The Ultimate Travelling Guide is a fully responsive full-stack web application designed to inspire and assist travelers. It offers curated destination insights, travel tips, and personalized itineraries with a seamless user experience. Built using HTML, CSS, JavaScript, Node.js, and MongoDB, it ensures dynamic content and smooth navigation across all devices, empowering users to plan their perfect trip effortlessly.",
    image: wanderlustLogo,
    tags: ["HTML", "CSS", "JavaScript", "Node JS", "Express JS", "MongoDB", "Restful APIs"],
    github: "https://github.com/HariSehgal/WanderLust",
    webapp: "https://harisehgal4568-wanderlust.onrender.com/listings",
  },
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "This e-commerce website is a responsive and user-friendly platform built using HTML, CSS, and JavaScript to enhance the online shopping experience. It features a detailed product catalog with high-quality images, interactive sliders, and a smooth shopping cart experience across all devices. Though not yet deployed, future plans include secure checkout integration and hosting to deliver a convenient and engaging shopping experience for customers.",
    image: EcommerceLogo,
    tags: ["HTML", "CSS", "JavaScript", "Github"],
    github: "https://github.com/HariSehgal/SG-Ecommerce-Website",
  },
  {
    id: 2,
    title: "Sorting Visualizer",
    description:
      "The Sorting Visualizer is a C++ application that visually demonstrates how various sorting algorithms work using the SDL2 library for graphical rendering. It features an interactive interface where users can choose from Bubble Sort, Selection Sort, Insertion Sort, Heap Sort, Merge Sort, and Quick Sort. The tool visually presents the step-by-step sorting process, enhancing understanding of algorithm behavior. Features include an algorithm selector and a program exit option integrated into the VS Code terminal.",
    image: SortingVisualizerLogo,
    tags: ["C", "C++", "SDL2"],
    github: "https://github.com/HariSehgal/Sorting_Visualizer",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description:
      "Built using HTML and CSS, the Amazon Clone project replicates the user interface of the Amazon e-commerce platform with a responsive design. It features a homepage with promotional banners, product categories, and detailed listings including images, descriptions, and pricing. This project allowed me to deepen my understanding of front-end web development, focusing on layout design, responsiveness, and user-friendly navigation. I'm excited to continue enhancing it with new features.",
    image: amazonLogo,
    tags: ["HTML", "CSS", "Github"],
    github: "https://github.com/HariSehgal/Amazon-Clone",
  },
  {
    id: 4,
    title: "Spotify Clone",
    description:
      "This web application, built using HTML and CSS, is inspired by Spotify's desktop interface. It replicates the core layout, including a navigation bar, search bar, music library, playlist management, and a footer-based music player. The design is sectioned into a sidebar, main content area, and footer, showcasing a strong grasp of HTML and CSS fundamentals. Though not responsive, the project lays the groundwork for future enhancements like responsiveness, interactivity, and dynamic content integration.",
    image: spotifyLogo,
    tags: ["HTML", "CSS", "Github"],
    github: "https://github.com/HariSehgal/SpotifyClone",
  },
];  