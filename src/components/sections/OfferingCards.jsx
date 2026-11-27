import { Link } from 'react-router-dom'
import { offerings } from '../../data/home.js'
import Container from '../ui/Container.jsx'
import Media from '../ui/Media.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function OfferingCards() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading center title="Jelajahi Layanan dan Solusi Kami" highlight="untuk Kebutuhan Digital Anda" stacked />
        <div className="grid gap-6 md:grid-cols-2">
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 100}>
              <Link
                to={o.to}
                className="group flex h-full flex-col rounded-lg bg-surface p-7 transition-colors duration-500 hover:bg-navy md:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-sm border border-slate-400 px-4 py-2 text-sm font-medium tracking-wide text-ink uppercase transition-colors group-hover:border-white/50 group-hover:text-white">
                    Layanan Kami
                  </span>
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 place-items-center rounded-sm border border-slate-300 text-ink transition-colors group-hover:border-white/50 group-hover:text-accent-light"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M9 7h8v8" />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-2xl font-bold text-ink transition-colors group-hover:text-white md:text-3xl">{o.title}</h3>
                <p className="mt-4 text-slate-600 transition-colors group-hover:text-slate-300">{o.text}</p>
                <Media
                  src={o.image}
                  alt={o.title}
                  tone={i % 2 ? 'teal' : 'navy'}
                  className="mt-8 aspect-[16/8] rounded-md"
                  imgClassName="transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
