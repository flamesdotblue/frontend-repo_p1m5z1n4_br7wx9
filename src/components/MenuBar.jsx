import React from 'react';
import { Flame, Leaf, Drumstick, Beer, Martini, Wine, Sparkles } from 'lucide-react';

const Item = ({ icon: Icon, title, desc, badge }) => (
  <div className="p-5 rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition">
    <div className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-700 inline-flex items-center justify-center">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-semibold text-neutral-900">{title}</h4>
          {badge && (
            <span className="text-[10px] uppercase tracking-wide bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-md">{badge}</span>
          )}
        </div>
        <p className="text-sm text-neutral-600 mt-1">{desc}</p>
      </div>
    </div>
  </div>
);

const MenuBar = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">Signature Dishes & Bar</h2>
            <p className="mt-2 text-neutral-600">Indian classics with a modern twist plus a full bar — crafted to pair perfectly.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            <Sparkles className="w-4 h-4" />
            Seasonal specials available
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Item icon={Flame} title="Butter Chicken" desc="Creamy tomato gravy, tender chicken, fresh fenugreek. Our namesake star." />
            <Item icon={Leaf} title="Paneer Tikka" desc="Tandoor-grilled cottage cheese, peppers, onion — smoky and satisfying." badge="veg" />
            <Item icon={Drumstick} title="Tandoori Platter" desc="Assorted kebabs, mint chutney, lemon — perfect for sharing." />
            <Item icon={Flame} title="Hyderabadi Biryani" desc="Aromatic basmati layered with spices and your choice of protein." />
          </div>
          <div className="space-y-4">
            <Item icon={Beer} title="Indian Lager on Tap" desc="Crisp and refreshing — a classic companion to spice." />
            <Item icon={Martini} title="Mango Chili Margarita" desc="Tequila, fresh lime, mango puree, chili-salt rim." />
            <Item icon={Wine} title="Curated Wine List" desc="Light whites, bold reds, and elegant rosé to pair with rich flavours." />
            <Item icon={Martini} title="Masala Old Fashioned" desc="Bourbon infused with warm spices, bitters, orange." />
          </div>
        </div>

        <div className="mt-8 text-sm text-neutral-500">
          Please inform us of any allergies. Vegan, gluten-free, and Jain options available upon request.
        </div>
      </div>
    </section>
  );
};

export default MenuBar;