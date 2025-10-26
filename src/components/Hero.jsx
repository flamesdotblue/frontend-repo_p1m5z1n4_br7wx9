import React from 'react';
import { Star, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50 via-white to-white pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold">
              Family-owned in Canada
              <span className="inline-flex items-center gap-1 text-amber-700">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                Authentic Indian flavours
              </span>
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900">
              Butter & Beer
            </h1>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              A cozy Indian restobar bringing the heart of India to Canada. Savor rich curries, smoky tandoor grills, and a full bar with classic pints and craft cocktails.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#menu" className="inline-flex justify-center items-center px-6 py-3 rounded-md bg-amber-600 text-white hover:bg-amber-700 transition font-semibold">
                Explore Menu
              </a>
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-md border border-neutral-300 hover:border-neutral-400 text-neutral-800 bg-white transition font-semibold">
                Reserve a Table
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
              <div className="inline-flex items-center gap-2"><Clock className="w-4 h-4" /> Open late on weekends</div>
              <div className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Veg & Non-Veg</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-tr from-amber-200 via-amber-50 to-white border border-amber-100">
              <div className="absolute inset-0 grid grid-cols-3">
                <div className="m-6 rounded-xl bg-white/70 backdrop-blur border border-white shadow-sm"></div>
                <div className="m-6 rounded-xl bg-white/70 backdrop-blur border border-white shadow-sm"></div>
                <div className="m-6 rounded-xl bg-white/70 backdrop-blur border border-white shadow-sm"></div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 border border-amber-100 shadow-sm">
                <p className="text-sm text-neutral-700">
                  From butter chicken to biryani — paired with the perfect beer. Crafted with love by an Indian family, served with Canadian warmth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;