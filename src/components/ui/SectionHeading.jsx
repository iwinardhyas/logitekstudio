import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  center = false,
  stacked = false,
  className = 'mb-12',
}) {
  return (
    <Reveal className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <Eyebrow className={`mb-5 ${center ? 'justify-center' : ''}`}>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl leading-tight font-medium tracking-tight text-ink md:text-5xl">
        {title}
        {highlight && (
          <>
            {' '}
            <span className={`font-extrabold text-accent-dark ${stacked ? 'block' : ''}`}>{highlight}</span>
          </>
        )}
      </h2>
      {description && <p className="mt-5 text-lg text-slate-600">{description}</p>}
    </Reveal>
  )
}
