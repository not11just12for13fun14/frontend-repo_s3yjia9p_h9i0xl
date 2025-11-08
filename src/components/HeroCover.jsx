import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden rounded-2xl bg-slate-900">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-2xl text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]"></span>
              Multi‑Vendor Beauty Marketplace
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Josmee — Shop Smarter. Sell Better.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
              Discover authentic products from verified vendors. Real‑time inventory, seamless checkout, and a delightful shopping experience inspired by the best in beauty commerce.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#shop" className="inline-flex items-center justify-center rounded-lg bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Start Shopping
              </a>
              <a href="#vendor" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-300">
                Become a Vendor
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-900/40" />
    </section>
  );
}
