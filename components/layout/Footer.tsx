import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { CLIENT, NAV_ROUTES } from '@data/client';
import { CITIES } from '@data/cities';

export default function Footer() {
  return (
    <footer className="relative bg-espresso-800 text-ivory overflow-hidden">
      <div className="absolute inset-0 grain-overlay opacity-50 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-corail-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-premium relative z-10 pt-24 pb-8">
        {/* CTA pre-footer */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pb-16 border-b border-ivory/10">
          <div className="max-w-2xl">
            <span className="eyebrow !text-corail-300 before:!bg-corail-400">Contact</span>
            <h2 className="mt-4 font-display text-[clamp(32px,5vw,56px)] leading-[1.05] tracking-tightest text-balance">
              Parlons de votre projet.<br />
              <span className="italic font-normal text-corail-300">Devis en 24h.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact-peintre-magny-en-vexin.html" className="btn-primary">
              Devis Gratuit
            </Link>
            <a href={`tel:${CLIENT.phoneIntl}`} className="btn-outline-light">
              {CLIENT.phone}
            </a>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/assets/img/logo-lt.png"
                alt="Léna Rénove"
                width={48}
                height={48}
                className="rounded-full ring-1 ring-ivory/20"
              />
              <div>
                <div className="font-display text-xl">Léna <span className="text-corail-400">Rénove</span></div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-ivory/50">Artisan Peintre</div>
              </div>
            </Link>
            <p className="text-ivory/70 leading-relaxed text-[15px] mb-6 max-w-sm">
              Artisan peintre en bâtiment depuis {CLIENT.credentials.experience} ans, basée à Vétheuil.
              CAP Peintre, RC Pro, peintures professionnelles Tollens & Sikkens.
            </p>
            <div className="space-y-3 text-[14px]">
              <div className="flex items-start gap-3 text-ivory/80">
                <MapPin size={16} className="mt-0.5 text-corail-400 flex-shrink-0" strokeWidth={1.8} />
                <span>{CLIENT.address.street}, {CLIENT.address.postalCode} · Val-d&apos;Oise</span>
              </div>
              <a href={`tel:${CLIENT.phoneIntl}`} className="flex items-start gap-3 text-ivory/80 hover:text-corail-300 transition">
                <Phone size={16} className="mt-0.5 text-corail-400 flex-shrink-0" strokeWidth={1.8} />
                <span>{CLIENT.phone}</span>
              </a>
              <a href={`mailto:${CLIENT.email}`} className="flex items-start gap-3 text-ivory/80 hover:text-corail-300 transition">
                <Mail size={16} className="mt-0.5 text-corail-400 flex-shrink-0" strokeWidth={1.8} />
                <span>{CLIENT.email}</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-lg mb-5">Pages</h4>
            <nav className="flex flex-col gap-2.5 text-[14px]">
              {NAV_ROUTES.map((r) => (
                <Link key={r.href} href={r.href} className="text-ivory/70 hover:text-corail-300 transition">
                  {r.label}
                </Link>
              ))}
              <Link href="/mentions-legales.html" className="text-ivory/70 hover:text-corail-300 transition">
                Mentions légales
              </Link>
            </nav>
          </div>

          {/* Zones */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg mb-5">Zones d&apos;intervention</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px]">
              {CITIES.map((c) => (
                <Link key={c.slug} href={c.href} className="text-ivory/70 hover:text-corail-300 transition">
                  {c.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Horaires + Social */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-lg mb-5">Horaires</h4>
            <div className="space-y-2 text-[14px] text-ivory/70 mb-6">
              <div>{CLIENT.hours.weekdays}</div>
              <div>{CLIENT.hours.saturday}</div>
              <div className="text-ivory/40">{CLIENT.hours.sunday}</div>
            </div>
            <a
              href={CLIENT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[13px] text-ivory hover:text-corail-300 transition group"
            >
              <span className="w-10 h-10 rounded-full border border-ivory/20 grid place-items-center group-hover:border-corail-400 group-hover:bg-corail-500/10 transition">
                <Instagram size={16} strokeWidth={1.5} />
              </span>
              {CLIENT.instagramHandle}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-ivory/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px] text-ivory/50">
          <span>© {new Date().getFullYear()} {CLIENT.brand} · {CLIENT.owner} · SIRET {CLIENT.siret} · {CLIENT.rcs}</span>
          <Link href="/mentions-legales.html" className="hover:text-corail-300 transition">
            Mentions légales
          </Link>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative overflow-hidden -mt-4">
        <div
          className="font-display leading-none select-none opacity-[0.07] whitespace-nowrap text-[20vw] lg:text-[16vw] text-corail-300"
          aria-hidden="true"
        >
          Léna Rénove
        </div>
      </div>
    </footer>
  );
}
