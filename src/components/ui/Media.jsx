const placeholders = {
  light: 'bg-gradient-to-br from-white via-surface to-slate-300/70',
  navy: 'bg-navy bg-[radial-gradient(circle_at_70%_20%,rgba(45,212,191,0.35),transparent_55%)]',
  teal: 'bg-accent-dark bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]',
}

export default function Media({ src, alt = '', tone = 'light', fill = false, className = '', imgClassName = '' }) {
  const position = fill ? 'absolute inset-0' : 'relative'

  if (src) {
    return (
      <div className={`${position} overflow-hidden ${className}`}>
        <img src={src} alt={alt} loading="lazy" className={`h-full w-full object-cover ${imgClassName}`} />
      </div>
    )
  }

  return (
    <div aria-hidden="true" className={`${position} overflow-hidden ${placeholders[tone]} ${className}`}>
      <img
        src="/brand/logitek-mark.svg"
        alt=""
        className={`absolute -right-[8%] -bottom-[10%] w-3/4 max-w-80 ${tone === 'light' ? 'opacity-[0.06]' : 'opacity-[0.1] brightness-0 invert'}`}
      />
    </div>
  )
}
