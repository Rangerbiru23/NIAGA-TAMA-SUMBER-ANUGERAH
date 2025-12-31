'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Shield, Users, Award, Target, TrendingUp, Clock, CheckCircle, Star, Building, Eye, Heart, Handshake } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Building className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Tentang Perusahaan</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Mengenal Lebih Dekat <span className="text-blue-600">PT NIAGATAMA SUMBER ANUGERAH</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Perusahaan terpercaya yang bergerak di bidang perdagangan eceran alat laboratorium, alat farmasi, dan alat kesehatan untuk manusia dengan komitmen mutu dan pelayanan terbaik.
            </p>
          </div>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Profil Perusahaan</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                <strong>PT NIAGATAMA SUMBER ANUGERAH</strong> adalah perusahaan yang berdedikasi dalam menyediakan berbagai macam peralatan laboratorium, farmasi, dan kesehatan dengan kualitas terbaik. Kami telah melayani berbagai institusi mulai dari rumah sakit, klinik, laboratorium, hingga industri farmasi di seluruh Indonesia.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dengan pengalaman bertahun-tahun di industri ini, kami memahami betul pentingnya kualitas, keakuratan, dan keandalan peralatan medis dan laboratorium. Oleh karena itu, kami hanya menyediakan produk-produk dari produsen ternama yang telah terbukti kualitasnya.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Visi Kami</h4>
                  <p className="text-sm text-blue-700">
                    Menjadi penyedia terdepan dan terpercaya untuk solusi alat laboratorium dan kesehatan di Indonesia
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Misi Kami</h4>
                  <p className="text-sm text-green-700">
                    Memberikan produk berkualitas dengan pelayanan prima dan harga kompetitif
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Berkualitas</h4>
                  <p className="text-sm text-gray-600">Produk terjamin mutunya</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Profesional</h4>
                  <p className="text-sm text-gray-600">Tim ahli berpengalaman</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Bergaransi</h4>
                  <p className="text-sm text-gray-600">Garansi resmi semua produk</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <Clock className="w-8 h-8 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Responsif</h4>
                  <p className="text-sm text-gray-600">Pelayanan cepat tanggap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nilai-Nilai Inti <span className="text-yellow-300">PT NIAGATAMA SUMBER ANUGERAH</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nilai-nilai yang memandu setiap langkah kami dalam melayani pelanggan
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-10 h-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integritas</h3>
              <p className="text-blue-100">
                Menjalankan bisnis dengan jujur, transparan, dan etika yang tinggi
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kepedulian</h3>
              <p className="text-blue-100">
                Memahami dan memprioritaskan kebutuhan pelanggan dengan sepenuh hati
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kualitas</h3>
              <p className="text-blue-100">
                Memberikan produk dan layanan terbaik dengan standar internasional
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-10 h-10 text-yellow-300" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kemitraan</h3>
              <p className="text-blue-100">
                Membangun hubungan jangka panjang yang saling menguntungkan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategori Bisnis Kami
            </h2>
            <p className="text-xl text-gray-600">
              Tiga pilar utama bisnis kami untuk memenuhi kebutuhan kesehatan masyarakat
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Shield className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Alat Laboratorium</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Peralatan lengkap untuk kebutuhan laboratorium medis, penelitian, dan industri dengan teknologi terkini dan akurasi tinggi.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Laboratorium Klinik
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Laboratorium Penelitian
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality Control
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Users className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Alat Farmasi</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Peralatan modern untuk industri farmasi yang mendukung proses produksi, kemasan, dan quality control obat.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Produksi Obat
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Quality Control
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    R&D Farmasi
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-32 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <Heart className="w-12 h-12 mx-auto mb-2" />
                  <h3 className="text-xl font-bold">Alat Kesehatan</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  Peralatan medis modern untuk diagnosis, monitoring, dan treatment pasien dengan standar keamanan internasional.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Rumah Sakit
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Klinik Kesehatan
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Home Care
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Perusahaan</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Nama Perusahaan</h4>
                    <p className="text-gray-600">PT NIAGATAMA SUMBER ANUGERAH</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alamat</h4>
                    <p className="text-gray-600">
                      Ruko Mega Grosir Cempaka Mas Blok E1 No. 15 Lt. 3<br />
                      JL. Letjend Soeprapto, Desa/Kelurahan Sumur Batu<br />
                      Kec. Kemayoran, Kota Adm. Jakarta Pusat<br />
                      Provinsi DKI Jakarta
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Telepon</h4>
                    <p className="text-gray-600">0852-8570-3582</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@niagatama.co.id</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Pengalaman Bertahun-tahun</h4>
                    <p className="text-gray-600">Tim kami memiliki pengalaman luas di industri alat kesehatan dan laboratorium</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Produk Berkualitas</h4>
                    <p className="text-gray-600">Hanya menyediakan produk dari produsen ternama dengan sertifikasi internasional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Layanan Purnajual</h4>
                    <p className="text-gray-600">Dukungan teknis dan maintenance untuk memastikan peralatan berfungsi optimal</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Harga Kompetitif</h4>
                    <p className="text-gray-600">Menawarkan produk berkualitas dengan harga yang bersaing di pasar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Bekerja Sama dengan <span className="text-yellow-300">PT NIAGATAMA SUMBER ANUGERAH</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk konsultasi kebutuhan alat laboratorium, farmasi, dan kesehatan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </button>
            <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Kirim Pesan
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