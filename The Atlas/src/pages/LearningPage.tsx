import { PageIntro } from '../components/ui/PageIntro'
import { learning } from '../data/portfolio'

export function LearningPage() {
  return (
    <div className="page">
      <PageIntro eyebrow="Learning lagoon · Active quests" title={<>Curiosity, <em>made visible.</em></>} description="A lightweight log of the areas I'm actively exploring. Progress is directional, not a claim of mastery." />
      <div className="learning-list">{learning.map((item, index) => <article key={item.title}><div className="learning-number">0{index + 1}</div><div><h2>{item.title}</h2><p>{item.note}</p></div><div className="progress-wrap"><span><i style={{ width: `${item.status}%` }} /></span><small>{item.status}% · In progress</small></div></article>)}</div>
    </div>
  )
}
