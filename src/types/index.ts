export interface User {
  id: number;
  email: string;
  full_name: string;
  phone: string;
  is_active: boolean;
  created_at: string;
}

export interface Car {
  id: number;
  user_id: number;
  make: string;
  model: string;
  year: number;
  vin: string;
  modification: string;
  is_primary: boolean;
}

export interface OrderItem {
  article: string;
  name: string;
  quantity: number;
  price: number;
  brand?: string;
}

export interface Order {
  id: number;
  user_id: number;
  order_number: string;
  items: OrderItem[];
  total_price: number;
  delivery_method: string;
  delivery_address: string;
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'cancelled';
  created_at: string;
}

export interface Subscription {
  id: number;
  user_id: number;
  plan_type: string;
  price: number;
  start_date: string;
  end_date: string;
  is_active: boolean;
}

export interface SearchOffer {
  article: string;
  name: string;
  brand: string;
  price: number;
  amount: number;
  delivery_time: string;
  stock_status: string;
  offer_key: string;
}

export interface CartItem extends OrderItem {
  cart_id: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  period_days: number;
  features: string[];
  popular?: boolean;
}

export type Page = 'home' | 'cabinet';
export type CabinetTab = 'profile' | 'orders' | 'garage' | 'subscription' | 'delivery';
