import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Nwadei Shakirat",
  title: "Hi all, I'm Shakirat",
  description:
    "I'm a passionate Frontend web developer with experience developing Frontend web applications with React.js, Next.js and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "shakiogunlesi",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:shaki_ogunlesi@outlook.com",
  linkedin: "https://www.linkedin.com/in/shakirat-ogunlesi/",
  github: "https://github.com/shakiogunlesi?tab=repositories",
  instagram: "https://www.instagram.com/shakiratnwadei",
  // facebook: 'https://www.facebook.com/shakiogunlesi',
  // twitter: 'https://twitter.com/shakiogunlesi',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "I AM A FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static and dynamic websites using Next.js"),
        emoji("⚡ Building RESTful APIs in NestJS Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Wordpress",
          iconifyTag: "logos:wordpress",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "95", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "60",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "The Polytechnic, Ibadan. Oyo State",
    subHeader: "Higher National Diploma in Computer Science",
    duration: "September 2012 - April 2014",
    desc: "",
    grade: "Grade C",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Web Developer/Web Administrator",
    company: "Ccharles Resources Limited",
    companyLogo: "/img/icons/company_logo.png",
    date: "March 2020 - Present",
    desc: "I employed web design and development principles to create reliable software, transforming designs into reality using HTML, CSS, and JavaScript. I constructed responsive and user-friendly websites and applications, closely collaborating with the team throughout all stages of project delivery while supervising website performance and resolving frontend challenges.",
  },
  {
    role: "Frontend Developer",
    company: "Moore Advice",
    companyLogo: "/img/icons/company_logo.png",
    date: "March 2018 - Feb 2020",
    desc: "I managed all design-related tasks for website production, created fresh user interfaces for enhanced experiences, and improved application speed and scalability for optimal performance. I verified user input for backend submission, validated UI/UX designs for technical viability, and established reusable code and libraries to streamline development.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "developer-portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/shakiogunlesi/my-portfolio",
    link: "https://developer-portfolio-shakiogunlesi.vercel.app/",
  },
  {
    name: "Interswitch Project",
    desc: "I participated in a group project where I built responsive and user-friendly interface applications..",
    github: "https://github.com/shakiogunlesi/Account-Management-system",
    link: "/Account-Management-system",
  },
  {
    name: "Vatican Solutions",
    desc: "Vatican Solution Properties is a static property website built using HTML, CSS, JavaScript, and PHP.",
    link: "https://vaticansolutionprops.com/",
  },
  {
    name: "Integrity Solutions",
    desc: "A Computer Accessaries Ecommerce Website Platform built with Wordpress Theme",
    link: "https://integritysolution.com.ng/",
  },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Nwadei Shakirat",
  description: greetings.description,
  author: "Nwadei Shakirat",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-shakiogunlesi.vercel.app",
  keywords: [
    "Shakirat",
    "Nwadei Shakirat",
    "@shakiogunlesi",
    "shakiogunlesi",
    "Portfolio",
    "Shakirat Portfolio ",
    "Nwadei Shakirat Portfolio",
  ],
};
