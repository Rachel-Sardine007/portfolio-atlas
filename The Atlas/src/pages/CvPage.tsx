import { useEffect } from 'react'
import { PageIntro } from '../components/ui/PageIntro'
import { education, experience } from '../data/portfolio'
import { useQuests } from '../hooks/useQuests'

export function CvPage() {
  const { completeQuest } = useQuests()
  useEffect(() => completeQuest('journey'), [completeQuest])
  return (
    <div className="page cv-page">
      <PageIntro eyebrow="CV harbor · Professional journey" title={<>Experience across <em>systems and people.</em></>} description="A full-stack developer in training with a background in research, digital commerce, team leadership, and human movement." />
      <div className="cv-actions"><a className="button primary" href="/assets/Tianyu-Shi-CV.pdf" download onClick={() => completeQuest('journey')}>Download CV ↓</a><button className="button quiet" onClick={() => window.print()}>Print this page</button></div>
      <div className="cv-layout">
        <section><span className="eyebrow">Experience</span><div className="timeline">{experience.map((item) => <article key={item.title}><span>{item.type}</span><div><h2>{item.title}</h2>{item.organization && <strong>{item.organization}</strong>}<p>{item.summary}</p></div></article>)}</div></section>
        <aside>
          <section><span className="eyebrow">Education</span>{education.map((item) => <div className="cv-aside-item" key={item.field}><small>{item.degree}</small><strong>{item.field}</strong></div>)}</section>
          <section><span className="eyebrow">Certifications</span><div className="cv-aside-item"><small>Power Pilates</small><strong>Core Mat I & II</strong></div><div className="cv-aside-item"><small>Power Pilates</small><strong>Reformer I & II</strong></div></section>
          <section><span className="eyebrow">Languages</span><div className="language-row"><span>Chinese</span><span>English</span><span>Swedish</span></div></section>
        </aside>
      </div>
    </div>
  )
}
