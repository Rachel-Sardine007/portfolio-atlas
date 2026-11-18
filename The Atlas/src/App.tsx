import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { QuestProvider } from './hooks/useQuests'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { CvPage } from './pages/CvPage'
import { HomePage } from './pages/HomePage'
import { LearningPage } from './pages/LearningPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PilatesPage } from './pages/PilatesPage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { SkillsPage } from './pages/SkillsPage'

export default function App() {
  return (
    <BrowserRouter><QuestProvider><Routes><Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/pilates" element={<PilatesPage />} />
      <Route path="/learning" element={<LearningPage />} />
      <Route path="/cv" element={<CvPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route></Routes></QuestProvider></BrowserRouter>
  )
}
