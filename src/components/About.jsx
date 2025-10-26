import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-12 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900">Our Story</h3>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Butter & Beer is our family dream, lovingly built in Canada. We grew up around spice boxes, sizzling tandoors, and the music of dinner tables filled with laughter. Here, we celebrate that spirit every day — honouring Indian traditions while embracing our Canadian home.
          </p>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Expect comfort classics like butter chicken and paneer tikka, regional specials that rotate, and a warm bar program that pairs beautifully with rich Indian flavours. Whether it’s a casual pint, a family celebration, or date night, there’s a seat for you at our table.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="font-semibold text-amber-900">Tandoor & Grill</div>
              <div className="text-amber-800">Smoky, charred, irresistible</div>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="font-semibold text-amber-900">Veg & Non-Veg</div>
              <div className="text-amber-800">Inclusive, flavorful choices</div>
            </div>
            <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="font-semibold text-amber-900">Full Bar</div>
              <div className="text-amber-800">Beer, wine, cocktails</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;