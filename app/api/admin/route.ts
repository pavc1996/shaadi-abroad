import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

// Admin login
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { password, action } = body;

    if (action === 'login') {
      if (password !== 'shaadi2026') {
        return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
      }

      const response = NextResponse.json({ success: true });
      response.cookies.set('admin_token', 'shaadi2026_authenticated', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });
      return response;
    }

    if (action === 'logout') {
      const response = NextResponse.json({ success: true });
      response.cookies.delete('admin_token');
      return response;
    }

    if (action === 'update_status') {
      const adminToken = request.cookies.get('admin_token');
      if (!adminToken || adminToken.value !== 'shaadi2026_authenticated') {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }

      const { id, status } = body;
      const db = getDb();
      db.prepare('UPDATE inquiries SET status = ? WHERE id = ?').run(status, id);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const adminToken = request.cookies.get('admin_token');
    if (!adminToken || adminToken.value !== 'shaadi2026_authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = getDb();
    const inquiries = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();

    // Stats
    const totalLeads = inquiries.length;
    const byStage: Record<string, number> = {};
    const byDestination: Record<string, number> = {};
    const byProvince: Record<string, number> = {};

    for (const inquiry of inquiries as Array<{
      status: string;
      destinations: string;
      province: string;
    }>) {
      byStage[inquiry.status] = (byStage[inquiry.status] || 0) + 1;

      if (inquiry.destinations) {
        const destinations = inquiry.destinations.split(',').map((d: string) => d.trim());
        for (const dest of destinations) {
          if (dest) byDestination[dest] = (byDestination[dest] || 0) + 1;
        }
      }

      if (inquiry.province) {
        byProvince[inquiry.province] = (byProvince[inquiry.province] || 0) + 1;
      }
    }

    return NextResponse.json({
      inquiries,
      stats: { totalLeads, byStage, byDestination, byProvince },
    });
  } catch (error) {
    console.error('Admin GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
