import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

const testimonials = [
  {
    id: 1,
    name: 'Алексей Петров',
    role: 'Владелец автосервиса',
    avatar: '👨‍🔧',
    rating: 5,
    text: 'За 3 месяца сэкономил более 45 000 ₽ на запчастях для клиентов. SouRex полностью изменил мой бизнес — теперь закупаю напрямую у поставщиков без наценок.',
    savings: '45 000 ₽',
  },
  {
    id: 2,
    name: 'Мария Козлова',
    role: 'Автовладелец',
    avatar: '👩',
    rating: 5,
    text: 'Раньше переплачивала в 2 раза! Теперь нахожу всё по VIN за минуту. Доставка Яндексом — быстро и удобно. Рекомендую всем знакомым!',
    savings: '12 000 ₽',
  },
  {
    id: 3,
    name: 'Дмитрий Волков',
    role: 'Менеджер автопарка',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Управляю парком из 20 автомобилей. SouRex позволяет быстро находить запчасти для разных марок. Экономия огромная — более 200К в год!',
    savings: '200 000 ₽',
  },
  {
    id: 4,
    name: 'Сергей Николаев',
    role: 'Таксист',
    avatar: '🚕',
    rating: 4,
    text: 'Как таксист, мне часто нужны запчасти. SouRex — это находка! Быстро, дёшево, надёжно. Подписка окупается за первый же заказ.',
    savings: '8 500 ₽',
  },
  {
    id: 5,
    name: 'Анна Смирнова',
    role: 'Владелица СТО',
    avatar: '👩‍🔧',
    rating: 5,
    text: 'Перевела весь закуп на SouRex. Клиенты довольны ценами, я довольна маржой. Отличный сервис с удобной доставкой и отслеживанием.',
    savings: '78 000 ₽',
  },
];

export default function TestimonialsCarousel() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fbbf24]/10 border border-[#fbbf24]/20 mb-6">
            <span>⭐</span>
            <span className="text-sm text-[#fbbf24] font-medium">4.9 из 5 — 2000+ отзывов</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Нам <span className="text-[#f6ad55]">доверяют</span>
          </h2>
          <p className="text-white/50 text-lg">Что говорят наши клиенты</p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main testimonial */}
          <div className="glass-card p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f6ad55]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              {/* Quote icon */}
              <div className="text-6xl text-[#f6ad55]/20 font-serif leading-none mb-4">"</div>
              
              {/* Text */}
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-6 min-h-[80px]">
                {testimonials[activeIndex].text}
              </p>

              {/* Savings badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#34d399]/10 border border-[#34d399]/20 mb-6">
                <span className="text-[#34d399]">💰</span>
                <span className="text-sm text-[#34d399] font-medium">Сэкономил: {testimonials[activeIndex].savings}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f6ad55]/20 to-[#e67a2e]/10 flex items-center justify-center text-2xl">
                  {testimonials[activeIndex].avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonials[activeIndex].name}</div>
                  <div className="text-sm text-white/40">{testimonials[activeIndex].role}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className={`text-sm ${i < testimonials[activeIndex].rating ? 'text-[#fbbf24]' : 'text-white/20'}`}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === activeIndex
                    ? 'w-8 h-2 bg-[#f6ad55]'
                    : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Mini cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {testimonials.slice(0, 4).map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActiveIndex(i)}
                className={`p-3 rounded-xl text-left transition-all ${
                  i === activeIndex
                    ? 'bg-[#f6ad55]/10 border border-[#f6ad55]/20'
                    : 'bg-white/5 border border-transparent hover:bg-white/10'
                }`}
              >
                <div className="text-lg mb-1">{t.avatar}</div>
                <div className="text-xs font-medium text-white/80 truncate">{t.name}</div>
                <div className="text-xs text-[#34d399]">{t.savings}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
