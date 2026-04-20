import { CLIENT } from '@data/client';
import { Phone, Mail, Clock } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="hidden md:block bg-espresso-800 text-ivory/80 text-[12px] tracking-wide">
      <div className="container-premium flex h-10 items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${CLIENT.phoneIntl}`}
            className="flex items-center gap-2 hover:text-corail-300 transition"
          >
            <Phone size={13} strokeWidth={1.8} />
            <span>{CLIENT.phone}</span>
          </a>
          <span className="text-ivory/20">|</span>
          <a
            href={`mailto:${CLIENT.email}`}
            className="flex items-center gap-2 hover:text-corail-300 transition"
          >
            <Mail size={13} strokeWidth={1.8} />
            <span>{CLIENT.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={13} strokeWidth={1.8} />
          <span>Lun–Ven 8h–18h · Sam 9h–12h</span>
        </div>
      </div>
    </div>
  );
}
