import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

const topProducts = [
  {
    id: 1,
    article: 'W712/75',
    name: 'Фильтр масляный',
    brand: 'MANN-FILTER',
    price: 420,
    oldPrice: 780,
    rating: 4.9,
    reviews: 342,
    image: '🔧',
    category: 'Фильтры',
    inStock: true,
  },
  {
    id: 2,
    article: '0 986 479 C67',
    name: 'Колодки тормозные передние',
    brand: 'Bosch',
    price: 2650,
    oldPrice: 4200,
    rating: 4.8,
    reviews: 218,
    image: '🛞',
    category: 'Тормоза',
    inStock: true,
  },
  {
    id: 3,
    article: 'BKR6EIX-11',
    name: 'Свеча зажигания иридиевая',
    brand: 'NGK',
    price: 590,
    oldPrice: 950,
    rating: 4.9,
    reviews: 567,
    image: '⚡',
    category: 'Зажигание',
    inStock: true,
  },
  {
    id: 4,
    article: 'C30190',
    name: 'Фильтр воздушный',
    brand: 'MANN-FILTER',
    price: 870,
    oldPrice: 1450,
    rating: 4.7,
    reviews: 189,
    image: '🌬️',
    category: 'Фильтры',
    inStock: true,
  },
  {
    id: 5,
    article: 'VW3-098',
    name: 'Амортизатор передний',
    brand: 'Sachs',
    price: 4200,
    oldPrice: 6800,
    rating: 4.8,
    reviews: 156,
    image: '🔩',
    category: 'Подвеска',
    inStock: false,
  },
  {
    id: 6,
    article: 'SKF VKBA 3495',
    name: 'Ступичный подшипник',
    brand: 'SKF',
    price: 3100,
    oldPrice: 5200,
    rating: 4.9,
    reviews: 274,
    image: '⚙️',
    category: 'Подвеска',
    inStock: true,
  },
];

export default function TopProducts() {
  const { ref, isVisible } = useScrollAnimation();
  const [filter, setFilter] = useState('Все');
  const categories = ['Все', ...new Set(topProducts.map(p => p.category))];

  const filtered = filter === 'Все' ? topProducts : topProducts.filter(p => p.category === filter);

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ef4444]/10 border border-[#ef4444]/20 mb-4">
              <span>🔥</span>
              <span className="text-sm text-[#ef4444] font-medium">Хиты продаж</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Популярные <span className="text-[#f6ad55]">товары</span>
            </h2>
          </div>
          
          {/* Filters */}
          <div className="flex gap-2 mt-4 sm:mt-0 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  filter === cat
                    ? 'bg-[#f6ad55] text-[#0a1628]'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {filtered.map((product) => (
            <div key={product.id} className="glass-card p-5 group">
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {product.image}
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-[#f6ad55]">{product.price} ₽</div>
                  <div className="text-xs text-white/30 line-through">{product.oldPrice} ₽</div>
                </div>
              </div>

              <div className="mb-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-md bg-[#f6ad55]/10 text-[#f6ad55] font-medium">
                    {product.brand}
                  </span>
                  <span className={`text-xs ${product.inStock ? 'text-[#34d399]' : 'text-[#fbbf24]'}`}>
                    {product.inStock ? '● В наличии' : '● Под заказ'}
                  </span>
                </div>
                <h3 className="font-semibold text-white/90">{product.name}</h3>
                <p className="text-xs text-white/40 font-mono mt-1">{product.article}</p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <span className="text-[#fbbf24] text-sm">★</span>
                  <span className="text-sm font-medium text-white/80">{product.rating}</span>
                  <span className="text-xs text-white/30">({product.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-[#34d399]">
                  <span>↓</span>
                  <span>-{Math.round((1 - product.price / product.oldPrice) * 100)}%</span>
                </div>
              </div>

              <button className="w-full mt-4 py-2.5 rounded-xl bg-white/5 hover:bg-[#f6ad55] hover:text-[#0a1628] text-white/60 text-sm font-medium transition-all">
                Добавить в корзину
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
