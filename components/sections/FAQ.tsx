import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { HOME_FAQ, FAQItem } from '@data/faq';

interface FAQProps {
  title?: string;
  eyebrow?: string;
  items?: FAQItem[];
}

export default function FAQ({
  title = 'FAQ — Peintre à Magny-en-Vexin',
  eyebrow = 'Questions fréquentes',
  items = HOME_FAQ,
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-ivory-300 relative overflow-hidden">
      <div className="container-premium">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start"
          >
            <span className="eyebrow">{eyebrow}</span>
            <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
              {title.split('—').map((part, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-corail-600">—</span>}
                  <span className={i === 1 ? 'italic text-corail-600 font-normal' : ''}>{part}</span>
                </span>
              ))}
            </h2>
            <p className="mt-6 text-espresso-500 leading-relaxed">
              Vous ne trouvez pas votre réponse&nbsp;? Contactez-nous directement —
              on vous répond sous 24h.
            </p>
          </motion.div>

          <div className="lg:col-span-7 space-y-3">
            {items.map((item, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.19, 1, 0.22, 1] }}
                  className="border border-border/70 rounded-2xl bg-ivory overflow-hidden"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between gap-6 text-left p-6 lg:p-7 hover:bg-ivory-300/50 transition"
                  >
                    <span className="font-display text-[18px] lg:text-[20px] leading-snug text-espresso-800 tracking-tight pr-2">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                      className="flex-shrink-0 w-9 h-9 rounded-full bg-corail-500 text-ivory grid place-items-center mt-0.5"
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 lg:px-7 pb-7 text-espresso-500 leading-relaxed text-[15px]">
                          {item.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
