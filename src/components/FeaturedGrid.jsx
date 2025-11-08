import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'HydraGlow Serum',
    price: 29.99,
    rating: 4.7,
    img: 'https://images.unsplash.com/photo-1556228724-4a5e0420cf04?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Silk Touch Conditioner',
    price: 19.99,
    rating: 4.5,
    img: 'https://images.unsplash.com/photo-1585386959984-a41552231658?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Velvet Matte Lipstick',
    price: 14.5,
    rating: 4.2,
    img: 'https://images.unsplash.com/photo-1596461404969-9ae70bd2d1f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Radiant Day Cream',
    price: 24.0,
    rating: 4.6,
    img: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function FeaturedGrid() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Featured Picks</h2>
          <p className="mt-1 text-sm text-slate-600">Top-rated items from verified vendors</p>
        </div>
        <a href="#" className="text-sm font-semibold text-[#3B82F6] hover:underline">View all</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => (
          <article key={p.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-slate-800 shadow">
                In stock
              </div>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-1 font-semibold text-slate-900">{p.name}</h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-lg font-bold text-slate-900">${p.price.toFixed(2)}</span>
                <span className="inline-flex items-center gap-1 text-sm text-amber-600">
                  <Star size={16} fill="currentColor" /> {p.rating}
                </span>
              </div>
              <button className="mt-4 w-full rounded-lg bg-[#3B82F6] py-2 text-sm font-semibold text-white hover:bg-blue-600">Add to cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
