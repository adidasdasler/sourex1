import { useScrollAnimation } from '../hooks/useAnimations';

const partners = [
  { name: 'MANN-FILTER', since: '2020' },
  { name: 'Bosch', since: '2020' },
  { name: 'NGK', since: '2021' },
  { name: 'SKF', since: '2020' },
  { name: 'TRW', since: '2021' },
  { name: 'Sachs', since: '2022' },
  { name: 'Febi', since: '2021' },
  { name: 'Lemforder', since: '2022' },
  { name: 'Valeo', since: '2022' },
  { name: 'Denso', since: '2023' },
  { name: 'Mahle', since: '2021' },
  { name: 'Continental', since: '2023' },
];

export default function PartnersSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-sm text-white/40 uppercase tracking-wider font-medium">
            Официальные поставки от ведущих брендов
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0a1628] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a1628] to-transparent z-10" />
          
          <div className="flex gap-8 animate-[scroll_30s_linear_infinite]">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-6 py-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-[#f6ad55]/20 hover:bg-white/[0.06] transition-all group"
              >
                <div className="text-sm font-bold text-white/30 group-hover:text-white/60 transition-colors whitespace-nowrap">
                  {partner.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: '50+', label: 'Брендов-партнёров' },
            { value: '100K+', label: 'Наименований' },
            { value: '15K+', label: 'Довольных клиентов' },
            { value: '99.2%', label: 'Положительных отзывов' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4">
              <div className="text-2xl sm:text-3xl font-bold text-[#f6ad55]">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
