import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { CITIES } from '@data/cities';

export default function CitiesGrid() {
  return (
    <section className="section relative overflow-hidden bg-ivory">
      <div className="container-premium">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="eyebrow">Zones d&apos;intervention</span>
            <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance max-w-2xl">
              Peintre dans le <span className="italic text-corail-600 font-normal">Val-d&apos;Oise</span><br />
              et les <span className="italic text-corail-600 font-normal">Yvelines.</span>
            </h2>
            <p className="mt-6 max-w-xl text-espresso-500 leading-relaxed">
              Basée à Vétheuil (95), Léna Rénove intervient dans un rayon de 50 km autour de Magny-en-Vexin.
            </p>
          </motion.div>

          <Link href="/peintre-renovation-val-d-oise-yvelines.html" className="btn-outline">
            Voir toutes les zones
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </div>

        {/* Cities grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {CITIES.map((city, i) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.19, 1, 0.22, 1] }}
            >
              <Link
                href={city.href}
                className="group relative block bg-ivory-300 rounded-2xl p-5 lg:p-6 border border-transparent hover:border-corail-500 hover:bg-ivory hover:shadow-card transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <MapPin size={16} className="text-corail-500" strokeWidth={1.8} />
                  <ArrowUpRight
                    size={16}
                    className="text-espresso-300 group-hover:text-corail-600 group-hover:rotate-45 transition-all"
                    strokeWidth={1.8}
                  />
                </div>
                <div className="font-display text-lg lg:text-xl text-espresso-800 tracking-tight group-hover:text-corail-600 transition">
                  {city.name}
                </div>
                <div className="mt-1 flex items-center gap-2 text-[12px] text-espresso-400">
                  <span>{city.postalCode}</span>
                  <span className="h-0.5 w-0.5 rounded-full bg-espresso-300" />
                  <span>{city.distance}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
