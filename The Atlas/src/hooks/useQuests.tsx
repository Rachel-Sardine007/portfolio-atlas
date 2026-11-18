/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { quests } from '../data/portfolio'

interface QuestContextValue {
  completed: string[]
  completeQuest: (id: string) => void
  resetQuests: () => void
}

const QuestContext = createContext<QuestContextValue | null>(null)
const storageKey = 'the-atlas-completed-quests'

export function QuestProvider({ children }: { children: ReactNode }) {
  const [completed, setCompleted] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(storageKey)
      return stored ? (JSON.parse(stored) as string[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(completed))
  }, [completed])

  const value = useMemo(() => ({
    completed,
    completeQuest: (id: string) => setCompleted((current) => current.includes(id) ? current : [...current, id]),
    resetQuests: () => setCompleted([]),
  }), [completed])

  return <QuestContext.Provider value={value}>{children}</QuestContext.Provider>
}

export function useQuests() {
  const context = useContext(QuestContext)
  if (!context) throw new Error('useQuests must be used within QuestProvider')
  return { ...context, total: quests.length }
}
