import { useEffect, useState } from 'react'
import { heroImage, heroSlides } from '../../data/home.js'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'

const AUTOPLAY_MS = 7000
const WORD_STAGGER_MS = 70

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Words({ text, startDelay = 0 }) {
  return text.split(' ').map((word, i) => (
    <span
      key={i}
      className="inline-block motion-safe:animate-word-in"
      style={{ animationDelay: `${startDelay + i * WORD_STAGGER_MS}ms` }}
    >
      {word}&nbsp;
    </span>
  ))
}

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [autoplay] = useState(() => !prefersReducedMotion())
  const total = heroSlides.length
  const slide = heroSlides[index]
  const subtitleDelay = slide.title.split(' ').length * WORD_STAGGER_MS + 150

  const go = (step) => setIndex((i) => (i + step + total) % total)

  useEffect(() => {
    if (!autoplay || paused) return
    const id = setTimeout(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearTimeout(id)
  }, [index, paused, autoplay, total])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Sorotan utama"
      className="relative overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-bottom opacity-70"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-grain opacity-20 mix-blend-multiply" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-white via-white/85 to-white/10" />

      <Container className="relative flex min-h-[min(calc(100svh-5rem),54rem)] flex-col justify-center pt-16 pb-40">
        <h1 key={index} className="max-w-4xl text-4xl leading-[1.12] tracking-tight sm:text-5xl md:text-7xl">
          <span className="font-extrabold text-navy">
            <Words text={slide.title} />
          </span>
          <span
            aria-hidden="true"
            className="mr-4 inline-block h-[0.1em] w-[0.5em] bg-accent motion-safe:animate-blink"
          />
          <span className="block font-normal text-slate-500">
            <Words text={slide.subtitle} startDelay={subtitleDelay} />
          </span>
        </h1>
        <div className="mt-10 motion-safe:animate-fade-up [animation-delay:900ms]">
          <Button to="/kontak">Konsultasi Gratis</Button>
        </div>
      </Container>

      <div className="absolute right-0 bottom-0 left-0">
        <Container className="flex justify-end">
          <div className="flex items-center gap-4 rounded-t-lg bg-white p-4 pl-7 shadow-[0_-8px_30px_rgba(15,23,42,0.06)] md:gap-5 md:p-5 md:pl-9">
            <div className="mr-2 w-16">
              <p className="text-3xl font-medium tabular-nums text-ink md:text-4xl" aria-live="polite">
                <span className="sr-only">Slide </span>
                {String(index + 1).padStart(2, '0')}
                <span className="sr-only"> dari {total}</span>
              </p>
              <div aria-hidden="true" className="mt-2 h-0.5 w-full overflow-hidden bg-slate-200">
                {autoplay && (
                  <div
                    key={index}
                    className="h-full origin-left bg-accent"
                    style={{
                      animation: `progress ${AUTOPLAY_MS}ms linear forwards`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                )}
              </div>
            </div>
            {[
              { step: -1, label: 'Slide sebelumnya', d: 'M15 6l-6 6 6 6' },
              { step: 1, label: 'Slide berikutnya', d: 'M9 6l6 6-6 6' },
            ].map(({ step, label, d }) => (
              <button
                key={step}
                type="button"
                aria-label={label}
                onClick={() => go(step)}
                className="grid h-12 w-12 place-items-center rounded-md border border-slate-300 text-ink transition-colors hover:border-accent hover:text-accent-dark md:h-14 md:w-14"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={d} />
                </svg>
              </button>
            ))}
          </div>
        </Container>
      </div>
    </section>
  )
}
