import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../../data/services.js'
import Container from '../ui/Container.jsx'
import Media from '../ui/Media.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

export default function SolutionsAccordion() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Solusi Kami" title="Mengubah Pekerjaan Lapangan Menjadi" highlight="Sistem Digital" />

        <Reveal className="flex flex-col gap-4 lg:h-[32rem] lg:flex-row">
          {services.map((s, i) => {
            const isActive = i === active
            const dark = Boolean(s.image) || s.tone !== 'light'

            return (
              <article
                key={s.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`relative min-h-[24rem] overflow-hidden rounded-lg transition-[flex-grow] duration-700 ease-[cubic-bezier(0.2,0.7,0.2,1)] lg:min-h-0 ${
                  isActive ? 'lg:flex-[2.5]' : 'lg:flex-1'
                } ${dark ? 'text-white' : 'text-ink'}`}
              >
                <Media src={s.image} alt={s.title} tone={s.tone} fill />
                {s.image && (
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                )}

                <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
                  <h3 className="text-[1.65rem] leading-tight md:text-3xl">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="text-left outline-none focus-visible:underline"
                    >
                      <span className="block font-normal opacity-80">{s.lead}</span>
                      <span className="block font-extrabold">{s.emphasis}</span>
                    </button>
                  </h3>

                  <div key={isActive} className={isActive ? 'motion-safe:lg:animate-fade-up' : 'lg:hidden'}>
                    <p className={`mt-5 max-w-sm text-[0.95rem] leading-relaxed ${dark ? 'text-slate-200' : 'text-slate-600'}`}>
                      {s.description}
                    </p>
                    <Link
                      to={`/layanan/${s.slug}`}
                      className={`mt-6 inline-flex items-center gap-2 rounded-md border px-5 py-3 text-sm font-semibold tracking-wide uppercase transition-colors ${
                        dark
                          ? 'border-white/50 hover:border-accent-light hover:text-accent-light'
                          : 'border-slate-400 hover:border-accent hover:text-accent-dark'
                      }`}
                    >
                      Selengkapnya
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </Reveal>
      </Container>
    </section>
  )
}
