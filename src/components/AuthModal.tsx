import { useState } from 'react';
import { User } from '../types';

interface AuthModalProps {
  mode: 'login' | 'register';
  setMode: (mode: 'login' | 'register') => void;
  onClose: () => void;
  onLogin: (user: User) => void;
}

export default function AuthModal({ mode, setMode, onClose, onLogin }: AuthModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Заполните все поля');
      return;
    }

    if (mode === 'register' && !name) {
      setError('Введите ваше имя');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      const user: User = {
        id: 1,
        email: email,
        full_name: mode === 'register' ? name : 'Иван Иванов',
        phone: '+7 (900) 123-45-67',
        is_active: true,
        created_at: new Date().toISOString(),
      };
      setLoading(false);
      onLogin(user);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md glass-card p-8 animate-fade-in-up">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-[#f6ad55] to-[#e67a2e] flex items-center justify-center">
            <span className="text-[#0a1628] font-black text-xl">S</span>
          </div>
          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Вход в SouRex' : 'Регистрация'}
          </h2>
          <p className="text-sm text-white/50 mt-2">
            {mode === 'login'
              ? 'Войдите в свой аккаунт'
              : 'Создайте аккаунт и получите доступ к оптовым ценам'}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === 'register' && (
            <div>
              <label className="text-xs text-white/40 mb-1.5 block">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Иван Иванов"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
              />
            </div>
          )}
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
            />
          </div>
          <div>
            <label className="text-xs text-white/40 mb-1.5 block">Пароль</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-gradient py-3.5 text-base disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-[#0a1628]/30 border-t-[#0a1628] rounded-full animate-spin-slow" />
                <span>Загрузка...</span>
              </div>
            ) : (
              mode === 'login' ? 'Войти' : 'Создать аккаунт'
            )}
          </button>
        </form>

        {/* Switch mode */}
        <div className="mt-6 text-center">
          <span className="text-sm text-white/40">
            {mode === 'login' ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
          </span>
          <button
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
            className="text-sm text-[#f6ad55] hover:text-[#e67a2e] font-medium transition-colors"
          >
            {mode === 'login' ? 'Зарегистрироваться' : 'Войти'}
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 flex items-center gap-3">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-xs text-white/30">или</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Social login */}
        <div className="mt-6 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white transition-all">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-white/60 hover:text-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.119.678-1.296.678-1.916 0-3.593-1.07-4.915-3.08-1.99-3.035-2.54-5.31-2.54-5.878 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.862 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.264c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.17.508.542v3.21c0 .372.17.508.271.508.22 0 .407-.135.61-.407 1.017-1.364 1.744-3.475 1.744-3.475.102-.254.271-.491.711-.491h1.744c.525 0 .644.271.525.644-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.356.61-.356.862 0 .254.17.44.322.644.475.61 1.898 1.744 2.387 2.117.305.254.423.525.423.862-.017.17 0 .254 0 0z"/>
            </svg>
            VK
          </button>
        </div>
      </div>
    </div>
  );
}
