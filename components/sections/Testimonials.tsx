import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '@data/testimonials';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonials() {
  const swiperRef = useRef<SwiperInstance | null>(null);

  return (
    <section className="section bg-ivory-300 relative overflow-hidden">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-3xl text-center mx-auto mb-14"
        >
          <span className="eyebrow">Ils nous font confiance</span>
          <h2 className="mt-5 font-display text-display-lg tracking-tightest text-balance">
            Ce que disent <span className="italic text-corail-600 font-normal">nos clients.</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            loop
            slidesPerView={1}
            spaceBetween={40}
            pagination={{ clickable: true, bulletClass: 'swiper-testimonial-bullet', bulletActiveClass: 'swiper-testimonial-bullet-active' }}
            className="!pb-12"
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-ivory rounded-4xl border border-border/60 p-8 md:p-14 text-center relative">
                  <Quote
                    size={60}
                    className="absolute -top-5 left-1/2 -translate-x-1/2 bg-ivory text-corail-500 p-3 rounded-full border border-border"
                    strokeWidth={1.5}
                  />
                  <div className="flex justify-center gap-1 mb-6 mt-2">
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star key={k} size={18} fill="#E8623A" className="text-corail-500" strokeWidth={0} />
                    ))}
                  </div>
                  <blockquote className="font-display text-[22px] md:text-[28px] leading-[1.4] text-espresso-800 tracking-tight text-balance">
                    « {t.quote} »
                  </blockquote>
                  <div className="mt-8 flex flex-col items-center gap-1">
                    <div className="font-semibold text-espresso-800">{t.name}</div>
                    <div className="text-[13px] text-espresso-400">
                      {t.location} · {t.project}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom nav */}
          <div className="hidden md:flex absolute inset-y-0 -left-16 items-center">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-12 h-12 rounded-full border border-border/80 bg-ivory grid place-items-center hover:bg-corail-500 hover:border-corail-500 hover:text-ivory transition-all"
              aria-label="Précédent"
            >
              <ArrowLeft size={18} strokeWidth={1.8} />
            </button>
          </div>
          <div className="hidden md:flex absolute inset-y-0 -right-16 items-center">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-12 h-12 rounded-full border border-border/80 bg-ivory grid place-items-center hover:bg-corail-500 hover:border-corail-500 hover:text-ivory transition-all"
              aria-label="Suivant"
            >
              <ArrowRight size={18} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-testimonial-bullet {
          display: inline-block;
          width: 32px;
          height: 2px;
          background: #CDB9AC;
          margin: 0 4px !important;
          opacity: 1;
          border-radius: 999px;
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          cursor: pointer;
        }
        .swiper-testimonial-bullet-active {
          background: #E8623A;
          width: 48px;
        }
      `}</style>
    </section>
  );
}
