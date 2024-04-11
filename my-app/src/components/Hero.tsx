"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { AnimatedTooltipPreview } from "./Skills";

export function Hero() {
  return (
    <>
    
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl "
      >
        <p className=" text-16xl">Hi I am Yatharth Srivastava</p><br/><p className=" text-3xl ">A Full Stack Developer </p>
        
      </motion.h1><br></br>
      <br></br>
      
      <AnimatedTooltipPreview/>
    </LampContainer>
    
    
    </>
    
  );
}
