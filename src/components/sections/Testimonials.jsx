import { testimonials } from '../../data/testimonials.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'

const visible = testimonials.filter((t) => !t.draft || import.meta.env.DEV)

const initials = (name) =>
  name
    .replace(/^(Ibu|Bu|Bapak|Pak|Mbak|Mas|Kak)\s+/i, '')
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

export default function Testimonials() {
  if (!visible.length) return null

  return (
    <section className="py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimoni"
          title="Dipercaya Pelaku"
          highlight="UMKM Lokal"
          description="Cerita dari pemilik usaha yang kini mengelola pekerjaannya lewat aplikasi."
          center
        />
        <div className="grid gap-6 md:grid-cols-3">
          {visible.map((t, i) => (
            <Reveal key={t.business} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-7">
                <svg aria-hidden="true" width="32" height="32" viewBox="0 0 32 32" className="text-accent">
                  <path
                    fill="currentColor"
                    d="M13 8C7.5 9.6 4 13.8 4 19.5 4 23 6.2 25 9 25c2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.4.4-2.6 2.3-4.7 5-5.8L13 8zm15 0c-5.5 1.6-9 5.8-9 11.5 0 3.5 2.2 5.5 5 5.5 2.6 0 4.5-1.9 4.5-4.4 0-2.4-1.7-4.2-4-4.4.4-2.6 2.3-4.7 5-5.8L28 8z"
                  />
                </svg>
                <blockquote className="mt-4 flex-1 leading-relaxed text-slate-700">{t.quote}</blockquote>
                {t.result && (
                  <p className="mt-6 flex items-start gap-2 rounded-md bg-accent-soft/50 px-4 py-3 text-sm font-medium text-accent-darker">
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mt-px shrink-0">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {t.result}
                  </p>
                )}
                <figcaption className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-6">
                  {t.photo ? (
                    <img src={t.photo} alt="" className="h-12 w-12 shrink-0 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden="true" className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">
                      {initials(t.name)}
                    </span>
                  )}
                  <div>
                    <p className="font-semibold text-ink">
                      {t.name} <span className="font-normal text-slate-500">· {t.business}</span>
                    </p>
                    <p className="text-sm text-slate-500">
                      {t.type}, {t.city}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
