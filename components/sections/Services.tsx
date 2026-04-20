import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@data/services';

export default function Services() {
  return (
    <section className="section bg-ivory-300 relative overflow-hidden">
      <div className="container-premium relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow">Nos prestations</span>
            <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
              Quatre domaines d&apos;expertise<br />
              pour <span className="italic text-corail-600 font-normal">transformer vos intérieurs.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-espresso-500 max-w-sm text-[16px] leading-relaxed"
          >
            De la préparation des supports à la finition soignée,
            chaque étape est réalisée avec rigueur et passion.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.19, 1, 0.22, 1] }}
            >
              <Link
                href={`/peinture-interieure-renovation-magny-en-vexin.html#${service.slug}`}
                className="group card-premium block"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-800/40 via-transparent to-transparent" />

                  {/* Number */}
                  <div className="absolute top-5 left-5 font-display text-ivory text-[13px] tracking-[0.3em] bg-espresso-800/70 backdrop-blur-sm rounded-full px-3 py-1.5">
                    {service.number} / 04
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-ivory/90 backdrop-blur-sm grid place-items-center transform transition-all duration-500 group-hover:bg-corail-500 group-hover:rotate-45">
                    <ArrowUpRight size={20} className="text-espresso-800 group-hover:text-ivory transition" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Body */}
                <div className="p-8 lg:p-10">
                  <h3 className="font-display text-[28px] lg:text-[32px] tracking-tight leading-[1.1] text-espresso-800 group-hover:text-corail-600 transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-espresso-500 text-[15px] leading-relaxed">
                    {service.excerpt}
                  </p>

                  {/* Features */}
                  <ul className="mt-6 pt-6 border-t border-border/60 grid grid-cols-2 gap-x-4 gap-y-2 text-[13px] text-espresso-700">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-corail-500 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 flex justify-center"
        >
          <Link href="/peinture-interieure-renovation-magny-en-vexin.html" className="btn-outline">
            Voir tous les services
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
