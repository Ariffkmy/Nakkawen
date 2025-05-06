import React from "react";

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-indigo-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M8 7V3M16 7V3M4 11h16M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Pengurusan Jadual",
    desc: "Rancang dan urus semua aktiviti perkahwinan anda dengan satu kalendar yang mudah.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-indigo-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87M16 3.13a4 4 0 010 7.75M8 3.13a4 4 0 000 7.75" />
      </svg>
    ),
    title: "Senarai Tetamu",
    desc: "Urus senarai tetamu dengan mudah dan jejaki kehadiran secara masa nyata.",
  },
  {
    icon: (
      <svg className="w-10 h-10 text-indigo-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8c-3.31 0-6 2.69-6 6v4h12v-4c0-3.31-2.69-6-6-6z" />
        <circle cx="12" cy="4" r="4" />
      </svg>
    ),
    title: "Pengurusan Bajet",
    desc: "Kawal perbelanjaan dan pantau bajet perkahwinan anda dengan mudah.",
  },
];

const faqs = [
  {
    q: "Bagaimana untuk mula menggunakan Nakkawen?",
    a: "Daftar akaun secara percuma dan mula rancang perkahwinan anda dengan mudah!",
  },
  {
    q: "Adakah Nakkawen percuma?",
    a: "Nakkawen menawarkan pelan percuma dan pelan berbayar dengan ciri tambahan.",
  },
  {
    q: "Bolehkah saya menjemput pasangan saya untuk merancang bersama?",
    a: "Ya, anda boleh menjemput pasangan atau keluarga untuk bersama-sama merancang.",
  },
];

function App() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-pink-50 to-pink-100 min-h-screen flex flex-col p-8">
      
       {/* Header/Navbar */}
       <header className="w-full flex items-center justify-between px-8 py-4 border-b border-white/20 bg-white/80 backdrop-blur mt-10">
        {/* Logo at far left */}
        <div className="flex items-center space-x-2">
          <span className="bg-white rounded-full p-1">
            <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="3.5" />
            </svg>
          </span>
          <span className="font-bold text-pink-400 text-lg">nakkawen</span>
        </div>
        {/* Centered nav links */}
        <nav className="hidden md:flex space-x-16 font-medium text-pink-400">
          <a href="#products" className="hover:text-pink-500 px-8" >Products</a>
          <a href="#features" className="hover:text-pink-500 px-8">Features</a>
          <a href="#pricing" className="hover:text-pink-500 px-8">Pricing</a>
          <a href="#support" className="hover:text-pink-500 px-8">Support</a>
        </nav>
        {/* Outlined button at far right */}
        <button className="border border-pink-400 text-pink-400 font-semibold px-6 py-2 rounded-full hover:bg-pink-50 transition mt-10">Start free trial</button>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto flex flex-col items-center text-center py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold text-pink-400 mb-6 leading-tight">
          Rancang Perkahwinan Impian Anda<br className="hidden md:block" /> Dengan Mudah
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
          Rancang majlis anda tanpa perlu rasa stress! Semua yang anda perlukan untuk pengurusan jadual, bajet, dan tetamu dalam satu platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded font-semibold hover:bg-indigo-700 transition">Daftar sekarang</button>
          <button className="flex items-center justify-center border border-indigo-600 text-indigo-600 px-8 py-3 rounded font-semibold hover:bg-indigo-50 transition">
            Ketahui lebih lanjut
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>
      </section>

      {/* Screen Mockup Section */}
      <section className="max-w-5xl mx-auto w-full flex flex-col items-center py-10" id="mockup">
        <div className="w-full h-72 md:h-96 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-gray-100">
          <span className="text-gray-400 text-lg">[ Ruang mockup aplikasi di sini ]</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-20 px-4" id="features">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kenapa pilih Nakkawen?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-8 text-center border border-gray-100 hover:shadow-lg transition">
              {f.icon}
              <h3 className="font-bold text-lg text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="max-w-6xl mx-auto py-20 px-4" id="pricing">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Pelan Harga</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
            <h3 className="text-xl font-bold mb-2">Percuma</h3>
            <p className="text-gray-600 mb-4">Ciri-ciri asas untuk mula merancang perkahwinan anda.</p>
            <div className="text-3xl font-extrabold mb-4">RM0</div>
            <ul className="text-gray-600 mb-6 space-y-2 text-sm">
              <li>Pengurusan jadual</li>
              <li>Senarai tetamu</li>
              <li>Pengurusan bajet</li>
            </ul>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded font-semibold hover:bg-indigo-700 transition">Daftar Percuma</button>
          </div>
          <div className="flex-1 bg-indigo-600 rounded-xl shadow-md p-8 border border-indigo-700 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-indigo-700 text-xs px-3 py-1 rounded-bl-xl font-bold">Popular</div>
            <h3 className="text-xl font-bold mb-2">Premium</h3>
            <p className="text-indigo-100 mb-4">Ciri-ciri lanjutan untuk pengalaman merancang yang lebih baik.</p>
            <div className="text-3xl font-extrabold mb-4">RM49</div>
            <ul className="text-indigo-100 mb-6 space-y-2 text-sm">
              <li>Semua dalam Percuma</li>
              <li>Jemput pasangan/keluarga</li>
              <li>Export data</li>
              <li>Sokongan premium</li>
            </ul>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded font-semibold hover:bg-indigo-50 transition">Pilih Premium</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto py-20 px-4" id="faq">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Soalan Lazim</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-gray-200 bg-white text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} nakkawen. Hak cipta terpelihara.
      </footer>
    </div>
  );
}

export default App;