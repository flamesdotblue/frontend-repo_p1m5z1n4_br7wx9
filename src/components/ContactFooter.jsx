import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const ContactFooter = () => {
  return (
    <footer id="contact" className="pt-20 pb-10 bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h4 className="text-white text-2xl font-extrabold">Butter & Beer</h4>
            <p className="mt-3 text-neutral-400">Indian family-owned restobar in Canada. Soulful food, vibrant drinks, and warm hospitality.</p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-white/10 hover:bg-white/20 transition">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-semibold">Hours</h5>
            <ul className="mt-2 space-y-1 text-sm text-neutral-400">
              <li>Mon–Thu: 12 pm – 10 pm</li>
              <li>Fri–Sat: 12 pm – 12 am</li>
              <li>Sun: 12 pm – 9 pm</li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-semibold">Contact</h5>
            <ul className="mt-2 space-y-2 text-sm text-neutral-400">
              <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> 123 Spice Street, Your City, Canada</li>
              <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5" /> (555) 123-4567</li>
              <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5" /> hello@butterandbeer.ca</li>
            </ul>
            <a href="#" className="mt-3 inline-flex items-center justify-center w-full px-4 py-2 rounded-md bg-amber-500 text-neutral-950 font-semibold hover:bg-amber-400 transition">
              Book a table
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-neutral-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Butter & Beer. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Last call 30 mins before close</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;