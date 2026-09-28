import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

const faqs = [
  {
    question: 'Как работает подписка SouRex?',
    answer: 'После оформления подписки вы получаете доступ к оптовым ценам поставщиков автозапчастей. Вы можете искать детали по артикулу или VIN-коду, оформлять заказы с доставкой или самовывозом. Подписка оплачивается единоразово и действует указанный период.',
  },
  {
    question: 'Насколько реально сэкономить 50%?',
    answer: 'Экономия зависит от типа запчастей и поставщика. В среднем наши клиенты экономят 30-50% по сравнению с розничными ценами в обычных магазинах. Мы работаем напрямую с дистрибьюторами и производителями, убирая лишних посредников.',
  },
  {
    question: 'Как быстро доставляют заказы?',
    answer: 'Срок доставки зависит от наличия товара и вашего региона. Товары в наличии доставляются за 1-3 дня по Москве и 3-7 дней по России. Товары под заказ — от 5 до 14 дней. Мы используем Яндекс.Доставку для быстрого и надёжного сервиса.',
  },
  {
    question: 'Можно ли вернуть запчасть?',
    answer: 'Да, вы можете вернуть товар в течение 14 дней, если он не подошёл или имеет дефект. Возврат осуществляется через личный кабинет или службу поддержки. Оригинальные запчасти в заводской упаковке принимаются без вопросов.',
  },
  {
    question: 'Что такое VIN-декодер?',
    answer: 'VIN-декодер — это инструмент, который по 17-символьному коду автомобиля определяет его точные характеристики: марку, модель, год, двигатель, комплектацию. Это помогает подобрать запчасти, которые 100% подойдут вашему авто.',
  },
  {
    question: 'Есть ли гарантия на запчасти?',
    answer: 'Все оригинальные запчасти имеют гарантию производителя (от 6 месяцев до 2 лет). Аналоги — гарантию поставщика (от 3 месяцев). Мы работаем только с проверенными брендами: MANN, Bosch, NGK, SKF, TRW и другими.',
  },
  {
    question: 'Как отменить подписку?',
    answer: 'Вы можете отменить автопродление в любой момент в разделе "Подписка" личного кабинета. Текущий период подписки останется активным до конца оплаченного срока. Возврат за неиспользованный период не предусмотрен.',
  },
  {
    question: 'Подходит ли SouRex для автосервисов?',
    answer: 'Да! У нас есть специальные тарифы для бизнеса с дополнительными преимуществами: персональный менеджер, API-интеграция, отсрочка платежа, мультиаккаунты для сотрудников. Свяжитесь с нами для индивидуальных условий.',
  },
];

export default function FAQSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/20 mb-6">
            <span>❓</span>
            <span className="text-sm text-[#60a5fa] font-medium">Частые вопросы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ответы на <span className="text-[#f6ad55]">вопросы</span>
          </h2>
          <p className="text-white/50 text-lg">Не нашли ответ? Напишите нам в чат</p>
        </div>

        <div className={`space-y-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass-card overflow-hidden"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-white/90">{faq.question}</span>
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === i ? 'bg-[#f6ad55] text-[#0a1628] rotate-180' : 'bg-white/5 text-white/40'
                }`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-5 pb-5 text-white/50 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
