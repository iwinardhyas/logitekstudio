import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navLinks, site } from '../../data/site.js'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const linkClass = ({ isActive }) =>
    `text-[0.8rem] font-semibold tracking-wide uppercase transition-colors ${
      isActive ? 'text-accent-dark' : 'text-ink hover:text-accent-dark'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" aria-label={`${site.name}, ke beranda`}>
          <img src="/brand/logitek-lockup.svg" alt={site.name} className="h-7 w-auto md:h-8" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button to="/kontak" variant="outline" className="px-5 py-2.5">Hubungi Kami</Button>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-slate-300 text-ink lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open && (
        <nav className="border-t border-slate-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-5 py-6" onClick={close}>
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
            <Button to="/kontak">Hubungi Kami</Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
