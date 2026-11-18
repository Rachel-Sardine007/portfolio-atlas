import { PageIntro } from '../components/ui/PageIntro'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

export function ProjectsPage() {
  return (
    <div className="page">
      <PageIntro eyebrow="Projects archipelago · 04 builds" title={<>Selected work, <em>charted.</em></>} description="Full-stack builds and ongoing experiments, documented with the thinking behind the interface." />
      <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
    </div>
  )
}
