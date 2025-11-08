import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10 md:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3B82F6] text-white font-bold">J</div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">Josmee</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-slate-600">
              A multi‑vendor marketplace that brings premium beauty and personal care products to your fingertips. Secure, fast, and delightful.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#3B82F6]">About</a></li>
              <li><a href="#" className="hover:text-[#3B82F6]">Careers</a></li>
              <li><a href="#" className="hover:text-[#3B82F6]">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-[#3B82F6]">Help Center</a></li>
              <li><a href="#" className="hover:text-[#3B82F6]">Contact</a></li>
              <li><a href="#" className="hover:text-[#3B82F6]">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-600 md:flex-row">
          <p>© {new Date().getFullYear()} Josmee Inc. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#3B82F6]">Terms</a>
            <a href="#" className="hover:text-[#3B82F6]">Cookies</a>
            <a href="#" className="hover:text-[#3B82F6]">GDPR</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
