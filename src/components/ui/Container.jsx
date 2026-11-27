export default function Container({ className = '', children, ...props }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 ${className}`} {...props}>{children}</div>
}
