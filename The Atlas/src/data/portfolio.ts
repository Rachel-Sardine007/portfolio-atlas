import type { Education, Experience, Island, Quest, SkillGroup } from '../types'

export const skillGroups: SkillGroup[] = [
  { title: 'Frontend', description: 'Interfaces that feel clear, responsive, and intentional.', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'React Router', 'Context API', 'Vite'], icon: '◫' },
  { title: 'Backend', description: 'Practical systems for data, identity, and business logic.', skills: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'REST APIs', 'Authentication', 'C#', 'SQL'], icon: '⌘' },
  { title: 'Toolkit', description: 'Tools for shaping, testing, and communicating the work.', skills: ['Git', 'GitHub', 'Figma', 'Thunder Client', 'VS Code'], icon: '✦' },
]

export const islands: Island[] = [
  { id: 'software', name: 'Software Island', subtitle: 'Toolkit & practice', route: '/skills', icon: '⌘', position: { x: 18, y: 21 }, size: 'large', questId: 'toolkit' },
  { id: 'projects', name: 'Projects Archipelago', subtitle: 'Selected builds', route: '/projects', icon: '◈', position: { x: 63, y: 15 }, size: 'large', questId: 'featured-build' },
  { id: 'about', name: 'About Lighthouse', subtitle: 'How I think', route: '/about', icon: '△', position: { x: 44, y: 47 }, size: 'medium', questId: 'thinking' },
  { id: 'movement', name: 'Human Movement', subtitle: 'Systems in motion', route: '/pilates', icon: '∿', position: { x: 75, y: 51 }, size: 'medium', questId: 'movement' },
  { id: 'learning', name: 'Learning Lagoon', subtitle: 'Active quests', route: '/learning', icon: '◇', position: { x: 13, y: 65 }, size: 'small' },
  { id: 'cv', name: 'CV Harbor', subtitle: 'The journey', route: '/cv', icon: '⚓', position: { x: 48, y: 76 }, size: 'medium', questId: 'journey' },
  { id: 'contact', name: 'Contact Port', subtitle: 'Start a conversation', route: '/contact', icon: '↗', position: { x: 82, y: 78 }, size: 'small', questId: 'message' },
]

export const quests: Quest[] = [
  { id: 'toolkit', title: 'Inspect the developer toolkit', description: 'Open the skills field guide.' },
  { id: 'featured-build', title: 'Discover a featured build', description: 'Open the FORMA project.' },
  { id: 'movement', title: 'Explore systems in motion', description: 'Read the movement practice.' },
  { id: 'thinking', title: 'Understand how Rachel thinks', description: 'Open the thinking framework.' },
  { id: 'journey', title: 'Review the journey', description: 'Visit CV Harbor.' },
  { id: 'message', title: 'Send a message', description: 'Successfully submit the contact form.' },
]

// EDIT HERE: Add organizations and dates only when you are ready to publish them.
export const experience: Experience[] = [
  { title: 'Full-stack development studies', summary: 'Building modern web applications across frontend, backend, databases, and APIs.', type: 'Development' },
  { title: 'Classical Pilates Instructor', summary: 'Teaching Mat and Reformer with clear observation, structure, and adaptable communication.', type: 'Movement' },
  { title: 'E-commerce specialist', summary: 'Experience with digital retail, customer journeys, and commercial systems.', type: 'Digital commerce' },
  { title: 'Project work', organization: 'Swedish UN Association', summary: 'Project-based work in an international and civic context.', type: 'Project' },
  { title: 'Research and project experience', summary: 'Structured inquiry, synthesis, and communicating complex material.', type: 'Research' },
  { title: 'Retail and team leadership', summary: 'Customer experience, daily operations, collaboration, and responsibility.', type: 'Leadership' },
]

export const education: Education[] = [
  { degree: 'Programme', field: 'Systemutvecklare' },
  { degree: 'Master of Science', field: 'Human Geography' },
  { degree: 'Bachelor of Science', field: 'Human Geography and Urban Planning' },
]

export const learning = [
  { title: 'TypeScript', status: 72, note: 'Deepening type modelling and reusable patterns' },
  { title: 'Software architecture', status: 48, note: 'Connecting features to maintainable system boundaries' },
  { title: 'Full-stack development', status: 68, note: 'Building complete flows from interface to database' },
  { title: 'AI-assisted development', status: 55, note: 'Using AI critically as part of a thoughtful workflow' },
  { title: 'UX & interface design', status: 62, note: 'Designing clearer paths through complex products' },
  { title: 'Classical Pilates education', status: 74, note: 'Continuing the study of movement systems' },
]
