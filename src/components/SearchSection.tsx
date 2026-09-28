import { useState } from 'react';
import { mockSearchResults } from '../data/mockData';
import { SearchOffer, CartItem } from '../types';

interface SearchSectionProps {
  addToCart?: (item: CartItem) => void;
}

export default function SearchSection({ addToCart }: SearchSectionProps) {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState<'article' | 'vin'>('article');
  const [results, setResults] = useState<SearchOffer[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [vinResult, setVinResult] = useState<any>(null);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const handleSearch = () => {
    if (!query.trim()) return;
    setLoading(true);
    setVinResult(null);

    setTimeout(() => {
      if (searchType === 'vin' && query.length === 17) {
        setVinResult({
          vin: query.toUpperCase(),
          make: 'Toyota',
          model: 'Camry',
          year: 2020,
          engine: '2.5L',
          hp: 181,
          fuel: 'Бензин',
          country: 'Япония',
          type: 'Седан',
        });
        setResults(null);
      } else {
        setResults(mockSearchResults);
        setVinResult(null);
      }
      setLoading(false);
    }, 800);
  };

  const handleAddToCart = (offer: SearchOffer) => {
    const item: CartItem = {
      cart_id: `${offer.offer_key}_${Date.now()}`,
      article: offer.article,
      name: offer.name,
      quantity: 1,
      price: offer.price,
      brand: offer.brand,
    };
    if (addToCart) {
      addToCart(item);
      setAddedNotice(offer.name);
      setTimeout(() => setAddedNotice(null), 2000);
    } else {
      setAddedNotice(offer.name);
      setTimeout(() => setAddedNotice(null), 2000);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Найти запчасть</h2>
          <p className="text-white/50">Введите артикул или VIN-код для поиска</p>
        </div>

        {/* Search Input */}
        <div className="glass-card p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex rounded-xl overflow-hidden border border-white/10 flex-shrink-0">
              <button
                onClick={() => setSearchType('article')}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  searchType === 'article'
                    ? 'bg-[#f6ad55] text-[#0a1628]'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                Артикул
              </button>
              <button
                onClick={() => setSearchType('vin')}
                className={`px-4 py-3 text-sm font-medium transition-colors ${
                  searchType === 'vin'
                    ? 'bg-[#f6ad55] text-[#0a1628]'
                    : 'bg-white/5 text-white/60 hover:text-white'
                }`}
              >
                VIN
              </button>
            </div>
            <div className="flex-1 flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder={searchType === 'article' ? 'Например: W914/2 или 0451103336' : 'Введите VIN-код (17 символов)'}
                className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
              />
              <button
                onClick={handleSearch}
                className="btn-gradient px-6 py-3 flex items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-[#0a1628]/30 border-t-[#0a1628] rounded-full animate-spin-slow" />
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <span className="hidden sm:inline">Найти</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {searchType === 'vin' && (
            <p className="text-xs text-white/30 mt-3">
              VIN-код состоит из 17 символов. Найдите его в ПТС или на табличке автомобиля.
            </p>
          )}
        </div>

        {/* VIN Result */}
        {vinResult && (
          <div className="mt-6 glass-card p-6 animate-fade-in-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#60a5fa]/10 flex items-center justify-center">
                <span className="text-[#60a5fa]">🚗</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Информация об автомобиле</h3>
                <p className="text-xs text-white/40">VIN: {vinResult.vin}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: 'Марка', value: vinResult.make },
                { label: 'Модель', value: vinResult.model },
                { label: 'Год', value: vinResult.year },
                { label: 'Двигатель', value: vinResult.engine },
                { label: 'Мощность', value: `${vinResult.hp} л.с.` },
                { label: 'Топливо', value: vinResult.fuel },
                { label: 'Страна', value: vinResult.country },
                { label: 'Тип', value: vinResult.type },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5">
                  <div className="text-xs text-white/40 mb-1">{item.label}</div>
                  <div className="text-sm font-medium text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Added to cart notice */}
        {addedNotice && (
          <div className="mt-4 p-3 rounded-xl bg-[#34d399]/10 border border-[#34d399]/20 text-[#34d399] text-sm flex items-center gap-2 animate-fade-in">
            <span>✓</span>
            <span>«{addedNotice}» добавлен в корзину</span>
          </div>
        )}

        {/* Search Results */}
        {results && (
          <div className="mt-6 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">
                Результаты поиска: <span className="text-[#f6ad55]">{results.length}</span> предложений
              </h3>
            </div>
            <div className="space-y-3">
              {results.map((offer, i) => (
                <div key={i} className="glass-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#f6ad55]/10 flex items-center justify-center text-[#f6ad55] text-xs font-bold">
                      {offer.brand.slice(0, 2)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{offer.name}</div>
                      <div className="text-xs text-white/40">{offer.brand} • {offer.article}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#f6ad55]">{offer.price} ₽</div>
                      <div className={`text-xs ${offer.stock_status === 'in-stock' ? 'text-[#34d399]' : 'text-[#fbbf24]'}`}>
                        {offer.stock_status === 'in-stock' ? `В наличии (${offer.amount} шт)` : 'Под заказ'}
                      </div>
                    </div>
                    <button
                      onClick={() => handleAddToCart(offer)}
                      className="btn-gradient px-4 py-2 text-sm"
                      disabled={offer.stock_status !== 'in-stock'}
                    >
                      В корзину
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
