import { useEffect } from 'react'
import { PageIntro } from '../components/ui/PageIntro'
import { useQuests } from '../hooks/useQuests'

export function PilatesPage() {
  const { completeQuest } = useQuests()
  useEffect(() => completeQuest('movement'), [completeQuest])

  return (
    <div className="page movement-page">
      <PageIntro eyebrow="Human movement island · Parallel practice" title={<>Systems in motion. <em>Precision with purpose.</em></>} description="Teaching movement has strengthened my ability to observe patterns, communicate clearly, and adapt complex instructions to different people." />
      <section className="movement-visual" aria-label="A visual metaphor connecting movement and software systems">
        <div className="movement-orbit"><span /><i /><b /></div>
        <div className="movement-statement"><span className="eyebrow">The shared principle</span><h2>Structure creates freedom.</h2><p>Whether guiding a movement sequence or designing a software flow, the underlying structure should support the person using it — not ask them to think about the structure itself.</p></div>
      </section>
      <section className="credential-grid">
        <article><span>01</span><h2>Classical Pilates Instructor</h2><p>Experience teaching both Mat and Reformer with a focus on control, body awareness, and clear progression.</p></article>
        <article><span>02</span><h2>Power Pilates</h2><p>Core Mat I & II<br />Reformer I & II</p></article>
        <article><span>03</span><h2>Transferable practice</h2><p>Observation, adaptable communication, pattern recognition, and breaking complex systems into understandable steps.</p></article>
      </section>
    </div>
  )
}
