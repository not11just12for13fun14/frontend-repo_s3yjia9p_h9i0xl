import React from 'react';
import { ShieldCheck, Store, Truck } from 'lucide-react';

export default function VendorCTA() {
  return (
    <section id="vendor" className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Sell on Josmee
          </h2>
          <p className="mt-3 text-slate-600">
            Onboard in minutes, manage inventory in real time, and reach customers across the globe. Secure payouts and built-in reviews help you build trust from day one.
          </p>

          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-center gap-3">
              <Store className="text-[#3B82F6]" size={20} />
              Dedicated vendor dashboard
            </li>
            <li className="flex items-center gap-3">
              <Truck className="text-[#3B82F6]" size={20} />
              Integrated shipping and order tracking
            </li>
            <li className="flex items-center gap-3">
              <ShieldCheck className="text-[#3B82F6]" size={20} />
              Verification and fraud protection
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#" className="rounded-lg bg-[#3B82F6] px-5 py-3 text-sm font-semibold text-white hover:bg-blue-600">Create vendor account</a>
            <a href="#" className="rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:border-[#3B82F6]">Learn more</a>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Vendor Onboarding</h3>
              <p className="text-sm text-slate-600">A quick look at what you'll set up</p>
            </div>
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">5 min</span>
          </div>
          <ol className="space-y-3 text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#3B82F6] text-center text-xs font-bold leading-5 text-white">1</span>
              Verify identity and brand details
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#3B82F6] text-center text-xs font-bold leading-5 text-white">2</span>
              Add products and set stock alerts
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#3B82F6] text-center text-xs font-bold leading-5 text-white">3</span>
              Connect Stripe for secure payouts
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-[#3B82F6] text-center text-xs font-bold leading-5 text-white">4</span>
              Start selling with real‑time inventory
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
