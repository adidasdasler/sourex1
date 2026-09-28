import { useState } from 'react';
import { CabinetTab, User } from '../types';
import { mockOrders, mockCars, mockSubscription } from '../data/mockData';

interface CabinetPageProps {
  activeTab: CabinetTab;
  setActiveTab: (tab: CabinetTab) => void;
  user: User;
  cars: any[];
  orders: any[];
  subscription: any;
  addToCart: (item: any) => void;
}

export default function CabinetPage({ activeTab, setActiveTab, user }: CabinetPageProps) {
  const tabs: { id: CabinetTab; label: string; icon: string }[] = [
    { id: 'profile', label: 'Профиль', icon: '👤' },
    { id: 'orders', label: 'Заказы', icon: '📦' },
    { id: 'garage', label: 'Гараж', icon: '🚗' },
    { id: 'subscription', label: 'Подписка', icon: '⭐' },
    { id: 'delivery', label: 'Доставки', icon: '🚚' },
  ];

  return (
    <main className="pt-24 sm:pt-28 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-white/50">Управляйте заказами, гаражом и подпиской</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 p-1 bg-white/5 rounded-2xl mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-[#f6ad55] to-[#e67a2e] text-[#0a1628]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <span>{tab.icon}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="animate-fade-in">
          {activeTab === 'profile' && <ProfileTab user={user} />}
          {activeTab === 'orders' && <OrdersTab />}
          {activeTab === 'garage' && <GarageTab />}
          {activeTab === 'subscription' && <SubscriptionTab />}
          {activeTab === 'delivery' && <DeliveryTab />}
        </div>
      </div>
    </main>
  );
}

// Achievements data
const achievements = [
  { id: 1, icon: '🎯', title: 'Первый заказ', description: 'Оформите первый заказ', unlocked: true, progress: 100 },
  { id: 2, icon: '🔍', title: 'Исследователь', description: 'Выполните 10 поисков', unlocked: true, progress: 100 },
  { id: 3, icon: '🚗', title: 'Автолюбитель', description: 'Добавьте авто в гараж', unlocked: true, progress: 100 },
  { id: 4, icon: '💰', title: 'Экономист', description: 'Сэкономьте 10 000₽', unlocked: false, progress: 65 },
  { id: 5, icon: '🏆', title: 'Эксперт', description: 'Оформите 30 заказов', unlocked: false, progress: 40 },
  { id: 6, icon: '👥', title: 'Амбассадор', description: 'Пригласите 5 друзей', unlocked: false, progress: 20 },
];

// Profile Tab
function ProfileTab({ user }: { user: User }) {
  return (
    <div className="grid lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1 space-y-4">
        <div className="glass-card p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#f6ad55] to-[#e67a2e] flex items-center justify-center">
            <span className="text-3xl font-bold text-[#0a1628]">{user.full_name.charAt(0)}</span>
          </div>
          <h3 className="text-lg font-semibold mb-1">{user.full_name}</h3>
          <p className="text-sm text-white/50 mb-4">{user.email}</p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34d399]"></span>
            <span className="text-xs text-[#34d399]">Активен</span>
          </div>
        </div>

        {/* Achievements */}
        <div className="glass-card p-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <span>🏆</span> Достижения
          </h4>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((a) => (
              <div
                key={a.id}
                className={`text-center p-2 rounded-xl transition-all ${
                  a.unlocked ? 'bg-[#f6ad55]/10 border border-[#f6ad55]/20' : 'bg-white/5 opacity-50'
                }`}
                title={a.description}
              >
                <div className="text-xl mb-1">{a.icon}</div>
                {!a.unlocked && (
                  <div className="w-full h-1 rounded-full bg-white/10 mt-1">
                    <div className="h-full rounded-full bg-[#f6ad55]" style={{ width: `${a.progress}%` }} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-white/40 text-center">
            3 из 6 получено
          </div>
        </div>
      </div>

      <div className="lg:col-span-2">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-6">Личные данные</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-white/40 mb-1 block">Имя</label>
              <input
                type="text"
                defaultValue={user.full_name}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">Телефон</label>
              <input
                type="tel"
                defaultValue="+7 (900) 123-45-67"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">Email</label>
              <input
                type="email"
                defaultValue={user.email}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">Город</label>
              <input
                type="text"
                defaultValue="Москва"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all"
              />
            </div>
          </div>
          <button className="btn-gradient mt-6 px-6 py-3">
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  );
}

// Orders Tab
function OrdersTab() {
  const orders = mockOrders;
  const statusLabels: Record<string, string> = {
    pending: 'Ожидает',
    paid: 'Оплачен',
    shipped: 'Отправлен',
    delivered: 'Доставлен',
    cancelled: 'Отменён',
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">История заказов</h3>
        <span className="text-sm text-white/40">{orders.length} заказов</span>
      </div>

      {orders.map((order) => (
        <div key={order.id} className="glass-card p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-white/60">{order.order_number}</span>
                <span className={`px-2.5 py-1 rounded-lg text-xs font-medium badge-${order.status}`}>
                  {statusLabels[order.status]}
                </span>
              </div>
              <p className="text-xs text-white/40 mt-1">{order.created_at}</p>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-[#f6ad55]">{order.total_price.toLocaleString()} ₽</div>
              <div className="text-xs text-white/40">
                {order.delivery_method === 'pickup' ? 'Самовывоз' : 'Доставка'}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            {order.items.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#f6ad55]/10 flex items-center justify-center text-[#f6ad55] text-xs font-bold">
                    {item.brand?.slice(0, 2) || '??'}
                  </div>
                  <div>
                    <div className="text-sm text-white/90">{item.name}</div>
                    <div className="text-xs text-white/40">{item.article} × {item.quantity}</div>
                  </div>
                </div>
                <div className="text-sm font-medium text-white/80">{(item.price * item.quantity).toLocaleString()} ₽</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-4">
            <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-white/60 hover:text-white transition-all">
              Повторить
            </button>
            <button className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-sm text-white/60 hover:text-white transition-all">
              Подробнее
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Garage Tab
function GarageTab() {
  const cars = mockCars;
  const [showAdd, setShowAdd] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Мой гараж</h3>
        <button
          onClick={() => setShowAdd(!showAdd)}
          className="btn-gradient px-4 py-2 text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Добавить авто
        </button>
      </div>

      {showAdd && (
        <div className="glass-card p-6 mb-6 animate-fade-in-up">
          <h4 className="font-semibold mb-4">Новый автомобиль</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-xs text-white/40 mb-1 block">Марка</label>
              <input type="text" placeholder="Toyota" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all" />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">Модель</label>
              <input type="text" placeholder="Camry" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all" />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">Год выпуска</label>
              <input type="number" placeholder="2020" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all" />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">VIN-код</label>
              <input type="text" placeholder="JTNBE46K123456789" maxLength={17} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all" />
            </div>
            <div>
              <label className="text-xs text-white/40 mb-1 block">Модификация</label>
              <input type="text" placeholder="2.5 AT" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white transition-all" />
            </div>
          </div>
          <div className="flex gap-3 mt-4">
            <button className="btn-gradient px-6 py-2.5 text-sm">Сохранить</button>
            <button onClick={() => setShowAdd(false)} className="px-6 py-2.5 rounded-xl bg-white/5 text-white/60 text-sm">Отмена</button>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {cars.map((car) => (
          <div key={car.id} className="glass-card p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-lg">{car.make} {car.model}</h4>
                  {car.is_primary && (
                    <span className="px-2 py-0.5 rounded-md bg-[#f6ad55]/10 text-[#f6ad55] text-xs">Основной</span>
                  )}
                </div>
                <p className="text-sm text-white/50">{car.year} • {car.modification}</p>
              </div>
              <button className="p-2 rounded-lg bg-white/5 hover:bg-red-500/10 text-white/30 hover:text-red-400 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <div className="text-xs text-white/40 mb-1">VIN</div>
              <div className="text-sm font-mono text-white/70">{car.vin}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Subscription Tab
function SubscriptionTab() {
  const sub = mockSubscription;

  return (
    <div>
      <div className="glass-card p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">⭐</span>
              <h3 className="text-lg font-semibold">Текущая подписка</h3>
            </div>
            <p className="text-sm text-white/50">
              Активна до {new Date(sub.end_date).toLocaleDateString('ru-RU')}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></span>
            <span className="text-sm text-[#34d399] font-medium">Активна</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-xs text-white/40 mb-1">План</div>
            <div className="text-lg font-semibold text-[#f6ad55]">Оптимальный</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-xs text-white/40 mb-1">Оплачено</div>
            <div className="text-lg font-semibold">{sub.price.toLocaleString()} ₽</div>
          </div>
          <div className="p-4 rounded-xl bg-white/5">
            <div className="text-xs text-white/40 mb-1">Осталось дней</div>
            <div className="text-lg font-semibold text-[#60a5fa]">~45 дней</div>
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold mb-4">Продлить или сменить план</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { name: '3 месяца', price: '1 999 ₽', current: true },
          { name: '6 месяцев', price: '3 499 ₽', current: false },
          { name: '12 месяцев', price: '6 999 ₽', current: false },
        ].map((plan, i) => (
          <div key={i} className={`glass-card p-5 ${plan.current ? 'border-[#f6ad55]/30' : ''}`}>
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold">{plan.name}</span>
              {plan.current && <span className="text-xs text-[#f6ad55]">Текущий</span>}
            </div>
            <div className="text-2xl font-bold text-[#f6ad55] mb-4">{plan.price}</div>
            <button className={`w-full py-2.5 rounded-xl text-sm font-semibold ${
              plan.current
                ? 'bg-white/5 text-white/40 cursor-default'
                : 'btn-gradient'
            }`}>
              {plan.current ? 'Текущий план' : 'Выбрать'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Delivery Tab
function DeliveryTab() {
  const deliveries = [
    {
      id: 1,
      tracking: 'TRACK12345678',
      status: 'in_transit',
      address: 'г. Москва, ул. Ленина, д. 15, кв. 42',
      date: '2026-01-20',
      price: 350,
    },
    {
      id: 2,
      tracking: 'TRACK87654321',
      status: 'delivered',
      address: 'г. Москва, ул. Тверская, д. 1',
      date: '2026-01-15',
      price: 280,
    },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold mb-6">История доставок</h3>
      <div className="space-y-4">
        {deliveries.map((d) => (
          <div key={d.id} className="glass-card p-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-mono text-white/60">{d.tracking}</span>
                  <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                    d.status === 'delivered' ? 'badge-delivered' : 'badge-shipped'
                  }`}>
                    {d.status === 'delivered' ? 'Доставлен' : 'В пути'}
                  </span>
                </div>
                <p className="text-xs text-white/40 mt-1">{d.date}</p>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-[#f6ad55]">{d.price} ₽</div>
              </div>
            </div>
            <div className="p-3 rounded-xl bg-white/5">
              <div className="text-xs text-white/40 mb-1">Адрес доставки</div>
              <div className="text-sm text-white/70">{d.address}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
