"use client"

import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import { ProjectSection } from "@/components/Projects"
import { Footer, SocialBar } from "@/components/Socials"
import { otherProjects, web3Projects } from "../../data"
import Education from "@/components/Eduactioncard"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6 max-w-5xl"> {/* Changed to max-w-5xl for better layout with 3 columns */}
        <Navbar />

        {/* Main Content */}
        <div className="space-y-12"> {/* Reduced vertical spacing */}
          <Hero />
          <ProjectSection id="web3-projects" title="Web3 Projects" projects={web3Projects} />
          <ProjectSection id="other-projects" title="Other Projects" projects={otherProjects} />
          <Education />
          <Footer />
        </div>
      </div>

      <SocialBar />
    </div>
  )
}