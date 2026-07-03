'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md" style={{ backgroundColor: '#faf9f7', color: '#1a1c1b' }}>
      {/* Top Navigation / Language Switcher */}
      <nav className="fixed top-0 right-0 p-8 z-10">
        <button className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-150 hover:opacity-80 active:scale-95" style={{ backgroundColor: '#f4f3f1', color: '#3c4a42' }}>
          <span className="material-symbols-outlined text-[20px]">language</span>
          <span className="font-label-md text-label-md">ID / EN</span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-margin-mobile md:px-margin-desktop py-20 relative overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-[0.03]" style={{ backgroundColor: '#006c4b' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-[0.05]" style={{ backgroundColor: '#735c00' }}></div>

        <div className="w-full max-w-[480px] z-10">
          {/* MITAN Identity */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2 mb-8">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#006c4b' }}>
                <span className="material-symbols-outlined text-white" style={{ fontSize: '20px' }}>favorite</span>
              </div>
              <span className="font-headline-sm text-headline-sm font-bold tracking-tight" style={{ color: '#006c4b' }}>MITAN</span>
            </div>
            <h1 className="font-headline-md text-headline-md mb-3" style={{ color: '#1a1c1b' }}>Selamat Datang Kembali</h1>
            <p className="font-body-md text-body-md max-w-[320px] mx-auto" style={{ color: '#3c4a42' }}>
              Lanjutkan ikhtiar Anda untuk menemukan pasangan hidup yang sejati.
            </p>
          </div>

          {/* Login Card */}
          <div className="rounded-xl p-8 md:p-10 border" style={{ 
            backgroundColor: '#ffffff',
            borderColor: 'rgba(107, 122, 114, 0.3)',
            boxShadow: '0px 4px 20px rgba(26, 54, 54, 0.04)',
            transition: 'box-shadow 0.3s ease'
          }}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field */}
              <div className="space-y-2">
                <label className="block font-body-sm text-body-sm font-bold" style={{ color: '#1a1c1b' }} htmlFor="email">
                  Email
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 bg-white border rounded-lg font-body-md transition-all"
                    id="email"
                    placeholder="nama@email.com"
                    type="email"
                    style={{
                      borderColor: '#bbcac0',
                      color: '#1a1c1b'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#006c4b';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 108, 75, 0.1)';
                      e.currentTarget.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#bbcac0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block font-body-sm text-body-sm font-bold" style={{ color: '#1a1c1b' }} htmlFor="password">
                  Kata Sandi
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 bg-white border rounded-lg font-body-md transition-all"
                    id="password"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                    style={{
                      borderColor: '#bbcac0',
                      color: '#1a1c1b'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#006c4b';
                      e.currentTarget.style.boxShadow = '0 0 0 2px rgba(0, 108, 75, 0.1)';
                      e.currentTarget.style.outline = 'none';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#bbcac0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors p-1"
                    onClick={togglePassword}
                    type="button"
                    style={{ color: '#bbcac0' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#006c4b'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#bbcac0'; }}
                  >
                    <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    className="w-5 h-5 rounded transition-all"
                    type="checkbox"
                    style={{
                      borderColor: '#bbcac0',
                      accentColor: '#006c4b'
                    }}
                  />
                  <span className="font-body-sm text-body-sm transition-colors" style={{ color: '#3c4a42' }}>
                    Ingat Saya
                  </span>
                </label>
                <a
                  className="font-body-sm text-body-sm font-semibold transition-all hover:underline"
                  href="#"
                  style={{ color: '#006c4b' }}
                >
                  Lupa Kata Sandi?
                </a>
              </div>

              {/* Primary Action */}
              <button
                className="w-full py-4 rounded-lg font-label-md text-label-md text-white shadow-sm transition-all duration-150 active:scale-[0.98] hover:opacity-90"
                type="submit"
                style={{ backgroundColor: '#006c4b' }}
              >
                Masuk
              </button>

              {/* Divider */}
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t" style={{ borderColor: 'rgba(107, 122, 114, 0.4)' }}></div>
                <span className="flex-shrink mx-4 font-body-sm text-body-sm" style={{ color: '#3c4a42' }}>atau</span>
                <div className="flex-grow border-t" style={{ borderColor: 'rgba(107, 122, 114, 0.4)' }}></div>
              </div>

              {/* Register Link */}
              <div className="text-center">
                <p className="font-body-md text-body-md" style={{ color: '#3c4a42' }}>
                  Belum punya akun?
                  <a className="font-bold ml-1 hover:underline" href="#" style={{ color: '#006c4b' }}>
                    Buat Akun
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-margin-mobile md:px-margin-desktop border-t" style={{ backgroundColor: '#ffffff', borderColor: 'rgba(107, 122, 114, 0.2)' }}>
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-sm text-body-sm" style={{ color: '#3c4a42' }}>© 2024 MITAN. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="font-body-sm text-body-sm transition-colors hover:underline" href="#" style={{ color: '#3c4a42' }}>
              Kebijakan Privasi
            </a>
            <a className="font-body-sm text-body-sm transition-colors hover:underline" href="#" style={{ color: '#3c4a42' }}>
              Syarat &amp; Ketentuan
            </a>
          </div>
        </div>
      </footer>

      <style>{`
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 24px;
          line-height: 1;
          letter-spacing: normal;
          text-transform: none;
          display: inline-block;
          white-space: nowrap;
          word-wrap: normal;
          direction: ltr;
          -webkit-font-feature-settings: 'liga';
          -webkit-font-smoothing: antialiased;
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        
        input::placeholder {
          color: rgba(107, 122, 114, 0.5);
        }

        .font-headline-sm {
          font-family: Manrope, sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
        }

        .font-headline-md {
          font-family: Manrope, sans-serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
        }

        .font-body-md {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }

        .font-body-sm {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }

        .font-label-md {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: 0.05em;
        }

        .text-headline-sm {
          font-family: Manrope, sans-serif;
          font-size: 24px;
          font-weight: 600;
          line-height: 32px;
        }

        .text-headline-md {
          font-family: Manrope, sans-serif;
          font-size: 32px;
          font-weight: 600;
          line-height: 40px;
        }

        .text-body-md {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }

        .text-body-sm {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }

        .text-label-md {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          line-height: 16px;
          letter-spacing: 0.05em;
        }

        .px-margin-mobile {
          padding-left: 16px;
          padding-right: 16px;
        }

        .px-margin-desktop {
          padding-left: 40px;
          padding-right: 40px;
        }

        @media (max-width: 768px) {
          .px-margin-desktop {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
      `}</style>
    </div>
  );
}
