import { useEffect, useState } from 'react'
import { bannerImage, rotatingWords } from '../../data/home.js'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'

const ROTATE_MS = 2600

export default function RotatingBanner() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % rotatingWords.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-accent-soft/50 py-28 md:py-44">
      {bannerImage ? (
        <img
          src={bannerImage}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 hidden h-[80%] w-auto max-w-[50%] object-contain object-right-bottom md:block"
        />
      ) : (
        <img
          src="/brand/logitek-mark.svg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -bottom-10 hidden w-[42rem] opacity-[0.07] md:block"
        />
      )}

      <Container className="relative">
        <Reveal>
          <p className="max-w-4xl text-2xl font-normal tracking-tight text-ink md:text-5xl md:leading-tight">
            Bersama Kami, Pekerjaan Lapangan Bisa Didigitalkan untuk
          </p>
          <p className="mt-3 text-5xl font-extrabold tracking-tight text-navy md:mt-6 md:text-8xl">
            <span className="sr-only">{rotatingWords.join(', ')}</span>
            <span aria-hidden="true" key={index} className="inline-block motion-safe:animate-word-swap">
              {rotatingWords[index]}
            </span>
            <span aria-hidden="true" className="ml-3 inline-block h-[0.1em] w-[0.5em] bg-accent motion-safe:animate-blink" />
          </p>
        </Reveal>
      </Container>
    </section>
  )
}
