import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import { ArrowIcon } from '../ui/Icons'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card visual-${project.visual}`}>
      <div className="project-visual" aria-hidden="true">
        <span className="visual-grid" />
        <span className="project-monogram">{project.title.slice(0, 2)}</span>
        <span className="visual-orbit" />
      </div>
      <div className="project-card-body">
        <div className="card-meta"><span>{project.eyebrow}</span><span className={`status status-${project.status.replace(' ', '-').toLowerCase()}`}>{project.status}</span></div>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="tag-list">{project.technologies.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
        <Link to={`/projects/${project.slug}`} className="text-link">View field notes <ArrowIcon /></Link>
      </div>
    </article>
  )
}
