import { CartItem } from '../types';

interface CartModalProps {
  items: CartItem[];
  onClose: () => void;
  onRemove: (cartId: string) => void;
  onClear: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
}

export default function CartModal({ items, onClose, onRemove, onClear, isLoggedIn, onLogin }: CartModalProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full sm:max-w-lg max-h-[80vh] glass-card sm:rounded-2xl rounded-t-2xl overflow-hidden animate-fade-in-up flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f6ad55]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#f6ad55]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Корзина</h2>
              <p className="text-xs text-white/40">{items.length} товар(ов)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-medium text-white/60 mb-2">Корзина пуста</h3>
              <p className="text-sm text-white/40">Добавьте запчасти из поиска</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.cart_id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                  <div className="w-10 h-10 rounded-lg bg-[#f6ad55]/10 flex items-center justify-center text-[#f6ad55] text-xs font-bold flex-shrink-0">
                    {item.brand?.slice(0, 2) || '??'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-white truncate">{item.name}</div>
                    <div className="text-xs text-white/40">{item.brand} • {item.article}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-sm font-semibold text-[#f6ad55]">{item.price} ₽</div>
                    <div className="text-xs text-white/40">×{item.quantity}</div>
                  </div>
                  <button
                    onClick={() => onRemove(item.cart_id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-white/30 hover:text-red-400 transition-all flex-shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/60">Итого:</span>
              <span className="text-2xl font-bold text-[#f6ad55]">{total.toLocaleString()} ₽</span>
            </div>
            <div className="flex gap-3">
              {isLoggedIn ? (
                <button className="flex-1 btn-gradient py-3.5">
                  Оформить заказ
                </button>
              ) : (
                <button onClick={onLogin} className="flex-1 btn-gradient py-3.5">
                  Войти для оформления
                </button>
              )}
              <button
                onClick={onClear}
                className="px-4 py-3.5 rounded-xl bg-white/5 hover:bg-red-500/10 text-white/40 hover:text-red-400 transition-all"
                title="Очистить корзину"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
