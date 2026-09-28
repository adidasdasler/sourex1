import { useScrollAnimation } from '../hooks/useAnimations';

const businessFeatures = [
  {
    icon: '🏭',
    title: 'Для автосервисов',
    features: ['Оптовые цены от 1 единицы', 'Отсрочка платежа до 30 дней', 'Персональный менеджер', 'API для интеграции с 1С'],
  },
  {
    icon: '🚛',
    title: 'Для автопарков',
    features: ['Мультиаккаунты для сотрудников', 'Единый биллинг', 'Аналитика расходов', 'Приоритетная обработка'],
  },
  {
    icon: '🛒',
    title: 'Для магазинов',
    features: ['Дропшиппинг', 'Белая марка', 'Интеграция с сайтом', 'Складская программа'],
  },
];

export default function BusinessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 mb-6">
            <span>💼</span>
            <span className="text-sm text-[#a855f7] font-medium">Для бизнеса</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Решения для <span className="text-[#f6ad55]">бизнеса</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Индивидуальные условия для автосервисов, автопарков и магазинов запчастей
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {businessFeatures.map((block, i) => (
            <div key={i} className="glass-card p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#a855f7]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              <div className="relative">
                <div className="text-5xl mb-4">{block.icon}</div>
                <h3 className="text-xl font-bold mb-4">{block.title}</h3>
                <ul className="space-y-3 mb-6">
                  {block.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#34d399] mt-0.5">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-[#a855f7]/20 border border-white/10 hover:border-[#a855f7]/30 text-white/80 hover:text-white font-medium transition-all">
                  Запросить условия
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`mt-10 text-center transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-white/50 mb-4">Нужны особые условия? Свяжитесь с нами</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:88001234567" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              8-800-123-45-67
            </a>
            <a href="mailto:biz@sourex.ru" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              biz@sourex.ru
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
