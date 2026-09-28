import { useState } from 'react';
import { useScrollAnimation, useCountUp } from '../hooks/useAnimations';

export default function SavingsCalculator() {
  const { ref, isVisible } = useScrollAnimation();
  const [monthlySpend, setMonthlySpend] = useState(15000);
  
  const savingsPercent = 35;
  const monthlySaving = Math.round(monthlySpend * savingsPercent / 100);
  const yearlySaving = monthlySaving * 12;
  const subscriptionCost = 1999;
  const netSaving = yearlySaving - subscriptionCost;

  const animatedSaving = useCountUp(netSaving, 1500, 0, isVisible);

  return (
    <section ref={ref} className="py-20 sm:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#f6ad55]/[0.02] to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34d399]/10 border border-[#34d399]/20 mb-6">
            <span className="text-[#34d399]">💰</span>
            <span className="text-sm text-[#34d399] font-medium">Калькулятор экономии</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Посчитайте свою <span className="text-[#f6ad55]">выгоду</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Узнайте, сколько вы сэкономите с подпиской SouRex за год
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-6 sm:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Input */}
              <div>
                <label className="text-sm text-white/60 mb-3 block">
                  Сколько вы тратите на запчасти в месяц?
                </label>
                <div className="relative mb-6">
                  <input
                    type="range"
                    min={3000}
                    max={100000}
                    step={1000}
                    value={monthlySpend}
                    onChange={(e) => setMonthlySpend(Number(e.target.value))}
                    className="w-full h-2 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, #f6ad55 0%, #f6ad55 ${((monthlySpend - 3000) / (100000 - 3000)) * 100}%, rgba(255,255,255,0.1) ${((monthlySpend - 3000) / (100000 - 3000)) * 100}%, rgba(255,255,255,0.1) 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-2 text-xs text-white/30">
                    <span>3 000 ₽</span>
                    <span>100 000 ₽</span>
                  </div>
                </div>
                <div className="text-4xl font-bold text-[#f6ad55] mb-2">
                  {monthlySpend.toLocaleString()} ₽
                  <span className="text-lg text-white/40 font-normal"> /мес</span>
                </div>
                <p className="text-sm text-white/40">
                  При экономии ~{savingsPercent}% на оптовых ценах
                </p>

                {/* Quick presets */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {[5000, 15000, 30000, 50000].map((val) => (
                    <button
                      key={val}
                      onClick={() => setMonthlySpend(val)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        monthlySpend === val
                          ? 'bg-[#f6ad55] text-[#0a1628]'
                          : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {val.toLocaleString()} ₽
                    </button>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="text-center lg:text-left">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#34d399]/10 to-[#34d399]/5 border border-[#34d399]/20">
                  <div className="text-sm text-[#34d399]/80 mb-2">Ваша чистая экономия за год</div>
                  <div className="text-5xl sm:text-6xl font-black text-[#34d399] mb-3">
                    {animatedSaving.toLocaleString()} ₽
                  </div>
                  <div className="text-sm text-white/40 mb-6">
                    (экономия {yearlySaving.toLocaleString()} ₽ − подписка {subscriptionCost.toLocaleString()} ₽)
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="text-xs text-white/40">Экономия/мес</div>
                      <div className="text-lg font-bold text-white">{monthlySaving.toLocaleString()} ₽</div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="text-xs text-white/40">Окупаемость</div>
                      <div className="text-lg font-bold text-white">~{Math.ceil(subscriptionCost / monthlySaving)} мес</div>
                    </div>
                  </div>

                  <button className="btn-gradient w-full py-3.5 text-base">
                    Начать экономить →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
