import { useScrollAnimation } from '../hooks/useAnimations';

const comparisonData = [
  { feature: 'Оптовые цены', sourex: true, competitors: false, marketplaces: false },
  { feature: 'Поиск по VIN', sourex: true, competitors: false, marketplaces: true },
  { feature: 'Гарантия оригинала', sourex: true, competitors: true, marketplaces: false },
  { feature: 'Виртуальный гараж', sourex: true, competitors: false, marketplaces: false },
  { feature: 'Яндекс.Доставка', sourex: true, competitors: false, marketplaces: true },
  { feature: 'Поддержка 24/7', sourex: true, competitors: false, marketplaces: false },
  { feature: 'Программа лояльности', sourex: true, competitors: false, marketplaces: false },
  { feature: 'Возврат 14 дней', sourex: true, competitors: true, marketplaces: true },
  { feature: 'Экономия до 50%', sourex: true, competitors: false, marketplaces: false },
  { feature: 'Без наценок посредников', sourex: true, competitors: false, marketplaces: false },
];

export default function ComparisonSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6ad55]/10 border border-[#f6ad55]/20 mb-6">
            <span>📊</span>
            <span className="text-sm text-[#f6ad55] font-medium">Сравнение</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Почему <span className="text-[#f6ad55]">SouRex</span> лучше?
          </h2>
          <p className="text-white/50 text-lg">Объективное сравнение с альтернативами</p>
        </div>

        <div className={`glass-card overflow-hidden transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="grid grid-cols-4 gap-2 p-4 border-b border-white/5 bg-white/[0.02]">
            <div className="text-sm font-medium text-white/40">Функция</div>
            <div className="text-center">
              <div className="text-sm font-bold text-[#f6ad55]">SouRex</div>
            </div>
            <div className="text-center text-sm text-white/40">Автомагазины</div>
            <div className="text-center text-sm text-white/40">Маркетплейсы</div>
          </div>

          {/* Rows */}
          {comparisonData.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-4 gap-2 p-4 items-center ${
                i % 2 === 0 ? 'bg-white/[0.01]' : ''
              } hover:bg-white/[0.03] transition-colors`}
            >
              <div className="text-sm text-white/70">{row.feature}</div>
              <div className="text-center">
                {row.sourex ? (
                  <span className="inline-flex w-6 h-6 rounded-full bg-[#34d399]/20 items-center justify-center text-[#34d399]">✓</span>
                ) : (
                  <span className="inline-flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-red-400">✗</span>
                )}
              </div>
              <div className="text-center">
                {row.competitors ? (
                  <span className="inline-flex w-6 h-6 rounded-full bg-[#34d399]/20 items-center justify-center text-[#34d399]">✓</span>
                ) : (
                  <span className="inline-flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-red-400">✗</span>
                )}
              </div>
              <div className="text-center">
                {row.marketplaces ? (
                  <span className="inline-flex w-6 h-6 rounded-full bg-[#34d399]/20 items-center justify-center text-[#34d399]">✓</span>
                ) : (
                  <span className="inline-flex w-6 h-6 rounded-full bg-red-500/20 items-center justify-center text-red-400">✗</span>
                )}
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="grid grid-cols-4 gap-2 p-4 border-t border-white/5 bg-[#f6ad55]/5">
            <div className="text-sm font-medium text-white/60">Итого</div>
            <div className="text-center text-lg font-bold text-[#f6ad55]">10/10</div>
            <div className="text-center text-lg font-medium text-white/40">3/10</div>
            <div className="text-center text-lg font-medium text-white/40">4/10</div>
          </div>
        </div>
      </div>
    </section>
  );
}
