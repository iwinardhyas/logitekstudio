import { Link } from 'react-router-dom'
import { posts } from '../data/posts.js'
import Container from '../components/ui/Container.jsx'
import PageHeader from '../components/ui/PageHeader.jsx'
import { formatDate } from '../lib/formatDate.js'

export default function Blog() {
  return (
    <>
      <PageHeader title="Blog" description="Tips, insight, dan cerita seputar teknologi dan bisnis digital." />
      <section className="py-20">
        <Container className="grid max-w-4xl gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-accent"
            >
              <p className="text-sm text-slate-500">{formatDate(post.date)}</p>
              <h2 className="mt-2 text-xl font-semibold text-ink group-hover:text-accent-dark">{post.title}</h2>
              <p className="mt-2 text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </Container>
      </section>
    </>
  )
}
