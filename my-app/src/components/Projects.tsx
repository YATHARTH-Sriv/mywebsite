 "use client";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Projects() {
  return (
    <div id="projects"className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Social Media(Twitter)",
    description:
      "A Social Media App where users can share their opinions and photos with each other just like twitter this uses AWS S3 bucket for image storage  ",
    link: "https://yatharth-twitter.vercel.app/",
  },
  {
    title: "Blog-App",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://yatharth-blogapp.vercel.app/",
  },
  {
    title: "Music School",
    description:
      "A academy website where users can sign up and select courses which they want to learn , with NextJS Auth and appwrite used for database it looks great and great ui",
    link: "https://yatharthacademy.vercel.app/",
  },
  {
    title: "Redux TODO",
    description:
      "An everyday app for all your tasks , this TODO app uses local storage of your browser so that your progress is not lost, to understand concepts of redux toolkit and context Api this is the best projects to understand these complex concepts",
    link: "https://yatharth-todo.vercel.app/",
  },
];


