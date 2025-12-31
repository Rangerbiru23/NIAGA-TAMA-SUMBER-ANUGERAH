import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, subject, message } = body;
    
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Semua field wajib diisi' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }
    
    // Validate phone format (basic Indonesian phone number validation)
    const phoneRegex = /^(\+62|62|0)[0-9]{9,13}$/;
    if (!phoneRegex.test(phone.replace(/[-\s]/g, ''))) {
      return NextResponse.json(
        { error: 'Format nomor telepon tidak valid' },
        { status: 400 }
      );
    }
    
    // Log the contact form data (in production, you'd save to database)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone,
      company: body.company || '',
      subject,
      message,
      timestamp: new Date().toISOString()
    });
    
    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to customer
    // 4. Create CRM record
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return NextResponse.json({
      success: true,
      message: 'Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.',
      data: {
        id: Date.now(),
        submitted_at: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server. Silakan coba lagi.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'API endpoint untuk contact form',
    method: 'POST',
    fields: {
      name: 'string (required)',
      email: 'string (required)',
      phone: 'string (required)',
      company: 'string (optional)',
      subject: 'string (required)',
      message: 'string (required)'
    }
  });
}