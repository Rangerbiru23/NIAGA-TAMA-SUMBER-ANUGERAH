'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Shield, FileText, CheckCircle, AlertCircle, Gavel, Users, Package, CreditCard, Clock, Award } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-green-100/30 opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
              <Gavel className="w-4 h-4 mr-2" />
              <span className="text-sm font-semibold">Syarat & Ketentuan</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Syarat & Ketentuan <span className="text-blue-600">PT NIAGATAMA SUMBER ANUGERAH</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Ketentuan penggunaan layanan dan produk yang berlaku untuk semua pelanggan dan mitra bisnis kami.
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
                    Syarat & Ketentuan ini terakhir diperbarui pada tanggal 1 Januari 2024 dan berlaku efektif sejak tanggal tersebut. 
                    Dengan menggunakan layanan PT NIAGATAMA SUMBER ANUGERAH, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Penerimaan Syarat dan Ketentuan
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Syarat dan Ketentuan ini ("Ketentuan") mengatur penggunaan layanan dan produk yang disediakan oleh 
                  PT NIAGATAMA SUMBER ANUGERAH ("Perusahaan", "kami", "kita"). Dengan mengakses website kami, 
                  menghubungi kami, atau menggunakan layanan kami, Anda ("Pelanggan", "Anda") menyetujui untuk terikat 
                  oleh Ketentuan ini.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Jika Anda tidak menyetujui Ketentuan ini, Anda tidak diperkenankan menggunakan layanan atau produk kami.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Package className="w-6 h-6 text-blue-600 mr-3" />
                  Deskripsi Layanan
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PT NIAGATAMA SUMBER ANUGERAH menyediakan layanan perdagangan eceran alat laboratorium, alat farmasi, 
                  dan alat kesehatan untuk manusia, meliputi:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Penjualan berbagai macam peralatan laboratorium medis dan penelitian</li>
                  <li>Penyediaan alat-alat farmasi untuk industri obat-obatan</li>
                  <li>Distribusi peralatan kesehatan untuk rumah sakit dan klinik</li>
                  <li>Layanan konsultasi teknis dan product support</li>
                  <li>Layanan instalasi dan training penggunaan alat</li>
                  <li>Layanan maintenance dan perbaikan peralatan</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  Tanggung Jawab Pelanggan
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sebagai pelanggan, Anda bertanggung jawab untuk:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Informasi Akurat</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Memberikan informasi yang benar dan lengkap</li>
                      <li>• Memperbarui data jika ada perubahan</li>
                      <li>• Memastikan kontak dapat dihubungi</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Penggunaan Produk</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Menggunakan produk sesuai petunjuk</li>
                      <li>• Memastikan operator terlatih</li>
                      <li>• Melakukan maintenance rutin</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ordering and Payment */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-6 h-6 text-blue-600 mr-3" />
                  Pemesanan dan Pembayaran
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proses Pemesanan</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Pemesanan dapat dilakukan melalui telepon, email, atau formulir online</li>
                      <li>Setiap pemesanan akan dikonfirmasi melalui penawaran harga resmi</li>
                      <li>Pelanggan harus menyetujui penawaran sebelum proses berlanjut</li>
                      <li>Perusahaan berhak menolak pemesanan tanpa alasan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Syarat Pembayaran</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Pembayaran dapat dilakukan tunai atau transfer bank</li>
                      <li>Untuk pembayaran kredit, diperlukan persetujuan manajemen</li>
                      <li>Pembayaran dianggap sah setelah dana masuk ke rekening perusahaan</li>
                      <li>Pembayaran harus dilunasi sesuai tempo yang disepakati</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pricing and Taxes */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  Harga dan Pajak
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kebijakan harga dan pajak yang berlaku:
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Harga</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• Harga yang tercantum belum termasuk PPN</li>
                        <li>• Harga dapat berubah sewaktu-waktu</li>
                        <li>• Harga berlaku sesuai penawaran resmi</li>
                        <li>• Diskon berlaku sesuai kebijakan perusahaan</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-yellow-900 mb-2">Pajak</h4>
                      <ul className="space-y-1 text-yellow-700 text-sm">
                        <li>• PPN 11% ditambahkan ke harga dasar</li>
                        <li>• PPh 23 berlaku untuk pelanggan badan usaha</li>
                        <li>• Faktur pajak akan diterbitkan resmi</li>
                        <li>• Tarif pajak mengikuti peraturan terkini</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery and Shipping */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Package className="w-6 h-6 text-blue-600 mr-3" />
                  Pengiriman dan Pengemasan
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ketentuan pengiriman produk:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><strong>Waktu Pengiriman:</strong> 2-7 hari kerja tergantung lokasi dan ketersediaan stok</li>
                  <li><strong>Biaya Pengiriman:</strong> Gratis untuk area Jabodetabek, berlaku biaya untuk luar kota</li>
                  <li><strong>Asuransi:</strong> Produk dijamin asuransi selama proses pengiriman</li>
                  <li><strong>Penerimaan:</strong> Pelanggan harus memeriksa kondisi produk saat diterima</li>
                  <li><strong>Klaim Kerusakan:</strong> Dilaporkan maksimal 2x24 jam setelah penerimaan</li>
                </ul>
              </div>

              {/* Warranty and Returns */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-3" />
                  Garansi dan Pengembalian
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Garansi</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Semua produk dilengkapi garansi resmi dari produsen</li>
                      <li>Masa garansi bervariasi tergantung jenis produk (1-2 tahun)</li>
                      <li>Garansi tidak berlaku untuk kerusakan akibat kesalahan penggunaan</li>
                      <li>Klaim garansi harus disertai dengan bukti pembelian</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengembalian</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                      <li>Pengembalian dapat dilakukan jika produk cacat atau tidak sesuai spesifikasi</li>
                      <li>Pengembalian harus diajukan maksimal 7 hari setelah penerimaan</li>
                      <li>Produk harus dalam kondisi baik dan lengkap dengan kemasan asli</li>
                      <li>Biaya pengembalian ditanggung oleh perusahaan jika kesalahan dari pihak kami</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  Hak Kekayaan Intelektual
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Semua konten di website PT NIAGATAMA SUMBER ANUGERAH, termasuk namun tidak terbatas pada teks, 
                  gambar, logo, desain, dan software, dilindungi oleh hak kekayaan intelektual dan merupakan milik 
                  eksklusif perusahaan.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dilarang keras untuk menyalin, mendistribusikan, memodifikasi, atau menggunakan konten kami untuk 
                  tujuan komersial tanpa izin tertulis dari perusahaan.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 text-blue-600 mr-3" />
                  Pembatasan Tanggung Jawab
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sejauh diizinkan oleh hukum yang berlaku, PT NIAGATAMA SUMBER ANUGERAH tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan data atau keuntungan bisnis</li>
                  <li>Kerusakan akibat penggunaan produk yang tidak sesuai petunjuk</li>
                  <li>Keterlambatan pengiriman akibat force majeure</li>
                  <li>Kesalahan yang disebabkan oleh pihak ketiga (ekspedisi, bank, dll)</li>
                </ul>
              </div>

              {/* Force Majeure */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  Force Majeure
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  PT NIAGATAMA SUMBER ANUGERAH dibebaskan dari kewajiban pelaksanaan ketentuan ini jika terjadi 
                  kejadian di luar kendali kami, termasuk namun tidak terbatas pada:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Bencana alam (gempa bumi, banjir, tsunami)</li>
                  <li>Perang, kerusuhan, atau terorisme</li>
                  <li>Pemogokan atau gangguan industri</li>
                  <li>Kebijakan pemerintah yang membatasi operasional</li>
                  <li>Gangguan sistem teknologi atau komunikasi</li>
                </ul>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Gavel className="w-6 h-6 text-blue-600 mr-3" />
                  Penyelesaian Sengketa
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Setiap sengketa yang timbul dari atau berhubungan dengan Ketentuan ini akan diselesaikan melalui:
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                      <div>
                        <h4 className="font-semibold text-green-900">Musyawarah</h4>
                        <p className="text-green-700 text-sm">Penyelesaian sengketa secara kekeluargaan melalui diskusi dan negosiasi</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                      <div>
                        <h4 className="font-semibold text-green-900">Mediasi</h4>
                        <p className="text-green-700 text-sm">Jika musyawarah gagal, dilakukan mediasi dengan pihak ketiga netral</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                      <div>
                        <h4 className="font-semibold text-green-900">Pengadilan</h4>
                        <p className="text-green-700 text-sm">Sebagai upaya terakhir, sengketa akan diselesaikan di Pengadilan Negeri Jakarta Pusat</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  Hukum yang Berlaku
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap ketentuan 
                  yang dianggap tidak berlaku tidak akan memengaruhi ketentuan lain yang tetap berlaku penuh.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  Hubungi Kami
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Email</h4>
                      <p className="text-blue-700">info@niagatama.co.id</p>
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
                      <h4 className="font-semibold text-blue-900 mb-2">Jam Operasional</h4>
                      <p className="text-blue-700">Senin - Jumat: 08:00 - 17:00</p>
                    </div>
                  </div>
                </div>
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