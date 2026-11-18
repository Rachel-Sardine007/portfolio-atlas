import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { useQuests } from '../hooks/useQuests'
import { PageIntro } from '../components/ui/PageIntro'
import { ArrowIcon } from '../components/ui/Icons'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const { completeQuest } = useQuests()

  useEffect(() => {
    if (slug === 'forma') completeQuest('featured-build')
  }, [slug, completeQuest])

  if (!project) return <Navigate to="/projects" replace />

  return (
    <div className="page project-detail">
      <PageIntro back="/projects" eyebrow={`${project.eyebrow} · ${project.status}`} title={<>{project.title}<em>.</em></>} description={project.description} />
      <div className={`case-hero visual-${project.visual}`}>
        <div className="browser-chrome"><span /><span /><span /><i>{project.title.toLowerCase()}.fieldnotes</i></div>
        <div className="case-display"><span>{project.title}</span><small>{project.role}</small></div>
      </div>
      <div className="case-layout">
        <aside>
          <div><span className="eyebrow">Role</span><strong>{project.role}</strong></div>
          <div><span className="eyebrow">Status</span><strong>{project.status}</strong></div>
          <div><span className="eyebrow">Stack</span><div className="tag-list">{project.technologies.map((item) => <span key={item}>{item}</span>)}</div></div>
          {project.github || project.demo ? <div className="case-links">{project.github && <a href={project.github}>GitHub ↗</a>}{project.demo && <a href={project.demo}>Live demo ↗</a>}</div> : <small className="muted">Repository and live demo links will be added here.</small>}
        </aside>
        <article className="case-content">
          <section><span className="number-label">01 · The brief</span><h2>Problem & goal</h2><p>{project.goal}</p></section>
          <section><span className="number-label">02 · The build</span><h2>Key features</h2><div className="feature-list">{project.features.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong></div>)}</div></section>
          <section><span className="number-label">03 · Below deck</span><h2>Technical challenges</h2><ul className="editorial-list">{project.challenges.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section><span className="number-label">04 · Field notes</span><h2>Lessons learned</h2><ul className="editorial-list">{project.lessons.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <Link className="button primary" to="/projects">Explore all projects <ArrowIcon /></Link>
        </article>
      </div>
    </div>
  )
}
