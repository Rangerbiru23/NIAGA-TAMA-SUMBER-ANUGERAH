import { NextRequest, NextResponse } from 'next/server';

// Mock product data - in production this would come from a database
const products = [
  {
    id: 1,
    name: 'Mikroskop Digital Binokuler',
    category: 'laboratory',
    categoryName: 'Alat Laboratorium',
    price: 'Rp 15.500.000',
    description: 'Mikroskop digital dengan resolusi tinggi untuk penelitian laboratorium',
    features: ['Resolusi 40x-1000x', 'Kamera 5MP', 'LED Illumination', 'Software included'],
    stock: 15,
    rating: 4.8,
    reviews: 24
  },
  {
    id: 2,
    name: 'Sentrifuge Laboratorium 8 Hole',
    category: 'laboratory',
    categoryName: 'Alat Laboratorium',
    price: 'Rp 28.900.000',
    description: 'Sentrifuge presisi tinggi untuk pemisahan sampel',
    features: ['Kapasitas 8 hole', 'Speed 4000-16000 rpm', 'Digital display', 'Safety lock'],
    stock: 8,
    rating: 4.9,
    reviews: 18
  },
  {
    id: 3,
    name: 'Tablet Counter Semi Auto',
    category: 'pharmacy',
    categoryName: 'Alat Farmasi',
    price: 'Rp 18.750.000',
    description: 'Mesin penghitung tablet otomatis untuk industri farmasi',
    features: ['Kapasitas 5000 tablet/menit', 'Accuracy ±1 tablet', 'Touch screen', 'Data export'],
    stock: 12,
    rating: 4.7,
    reviews: 31
  },
  {
    id: 4,
    name: 'Patient Monitor 12.1"',
    category: 'medical',
    categoryName: 'Alat Kesehatan',
    price: 'Rp 35.000.000',
    description: 'Monitor pasien multi-parameter untuk ruang perawatan',
    features: ['12.1" display', 'ECG, SpO2, NIBP, Temp', 'Trend graph', 'Alarm system'],
    stock: 6,
    rating: 4.9,
    reviews: 42
  },
  {
    id: 5,
    name: 'Autoclave 24 Liter',
    category: 'laboratory',
    categoryName: 'Alat Laboratorium',
    price: 'Rp 45.000.000',
    description: 'Autoclave sterilisasi dengan kapasitas besar',
    features: ['Kapasitas 24L', 'Temp 121-134°C', 'Digital control', 'Safety valve'],
    stock: 4,
    rating: 4.8,
    reviews: 15
  },
  {
    id: 6,
    name: 'Capsule Filler Manual 100 Holes',
    category: 'pharmacy',
    categoryName: 'Alat Farmasi',
    price: 'Rp 12.500.000',
    description: 'Alat pengisi kapsul manual kapasitas 100 lubang',
    features: ['100 holes', 'Size 00-5', 'Stainless steel', 'Easy cleaning'],
    stock: 20,
    rating: 4.6,
    reviews: 28
  },
  {
    id: 7,
    name: 'ECG Machine 12 Channel',
    category: 'medical',
    categoryName: 'Alat Kesehatan',
    price: 'Rp 42.500.000',
    description: 'Elektrokardiogram 12 channel dengan printer thermal',
    features: ['12 channel', 'Touch screen', 'A4 printer', 'USB connection'],
    stock: 7,
    rating: 4.8,
    reviews: 19
  },
  {
    id: 8,
    name: 'Spectrophotometer UV-Vis',
    category: 'laboratory',
    categoryName: 'Alat Laboratorium',
    price: 'Rp 67.500.000',
    description: 'Spectrophotometer untuk analisis spektral',
    features: ['Wavelength 190-1100nm', 'Double beam', 'Auto baseline', 'Data storage'],
    stock: 3,
    rating: 4.9,
    reviews: 11
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    let filteredProducts = products;
    
    // Filter by category
    if (category && category !== 'all') {
      filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    
    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.categoryName.toLowerCase().includes(searchLower)
      );
    }
    
    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return NextResponse.json({
      success: true,
      data: paginatedProducts,
      pagination: {
        current_page: page,
        per_page: limit,
        total: filteredProducts.length,
        total_pages: Math.ceil(filteredProducts.length / limit)
      },
      categories: [
        { id: 'all', name: 'Semua Produk' },
        { id: 'laboratory', name: 'Alat Laboratorium' },
        { id: 'pharmacy', name: 'Alat Farmasi' },
        { id: 'medical', name: 'Alat Kesehatan' }
      ]
    });
    
  } catch (error) {
    console.error('Products API error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { productId, quantity, customerInfo } = body;
    
    // Validate required fields
    if (!productId || !quantity || !customerInfo) {
      return NextResponse.json(
        { error: 'Data tidak lengkap' },
        { status: 400 }
      );
    }
    
    // Find product
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) {
      return NextResponse.json(
        { error: 'Produk tidak ditemukan' },
        { status: 404 }
      );
    }
    
    // Check stock
    if (product.stock < quantity) {
      return NextResponse.json(
        { error: 'Stok tidak mencukupi' },
        { status: 400 }
      );
    }
    
    // Create order (in production, save to database)
    const order = {
      id: Date.now(),
      productId: product.id,
      productName: product.name,
      quantity,
      price: product.price,
      totalPrice: product.price,
      customerInfo,
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    
    console.log('New Order:', order);
    
    return NextResponse.json({
      success: true,
      message: 'Pesanan berhasil dibuat',
      data: order
    });
    
  } catch (error) {
    console.error('Order API error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}