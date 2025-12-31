'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Shield, Users, Award, Target, TrendingUp, Clock, CheckCircle, Star, Search, Filter, ChevronRight, Eye, ShoppingCart, Heart, BarChart3, Beaker, Activity, Pill, Microscope, Stethoscope, Thermometer, TestTube } from 'lucide-react';
import Link from 'next/link';

export default function Products() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'Semua Produk', icon: BarChart3, color: 'gray' },
    { id: 'laboratory', name: 'Alat Laboratorium', icon: Microscope, color: 'blue' },
    { id: 'pharmacy', name: 'Alat Farmasi', icon: Pill, color: 'green' },
    { id: 'medical', name: 'Alat Kesehatan', icon: Stethoscope, color: 'purple' }
  ];

  const products = {
    laboratory: [
      {
        id: 1,
        name: 'Mikroskop Digital Binokuler',
        category: 'Alat Laboratorium',
        price: 'Rp 15.500.000',
        image: '/api/placeholder/300/200',
        description: 'Mikroskop digital dengan resolusi tinggi untuk penelitian laboratorium',
        features: ['Resolusi 40x-1000x', 'Kamera 5MP', 'LED Illumination', 'Software included']
      },
      {
        id: 2,
        name: 'Sentrifuge Laboratorium 8 Hole',
        category: 'Alat Laboratorium',
        price: 'Rp 28.900.000',
        image: '/api/placeholder/300/200',
        description: 'Sentrifuge presisi tinggi untuk pemisahan sampel',
        features: ['Kapasitas 8 hole', 'Speed 4000-16000 rpm', 'Digital display', 'Safety lock']
      },
      {
        id: 3,
        name: 'Autoclave 24 Liter',
        category: 'Alat Laboratorium',
        price: 'Rp 45.000.000',
        image: '/api/placeholder/300/200',
        description: 'Autoclave sterilisasi dengan kapasitas besar',
        features: ['Kapasitas 24L', 'Temp 121-134°C', 'Digital control', 'Safety valve']
      },
      {
        id: 4,
        name: 'Spectrophotometer UV-Vis',
        category: 'Alat Laboratorium',
        price: 'Rp 67.500.000',
        image: '/api/placeholder/300/200',
        description: 'Spectrophotometer untuk analisis spektral',
        features: ['Wavelength 190-1100nm', 'Double beam', 'Auto baseline', 'Data storage']
      }
    ],
    pharmacy: [
      {
        id: 5,
        name: 'Tablet Counter Semi Auto',
        category: 'Alat Farmasi',
        price: 'Rp 18.750.000',
        image: '/api/placeholder/300/200',
        description: 'Mesin penghitung tablet otomatis untuk industri farmasi',
        features: ['Kapasitas 5000 tablet/menit', 'Accuracy ±1 tablet', 'Touch screen', 'Data export']
      },
      {
        id: 6,
        name: 'Capsule Filler Manual 100 Holes',
        category: 'Alat Farmasi',
        price: 'Rp 12.500.000',
        image: '/api/placeholder/300/200',
        description: 'Alat pengisi kapsul manual kapasitas 100 lubang',
        features: ['100 holes', 'Size 00-5', 'Stainless steel', 'Easy cleaning']
      },
      {
        id: 7,
        name: 'Coating Pan 15kg',
        category: 'Alat Farmasi',
        price: 'Rp 85.000.000',
        image: '/api/placeholder/300/200',
        description: 'Mesin coating tablet dengan sistem pemanas',
        features: ['Kapasitas 15kg', 'Temp control', 'Spray system', 'Drying system']
      },
      {
        id: 8,
        name: 'Fluid Bed Dryer 5kg',
        category: 'Alat Farmasi',
        price: 'Rp 125.000.000',
        image: '/api/placeholder/300/200',
        description: 'Mesin pengering dengan sistem fluidized bed',
        features: ['Kapasitas 5kg', 'Temp 20-120°C', 'Air flow control', 'Timer']
      }
    ],
    medical: [
      {
        id: 9,
        name: 'Patient Monitor 12.1"',
        category: 'Alat Kesehatan',
        price: 'Rp 35.000.000',
        image: '/api/placeholder/300/200',
        description: 'Monitor pasien multi-parameter untuk ruang perawatan',
        features: ['12.1" display', 'ECG, SpO2, NIBP, Temp', 'Trend graph', 'Alarm system']
      },
      {
        id: 10,
        name: 'ECG Machine 12 Channel',
        category: 'Alat Kesehatan',
        price: 'Rp 42.500.000',
        image: '/api/placeholder/300/200',
        description: 'Elektrokardiogram 12 channel dengan printer thermal',
        features: ['12 channel', 'Touch screen', 'A4 printer', 'USB connection']
      },
      {
        id: 11,
        name: 'Ultrasound Portable',
        category: 'Alat Kesehatan',
        price: 'Rp 285.000.000',
        image: '/api/placeholder/300/200',
        description: 'USG portable dengan probe multipurpose',
        features: ['Convex, Linear, Phased array', 'Color Doppler', 'Battery 4 hours', 'DICOM compatible']
      },
      {
        id: 12,
        name: 'Digital X-Ray 100mA',
        category: 'Alat Kesehatan',
        price: 'Rp 450.000.000',
        image: '/api/placeholder/300/200',
        description: 'Sistem X-Ray digital dengan detector flat panel',
        features: ['100mA tube', 'Digital detector', 'Workstation included', 'DICOM 3.0']
      }
    ]
  };

  const allProducts = [
    ...products.laboratory,
    ...products.pharmacy,
    ...products.medical
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? allProducts 
    : products[selectedCategory] || [];

  const searchedProducts = filteredProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold">PT NIAGATAMA SUMBER ANUGERAH</h1>
                <p className="text-xs text-blue-100">Solusi Terpercaya Alat Laboratorium & Kesehatan</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-200 transition-colors">Beranda</Link>
              <Link href="/about" className="hover:text-blue-200 transition-colors">Tentang Kami</Link>
              <Link href="/products" className="hover:text-blue-200 transition-colors">Produk</Link>
              <Link href="/contact" className="hover:text-blue-200 transition-colors">Kontak</Link>
            </nav>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-700">
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="hover:text-blue-200 transition-colors">Beranda</Link>
                <Link href="/about" className="hover:text-blue-200 transition-colors">Tentang Kami</Link>
                <Link href="/products" className="hover:text-blue-200 transition-colors">Produk</Link>
                <Link href="/contact" className="hover:text-blue-200 transition-colors">Kontak</Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <BarChart3 className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Katalog Produk</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Koleksi Lengkap <span className="text-blue-600">Alat Laboratorium</span>, <span className="text-green-600">Farmasi</span> & <span className="text-purple-600">Kesehatan</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Temukan berbagai macam peralatan berkualitas tinggi dari PT NIAGATAMA SUMBER ANUGERAH dengan harga kompetitif dan garansi resmi.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari produk yang Anda butuhkan..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              const colorClasses = {
                gray: isActive ? 'bg-gray-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
                blue: isActive ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
                green: isActive ? 'bg-green-600 text-white' : 'bg-green-100 text-green-700 hover:bg-green-200',
                purple: isActive ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              };
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${colorClasses[category.color]}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex justify-between items-center">
            <h3 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Semua Produk' : categories.find(c => c.id === selectedCategory)?.name}
            </h3>
            <p className="text-gray-600">
              Menampilkan {searchedProducts.length} produk
            </p>
          </div>

          {searchedProducts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tidak Ada Produk Ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchedProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="text-center">
                      {product.category === 'Alat Laboratorium' && <Microscope className="w-16 h-16 text-blue-500" />}
                      {product.category === 'Alat Farmasi' && <Pill className="w-16 h-16 text-green-500" />}
                      {product.category === 'Alat Kesehatan' && <Stethoscope className="w-16 h-16 text-purple-500" />}
                    </div>
                    <div className="absolute top-2 right-2">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        product.category === 'Alat Laboratorium' ? 'bg-blue-100 text-blue-700' :
                        product.category === 'Alat Farmasi' ? 'bg-green-100 text-green-700' :
                        'bg-purple-100 text-purple-700'
                      }`}>
                        {product.category}
                      </span>
                    </div>
                    
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h4>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    
                    <div className="mb-3">
                      <p className="text-lg font-bold text-blue-600">{product.price}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Detail
                      </button>
                      <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center text-sm">
                        <ShoppingCart className="w-4 h-4 mr-1" />
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Produk <span className="text-blue-600">Unggulan</span> Kami
            </h2>
            <p className="text-xl text-gray-600">
              Produk-produk terlaris dan paling dicari oleh pelanggan kami
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Mikroskop Digital</h3>
                  <p className="text-sm text-blue-600">Terlaris Bulan Ini</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Mikroskop digital dengan resolusi tinggi yang sangat populer untuk laboratorium penelitian dan pendidikan.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">Rp 15.500.000</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Lihat Detail
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Patient Monitor</h3>
                  <p className="text-sm text-green-600">Best Quality</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Monitor pasien multi-parameter dengan akurasi tinggi untuk ruang perawatan dan ICU.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-green-600">Rp 35.000.000</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                  Lihat Detail
                </button>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Tablet Counter</h3>
                  <p className="text-sm text-purple-600">Rating Tertinggi</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Mesin penghitung tablet otomatis yang efisien untuk industri farmasi skala menengah hingga besar.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-purple-600">Rp 18.750.000</span>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Bantuan Memilih Produk?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tim ahli PT NIAGATAMA SUMBER ANUGERAH siap membantu Anda menemukan solusi yang tepat untuk kebutuhan laboratorium, farmasi, dan kesehatan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Request Quotation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold">PT NIAGATAMA SUMBER ANUGERAH</h3>
              </div>
              <p className="text-gray-400">
                Solusi terpercaya untuk alat laboratorium, farmasi, dan kesehatan dengan kualitas terbaik.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Beranda</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Produk</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kategori Produk</h4>
              <ul className="space-y-2">
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Alat Laboratorium</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Alat Farmasi</Link></li>
                <li><Link href="/products" className="text-gray-400 hover:text-white transition-colors">Alat Kesehatan</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontak</h4>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">Ruko Mega Grosir Cempaka Mas Blok E1 No. 15 Lt. 3</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">0852-8570-3582</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">info@niagatama.co.id</span>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 PT NIAGATAMA SUMBER ANUGERAH. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}