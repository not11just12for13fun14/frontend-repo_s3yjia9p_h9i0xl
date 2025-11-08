import React from 'react';
import TopNav from './components/TopNav';
import HeroCover from './components/HeroCover';
import FeaturedGrid from './components/FeaturedGrid';
import VendorCTA from './components/VendorCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900">
      <TopNav />

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-8 md:px-8">
        <HeroCover />
        <FeaturedGrid />
        <VendorCTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
