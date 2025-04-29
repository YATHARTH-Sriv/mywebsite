import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  image: string
  technologies: string
  content: string
  demoUrl?: string
  codeUrl?: string
}

const ProjectCard = ({ 
  title,  
  image, 
  technologies, 
  content,
  demoUrl = "#",
  codeUrl = "#"
}: ProjectCardProps) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
      <div className="h-48 w-full relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-gray-400">{technologies}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{content}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" /> Live Demo
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-1" asChild>
          <a href={codeUrl} target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" /> Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard