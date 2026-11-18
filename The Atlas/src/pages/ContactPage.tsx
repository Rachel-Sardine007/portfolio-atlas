import { useState, type FormEvent } from 'react'
import { PageIntro } from '../components/ui/PageIntro'
import { useQuests } from '../hooks/useQuests'
import type { ContactFormData } from '../types'

const initialData: ContactFormData = { name: '', email: '', message: '' }

export function ContactPage() {
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const { completeQuest } = useQuests()

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors: Partial<ContactFormData> = {}
    if (data.name.trim().length < 2) nextErrors.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) nextErrors.email = 'Please enter a valid email.'
    if (data.message.trim().length < 10) nextErrors.message = 'Please add a little more detail (at least 10 characters).'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) { setStatus('error'); return }
    setStatus('sending')
    // EDIT HERE: Replace this mock delay with Formspree, Resend, or your own API.
    window.setTimeout(() => { setStatus('success'); setData(initialData); completeQuest('message') }, 700)
  }

  return (
    <div className="page contact-page">
      <PageIntro eyebrow="Contact port · Malmö, Sweden" title={<>Let's chart something <em>worth building.</em></>} description="Have an opportunity, a project, or just a good question? Send a signal — I'd be glad to hear from you." />
      <div className="contact-layout">
        <aside>
          <span className="availability"><i /> Available for opportunities</span>
          <h2>Open to thoughtful teams and meaningful challenges.</h2>
          <p>I'm especially interested in full-stack roles where curiosity, careful communication, and a systems view are valued.</p>
          <div className="contact-links">
            {/* EDIT HERE: Replace placeholder destinations with real profile URLs and email. */}
            <a href="mailto:hello@example.com"><span>Email</span><strong>hello@example.com</strong></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>Connect ↗</strong></a>
            <a href="https://github.com" target="_blank" rel="noreferrer"><span>GitHub</span><strong>View code ↗</strong></a>
          </div>
        </aside>
        <form onSubmit={submit} noValidate>
          <span className="eyebrow">Send a message</span>
          <label>Name<input value={data.name} onChange={(event) => setData({ ...data, name: event.target.value })} aria-invalid={Boolean(errors.name)} aria-describedby="name-error" placeholder="Your name" />{errors.name && <small id="name-error" className="field-error">{errors.name}</small>}</label>
          <label>Email<input type="email" value={data.email} onChange={(event) => setData({ ...data, email: event.target.value })} aria-invalid={Boolean(errors.email)} aria-describedby="email-error" placeholder="you@example.com" />{errors.email && <small id="email-error" className="field-error">{errors.email}</small>}</label>
          <label>Message<textarea rows={6} value={data.message} onChange={(event) => setData({ ...data, message: event.target.value })} aria-invalid={Boolean(errors.message)} aria-describedby="message-error" placeholder="Tell me a little about the opportunity or idea…" />{errors.message && <small id="message-error" className="field-error">{errors.message}</small>}</label>
          <button className="button primary" disabled={status === 'sending'}>{status === 'sending' ? 'Sending signal…' : 'Send message ↗'}</button>
          <div aria-live="polite">{status === 'success' && <p className="form-success">Signal received. Thanks — I'll be in touch.</p>}{status === 'error' && <p className="form-error">Check the marked fields and try again.</p>}</div>
        </form>
      </div>
    </div>
  )
}
