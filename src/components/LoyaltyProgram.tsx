import { useScrollAnimation } from '../hooks/useAnimations';

const levels = [
  {
    name: 'Старт',
    icon: '🥉',
    color: '#cd7f32',
    minOrders: 0,
    benefits: ['Базовые оптовые цены', 'Стандартная доставка', 'Email-поддержка'],
  },
  {
    name: 'Продвинутый',
    icon: '🥈',
    color: '#c0c0c0',
    minOrders: 10,
    benefits: ['Скидка +3%', 'Приоритетная обработка', 'Бесплатная доставка от 5000₽', 'Чат-поддержка'],
  },
  {
    name: 'Эксперт',
    icon: '🥇',
    color: '#ffd700',
    minOrders: 30,
    benefits: ['Скидка +7%', 'Персональный менеджер', 'Бесплатная доставка', 'Ранний доступ к акциям', 'VIP-поддержка 24/7'],
  },
  {
    name: 'Легенда',
    icon: '💎',
    color: '#60a5fa',
    minOrders: 100,
    benefits: ['Скидка +12%', 'Выделенный менеджер', 'Бесплатная экспресс-доставка', 'Все акции первыми', 'Эксклюзивные предложения', 'Приглашения на события'],
  },
];

export default function LoyaltyProgram() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 mb-6">
            <span>🏆</span>
            <span className="text-sm text-[#a855f7] font-medium">Программа лояльности</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Больше заказов — <span className="text-[#f6ad55]">больше выгоды</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Получайте дополнительные скидки и привилегии с каждым заказом
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {levels.map((level, i) => (
            <div
              key={i}
              className="glass-card p-6 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity blur-2xl"
                style={{ background: level.color }}
              />

              <div className="relative">
                <div className="text-4xl mb-3">{level.icon}</div>
                <h3 className="text-lg font-bold mb-1" style={{ color: level.color }}>
                  {level.name}
                </h3>
                <p className="text-xs text-white/40 mb-4">от {level.minOrders} заказов</p>

                <ul className="space-y-2">
                  {level.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#34d399] mt-0.5 flex-shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Progress indicator */}
                {i < levels.length - 1 && (
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="text-xs text-white/30">
                      Следующий уровень: <span style={{ color: levels[i + 1].color }}>{levels[i + 1].name}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar example */}
        <div className={`mt-10 max-w-2xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-white/60">Ваш прогресс</span>
              <span className="text-sm text-[#f6ad55] font-medium">12 / 30 заказов</span>
            </div>
            <div className="h-3 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#c0c0c0] to-[#ffd700] transition-all duration-1000"
                style={{ width: '40%' }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs text-white/30">
              <span>🥈 Продвинутый</span>
              <span>🥇 Эксперт</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
