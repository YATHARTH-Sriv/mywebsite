import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const Hero = () => {
  const skills = [
    "React", 
    "Next.js", 
    "TypeScript", 
    "Node.js", 
    "Rust", 
    "MongoDB",
    "Postgres",
    "LLM",
    "Solana"
  ]

  return (
    <section id="about" className="space-y-6"> {/* Reduced spacing */}
      <div className="flex flex-col md:flex-row gap-6 items-start"> {/* Reduced gap */}
        <Avatar className="w-20 h-20 border-2 border-white/10"> {/* Slightly smaller avatar */}
          <Image src="/my.jpg" alt="Yatharth" width={80} height={80} />
        </Avatar>
        <div className="space-y-3"> {/* Reduced spacing */}
          <div>
            <h1 className="text-3xl font-bold mb-1">Hi, I'm Yatharth</h1> {/* Slightly smaller heading */}
            <h2 className="text-lg text-gray-400">Full Stack Web3 Developer</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs py-0"> {/* Smaller badges */}
                {skill}
              </Badge>
            ))}
          </div>
          <p className="text-gray-300 text-sm max-w-2xl leading-relaxed"> {/* Smaller text with better line height */}
            I'm a Developer specializing in Solana ecosystem development. I build end-to-end projects from concept to deployment with a focus on blockchain integration, smart contracts, and responsive web applications.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero