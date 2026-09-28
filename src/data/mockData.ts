import { Order, Car, Subscription, SearchOffer, PricingPlan } from '../types';

export const mockOrders: Order[] = [
  {
    id: 1,
    user_id: 1,
    order_number: 'SX-20260115-0001',
    items: [
      { article: 'W914/2', name: 'Фильтр масляный', quantity: 2, price: 450, brand: 'MANN' },
      { article: 'C30190', name: 'Фильтр воздушный', quantity: 1, price: 890, brand: 'MANN' },
    ],
    total_price: 1790,
    delivery_method: 'pickup',
    delivery_address: 'г. Москва, ул. Тверская, д. 1',
    status: 'delivered',
    created_at: '2026-01-15 10:35:00',
  },
  {
    id: 2,
    user_id: 1,
    order_number: 'SX-20260120-0002',
    items: [
      { article: '0 986 479 C67', name: 'Тормозные колодки передние', quantity: 1, price: 2800, brand: 'Bosch' },
    ],
    total_price: 2800,
    delivery_method: 'delivery',
    delivery_address: 'г. Москва, ул. Ленина, д. 15, кв. 42',
    status: 'shipped',
    created_at: '2026-01-20 14:20:00',
  },
  {
    id: 3,
    user_id: 1,
    order_number: 'SX-20260125-0003',
    items: [
      { article: 'NGK BKR6EIX', name: 'Свеча зажигания иридиевая', quantity: 4, price: 650, brand: 'NGK' },
    ],
    total_price: 2600,
    delivery_method: 'pickup',
    delivery_address: 'г. Москва, ул. Тверская, д. 1',
    status: 'pending',
    created_at: '2026-01-25 09:10:00',
  },
];

export const mockCars: Car[] = [
  {
    id: 1,
    user_id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    vin: 'JTNBE46K123456789',
    modification: '2.5 AT',
    is_primary: true,
  },
  {
    id: 2,
    user_id: 1,
    make: 'BMW',
    model: 'X5',
    year: 2022,
    vin: 'WBAKV91040L123456',
    modification: '3.0d xDrive',
    is_primary: false,
  },
];

export const mockSubscription: Subscription = {
  id: 1,
  user_id: 1,
  plan_type: '3months',
  price: 1999,
  start_date: '2026-01-01 00:00:00',
  end_date: '2026-04-01 00:00:00',
  is_active: true,
};

export const mockSearchResults: SearchOffer[] = [
  {
    article: 'W914/2',
    name: 'Фильтр масляный',
    brand: 'MANN',
    price: 450,
    amount: 10,
    delivery_time: '2026-01-27 18:00',
    stock_status: 'in-stock',
    offer_key: 'MANN_W914/2_450_2026-01-27',
  },
  {
    article: 'W914/2',
    name: 'Фильтр масляный',
    brand: 'MANN-FILTER',
    price: 480,
    amount: 5,
    delivery_time: '2026-01-28 12:00',
    stock_status: 'in-stock',
    offer_key: 'MANN-FILTER_W914/2_480_2026-01-28',
  },
  {
    article: 'W914/2',
    name: 'Фильтр масляный (аналог)',
    brand: 'Bosch',
    price: 390,
    amount: 15,
    delivery_time: '2026-01-27 14:00',
    stock_status: 'in-stock',
    offer_key: 'Bosch_W914/2_390_2026-01-27',
  },
  {
    article: 'W914/2',
    name: 'Фильтр масляный',
    brand: 'Filtron',
    price: 350,
    amount: 0,
    delivery_time: '2026-01-30 18:00',
    stock_status: 'out-of-stock',
    offer_key: 'Filtron_W914/2_350_2026-01-30',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: '1day',
    name: 'Пробный',
    price: 299,
    period: '1 день',
    period_days: 1,
    features: ['Доступ к оптовым ценам', 'Поиск по артикулу', 'Поиск по VIN', '1 заказ в день'],
  },
  {
    id: '1month',
    name: 'Базовый',
    price: 899,
    period: '30 дней',
    period_days: 30,
    features: ['Всё из пробного', 'Безлимит заказов', 'Приоритетная поддержка', 'История заказов'],
  },
  {
    id: '3months',
    name: 'Оптимальный',
    price: 1999,
    period: '90 дней',
    period_days: 90,
    features: ['Всё из базового', 'Гараж авто', 'Яндекс.Доставка', 'Экономия до 50%', 'Уведомления'],
    popular: true,
  },
  {
    id: '6months',
    name: 'Продвинутый',
    price: 3499,
    period: '180 дней',
    period_days: 180,
    features: ['Всё из оптимального', 'Персональный менеджер', 'Скидка 5% на доставку', 'Расширенная аналитика'],
  },
  {
    id: '12months',
    name: 'Бизнес',
    price: 6999,
    period: '365 дней',
    period_days: 365,
    features: ['Всё из продвинутого', 'API-доступ', 'Мультисервис', 'Максимальная экономия', 'VIP-поддержка 24/7'],
  },
];

export const brands = [
  { name: 'MANN-FILTER', country: 'Германия', description: 'Мировой лидер в производстве фильтров' },
  { name: 'Bosch', country: 'Германия', description: 'Технологии для автомобильной промышленности' },
  { name: 'NGK', country: 'Япония', description: 'Свечи зажигания и датчики кислорода' },
  { name: 'SKF', country: 'Швеция', description: 'Подшипники и уплотнения' },
  { name: 'TRW', country: 'США', description: 'Тормозные системы и рулевое управление' },
  { name: 'Sachs', country: 'Германия', description: 'Амортизаторы и сцепления' },
  { name: 'Febi', country: 'Германия', description: 'Запчасти для легковых автомобилей' },
  { name: 'Lemforder', country: 'Германия', description: 'Детали подвески и рулевого управления' },
];
