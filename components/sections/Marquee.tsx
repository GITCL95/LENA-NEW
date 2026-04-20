interface MarqueeProps {
  items?: string[];
}

export default function Marquee({ items }: MarqueeProps) {
  const defaultItems = [
    'Peinture intérieure',
    'Enduits de ratissage',
    'Papier peint',
    'Vinyle adhésif',
    'Tollens',
    'Sikkens',
    'Val-d\'Oise',
    'Yvelines',
    'CAP Peintre',
    'RC Pro',
  ];
  const list = items ?? defaultItems;
  const doubled = [...list, ...list];

  return (
    <div className="bg-espresso-800 text-ivory border-y border-corail-500/20 overflow-hidden">
      <div className="marquee py-6">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center gap-10 px-5">
              <span className="font-display text-[clamp(24px,3vw,40px)] whitespace-nowrap text-ivory/90">
                {item}
              </span>
              <span className="text-corail-500 text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
