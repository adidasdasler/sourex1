import { useScrollAnimation } from '../hooks/useAnimations';

const guarantees = [
  {
    icon: '🛡️',
    title: '100% оригинал',
    description: 'Работаем только с официальными дистрибьюторами. Каждая запчасть проходит проверку подлинности.',
  },
  {
    icon: '🔒',
    title: 'Безопасная оплата',
    description: 'SSL-шифрование, 3D-Secure, защита от мошенничества. Ваши данные под надёжной защитой.',
  },
  {
    icon: '↩️',
    title: 'Возврат 14 дней',
    description: 'Не подошла запчасть? Вернём деньги в течение 14 дней без лишних вопросов.',
  },
  {
    icon: '📋',
    title: 'Гарантия качества',
    description: 'Гарантия производителя на все товары. От 6 месяцев до 2 лет в зависимости от категории.',
  },
  {
    icon: '🏛️',
    title: 'Юридическая чистота',
    description: 'Работаем по 152-ФЗ. Полная конфиденциальность персональных данных.白лая оферта.',
  },
  {
    icon: '💬',
    title: 'Поддержка 24/7',
    description: 'Наша команда всегда на связи. Чат, телефон, email — выбирайте удобный канал.',
  },
];

export default function GuaranteesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 mb-6">
            <span>🛡️</span>
            <span className="text-sm text-[#34d399] font-medium">Гарантии</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ваша <span className="text-[#f6ad55]">безопасность</span> — наш приоритет
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Многоступенчатая защита на каждом этапе
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {guarantees.map((item, i) => (
            <div key={i} className="glass-card p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {['SSL Защита', 'PCI DSS', '152-ФЗ', 'Оригинал 100%', 'Гарантия возврата'].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="text-[#34d399]">✓</span>
              <span className="text-sm text-white/60">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
