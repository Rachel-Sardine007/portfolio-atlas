import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  description: string
  back?: string
}

export function PageIntro({ eyebrow, title, description, back = '/' }: PageIntroProps) {
  return (
    <header className="page-intro">
      <Link className="back-link" to={back}>← Back to {back === '/' ? 'map' : 'projects'}</Link>
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  )
}
