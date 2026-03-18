import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      province,
      wedding_date,
      guest_count,
      destinations,
      budget_range,
      events,
      travel_support,
      notes,
    } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO inquiries (name, email, phone, province, wedding_date, guest_count, destinations, budget_range, events, travel_support, notes, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'New')
    `);

    const result = stmt.run(
      name,
      email,
      phone || null,
      province || null,
      wedding_date || null,
      guest_count || null,
      Array.isArray(destinations) ? destinations.join(', ') : destinations || null,
      budget_range || null,
      Array.isArray(events) ? events.join(',') : events || null,
      travel_support ? 1 : 0,
      notes || null
    );

    return NextResponse.json(
      { success: true, id: result.lastInsertRowid },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating inquiry:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check admin auth via cookie
    const adminToken = request.cookies.get('admin_token');
    if (!adminToken || adminToken.value !== 'shaadi2026_authenticated') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = getDb();
    const inquiries = db.prepare('SELECT * FROM inquiries ORDER BY created_at DESC').all();
    return NextResponse.json({ inquiries });
  } catch (error) {
    console.error('Error fetching inquiries:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
