import { useState } from 'react'
import { quests } from '../../data/portfolio'
import { useQuests } from '../../hooks/useQuests'

export function QuestJournal() {
  const { completed, resetQuests } = useQuests()
  const [open, setOpen] = useState(false)
  const percentage = Math.round((completed.length / quests.length) * 100)

  return (
    <aside className={open ? 'quest-journal is-open' : 'quest-journal'} aria-label="Explorer journal">
      <button className="journal-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open}>
        <span className="journal-compass">✦</span>
        <span className="journal-label"><small>Explorer journal</small><strong>{completed.length} / {quests.length} quests</strong></span>
        <span className="journal-ring" style={{ '--progress': `${percentage * 3.6}deg` } as React.CSSProperties}>{percentage}%</span>
      </button>
      {open && (
        <div className="journal-panel">
          <div className="journal-heading"><div><span className="eyebrow">Captain's log</span><h2>Map progress</h2></div><button onClick={resetQuests}>Reset</button></div>
          <div className="quest-list">
            {quests.map((quest) => <div className={completed.includes(quest.id) ? 'quest done' : 'quest'} key={quest.id}><span>{completed.includes(quest.id) ? '✓' : '○'}</span><div><strong>{quest.title}</strong><small>{quest.description}</small></div></div>)}
          </div>
        </div>
      )}
    </aside>
  )
}
