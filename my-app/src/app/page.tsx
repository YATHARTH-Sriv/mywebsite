import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import {  Projects} from "@/components/Projects";
import { AnimatedTooltipPreview } from "@/components/Skills";
import Socials from "@/components/Socials";

import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <Hero/>
    <About/>
    <Projects/>
    <Socials/>
    </>
  );
}
