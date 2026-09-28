import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

export default function FlashSale() {
  const { ref, isVisible } = useScrollAnimation();
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section ref={ref} className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-3xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f6ad55] via-[#e67a2e] to-[#f6ad55] animate-[gradientShift_8s_ease_infinite]" style={{ backgroundSize: '200% 200%' }} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />

          <div className="relative p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0a1628]/20 backdrop-blur-sm mb-3">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="text-sm font-semibold text-white">Ограниченная акция</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0a1628] mb-2">
                🔥 Скидка 40% на подписку
              </h2>
              <p className="text-[#0a1628]/70 text-sm sm:text-base">
                Только сегодня! Оформите годовую подписку со скидкой
              </p>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-3">
              {[
                { value: pad(timeLeft.hours), label: 'часов' },
                { value: pad(timeLeft.minutes), label: 'минут' },
                { value: pad(timeLeft.seconds), label: 'секунд' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#0a1628] flex items-center justify-center mb-1">
                    <span className="text-2xl sm:text-3xl font-black text-[#f6ad55] font-mono">
                      {item.value}
                    </span>
                  </div>
                  <span className="text-xs text-[#0a1628]/60">{item.label}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 rounded-2xl bg-[#0a1628] hover:bg-[#0a1628]/90 text-[#f6ad55] font-bold text-base sm:text-lg transition-all hover:scale-105 shadow-xl">
              Получить скидку →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
