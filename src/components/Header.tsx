import { Page, CabinetTab, User } from '../types';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  setCabinetTab: (tab: CabinetTab) => void;
  user: User | null;
  onLogin: () => void;
  onRegister: () => void;
  onLogout: () => void;
  cartCount: number;
  onCartClick: () => void;
}

export default function Header({
  currentPage,
  setCurrentPage,
  setCabinetTab,
  user,
  onLogin,
  onRegister,
  onLogout,
  cartCount,
  onCartClick,
}: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a1628]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#f6ad55] to-[#e67a2e] flex items-center justify-center">
              <span className="text-[#0a1628] font-black text-lg sm:text-xl">S</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold">
              <span className="text-[#f6ad55]">Sou</span>
              <span className="text-white">Rex</span>
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' ? 'text-[#f6ad55]' : 'text-white/60 hover:text-white'
              }`}
            >
              Главная
            </button>
            {user && (
              <button
                onClick={() => {
                  setCurrentPage('cabinet');
                  setCabinetTab('orders');
                }}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'cabinet' ? 'text-[#f6ad55]' : 'text-white/60 hover:text-white'
                }`}
              >
                Мои заказы
              </button>
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Cart */}
            <button
              onClick={onCartClick}
              className="relative p-2 sm:p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f6ad55] text-[#0a1628] text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {user ? (
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    setCurrentPage('cabinet');
                    setCabinetTab('profile');
                  }}
                  className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f6ad55] to-[#e67a2e] flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0a1628]">
                      {user.full_name.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm text-white/80">{user.full_name.split(' ')[0]}</span>
                </button>
                <button
                  onClick={onLogout}
                  className="p-2 rounded-xl bg-white/5 hover:bg-red-500/20 transition-colors text-white/50 hover:text-red-400"
                  title="Выйти"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={onLogin}
                  className="px-3 sm:px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
                >
                  Войти
                </button>
                <button
                  onClick={onRegister}
                  className="btn-gradient text-sm px-3 sm:px-5 py-2"
                >
                  Регистрация
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
