import { useState } from 'react';
import { Page, CabinetTab, User, CartItem } from './types';
import Header from './components/Header';
import HomePage from './components/HomePage';
import CabinetPage from './components/CabinetPage';
import AuthModal from './components/AuthModal';
import CartModal from './components/CartModal';
import Particles from './components/Particles';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cabinetTab, setCabinetTab] = useState<CabinetTab>('profile');
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [showCart, setShowCart] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleLogin = (userData: User) => {
    setUser(userData);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuth(true);
  };

  const addToCart = (item: CartItem) => {
    setCart(prev => [...prev, item]);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(i => i.cart_id !== cartId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen relative">
      <Particles />
      <div className="relative z-10">
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setCabinetTab={setCabinetTab}
          user={user}
          onLogin={() => openAuth('login')}
          onRegister={() => openAuth('register')}
          onLogout={handleLogout}
          cartCount={cart.length}
          onCartClick={() => setShowCart(true)}
        />
        
        {currentPage === 'home' && (
          <HomePage
            onLogin={() => openAuth('login')}
            onRegister={() => openAuth('register')}
            isLoggedIn={!!user}
            onGoToCabinet={() => {
              setCurrentPage('cabinet');
              setCabinetTab('subscription');
            }}
            addToCart={addToCart}
          />
        )}
        
        {currentPage === 'cabinet' && user && (
          <CabinetPage
            activeTab={cabinetTab}
            setActiveTab={setCabinetTab}
            user={user}
            cars={[]}
            orders={[]}
            subscription={null}
            addToCart={addToCart}
          />
        )}
      </div>

      {showAuth && (
        <AuthModal
          mode={authMode}
          setMode={setAuthMode}
          onClose={() => setShowAuth(false)}
          onLogin={handleLogin}
        />
      )}

      {showCart && (
        <CartModal
          items={cart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onClear={clearCart}
          isLoggedIn={!!user}
          onLogin={() => {
            setShowCart(false);
            openAuth('login');
          }}
        />
      )}
    </div>
  );
}

export default App;
