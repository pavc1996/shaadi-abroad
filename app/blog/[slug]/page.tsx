import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

interface Props { params: { slug: string } }

const featuredImages: Record<string, string> = {
  'canadian-indian-couples-destination-weddings-2025': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=600&fit=crop',
  'indian-wedding-cancun-riviera-maya-guide': 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=1200&h=600&fit=crop',
  '5-things-destination-wedding-planner-should-handle': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&h=600&fit=crop',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const db = getDb();
  const post = db.prepare('SELECT * FROM blog_posts WHERE slug = ? AND published = 1').get(params.slug) as any;
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const db = getDb();
  const post = db.prepare('SELECT * FROM blog_posts WHERE slug = ? AND published = 1').get(params.slug) as any;
  if (!post) notFound();

  const related = db.prepare('SELECT * FROM blog_posts WHERE published = 1 AND id != ? LIMIT 2').all(post.id) as any[];

  // Simple markdown-ish renderer for the content
  const renderContent = (content: string) => {
    return content.split('\n\n').map((para, i) => {
      if (para.startsWith('## ')) {
        return <h2 key={i} className="font-playfair text-2xl text-charcoal font-bold mt-10 mb-4">{para.replace('## ', '')}</h2>;
      }
      if (para.startsWith('### ')) {
        return <h3 key={i} className="font-playfair text-xl text-charcoal font-semibold mt-8 mb-3">{para.replace('### ', '')}</h3>;
      }
      if (para.startsWith('1. ') || para.match(/^\d+\./)) {
        const items = para.split('\n').filter(l => l.trim());
        return <ol key={i} className="list-decimal list-inside space-y-2 my-4">{items.map((item, j) => <li key={j} className="font-inter text-charcoal/80 text-base leading-relaxed">{item.replace(/^\d+\.\s+/, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>)}</ol>;
      }
      if (para.includes('\n')) {
        const lines = para.split('\n').filter(l => l.trim());
        return <ul key={i} className="space-y-2 my-4">{lines.map((line, j) => <li key={j} className="font-inter text-charcoal/80 text-base leading-relaxed flex gap-2"><span className="text-gold mt-1 flex-shrink-0">✦</span>{line.replace(/\*\*(.*?)\*\*/g, '$1')}</li>)}</ul>;
      }
      const rendered = para.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      return <p key={i} className="font-inter text-charcoal/80 text-base leading-loose mb-4" dangerouslySetInnerHTML={{ __html: rendered }} />;
    });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={featuredImages[post.slug] || 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=600&fit=crop'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent" />
        <div className="relative z-10 px-4 pb-12 max-w-3xl mx-auto w-full">
          {post.category && (
            <span className="inline-block bg-maroon text-ivory font-inter text-xs tracking-widest uppercase px-3 py-1 mb-4">{post.category}</span>
          )}
          <h1 className="font-playfair text-4xl md:text-5xl text-ivory font-bold leading-tight">{post.title}</h1>
          <p className="font-inter text-ivory/60 text-sm mt-3">
            {new Date(post.created_at).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })} · Shaadi Abroad
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose-custom">
            <p className="font-inter text-charcoal/70 text-lg leading-relaxed border-l-4 border-gold pl-6 mb-10 italic">{post.excerpt}</p>
            {renderContent(post.content || '')}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-beige border border-champagne rounded-sm p-8 text-center">
            <h3 className="font-playfair text-2xl text-charcoal font-bold mb-3">Ready to Start Planning?</h3>
            <p className="font-inter text-charcoal/70 text-sm mb-6">Book a free 30-minute consultation with our team. No commitment — just a conversation about your vision.</p>
            <Link href="/inquire" className="inline-block bg-maroon text-ivory font-inter font-semibold text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-maroon-dark transition-colors">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-12 px-4 bg-beige">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl text-charcoal font-bold mb-8">More From The Journal</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r: any) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="group block bg-ivory border border-champagne rounded-sm p-6 hover:border-gold transition-colors">
                  {r.category && <span className="font-inter text-xs text-gold tracking-wide uppercase">{r.category}</span>}
                  <h3 className="font-playfair text-lg text-charcoal font-bold mt-1 group-hover:text-maroon transition-colors">{r.title}</h3>
                  <p className="font-inter text-charcoal/60 text-sm mt-2 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="py-8 px-4 text-center">
        <Link href="/blog" className="font-inter text-maroon text-sm font-semibold hover:underline">← Back to The Journal</Link>
      </div>
    </div>
  );
}
