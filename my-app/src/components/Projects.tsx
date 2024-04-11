"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Link from "next/link";

const content = [
  {
    title: "Blog-App ",
    description:
      "A blog app where users can signup , login to see all posts done by other users also add thier own posts update or delete it. with concepts like react hook form and real time text editors it provides various functionalities ",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#00bcd4,#10B981)] flex items-center justify-center text-white">
        <Link href={"https://yatharth-blogapp.vercel.app/"}>Blog-App</Link>
      </div>
    ),
  },
  {
    title: "Redux TODO",
    description:
      " An everyday app for all your tasks , this TODO app uses local storage of your browser so that your progress is not lost, to understand concepts of redux toolkit and context Api this is the best projects to understand these complex concepts",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#FFA500,#FFD700)] flex items-center justify-center text-white">
        <Link href={"https://yatharth-todo.vercel.app/"}>Todo</Link>
      </div>
    ),
  },
  
];
export function Projects() {
  return (
    <div >
       <h1 className="flex flex-row items-center justify-center mb-10 w-full p-4 mt-8 text-white text-4xl">Projects</h1>
    <div id="projects" className="p-10">
      <StickyScroll content={content} />
    </div>

    </div>
  );
}
