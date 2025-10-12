import bwu from "./assets/education/bwu.jpeg"
import pit from "./assets/education/pit.jpeg"
import jharkand from "./assets/education/jharkand.avif"

// skills frontend
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';

// skills backend
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import springbootLogo from './assets/tech_logo/springboot.png';

// languages
import pythonLogo from './assets/tech_logo/python.png';
import javaLogo from './assets/tech_logo/java.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import csharpLogo from './assets/tech_logo/csharp.png';



export const education = [
    {
      id: 0,
      img: bwu,
      school: "Brainware University",
      date: "2022 - July 2025",
      grade: "7.74 SCGPA",
      desc: "I have completed my Btech's degree (CSE) from Brainware University. During my time at BWU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
      degree: "BTECH CSE",
    },
    {
      id: 1,
      img: pit,
      school: "paradise institute of technology ",
      date: "2022",
      grade: "78%",
      desc: "I completed my Diploma degree in Mechanical (ME) from PIT Throughout my studies, I developed a strong foundation in core mechanical subjects such as Thermodynamics, Fluid Mechanics, Strength of Materials, and Manufacturing Processes. These courses helped me understand how mechanical systems work and how engineering principles are applied in real-world scenarios.",
      degree: "Diploma Mechanical Engineering",
    },
    {
      id: 2,
      img: jharkand,
      school: "Jharkhand State Open School",
      date: "2018",
      grade: "65.33%",
      desc: "I completed my class 10 education from jharkhand State Open School, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science etc. ",
      degree: "Class(X)",
    },
    
  ];


  export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Spring Boot', logo: springbootLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'C#', logo: csharpLogo },
    ],
  },
];
