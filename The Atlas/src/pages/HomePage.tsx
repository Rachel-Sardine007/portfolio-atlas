import { Link } from 'react-router-dom'
import { OceanMap } from '../components/map/OceanMap'
import { ArrowIcon } from '../components/ui/Icons'
import { projects } from '../data/projects'

export function HomePage() {
  const featured = projects.find((project) => project.featured)!
  return (
    <>
      <section className="home-hero">
        {/* <div className="hero-copy">
          <span className="eyebrow">Portfolio expedition · Malmö, Sweden</span>
          <h1>Mapping ideas into <em>digital experiences.</em></h1>
          <p>I'm Rachel — a full-stack developer who uses systems thinking, spatial understanding, and a steady curiosity to build thoughtful software.</p>
          <div className="hero-actions"><Link className="button primary" to="/projects">Explore my work <ArrowIcon /></Link><Link className="button quiet" to="/about">Meet the navigator</Link></div>
          <div className="hero-proof"><span><strong>Full-stack</strong><small>Primary direction</small></span><span><strong>Systems</strong><small>Way of thinking</small></span><span><strong>Human</strong><small>Way of designing</small></span></div>
        </div> */}
        <div className="hero-note">
          <p>Hi there! I'm Tianyu / Rachel — a full-stack developer who uses systems thinking, spatial understanding, and a steady curiosity to build thoughtful software.</p>
          <span className="note-pin">✦</span><span className="eyebrow">Current coordinates</span>
          <h2>Building at the intersection of logic and lived experience.</h2>
          <p>This atlas is a playful way into the work. Every destination also has a direct route — because exploration should never get in the way of clarity.</p>
          <span className="coordinates">55.6050° N · 13.0038° E</span>
        </div>
      </section>
      <section className="map-section">
        <div className="section-heading"><div><span className="eyebrow">Choose a destination</span><h2>The portfolio map</h2></div><p>Select an island to chart a route, or use the main navigation for direct access.</p></div>
        <OceanMap />
      </section>
      {/* <section className="home-feature">
        <div className="feature-index">01</div>
        <div><span className="eyebrow">Featured build</span><h2>{featured.title} — Pilates commerce, considered end to end.</h2></div>
        <p>{featured.description}</p>
        <Link className="button dark" to="/projects/forma">Read the case study <ArrowIcon /></Link>
      </section> */}
    </>
  )
}
