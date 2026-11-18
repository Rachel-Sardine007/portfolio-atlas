import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { QuestJournal } from '../quests/QuestJournal'

export function Layout() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main"><Outlet /></main>
      <QuestJournal />
      <footer className="site-footer">
        <span>The Atlas · Mapping ideas into digital experiences.</span>
        <span>Malmö, Sweden · <span className="status-dot" /> Available for opportunities</span>
      </footer>
    </div>
  )
}
