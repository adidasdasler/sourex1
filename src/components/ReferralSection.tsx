import { useScrollAnimation } from '../hooks/useAnimations';

export default function ReferralSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass-card p-8 sm:p-12 relative overflow-hidden transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f6ad55]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#34d399]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 mb-6">
                <span>🎁</span>
                <span className="text-sm text-[#a855f7] font-medium">Реферальная программа</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Приглашай друзей — <span className="text-[#f6ad55]">получай бонусы</span>
              </h2>
              <p className="text-white/50 text-lg mb-6">
                Получайте 500₽ за каждого друга, который оформит подписку. 
                Ваш друг тоже получит скидку 15% на первый месяц.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-xs text-white/40 mb-1">Ваша ссылка</div>
                  <div className="text-sm font-mono text-[#f6ad55]">sourex.ru/ref/IVAN2026</div>
                </div>
                <button className="btn-gradient px-6 py-3 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Копировать
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#f6ad55]">500₽</div>
                  <div className="text-xs text-white/40 mt-1">За друга</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#34d399]">15%</div>
                  <div className="text-xs text-white/40 mt-1">Скидка другу</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5">
                  <div className="text-2xl font-bold text-[#60a5fa]">∞</div>
                  <div className="text-xs text-white/40 mt-1">Без лимита</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Phone mockup */}
                <div className="w-64 h-[500px] rounded-[3rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 p-3 relative">
                  <div className="w-full h-full rounded-[2.5rem] bg-[#0a1628] overflow-hidden flex flex-col">
                    {/* Status bar */}
                    <div className="h-8 flex items-center justify-center">
                      <div className="w-20 h-5 rounded-full bg-black" />
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-4">
                      <div className="text-center mb-6">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-[#f6ad55] to-[#e67a2e] flex items-center justify-center">
                          <span className="text-[#0a1628] font-black">S</span>
                        </div>
                        <div className="text-sm font-bold">SouRex</div>
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white/5">
                          <div className="text-xs text-white/40">Приглашено</div>
                          <div className="text-lg font-bold text-[#f6ad55]">7 друзей</div>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5">
                          <div className="text-xs text-white/40">Заработано</div>
                          <div className="text-lg font-bold text-[#34d399]">3 500 ₽</div>
                        </div>
                        <div className="p-3 rounded-xl bg-[#f6ad55]/10 border border-[#f6ad55]/20">
                          <div className="text-xs text-[#f6ad55]">Новый друг!</div>
                          <div className="text-sm text-white/80">Алексей присоединился</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-8 glass-card px-3 py-2 animate-float">
                  <span className="text-sm">🎉 +500₽</span>
                </div>
                <div className="absolute -bottom-4 -left-8 glass-card px-3 py-2 animate-float" style={{ animationDelay: '1.5s' }}>
                  <span className="text-sm">👥 +1 друг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
