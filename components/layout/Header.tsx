import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@lib/cn';
import { NAV_ROUTES, CLIENT } from '@data/client';

interface HeaderProps {
  currentPath?: string;
}

export default function Header({ currentPath = '/' }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo',
          scrolled
            ? 'bg-ivory/80 backdrop-blur-xl border-b border-border/60 py-3 md:top-0'
            : 'bg-transparent py-5 md:top-10'
        )}
      >
        <div className="container-premium flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-border group-hover:ring-corail-500 transition">
              <Image
                src="/assets/img/logo-lt.png"
                alt="Logo Léna Rénove"
                width={44}
                height={44}
                className="object-cover"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-[20px] tracking-tight text-espresso-800">
                Léna <span className="text-corail-500">Rénove</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-espresso-400 mt-1">
                Artisan Peintre · 95
              </span>
            </div>
          </Link>

          <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-8">
            {NAV_ROUTES.map((route) => {
              const active = currentPath === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'relative text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300',
                    active ? 'text-corail-600' : 'text-espresso-700 hover:text-corail-600'
                  )}
                >
                  {route.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 right-0 h-px bg-corail-500"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact-peintre-magny-en-vexin.html"
              className="hidden md:inline-flex btn-primary !py-3 !px-6 !text-[12px]"
            >
              Devis Gratuit
            </Link>
            <button
              className="lg:hidden p-2 text-espresso-800 hover:text-corail-600 transition"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-ivory"
            data-lenis-prevent
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8 pt-20 pb-10">
              {NAV_ROUTES.map((route, i) => (
                <motion.div
                  key={route.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, ease: [0.19, 1, 0.22, 1] }}
                >
                  <Link
                    href={route.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-espresso-800 hover:text-corail-600 transition"
                  >
                    {route.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <a href={`tel:${CLIENT.phoneIntl}`} className="btn-primary">
                  {CLIENT.phone}
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
