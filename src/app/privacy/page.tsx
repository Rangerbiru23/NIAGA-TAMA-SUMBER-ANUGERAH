'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Shield, Eye, Lock, Database, UserCheck, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
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
      <section className="relative bg-gradient-to-br from-blue-50 to-green-50 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Lock className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Kebijakan Privasi</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Kebijakan Privasi <span className="text-blue-600">PT NIAGATAMA SUMBER ANUGERAH</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda dalam setiap interaksi dengan perusahaan kami.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Pembaruan Terakhir</h3>
                  <p className="text-blue-700">
                    Kebijakan Privasi ini terakhir diperbarui pada tanggal 1 Januari 2024 dan berlaku efektif sejak tanggal tersebut. 
                    PT NIAGATAMA SUMBER ANUGERAH dapat memperbarui kebijakan ini dari waktu ke waktu untuk mencerminkan perubahan 
                    dalam praktik bisnis kami atau perubahan hukum yang berlaku.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-blue-600 mr-3" />
                  Pendahuluan
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PT NIAGATAMA SUMBER ANUGERAH ("kami", "perusahaan") sangat menghargai privasi Anda dan berkomitmen untuk 
                  melindungi informasi pribadi yang Anda berikan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami 
                  mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda ketika Anda menggunakan website kami, 
                  menghubungi kami, atau menggunakan layanan kami.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan menggunakan website kami atau layanan kami, Anda menyetujui pengumpulan dan penggunaan data pribadi 
                  Anda sesuai dengan ketentuan yang diuraikan dalam Kebijakan Privasi ini.
                </p>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  Pengumpulan Data Pribadi
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami dapat mengumpulkan data pribadi Anda melalui berbagai cara, termasuk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Formulir Kontak:</strong> Nama, email, nomor telepon, nama perusahaan, dan pesan yang Anda kirimkan</li>
                  <li><strong>Formulir Pemesanan:</strong> Informasi lengkap untuk pengiriman dan penagihan</li>
                  <li><strong> komunikasi Email:</strong> Ketika Anda menghubungi kami melalui email</li>
                  <li><strong>Telepon:</strong> Ketika Anda menghubungi kami melalui telepon</li>
                  <li><strong>Website Analytics:</strong> Data anonim tentang penggunaan website kami</li>
                  <li><strong>Cookies:</strong> Informasi tentang preferensi dan aktivitas browsing Anda</li>
                </ul>
              </div>

              {/* Data Usage */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                  Penggunaan Data Pribadi
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tujuan Utama</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Memproses pesanan dan pengiriman produk</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Memberikan layanan pelanggan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Menanggapi pertanyaan dan permintaan</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Memproses pembayaran dan penagihan</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tujuan Tambahan</h4>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Memberikan informasi produk dan promosi</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Meningkatkan kualitas layanan kami</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Melakukan analisis pasar dan riset</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Memenuhi kewajiban hukum dan peraturan</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  Berbagi Data Pribadi
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kami tidak menjual, menyewakan, atau memperdagangkan data pribadi Anda kepada pihak ketiga. Kami hanya akan 
                  berbagi data pribadi Anda dalam kondisi berikut:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Dengan Persetujuan Anda:</strong> Ketika Anda memberikan persetujuan eksplisit untuk berbagi data</li>
                  <li><strong>Penyedia Layanan:</strong> Dengan penyedia layanan pihak ketiga yang membantu operasional bisnis kami</li>
                  <li><strong>Kewajiban Hukum:</strong> Ketika diwajibkan oleh hukum atau peraturan yang berlaku</li>
                  <li><strong>Perlindungan Hak:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset perusahaan</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Lock className="w-6 h-6 text-blue-600 mr-3" />
                  Keamanan Data
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PT NIAGATAMA SUMBER ANUGERAH menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-900">Teknis</h4>
                        <p className="text-green-700 text-sm">Enkripsi data, firewall, dan sistem keamanan terkini</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <UserCheck className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-900">Prosedural</h4>
                        <p className="text-green-700 text-sm">Akses terbatas, pelatihan staf, dan audit rutin</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Database className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-900">Fisik</h4>
                        <p className="text-green-700 text-sm">Keamanan lokasi dan kontrol akses fisik</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FileText className="w-5 h-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-green-900">Kebijakan</h4>
                        <p className="text-green-700 text-sm">Kebijakan privasi dan protokol penanganan data</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <UserCheck className="w-6 h-6 text-blue-600 mr-3" />
                  Hak Anda Sebagai Pengguna
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sebagai pemilik data pribadi, Anda memiliki hak-hak berikut sesuai dengan peraturan perlindungan data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan tentang Anda</li>
                  <li><strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat atau tidak lengkap</li>
                  <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi Anda dalam kondisi tertentu</li>
                  <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                  <li><strong>Hak Portabilitas:</strong> Menerima data pribadi Anda dalam format yang terstruktur</li>
                  <li><strong>Hak Penolakan:</strong> Menolak pemrosesan data pribadi Anda untuk tujuan pemasaran</li>
                </ul>
              </div>

              {/* Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Database className="w-6 h-6 text-blue-600 mr-3" />
                  Kebijakan Cookies
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan menganalisis traffic website. 
                  Cookies adalah file teks kecil yang disimpan di browser Anda. Jenis cookies yang kami gunakan:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cookies Esensial</h4>
                      <p className="text-gray-600 text-sm">Diperlukan untuk fungsi dasar website</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cookies Analytics</h4>
                      <p className="text-gray-600 text-sm">Membantu kami memahami cara pengguna menggunakan website</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cookies Fungsional</h4>
                      <p className="text-gray-600 text-sm">Mengingat preferensi dan pengaturan Anda</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  Hubungi Kami
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan, keluhan, atau permintaan terkait Kebijakan Privasi ini atau perlindungan 
                  data pribadi Anda, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Email Privasi</h4>
                      <p className="text-blue-700">privacy@niagatama.co.id</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Telepon</h4>
                      <p className="text-blue-700">0852-8570-3582</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Alamat</h4>
                      <p className="text-blue-700 text-sm">
                        Ruko Mega Grosir Cempaka Mas Blok E1 No. 15 Lt. 3<br />
                        Jakarta Pusat 10640
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Waktu Respons</h4>
                      <p className="text-blue-700">Maksimal 7 hari kerja</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Changes to Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Perubahan Kebijakan
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  PT NIAGATAMA SUMBER ANUGERAH berhak mengubah Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan 
                  akan dipublikasikan di website ini dengan tanggal pembaruan terbaru. Kami merekomendasikan Anda untuk 
                  secara berkala meninjau Kebijakan Privasi ini untuk tetap mendapatkan informasi tentang bagaimana kami 
                  melindungi data pribadi Anda.
                </p>
              </div>
            </div>
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