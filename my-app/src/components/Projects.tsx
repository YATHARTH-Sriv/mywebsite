import ProjectCard from "./Projectcard"

interface Project {
  id: number
  title: string
  image: string
  technologies: string
  content: string
  demoUrl?: string
  codeUrl?: string
}

interface ProjectSectionProps {
  id: string
  title: string
  projects: Project[]
}

const ProjectSection = ({ id, title, projects }: ProjectSectionProps) => {
  return (
    <section id={id} className="space-y-6">
      <h2 className="text-2xl font-bold mb-6 border-b border-zinc-800 pb-2">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            technologies={project.technologies}
            content={project.content}
            demoUrl={project.demoUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </section>
  )
}

export { ProjectSection }