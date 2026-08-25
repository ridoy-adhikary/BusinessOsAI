export const ORDER_STATUSES = [
  "pending",
  "confirmed",
  "processing",
  "packed",
  "ready_for_courier",
  "shipped",
  "in_transit",
  "out_for_delivery",
  "delivered",
  "completed",
  "cancelled",
  "failed",
  "returned",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const SALES_CHANNELS = [
  "facebook",
  "messenger",
  "whatsapp",
  "website",
  "phone",
  "pos",
  "manual",
  "api",
] as const;

export type SalesChannel = (typeof SALES_CHANNELS)[number];

export const CUSTOMER_SEGMENTS = ["new", "returning", "vip", "inactive", "high_risk_cod"] as const;

export type CustomerSegment = (typeof CUSTOMER_SEGMENTS)[number];

export const INVENTORY_STATES = [
  "available",
  "reserved",
  "damaged",
  "returned",
  "in_transit",
  "low_stock",
  "out_of_stock",
] as const;

export type InventoryState = (typeof INVENTORY_STATES)[number];

export const PAYMENT_METHODS = ["online", "cod"] as const;

export type PaymentMethod = (typeof PAYMENT_METHODS)[number];

export const BUSINESS_TYPES = ["online", "offline", "hybrid"] as const;

export type BusinessType = (typeof BUSINESS_TYPES)[number];

export const PLAN_TIERS = ["basic", "professional", "enterprise"] as const;

export type PlanTier = (typeof PLAN_TIERS)[number];

export const EMPLOYEE_ROLES = [
  "owner",
  "manager",
  "cashier",
  "warehouse_worker",
  "packing_worker",
  "accountant",
  "marketing_manager",
] as const;

export type EmployeeRole = (typeof EMPLOYEE_ROLES)[number];

export interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
