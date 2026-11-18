import { useEffect } from 'react'
import { PageIntro } from '../components/ui/PageIntro'
import { skillGroups } from '../data/portfolio'
import { useQuests } from '../hooks/useQuests'

export function SkillsPage() {
  const { completeQuest } = useQuests()
  useEffect(() => completeQuest('toolkit'), [completeQuest])

  return (
    <div className="page">
      <PageIntro eyebrow="Software island · Developer toolkit" title={<>Tools for building <em>thoughtful systems.</em></>} description="A growing full-stack toolkit, organised by where each piece contributes to the wider system." />
      <div className="skill-grid">
        {skillGroups.map((group, index) => <article className="skill-card" key={group.title}><span className="skill-index">0{index + 1}</span><span className="skill-icon">{group.icon}</span><h2>{group.title}</h2><p>{group.description}</p><div className="skill-cloud">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}
      </div>
      <section className="architecture-note"><span className="eyebrow">Technical north star</span><h2>From isolated features to coherent systems.</h2><p>I'm especially interested in software architecture: how data models, interfaces, APIs, and user needs connect — and how those relationships can stay understandable as a product grows.</p></section>
    </div>
  )
}
