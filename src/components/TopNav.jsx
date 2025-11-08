import React from 'react';
import { ShoppingCart, User, Search } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 md:px-8">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-[#3B82F6] text-white font-bold">J</div>
          <span className="text-lg font-semibold tracking-tight text-slate-900">Josmee</span>
        </a>

        <div className="hidden flex-1 items-center justify-center px-6 md:flex">
          <div className="relative w-full max-w-xl">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search products, brands and vendors..."
              className="w-full rounded-lg border border-slate-200 py-2 pl-10 pr-4 text-sm outline-none ring-[#3B82F6]/20 transition focus:border-[#3B82F6] focus:ring-2"
            />
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a href="#vendor" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#3B82F6] md:block">
            For Vendors
          </a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#3B82F6] px-3 py-2 text-sm font-semibold text-white shadow hover:bg-blue-600">
            <ShoppingCart size={18} />
            Cart
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 hover:border-[#3B82F6]">
            <User size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
}
