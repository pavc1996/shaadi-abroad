import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getDb } from '@/lib/db';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Blog & Guides — Indian Destination Wedding Planning',
  description: 'Expert advice, destination guides, planning tips, and real stories for Canadian couples planning Indian destination weddings.',
};

const categories = ['All', 'Trends', 'Destinations', 'Planning', 'Real Weddings', 'Tips'];

const featuredImages: Record<string, string> = {
  'canadian-indian-couples-destination-weddings-2025': 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop',
  'indian-wedding-cancun-riviera-maya-guide': 'https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=800&h=500&fit=crop',
  '5-things-destination-wedding-planner-should-handle': 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=500&fit=crop',
};

export default function BlogPage() {
  const db = getDb();
  const posts = db.prepare('SELECT * FROM blog_posts WHERE published = 1 ORDER BY created_at DESC').all() as any[];

  return (
    <div className="pt-20">
      <section className="py-24 px-4 bg-beige text-center">
        <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Insights & Guides</p>
        <h1 className="font-playfair text-5xl text-charcoal font-bold mb-6">The Shaadi Abroad Journal</h1>
        <p className="font-inter text-charcoal/70 max-w-2xl mx-auto">
          Expert advice, destination deep-dives, real wedding stories, and planning guides — everything a Canadian couple needs to plan the Indian destination wedding of their dreams.
        </p>
      </section>

      {/* Category filter (static for now) */}
      <section className="py-6 px-4 border-b border-champagne">
        <div className="max-w-5xl mx-auto flex gap-3 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <span key={cat} className={`flex-shrink-0 font-inter text-xs tracking-wide uppercase px-4 py-2 rounded-sm cursor-pointer transition-colors ${cat === 'All' ? 'bg-maroon text-ivory' : 'bg-beige text-charcoal/60 hover:text-charcoal border border-champagne'}`}>
              {cat}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20 text-charcoal/50 font-inter">No posts yet.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any, i: number) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group block bg-ivory border border-champagne rounded-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={featuredImages[post.slug] || `https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=500&fit=crop&sig=${i}`}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {post.category && (
                      <div className="absolute top-4 left-4 bg-maroon/90 text-ivory text-xs font-inter tracking-wide px-3 py-1 rounded-sm">
                        {post.category}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <p className="font-inter text-charcoal/40 text-xs mb-2">{new Date(post.created_at).toLocaleDateString('en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <h2 className="font-playfair text-lg text-charcoal font-bold mb-3 leading-snug group-hover:text-maroon transition-colors">{post.title}</h2>
                    <p className="font-inter text-charcoal/60 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="mt-4 font-inter text-gold text-xs font-semibold tracking-wide group-hover:underline">Read More →</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lead magnet */}
      <section className="py-16 px-4 bg-maroon">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-inter text-gold text-xs tracking-widest uppercase mb-4">Free Download</p>
          <h2 className="font-playfair text-3xl text-ivory font-bold mb-4">The Ultimate Indian Destination Wedding Planning Guide for Canadian Couples</h2>
          <p className="font-inter text-ivory/70 mb-8">37 pages covering destinations, budgets, guest logistics, cultural ceremony planning, and vendor checklists. Downloaded by 2,000+ couples.</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-white/10 border border-white/20 rounded-sm px-4 py-3 text-ivory font-inter text-sm placeholder-white/40 outline-none focus:border-gold transition-colors" />
            <button className="bg-gold text-charcoal font-inter font-semibold text-xs tracking-widest uppercase px-6 py-3 hover:bg-gold-light transition-colors flex-shrink-0">
              Download Free
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <h2 className="font-playfair text-3xl text-charcoal font-bold mb-4">Ready to Start Planning?</h2>
        <p className="font-inter text-charcoal/70 mb-8">Book a free 30-minute consultation with our team.</p>
        <Link href="/inquire" className="inline-block bg-maroon text-ivory font-inter font-semibold text-sm tracking-widest uppercase px-10 py-4 hover:bg-maroon-dark transition-colors">
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
}
