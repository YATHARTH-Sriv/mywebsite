"use client";
import React from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-30 flex justify-between items-center p-4", className)}>
      {/* Desktop Navbar */}
      <div className="hidden sm:flex space-x-4 text-sm">
        <Link href="/"><MenuItem setActive={setActive} active={active} item="Home" /></Link>
        <Link href="#about-me"><MenuItem setActive={setActive} active={active} item="About Me" /></Link>
        <Link href="#projects"><MenuItem setActive={setActive} active={active} item="Projects" /></Link>
        <Link href="#socials"><MenuItem setActive={setActive} active={active} item="Social" /></Link>
      </div>
      
      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center space-x-4 text-sm">
        <Link href="/" className="p-2 text-xs">Home</Link>
        <Link href="#about-me" className="p-2 text-xs">About Me</Link>
        <Link href="#projects" className="p-2 text-xs">Projects</Link>
        <Link href="#socials" className="p-2 text-xs">Social</Link>
      </div>
    </div>
  );
}

export default Navbar;
