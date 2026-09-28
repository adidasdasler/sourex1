import { useState } from 'react';
import { pricingPlans, brands } from '../data/mockData';
import { CartItem } from '../types';
import { useCountUp } from '../hooks/useAnimations';
import SearchSection from './SearchSection';
import SavingsCalculator from './SavingsCalculator';
import TestimonialsCarousel from './TestimonialsCarousel';
import FAQSection from './FAQSection';
import LoyaltyProgram from './LoyaltyProgram';
import TopProducts from './TopProducts';
import PartnersSection from './PartnersSection';
import DeliverySection from './DeliverySection';
import ReferralSection from './ReferralSection';
import GuaranteesSection from './GuaranteesSection';
import ComparisonSection from './ComparisonSection';
import FlashSale from './FlashSale';
import BusinessSection from './BusinessSection';
import Footer from './Footer';

// Animated Stats Component
function AnimatedStats() {
  const [visible] = useState(true);
  const savings = useCountUp(50, 2000, 0, visible);
  const products = useCountUp(10, 1800, 0, visible);
  const clients = useCountUp(15, 2200, 0, visible);

  return (
    <div className="grid grid-cols-3 gap-6 mt-12">
      <div>
        <div className="text-2xl sm:text-3xl font-bold text-[#f6ad55]">{savings}%</div>
        <div className="text-sm text-white/50">Экономия</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-bold text-[#f6ad55]">{products}K+</div>
        <div className="text-sm text-white/50">Запчастей</div>
      </div>
      <div>
        <div className="text-2xl sm:text-3xl font-bold text-[#f6ad55]">{clients}K+</div>
        <div className="text-sm text-white/50">Клиентов</div>
      </div>
    </div>
  );
}

interface HomePageProps {
  onLogin: () => void;
  onRegister: () => void;
  isLoggedIn: boolean;
  onGoToCabinet: () => void;
  addToCart?: (item: CartItem) => void;
}

export default function HomePage({ onLogin, onRegister, isLoggedIn, onGoToCabinet, addToCart }: HomePageProps) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <main className="pt-20 sm:pt-24">
      {/* Flash Sale Banner */}
      <FlashSale />

      {/* Hero Section */}
      <section className="hero-gradient min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background image overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://image.qwenlm.ai/generated-images/09bd0519-5be5-4b90-bdc3-144b5f073c39/_result.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full relative">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f6ad55]/10 border border-[#f6ad55]/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#f6ad55] animate-pulse"></span>
                <span className="text-sm text-[#f6ad55] font-medium">Подписка от 299 ₽</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
                Оптовые цены на{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f6ad55] to-[#e67a2e]">
                  автозапчасти
                </span>{' '}
                без посредников
              </h1>
              <p className="text-lg sm:text-xl text-white/60 mb-8 max-w-lg">
                Экономьте до 50% на запчастях. Прямые поставки от производителей, 
                поиск по VIN и артикулу, доставка по всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {!isLoggedIn ? (
                  <>
                    <button onClick={onRegister} className="btn-gradient text-base px-8 py-4">
                      Начать бесплатно
                    </button>
                    <button
                      onClick={onLogin}
                      className="px-8 py-4 rounded-xl border border-white/10 hover:border-[#f6ad55]/30 text-white/80 hover:text-white font-medium transition-all"
                    >
                      Уже есть аккаунт
                    </button>
                  </>
                ) : (
                  <button onClick={onGoToCabinet} className="btn-gradient text-base px-8 py-4">
                    Перейти в кабинет
                  </button>
                )}
              </div>

              {/* Stats */}
              <AnimatedStats />
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <div className="glass-card p-8 animate-float">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#f6ad55]/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-[#f6ad55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-white font-semibold">Поиск запчастей</div>
                      <div className="text-white/50 text-sm">Найдено 12 предложений</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { brand: 'MANN', name: 'Фильтр масляный W914/2', price: '450 ₽', stock: 'В наличии' },
                      { brand: 'Bosch', name: 'Фильтр масляный 0451103336', price: '390 ₽', stock: 'В наличии' },
                      { brand: 'Filtron', name: 'Фильтр масляный OP570/1', price: '350 ₽', stock: 'Под заказ' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#f6ad55]/10 flex items-center justify-center text-[#f6ad55] text-xs font-bold">
                            {item.brand.slice(0, 2)}
                          </div>
                          <div>
                            <div className="text-sm text-white/90">{item.name}</div>
                            <div className="text-xs text-white/40">{item.brand}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold text-[#f6ad55]">{item.price}</div>
                          <div className={`text-xs ${item.stock === 'В наличии' ? 'text-[#34d399]' : 'text-[#fbbf24]'}`}>
                            {item.stock}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 glass-card px-4 py-2 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-[#34d399]">✓</span>
                    <span className="text-sm text-white/80">VIN-декодер</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 glass-card px-4 py-2 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-[#60a5fa]">🚚</span>
                    <span className="text-sm text-white/80">Яндекс.Доставка</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <SearchSection addToCart={addToCart} />

      {/* Partners */}
      <PartnersSection />

      {/* Features Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Почему <span className="text-[#f6ad55]">SouRex</span>?
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Мы соединяем вас напрямую с поставщиками, убирая лишних посредников
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '💰',
                title: 'Оптовые цены',
                description: 'Прямые поставки от производителей. Экономия до 50% по сравнению с розничными магазинами.',
              },
              {
                icon: '🔍',
                title: 'Умный поиск',
                description: 'Поиск по артикулу или VIN-коду. Мгновенный подбор запчастей для вашего автомобиля.',
              },
              {
                icon: '🚗',
                title: 'Виртуальный гараж',
                description: 'Добавьте свои автомобили и получайте рекомендации запчастей, подходящих именно вам.',
              },
              {
                icon: '📦',
                title: 'Яндекс.Доставка',
                description: 'Быстрая и надёжная доставка по всей России. Отслеживание в реальном времени.',
              },
              {
                icon: '🛡️',
                title: 'Гарантия качества',
                description: 'Только оригинальные запчасти и проверенные аналоги от ведущих мировых брендов.',
              },
              {
                icon: '⚡',
                title: 'Мгновенный доступ',
                description: 'Активируйте подписку за минуту и сразу получите доступ к оптовым ценам.',
              },
            ].map((feature, i) => (
              <div key={i} className="glass-card p-6 sm:p-8">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products */}
      <TopProducts />

      {/* Brands Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Популярные бренды</h2>
            <p className="text-white/50">Работаем только с проверенными производителями</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {brands.map((brand, i) => (
              <div key={i} className="glass-card p-5 text-center cursor-pointer">
                <div className="text-lg font-bold text-white mb-1">{brand.name}</div>
                <div className="text-xs text-white/40">{brand.country}</div>
                <div className="text-xs text-white/50 mt-2">{brand.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <SavingsCalculator />

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Pricing Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Тарифные <span className="text-[#f6ad55]">планы</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Выберите подходящий план и получите доступ к оптовым ценам уже сегодня
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`glass-card p-6 relative cursor-pointer transition-all ${
                  selectedPlan === plan.id ? 'border-[#f6ad55]/50 scale-[1.02]' : ''
                } ${plan.popular ? 'ring-2 ring-[#f6ad55]/30' : ''}`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#f6ad55] to-[#e67a2e] rounded-full text-xs font-bold text-[#0a1628]">
                    Популярный
                  </div>
                )}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-semibold mb-1">{plan.name}</h3>
                  <div className="text-3xl font-bold text-[#f6ad55]">
                    {plan.price.toLocaleString()} ₽
                  </div>
                  <div className="text-sm text-white/40">{plan.period}</div>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[#34d399] mt-0.5">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    plan.popular
                      ? 'btn-gradient'
                      : 'bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10'
                  }`}
                >
                  Выбрать
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <ComparisonSection />

      {/* How it works */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-white/50 text-lg">Три простых шага до оптовых цен</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Регистрация', desc: 'Создайте аккаунт за 30 секунд и выберите тарифный план' },
              { step: '02', title: 'Поиск', desc: 'Найдите нужную запчасть по артикулу или VIN-коду вашего авто' },
              { step: '03', title: 'Заказ', desc: 'Оформите заказ с доставкой или заберите в ближайшем пункте выдачи' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#f6ad55]/20 to-[#e67a2e]/10 border border-[#f6ad55]/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-[#f6ad55]">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <DeliverySection />

      {/* Loyalty Program */}
      <LoyaltyProgram />

      {/* Referral */}
      <ReferralSection />

      {/* FAQ */}
      <FAQSection />

      {/* Guarantees */}
      <GuaranteesSection />

      {/* Business */}
      <BusinessSection />

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Готовы <span className="text-[#f6ad55]">экономить</span>?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам автовладельцев, которые уже экономят на запчастях с SouRex
          </p>
          {!isLoggedIn && (
            <button onClick={onRegister} className="btn-gradient text-lg px-10 py-4 animate-pulse-glow">
              Начать сейчас — от 299 ₽
            </button>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
