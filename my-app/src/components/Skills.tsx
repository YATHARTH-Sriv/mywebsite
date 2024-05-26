// "use client";
// import React from "react";
// import { AnimatedTooltip } from "../components/ui/animated-tooltip";
// import { BackgroundBeams } from "./ui/background-beams";
// const people = [
//   {
//     id: 1,
//     name: "John Doe",
//     designation: "Software Engineer",
//     image:
//       "https://i.pinimg.com/originals/5c/7b/53/5c7b53a7be1dd267f24f7559584d1345.jpg",
    
//   },
//   {
//     id: 2,
//     name: "ExpressJS",
//     designation: "",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8-UcEjuu3AwR77ZjceWzpeSsZCdGUa4YFc6KvA-7YHA&s",
    
//   },
//   {
//     id: 3,
//     name: "MongoDB",
//     designation: "",
//     image:
//       "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg",
    
//   },
//   {
//     id: 4,
//     name: "JS",
//     designation: "",
//     image:
//       "https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png",
    
//   },
//   {
//     id: 5,
//     name: "HTML",
//     designation: "",
//     image:
//       "https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png",
    
//   },
//   {
//     id: 6,
//     name: "TailwindCSS",
//     designation: "",
//     image:
//       "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    
//   },
//   {
//     id: 7,
//     name: "Github",
//     designation: "",
//     image:
//       "https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png",
    
//   },
//   {
//     id: 8,
//     name: "Git",
//     designation: "",
//     image:
//       "https://git-scm.com/images/logos/logomark-orange@2x.png",
    
//   },
//   {
//     id: 9,
//     name: "Python",
//     designation: "",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGsHD3Es3LoEjFpNd1vmJp1y_ESB_LSMqcKSCSR9i5Q&s",
    
//   },
// ];

// export function AnimatedTooltipPreview() {
//   return (
//     <div>
//         {/* <h1 className="flex flex-row items-center justify-center w-full p-4  mt-10 text-white text-2xl">Skills</h1> */}
//     <div id="skills" className="flex flex-row text-white items-center justify-center  w-full">
//       <AnimatedTooltip items={people} />
//     </div>
//     <BackgroundBeams/>
//     </div>
//   );
// }


"use client";

import { BiLogoPostgresql } from "react-icons/bi";
import { FaAws, FaGit, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiGraphql, SiMongodb, SiNextdotjs, SiPrisma, SiShadcnui } from "react-icons/si";

interface navigationicons{
  id:string
  icon:React.ReactNode,
}

export function AnimatedTooltipPreview() {
  return (
    <div>
      <ul className=" grid gap-2 ">
        <li className=" flex gap-2">
        {skills.map((skill)=>(
           <li className=" text-7xl rounded-xl" key={skill.id}>{skill.icon}</li>
        ))}
        </li>
        
       
      </ul>
    </div>
  )}

const skills:navigationicons[]=[
  {
    id:"1",
    icon:<FaReact className=" text-blue-800" />
  },
  {
    id:"17",
    icon:<SiExpress className=" text-white" />
  },
  {
    id:"16",
    icon:<SiNextdotjs className=" text-white" />
  },
  {
    id:"15",
   icon:<IoLogoJavascript className="  text-yellow-400" />
  },
  {
    id:"14",
    icon:<RiTailwindCssFill className=" text-blue-600" />
  },
  {
    id:"13",
    icon:<FaGit className=" text-red-700" />
  },
  {
    id:"15",
    icon:<SiMongodb  className=" text-green-700" />
  },
  {
    id:"16",
    icon:<FaAws  className=" text-white" />
  },
  {
    id:"17",
    icon:<SiGraphql className=" text-purple-700" />
  },
  {
    id:"18",
    icon:<SiPrisma className=" text-blue-700" />
  }, 
  {
    id:"19",
    icon:<BiLogoPostgresql className=" text-slate-700" />
  },
]


const backskills:navigationicons[]=[
  {
    id:"2",
    icon:<FaReact className=" text-blue-800" />
  },
]