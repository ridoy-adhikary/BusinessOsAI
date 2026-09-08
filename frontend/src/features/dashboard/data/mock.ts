export type OrderStatus = "pending" | "confirmed" | "packing" | "in-transit" | "delivered" | "cancelled";

export interface Order {
  id: string;
  channel: string;
  customer: string;
  items: string;
  total: number;
  payment: string;
  status: OrderStatus;
  date: string;
}

export const orders: Order[] = [
  { id: "BO-1001", channel: "Facebook", customer: "Rahim Ahmed", items: "Classic Kurti ×2", total: 2400, payment: "COD", status: "pending", date: "2026-09-08" },
  { id: "BO-1002", channel: "WhatsApp", customer: "Nasrin Sultana", items: "Cotton Saree ×1", total: 3100, payment: "bKash", status: "confirmed", date: "2026-09-08" },
  { id: "BO-1003", channel: "Website", customer: "Tanvir Hasan", items: "Men's Polo ×3", total: 2850, payment: "Card", status: "packing", date: "2026-09-08" },
  { id: "BO-1004", channel: "POS", customer: "Walk-in", items: "Knit Dress ×1", total: 1850, payment: "Nagad", status: "delivered", date: "2026-09-07" },
  { id: "BO-1005", channel: "Messenger", customer: "Sharmin Akter", items: "Handbag ×1", total: 2200, payment: "COD", status: "in-transit", date: "2026-09-07" },
  { id: "BO-1006", channel: "Website", customer: "Mizan Rahman", items: "Sneakers ×1", total: 3200, payment: "COD", status: "cancelled", date: "2026-09-06" },
  { id: "BO-1007", channel: "Phone Orders", customer: "Farida Begum", items: "Table Lamp ×2", total: 1700, payment: "COD", status: "pending", date: "2026-09-06" },
];

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: number;
  stock: number;
  lowStock: number;
  status: string;
}

export const products: Product[] = [
  { id: "P-001", name: "Classic Cotton Kurti", sku: "KRT-001", category: "Women", price: 1200, stock: 45, lowStock: 10, status: "Active" },
  { id: "P-002", name: "Handloom Cotton Saree", sku: "SAR-002", category: "Women", price: 3100, stock: 8, lowStock: 10, status: "Low stock" },
  { id: "P-003", name: "Men's Polo Shirt", sku: "POL-003", category: "Men", price: 950, stock: 0, lowStock: 8, status: "Out of stock" },
  { id: "P-004", name: "Knit Midi Dress", sku: "DRS-004", category: "Women", price: 1850, stock: 32, lowStock: 8, status: "Active" },
  { id: "P-005", name: "Leather Handbag", sku: "BAG-005", category: "Accessories", price: 2200, stock: 18, lowStock: 6, status: "Active" },
  { id: "P-006", name: "Casual Sneakers", sku: "SHO-006", category: "Footwear", price: 3200, stock: 12, lowStock: 6, status: "Active" },
];

export interface Customer {
  id: string;
  name: string;
  phone: string;
  orders: number;
  totalSpent: number;
  lastOrder: string;
  status: string;
  risk: string;
}

export const customers: Customer[] = [
  { id: "C-001", name: "Rahim Ahmed", phone: "01712345678", orders: 24, totalSpent: 52000, lastOrder: "2026-09-08", status: "VIP", risk: "Low" },
  { id: "C-002", name: "Nasrin Sultana", phone: "01887654321", orders: 12, totalSpent: 28000, lastOrder: "2026-09-08", status: "Regular", risk: "Low" },
  { id: "C-003", name: "Tanvir Hasan", phone: "01911223344", orders: 3, totalSpent: 8500, lastOrder: "2026-09-08", status: "New", risk: "Medium" },
  { id: "C-004", name: "Sharmin Akter", phone: "01655443322", orders: 8, totalSpent: 19000, lastOrder: "2026-09-07", status: "Regular", risk: "High" },
  { id: "C-005", name: "Mizan Rahman", phone: "01577889900", orders: 5, totalSpent: 12000, lastOrder: "2026-09-06", status: "New", risk: "High" },
];

export interface Transaction {
  id: string;
  type: string;
  ref: string;
  amount: number;
  method: string;
  status: string;
  date: string;
}

export const transactions: Transaction[] = [
  { id: "T-001", type: "Payment received", ref: "BO-1003", amount: 2850, method: "Card", status: "Completed", date: "2026-09-08" },
  { id: "T-002", type: "Payment received", ref: "BO-1002", amount: 3100, method: "bKash", status: "Completed", date: "2026-09-08" },
  { id: "T-003", type: "COD settlement", ref: "BO-1004", amount: 1850, method: "Nagad", status: "Pending", date: "2026-09-07" },
  { id: "T-004", type: "Refund", ref: "BO-1006", amount: 3200, method: "bKash", status: "Processed", date: "2026-09-06" },
  { id: "T-005", type: "Payment received", ref: "BO-1005", amount: 2200, method: "COD", status: "Pending", date: "2026-09-07" },
];

export interface Parcel {
  id: string;
  order: string;
  courier: string;
  weight: string;
  status: string;
  tracking: string;
}

export const parcels: Parcel[] = [
  { id: "PK-501", order: "BO-1003", courier: "Pathao", weight: "0.8 kg", status: "Packed", tracking: "PT-88213" },
  { id: "PK-502", order: "BO-1005", courier: "RedX", weight: "1.2 kg", status: "In transit", tracking: "RDX-44512" },
  { id: "PK-503", order: "BO-1001", courier: "Pathao", weight: "0.6 kg", status: "Ready", tracking: "PT-88214" },
];

export interface ReturnItem {
  id: string;
  order: string;
  customer: string;
  reason: string;
  status: string;
  action: string;
}

export const returns: ReturnItem[] = [
  { id: "RT-101", order: "BO-1006", customer: "Mizan Rahman", reason: "Wrong size", status: "Approved", action: "Refund" },
  { id: "RT-102", order: "BO-1004", customer: "Walk-in", reason: "Damaged", status: "Inspecting", action: "Restock" },
  { id: "RT-103", order: "BO-1002", customer: "Nasrin Sultana", reason: "Changed mind", status: "Requested", action: "Pending" },
];

export interface Warehouse {
  id: string;
  name: string;
  location: string;
  skus: number;
  items: number;
  manager: string;
}

export const warehouses: Warehouse[] = [
  { id: "W-1", name: "Dhaka Central", location: "Tejgaon, Dhaka", skus: 320, items: 12400, manager: "Karim Uddin" },
  { id: "W-2", name: "Chattogram Port", location: "Agrabad, Chattogram", skus: 180, items: 6800, manager: "Sajid Islam" },
  { id: "W-3", name: "Sylhet Branch", location: "Zindabazar, Sylhet", skus: 95, items: 3400, manager: "Nadia Chowdhury" },
];

export interface Supplier {
  id: string;
  name: string;
  category: string;
  contact: string;
  outstanding: number;
  leadTime: string;
}

export const suppliers: Supplier[] = [
  { id: "S-1", name: "Latif Fabrics", category: "Textiles", contact: "01811001122", outstanding: 45000, leadTime: "7 days" },
  { id: "S-2", name: "KnitPro Apparel", category: "Knitwear", contact: "01922334455", outstanding: 0, leadTime: "10 days" },
  { id: "S-3", name: "Craft Accessories", category: "Bags", contact: "01755667788", outstanding: 12000, leadTime: "5 days" },
];

export const aiInsights = [
  "Demand for 'Classic Cotton Kurti' is forecast to rise 22% next week — consider restocking from Dhaka Central.",
  "BO-1005 (Sharmin Akter, COD ৳2,200) flagged as high risk: repeat late-delivery history.",
  "Best reorder point for 'Men's Polo Shirt': restock 40 units when stock drops below 8 to avoid a 9-day gap.",
  "Revenue is trending 15% above last month; the bKash channel shows the strongest growth at +28%.",
];

export const reports = [
  { id: "R-1", name: "Sales Summary", type: "Daily", rows: 240, lastGen: "2026-09-08" },
  { id: "R-2", name: "Stock Valuation", type: "Weekly", rows: 320, lastGen: "2026-09-07" },
  { id: "R-3", name: "Customer Cohort", type: "Monthly", rows: 85, lastGen: "2026-09-01" },
  { id: "R-4", name: "VAT & Tax", type: "Monthly", rows: 12, lastGen: "2026-09-01" },
];

export interface Employee {
  id: string;
  name: string;
  role: string;
  email: string;
  status: string;
}

export const employees: Employee[] = [
  { id: "E-1", name: "Owner", role: "Administrator", email: "owner@businessos.com", status: "Active" },
  { id: "E-2", name: "Karim Uddin", role: "Warehouse Manager", email: "karim@businessos.com", status: "Active" },
  { id: "E-3", name: "Sajid Islam", role: "Sales Agent", email: "sajid@businessos.com", status: "Active" },
  { id: "E-4", name: "Nadia Chowdhury", role: "Accountant", email: "nadia@businessos.com", status: "Inactive" },
];

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
}

export const notifications: Notification[] = [
  { id: "N-1", title: "Low stock alert", message: "'Men's Polo Shirt' is out of stock in Dhaka Central.", time: "2 min ago", read: false },
  { id: "N-2", title: "High-risk COD order", message: "BO-1005 requires approval due to customer risk score.", time: "15 min ago", read: false },
  { id: "N-3", title: "Courier pickup scheduled", message: "Pathao pickup at 3:00 PM for 12 parcels.", time: "1 hr ago", read: true },
];

export const marketingCampaigns = [
  { id: "M-1", name: "Eid Collection Launch", channel: "Facebook", budget: 15000, reach: 52000, conversions: 210, status: "Active" },
  { id: "M-2", name: "bKash Cashback", channel: "SMS", budget: 8000, reach: 18000, conversions: 95, status: "Active" },
  { id: "M-3", name: "VIP Retention Email", channel: "Email", budget: 2000, reach: 1200, conversions: 40, status: "Scheduled" },
];
