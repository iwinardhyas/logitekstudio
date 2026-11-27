import { Link } from 'react-router-dom'
import { navLinks, site } from '../../data/site.js'
import { services } from '../../data/services.js'
import Container from '../ui/Container.jsx'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-navy text-slate-400">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <img src="/brand/logitek-lockup-gelap.svg" alt={site.name} className="h-8 w-auto" />
          <p className="mt-5 max-w-sm text-sm">{site.description}</p>
          <p className="mt-4 text-sm">{site.address}</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Navigasi</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white">Layanan</p>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/layanan/${s.slug}`} className="hover:text-white">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.legalName}. Hak cipta dilindungi.</p>
          <div className="flex gap-5">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  )
}
