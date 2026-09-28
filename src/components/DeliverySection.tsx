import { useScrollAnimation } from '../hooks/useAnimations';

const deliveryMethods = [
  {
    icon: '🏪',
    title: 'Пункты выдачи',
    description: 'Более 5000 пунктов по всей России. Заберите заказ в удобное время.',
    time: '1-3 дня',
    price: 'Бесплатно от 3000₽',
  },
  {
    icon: '🚚',
    title: 'Курьерская доставка',
    description: 'Яндекс.Доставка привезёт заказ прямо к вашей двери.',
    time: '1-2 дня',
    price: 'от 290₽',
  },
  {
    icon: '📦',
    title: 'Почта России',
    description: 'Доставка в любой населённый пункт страны.',
    time: '5-10 дней',
    price: 'от 200₽',
  },
  {
    icon: '⚡',
    title: 'Экспресс-доставка',
    description: 'Срочная доставка по Москве и Санкт-Петербургу за 2 часа.',
    time: '2 часа',
    price: 'от 590₽',
  },
];

export default function DeliverySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/20 mb-6">
            <span>🚚</span>
            <span className="text-sm text-[#60a5fa] font-medium">Доставка</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Доставим <span className="text-[#f6ad55]">куда угодно</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Выберите удобный способ получения заказа
          </p>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {deliveryMethods.map((method, i) => (
            <div key={i} className="glass-card p-6 text-center group hover:border-[#60a5fa]/20">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{method.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
              <p className="text-sm text-white/50 mb-4 leading-relaxed">{method.description}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="text-xs text-white/40">Срок</span>
                  <span className="text-xs font-medium text-[#60a5fa]">{method.time}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <span className="text-xs text-white/40">Стоимость</span>
                  <span className="text-xs font-medium text-[#34d399]">{method.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tracking example */}
        <div className={`mt-10 max-w-3xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#60a5fa]/10 flex items-center justify-center">
                <span className="text-[#60a5fa]">📍</span>
              </div>
              <div>
                <h4 className="font-semibold">Отслеживание в реальном времени</h4>
                <p className="text-xs text-white/40">Заказ SX-20260125-0003</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                {['Создан', 'Собран', 'Отправлен', 'В пути', 'Доставлен'].map((step, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className={`w-3 h-3 rounded-full ${i <= 3 ? 'bg-[#60a5fa]' : 'bg-white/20'}`} />
                    <span className={`text-xs mt-2 ${i <= 3 ? 'text-[#60a5fa]' : 'text-white/30'}`}>{step}</span>
                  </div>
                ))}
              </div>
              <div className="absolute top-1.5 left-1.5 right-1.5 h-0.5 bg-white/10">
                <div className="h-full bg-[#60a5fa] rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
