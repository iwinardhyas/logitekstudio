import Container from './Container.jsx'

export default function PageHeader({ title, description }) {
  return (
    <section className="bg-navy py-16 md:py-20">
      <Container>
        <h1 className="text-4xl font-extrabold tracking-tight text-white motion-safe:animate-fade-up md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-slate-300 motion-safe:animate-fade-up [animation-delay:150ms]">
            {description}
          </p>
        )}
      </Container>
    </section>
  )
}
