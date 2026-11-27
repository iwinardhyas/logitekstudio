export default function Eyebrow({ children, light = false, className = '' }) {
  return (
    <p className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-wider ${light ? 'text-white' : 'text-ink'} ${className}`}>
      <span aria-hidden="true" className={`grid h-5 w-5 place-items-center rounded-full border ${light ? 'border-white/40' : 'border-accent/40'}`}>
        <span className={`h-2.5 w-2.5 rounded-full ${light ? 'bg-accent-light' : 'bg-accent'}`} />
      </span>
      {children}
    </p>
  )
}
