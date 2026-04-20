import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  { img: '/assets/img/projet-renov-3.jpg', label: 'Peinture salon', location: 'Pontoise' },
  { img: '/assets/img/projet-renov-6.jpg', label: 'Papier peint chambre', location: 'Cergy' },
  { img: '/assets/img/projet-renov-9.jpg', label: 'Vinyle cuisine', location: 'L\'Isle-Adam' },
  { img: '/assets/img/projet-renov-1.jpg', label: 'Enduit ratissage', location: 'Saint-Germain' },
];

export default function PortfolioPreview() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-premium">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">
          <div>
            <span className="eyebrow">Nos réalisations</span>
            <h2 className="mt-5 font-display text-display-lg tracking-tightest">
              Chantiers récents,<br />
              <span className="italic text-corail-600 font-normal">finitions sans compromis.</span>
            </h2>
          </div>
          <Link href="/portfolio.html" className="btn-link group">
            Voir tout le portfolio
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" strokeWidth={1.8} />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.img}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.19, 1, 0.22, 1] }}
              className={
                'group relative overflow-hidden rounded-2xl ' +
                (i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-[3/4] lg:mt-10')
              }
            >
              <Image
                src={project.img}
                alt={`${project.label} · ${project.location}`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-800 via-espresso-800/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 text-ivory">
                <div className="text-[10px] uppercase tracking-[0.25em] text-corail-300 mb-1.5">
                  {project.location}
                </div>
                <div className="font-display text-lg lg:text-xl leading-tight">
                  {project.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
