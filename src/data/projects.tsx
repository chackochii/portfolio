import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import { GiDatabase } from "react-icons/gi";
import { FaReact } from "react-icons/fa";
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiPostgresql,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiCss3,
  SiBootstrap,
  SiAmazonec2,
} from "react-icons/si";
import { title } from "process";
const BASE_PATH = "/assets/projects-screenshots";

// const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
//       <Link
//         className="font-mono underline flex gap-2"
//         rel="noopener"
//         target="_new"
//         href={live}
//       >
//         <Button variant={"default"} size={"sm"}>
//           Visit Website
//           <ArrowUpRight className="ml-3 w-5 h-5" />
//         </Button>
//       </Link>
//       {repo && (
//         <Link
//           className="font-mono underline flex gap-2"
//           rel="noopener"
//           target="_new"
//           href={repo}
//         >
//           <Button variant={"default"} size={"sm"}>
//             Github
//             <ArrowUpRight className="ml-3 w-5 h-5" />
//           </Button>
//         </Link>
//       )}
//     </div>
//   );
// };

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  sequelize:{
    title:"Sequelize",
    bg:"black",
    fg:"white",
    icon:<GiDatabase title="Sequelize" />
  },
  react_native:{
    title:"React Native",
    bg:"black",
    fg:"white",
    icon:<FaReact title="React Native" />
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  EC2:{
    title:"EC2",
    bg:"black",
    fg:"white",
    icon:<SiAmazonec2/>
  }
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  // {
  //   
  // +
  {
    id: "kds",
    category: "development",
    title: "KDS - Kitchen Display System",
    src: "/assets/projects-screenshots/kds/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://kds-display-system.netlify.app/",
    github: "https://github.com/Abhiz2411/Kitchen-Display-System",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            The Kitchen Display System (KDS) streamlines restaurant kitchen workflows by replacing 
            traditional ticket systems with a digital interface. Orders are received in real-time 
            through a responsive dashboard powered by WebSockets, ensuring efficient communication 
            between front-of-house and kitchen staff. Built with React, Node.js, and Tailwind CSS, 
            the system enhances operational speed and reduces errors.
          </TypographyP>
          {/* <ProjectsLinks live={this.live} repo={this.github} /> */}
          <SlideShow
            images={[
              `${BASE_PATH}/kds/1.png`,
              `${BASE_PATH}/kds/2.png`,
              `${BASE_PATH}/kds/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "dispatch",
    category: "development",
    title: "Dispatch 3.0 - Delivery Management System",
    src: "/assets/projects-screenshots/dispatch/2.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://dispatch-delivery-app.netlify.app/",
    github: "https://github.com/Abhiz2411/Dispatch-3.0",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.EC2,

      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Dispatch 3.0 is a comprehensive delivery management application designed to streamline 
            both order fulfillment and internal transfers. The frontend is developed using React, 
            Tailwind CSS, and TypeScript, providing a responsive and type-safe user interface. 
            The backend leverages Node.js, Express, and TypeORM with PostgreSQL for robust data 
            management. JWT is utilized for secure authentication and authorization, while AWS 
            services ensure scalability and reliability. This system enables efficient assignment, 
            tracking, and management of deliveries and transfers, enhancing operational productivity.
          </TypographyP>
          {/* <ProjectsLinks live={this.live} repo={this.github} /> */}
          <SlideShow
            images={[
              `${BASE_PATH}/dispatch/1.png`,
              `${BASE_PATH}/dispatch/2.png`,
              `${BASE_PATH}/dispatch/3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "heribe",
    category: "development",
    title: "Heribe - Company Website",
    src: "/assets/projects-screenshots/heribe/1.png",
    screenshots: ["1.png", "2.png", "3.png"],
    live: "https://heribe-company-website.netlify.app/",
    github: "https://github.com/YourUsername/heribe-company-website",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Heribe is a modern, responsive company website built using React and Tailwind CSS. It showcases the company's services, portfolio, and contact information with a clean and intuitive design. The project emphasizes responsive layouts and interactive UI components to provide an engaging user experience.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/heribe/1.png`,
              `${BASE_PATH}/heribe/2.png`,
              `${BASE_PATH}/heribe/3.png`,
            ]}
          />
        </div>
      );
    },
  },



  {
    id: "chipdfish",
    category: "development",
    title: "Chipdfish - Fishing Sport Mobile App",
    src: "/assets/projects-screenshots/financeme/1.png",
    screenshots: ["1.png"],
    live: "",
    github: "https://github.com/Abhiz2411/FinanceMe-Devops-Project-01",
    skills: {
      frontend: [PROJECT_SKILLS.react_native],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.sequelize,
        PROJECT_SKILLS.postgres,

      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Chipdfish is a cross-platform mobile application designed for fishing sport enthusiasts. Built with React Native for the frontend and Node.js, Express, and Sequelize for the backend, the app enables users to log fishing trips, track locations, and share catches with the community. The UI is intuitive and responsive, offering a native experience on both iOS and Android devices.
            <br /><br />
            The backend API is powered by Express and uses Sequelize ORM to interact with a structured database, supporting features like user profiles, catch history, and geolocation tagging. The application underwent real-world testing using TestFlight (iOS) and Android builds to ensure smooth performance and a seamless user experience. Chipdfish promotes a social, engaging, and organized approach to sport fishing through technology.
          </TypographyP>
          <SlideShow
            images={[
              `${BASE_PATH}/financeme/1.png`,
            ]}
          />
        </div>
      );
    },
  }
  
  
  
  
  
];
export default projects;
