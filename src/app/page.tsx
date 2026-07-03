export default function LandingPage() {
  return (
    <div className="bg-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="p-4 md:p-8">
        <div className="main-canvas">
          {/* Header */}
          <header className="flex items-center justify-between px-10 py-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-mitan-teal rounded-md flex items-center justify-center">
                <svg className="text-white w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                </svg>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-gray-800 uppercase">Mitan</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-700">
              <a href="#" className="hover:text-mitan-teal transition-colors">Values</a>
              <a href="#" className="hover:text-mitan-teal transition-colors">How it Works</a>
              <a href="#" className="hover:text-mitan-teal transition-colors">Stories</a>
              <a href="#" className="hover:text-mitan-teal transition-colors">Pricing</a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="bg-mitan-teal text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-600 transition-all">
                Start Your Journey
              </button>
              <button className="bg-gray-100 text-gray-800 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all">
                Log In
              </button>
            </div>
          </header>

          {/* Hero Section */}
          <main className="px-10 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full">
                <span className="text-[10px] font-bold text-mitan-teal tracking-widest uppercase">Family-First Matrimony</span>
                <span className="w-1 h-1 bg-mitan-teal rounded-full"></span>
                <span className="text-[10px] font-medium text-emerald-600">Built with Wali Oversight</span>
              </div>

              <h1 className="text-6xl font-extrabold text-gray-900 leading-[1.1]">
                Built for <span className="text-mitan-teal">Family</span> <br /> &amp; Faith
              </h1>

              <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                A community-centered matrimony platform designed for meaningful connection and respectful family involvement through our integrated Wali System.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-mitan-teal text-white px-8 py-4 rounded-full text-md font-bold shadow-xl shadow-emerald-200 hover:scale-105 transition-transform">
                  Start Your Journey
                </button>
                <button className="flex items-center gap-2 border border-gray-100 px-6 py-4 rounded-full text-md font-bold text-gray-800 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                  The Wali System
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-900 overflow-hidden">
                    <img alt="Family 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnIZSkZ0en4BaPNFIUmafz7_PYtOWWaSy3MkFh_ZHhQXwx6qcDxezflI3w4FybRVlCK4Iw9AXNoH9SVLPaF0dSrzm22H4Oovo3Wrl3ChzRW1a3zWnHOZeCPAM7dPVKMSwAEMy1NHDMYIWxAg7NKoA24MPHKSnXHuc0dEVt3_ESDP-IFMmaVeXEFvxr9xhaH-w3V6KuzAwYoXPzqadHpEy9KXMSiQh4C46sQ_rTgoO9gcx3m4kQ4wgUO2Z8g9wuuWWAN0DBy2eKjQ" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-700 overflow-hidden">
                    <img alt="Family 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf9CG5ITo24YUE3PIGMzJ3a1PaSBhIXUBYcfk-DLQJz2TXwoZkv4e1kXY86_bfFggcYkEjtfO3HkzqyC2i5IhlqzXBLLwd610kTpoVOHms0NHvJpd6MZ0NTR8nhnPhAB8tq11vxNx2z8rBd19AUNg83eKO_kfCTfSrSQHSnc-QrZW4psHlqDwjXHVJipEXX1Tv3pqPZk2STO5LdPOVoj3YFFc-d9ryvArqDsKlkhdOxUf6JcTL32oHlwAyN1d4idvd1-935usOKA" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-900 overflow-hidden">
                    <img alt="Family 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOnUk-eiwqrj-2prAx8vC9GG5bosLGw3WVr9bwWC_5BBp7mml479PHq9aGdC9hRL35rOUSKuGFAZeigtiRSfBS_jgd_Qxnx_duKM29Cx-JnPFBjFNNv6U_CotH3mj3v9iASNG6okbqY7ae9Jx0K8hggKgZFzR4YdjjHSrIp_6ScviYP60OvZFQ2faVA0f_hyVS2tAbFknmtJuvgD5t-ivR0aQRIKu9lFqKuha948GSx5jUWLEHm-4KL0_62KiTtshVIVVY7P0Qhw" className="w-full h-full object-cover" />
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Trusted by <span className="font-bold text-gray-700">2,400+</span> families this month
                </p>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="hero-image-container flex justify-end">
              <div className="hero-image-bg-shape"></div>
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl max-w-sm lg:max-w-md">
                <img alt="Couple looking at each other" className="w-full h-auto object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg" />
                {/* Floating Verification Card */}
                <div className="absolute bottom-6 left-6 right-6 landing-glass-card p-4 rounded-2xl flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-mitan-teal">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Wali Verified</h4>
                    <p className="text-xs text-gray-600">Family-backed introduction</p>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Footer Brands/Regions */}
          <footer className="px-10 py-10 bg-gray-50/50 border-t border-gray-100">
            <p className="text-center text-[10px] font-bold text-mitan-teal tracking-[0.2em] uppercase mb-8">
              Uniting Communities Across
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-60 grayscale">
              <span className="text-xl font-extrabold tracking-tighter text-gray-800">SINGAPORE</span>
              <span className="text-xl font-extrabold tracking-tighter text-gray-800">MALAYSIA</span>
              <span className="text-xl font-extrabold tracking-tighter text-gray-800">INDONESIA</span>
              <span className="text-xl font-extrabold tracking-tighter text-gray-800">UK</span>
              <span className="text-xl font-extrabold tracking-tighter text-gray-800">CANADA</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
