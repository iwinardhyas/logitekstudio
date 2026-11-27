import { Link, useParams } from 'react-router-dom'
import { posts } from '../data/posts.js'
import Container from '../components/ui/Container.jsx'
import { formatDate } from '../lib/formatDate.js'
import NotFound from './NotFound.jsx'

export default function BlogDetail() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)
  if (!post) return <NotFound />

  return (
    <article className="py-16 md:py-20">
      <Container className="max-w-3xl">
        <Link to="/blog" className="text-sm font-medium text-accent-dark hover:underline">← Kembali ke Blog</Link>
        <p className="mt-8 text-sm text-slate-600">{formatDate(post.date)}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink">{post.title}</h1>
        <p className="mt-8 text-lg leading-relaxed text-slate-700">{post.body}</p>
      </Container>
    </article>
  )
}
