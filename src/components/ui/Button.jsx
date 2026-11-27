import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-accent-dark text-white hover:bg-accent-darker',
  outline: 'border border-slate-300 text-ink hover:border-accent hover:text-accent-dark',
  outlineLight: 'border border-white/40 text-white hover:border-accent-light hover:text-accent-light',
}

export default function Button({ to, href, variant = 'primary', className = '', children, ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${variants[variant]} ${className}`

  if (to) return <Link to={to} className={classes}>{children}</Link>
  if (href) return <a href={href} className={classes} target="_blank" rel="noreferrer">{children}</a>
  return <button className={classes} {...props}>{children}</button>
}
