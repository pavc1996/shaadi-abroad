import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

function requireAdmin(request: NextRequest) {
  const token = request.cookies.get('admin_token');
  return token?.value === 'shaadi2026_authenticated';
}

export async function GET(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const db = getDb();
  const testimonials = db.prepare('SELECT * FROM testimonials ORDER BY id DESC').all();
  return NextResponse.json({ testimonials });
}

export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { couple_name, location, destination, quote, wedding_date, featured, image_url } = await request.json();
  if (!couple_name || !quote) return NextResponse.json({ error: 'Name and quote required' }, { status: 400 });
  const db = getDb();
  const r = db.prepare('INSERT INTO testimonials (couple_name, location, destination, quote, wedding_date, featured, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)')
    .run(couple_name, location || '', destination || '', quote, wedding_date || '', featured ? 1 : 0, image_url || '');
  return NextResponse.json({ success: true, id: r.lastInsertRowid }, { status: 201 });
}

export async function DELETE(request: NextRequest) {
  if (!requireAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { id } = await request.json();
  if (!id) return NextResponse.json({ error: 'ID required' }, { status: 400 });
  const db = getDb();
  db.prepare('DELETE FROM testimonials WHERE id=?').run(id);
  return NextResponse.json({ success: true });
}
