import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CloseIcon, CompassIcon, MenuIcon, MoonIcon } from '../ui/Icons'

const links = [
  ['Map', '/'], ['Projects', '/projects'], ['Skills', '/skills'],
  ['About', '/about'], ['CV', '/cv'], ['Contact', '/contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => localStorage.getItem('atlas-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('atlas-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="The Atlas home">
        <span className="brand-mark"><CompassIcon /></span>
        <span><strong>The Atlas</strong><small>Rachel · Full-stack developer</small></span>
      </Link>
      <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {links.map(([label, route]) => <NavLink key={route} to={route} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={() => setDark((value) => !value)} aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}><MoonIcon /></button>
        <button className="icon-button menu-button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle menu">{open ? <CloseIcon /> : <MenuIcon />}</button>
      </div>
    </header>
  )
}
