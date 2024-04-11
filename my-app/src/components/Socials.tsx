"use client";
import React from "react";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Github",
    designation: "",
    image:
      "https://i.pinimg.com/originals/b5/1b/78/b51b78ecc9e5711274931774e433b5e6.png",
  },
  {
    id: 2,
    name: "Twitter",
    designation: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png",
  },
  {
    id: 3,
    name: "Linkedin",
    designation: "",
    image:
      "https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png",
  },
  {
    id: 4,
    name: "instagram",
    designation: "",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png",
  },
  {
    id: 5,
    name: "peerlist",
    designation: "",
    image:
      "https://logowik.com/content/uploads/images/peerlist11139.logowik.com.webp",
  },

];

export function Socials() {
  return (
    <div >
      <h1 className=" flex flex-row items-center justify-center mb-10 w-full text-4xl text-white p-4">Connect With Me</h1>
    <div id="socials" className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    
    </div>
  );
}
