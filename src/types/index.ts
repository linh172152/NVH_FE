// Account Types
export interface Account {
  account_id: string;
  username: string;
  email: string;
  phone: string;
  role: 'guest' | 'member' | 'staff' | 'admin';
  status: 'active' | 'inactive' | 'banned';
  created_at: string;
  updated_at: string;
}

// Membership Types
export interface MembershipType {
  membership_type_id: string;
  name: string;
  description: string;
  duration_months: number;
  price: number;
}

export interface MembershipCard {
  card_id: string;
  account_id: string;
  membership_type_id: string;
  card_number: string;
  issued_date: string;
  expiry_date: string;
  status: 'active' | 'expired' | 'canceled';
  membership_type?: MembershipType;
}

// Center & Service Types
export interface Center {
  center_id: string;
  name: string;
  address: string;
  phone: string;
  description: string;
}

export interface ServiceCategory {
  category_id: string;
  center_id: string;
  name: string;
  description: string;
  center?: Center;
}

export interface Service {
  service_id: string;
  category_id: string;
  name: string;
  description: string;
  price_per_unit: number;
  unit_type: 'hour' | 'session' | 'game';
  status: 'active' | 'inactive';
  category?: ServiceCategory;
}

// Package Types
export interface Package {
  package_id: string;
  name: string;
  description: string;
  duration: number;
  min_amount: number;
  max_amount: number;
  allowed_days: string; // "1/0/0/0/1/0/0"
  allowed_time_frame: string; // "08:00-18:00"
  price: number;
}

export interface CardPackage {
  card_package_id: string;
  card_id: string;
  package_id: string;
  start_date: string;
  end_date: string;
  status: 'active' | 'expired' | 'canceled';
  package?: Package;
  card?: MembershipCard;
}

// Booking & Order Types
export interface Booking {
  booking_id: string;
  account_id: string;
  service_id: string;
  date: string;
  time_slot: string;
  status: 'pending' | 'confirmed' | 'canceled';
  service?: Service;
}

export interface ServiceOrder {
  order_id: string;
  card_package_id: string;
  service_id: string;
  usage_date: string;
  duration: number;
  amount: number;
  service?: Service;
  card_package?: CardPackage;
}

// Payment Types
export interface Payment {
  payment_id: string;
  booking_id: string;
  amount: number;
  method: 'cash' | 'credit_card' | 'bank_transfer';
  status: 'pending' | 'complete' | 'canceled';
  payment_date: string;
  updated_at: string;
  booking?: Booking;
}

// Check-in Types
export interface CheckIn {
  checkin_id: string;
  account_id: string;
  service_id: string;
  checkin_time: string;
  checkout_time?: string;
  service?: Service;
}

// Reward Points
export interface RewardPoints {
  account_id: string;
  points: number;
  last_updated: string;
}

// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Dashboard Stats
export interface DashboardStats {
  totalMembers: number;
  activeMemberships: number;
  totalRevenue: number;
  pendingBookings: number;
  todayCheckins: number;
}
