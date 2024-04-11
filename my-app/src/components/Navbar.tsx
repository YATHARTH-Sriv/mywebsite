"use client";
import React, { useState } from "react";
import {  Menu, MenuItem,  } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (

    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-30 hidden sm:block", className)}
    >
      
      <Menu setActive={setActive}>
        <Link href={"/"}><MenuItem setActive={setActive} active={active} item="Home"></MenuItem></Link>
        <Link href={"#about-me"}><MenuItem setActive={setActive} active={active} item="About Me"></MenuItem></Link>
        <Link  href={"#projects"} scroll={true}><MenuItem setActive={setActive} active={active} item="Projects"></MenuItem></Link>
        <Link href={"#socials"}><MenuItem setActive={setActive} active={active} item="Social"></MenuItem></Link>
      </Menu>
    </div>
  );
}

export default Navbar
