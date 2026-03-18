import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

function requireAdmin(request: NextRequest) {
  const token = request.cookies.get('admin_token');
  return token?.value === 'shaadi2026_authenticated';
}

// GET all blog posts (admin)
export async function GET(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = getDb();
  const posts = db.prepare('SELECT * FROM blog_posts ORDER BY created_at DESC').all();
  return NextResponse.json({ posts });
}

// POST create blog post
export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { title, slug, excerpt, content, category, published } = await request.json();
  if (!title || !slug) return NextResponse.json({ error: 'Title and slug required' }, { status: 400 });
  const db = getDb();
  const r = db.prepare('INSERT INTO blog_posts (title, slug, excerpt, content, category, published) VALUES (?, ?, ?, ?, ?, ?)')
    .run(title, slug, excerpt || '', content || '', category || '', published ? 1 : 0);
  return NextResponse.json({ success: true, id: r.lastInsertRowid }, { status: 201 });
}

// PATCH update blog post
export async function PATCH(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id, title, slug, excerpt, content, category, published } = await request.json();
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
  const db = getDb();
  db.prepare(`UPDATE blog_posts SET 
    title=COALESCE(?,title), slug=COALESCE(?,slug), excerpt=COALESCE(?,excerpt), 
    content=COALESCE(?,content), category=COALESCE(?,category), published=COALESCE(?,published) 
    WHERE id=?`).run(title||null, slug||null, excerpt||null, content||null, category||null, published!=null?published:null, id);
  return NextResponse.json({ success: true });
}

// DELETE blog post
export async function DELETE(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
  const db = getDb();
  db.prepare('DELETE FROM blog_posts WHERE id=?').run(id);
  return NextResponse.json({ success: true });
}
