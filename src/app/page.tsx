export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">PT NIAGATAMA SUMBER ANUGERAH</h1>
        <p className="text-sm">Solusi Terpercaya Alat Laboratorium & Kesehatan</p>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Solusi Terlengkap Alat Laboratorium & Kesehatan
          </h2>
          <p className="text-xl text-gray-600">
            Menyediakan berbagai macam alat laboratorium, farmasi, dan kesehatan dengan kualitas terbaik
          </p>
        </section>
        
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-blue-800 mb-2">Alat Laboratorium</h3>
            <p className="text-gray-600">Mikroskop, Sentrifuge, Autoclave, Spectrophotometer</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-green-800 mb-2">Alat Farmasi</h3>
            <p className="text-gray-600">Tablet Counter, Capsule Filler, Coating Pan, Granulator</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold text-purple-800 mb-2">Alat Kesehatan</h3>
            <p className="text-gray-600">Patient Monitor, ECG Machine, Ultrasound, X-Ray</p>
          </div>
        </section>
        
        <section className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Hubungi Kami</h3>
          <p className="text-gray-600 mb-4">Ruko Mega Grosir Cempaka Mas Blok E1 No. 15 Lt. 3, Jakarta Pusat</p>
          <p className="text-gray-600 mb-4">Telepon: 0852-8570-3582</p>
          <p className="text-gray-600">Email: info@niagatama.co.id</p>
        </section>
      </main>
      
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2024 PT NIAGATAMA SUMBER ANUGERAH. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}