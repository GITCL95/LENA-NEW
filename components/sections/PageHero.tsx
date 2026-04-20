import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
  variant?: 'dark' | 'light';
}

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  variant = 'dark',
}: PageHeroProps) {
  const isDark = variant === 'dark';
  return (
    <section
      className={
        'relative pt-44 pb-20 md:pt-56 md:pb-28 overflow-hidden ' +
        (isDark ? 'bg-espresso-800 text-ivory' : 'bg-ivory-300 text-espresso-800')
      }
    >
      {isDark && (
        <>
          <div className="absolute inset-0 grain-overlay opacity-50 pointer-events-none" />
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-corail-500/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-corail-400/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="container-premium relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          aria-label="Fil d'ariane"
          className={
            'flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] mb-8 ' +
            (isDark ? 'text-ivory/60' : 'text-espresso-400')
          }
        >
          {breadcrumb.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className={isDark ? 'hover:text-corail-300 transition' : 'hover:text-corail-600 transition'}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className={isDark ? 'text-corail-300' : 'text-corail-600'}>{crumb.label}</span>
              )}
              {i < breadcrumb.length - 1 && <ChevronRight size={12} className="opacity-50" />}
            </span>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-5xl"
        >
          <span
            className={
              'eyebrow ' +
              (isDark
                ? '!text-corail-300 before:!bg-corail-400'
                : '')
            }
          >
            {eyebrow}
          </span>
          <h1
            className={
              'mt-6 font-display text-display-xl tracking-tightest text-balance ' +
              (isDark ? 'text-ivory' : 'text-espresso-800')
            }
          >
            {title}
          </h1>
          {description && (
            <p
              className={
                'mt-8 max-w-3xl text-[17px] md:text-[19px] leading-relaxed ' +
                (isDark ? 'text-ivory/75' : 'text-espresso-500')
              }
            >
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
