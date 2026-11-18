export interface Project {
  slug: string
  title: string
  eyebrow: string
  description: string
  goal: string
  role: string
  technologies: string[]
  features: string[]
  challenges: string[]
  lessons: string[]
  github?: string
  demo?: string
  status: 'In development' | 'Complete' | 'Coming soon'
  featured: boolean
  visual: string
}

export interface SkillGroup {
  title: string
  description: string
  skills: string[]
  icon: string
}

export interface Island {
  id: string
  name: string
  subtitle: string
  route: string
  icon: string
  position: { x: number; y: number }
  size: 'small' | 'medium' | 'large'
  questId?: string
}

export interface Quest {
  id: string
  title: string
  description: string
}

export interface Experience {
  title: string
  organization?: string
  summary: string
  type: string
}

export interface Education {
  degree: string
  field: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
