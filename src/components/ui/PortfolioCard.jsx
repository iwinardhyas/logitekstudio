import { Link } from 'react-router-dom'

export default function PortfolioCard({ item }) {
  return (
    <Link to={`/portfolio/${item.slug}`} className="group block">
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-400">Gambar project</div>
        )}
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-accent-dark">{item.category}</p>
      <h3 className="mt-1 text-lg font-semibold text-ink group-hover:text-accent-dark">{item.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
    </Link>
  )
}
