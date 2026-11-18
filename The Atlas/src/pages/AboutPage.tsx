import { useEffect } from 'react'
import { PageIntro } from '../components/ui/PageIntro'
import { useQuests } from '../hooks/useQuests'

const thinking = [
  ['01', 'Human Geography', 'Taught me to see systems and relationships.'],
  ['02', 'Systems thinking', 'Helps me make complexity understandable.'],
  ['03', 'Spatial thinking', 'Helps me build strong mental models.'],
  ['04', 'Pattern recognition', 'Helps me connect ideas across disciplines.'],
]

export function AboutPage() {
  const { completeQuest } = useQuests()
  useEffect(() => completeQuest('thinking'), [completeQuest])

  return (
    <div className="page">
      <PageIntro eyebrow="About lighthouse · The navigator" title={<>Continuous learning is the <em>through line.</em></>} description="From Human Geography to full-stack development and Classical Pilates, each experience has shaped not only what I do, but how I think." />
      <section className="thinking-framework">
        <div className="framework-intro"><span className="eyebrow">How I think</span><h2>Four lenses. One connected approach.</h2><p>I use these lenses to move from an unfamiliar problem toward a clear, grounded solution.</p></div>
        <div className="thinking-grid">{thinking.map(([number, title, description]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="framework-output"><span>These lead toward</span><strong>Software development</strong><i>+</i><strong>Human movement</strong><i>+</i><strong>Thoughtful problem solving</strong></div>
      </section>
      <section className="about-balance">
        <div><span className="eyebrow">Primary direction</span><h2>Building software that makes complex things feel simpler.</h2></div>
        <p>Today, I apply this interdisciplinary mindset primarily to full-stack development. Human Geography is one influence on how I see connections; teaching movement is one way I practise observation and communication. Software is where those strengths converge.</p>
      </section>
    </div>
  )
}
