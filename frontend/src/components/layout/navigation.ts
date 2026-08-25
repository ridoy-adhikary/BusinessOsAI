import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bot,
  Boxes,
  Building2,
  CreditCard,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Package,
  PackageCheck,
  QrCode,
  Receipt,
  RotateCcw,
  ScanBarcode,
  ShoppingCart,
  Store,
  Truck,
  Users,
  UsersRound,
  Wallet,
} from "lucide-react";
import { paths } from "@/routes/paths";

export interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: "Main",
    items: [{ label: "Dashboard", to: paths.dashboard, icon: LayoutDashboard }],
  },
  {
    title: "Sales",
    items: [
      { label: "Orders", to: paths.orders, icon: ShoppingCart },
      { label: "POS", to: paths.pos, icon: ScanBarcode },
      { label: "Customers", to: paths.customers, icon: Users },
    ],
  },
  {
    title: "Catalog",
    items: [
      { label: "Products", to: paths.products, icon: Package },
      { label: "Inventory", to: paths.inventory, icon: Boxes },
      { label: "Warehouses", to: paths.warehouses, icon: Store },
      { label: "Suppliers", to: paths.suppliers, icon: Truck },
    ],
  },
  {
    title: "Operations",
    items: [
      { label: "Packaging & QR", to: paths.packaging, icon: QrCode },
      { label: "Courier", to: paths.courier, icon: PackageCheck },
      { label: "Returns", to: paths.returns, icon: RotateCcw },
    ],
  },
  {
    title: "Money",
    items: [
      { label: "Payments", to: paths.payments, icon: CreditCard },
      { label: "Finance", to: paths.finance, icon: Wallet },
    ],
  },
  {
    title: "Growth",
    items: [
      { label: "Marketing", to: paths.marketing, icon: MessageSquare },
      { label: "Analytics", to: paths.analytics, icon: BarChart3 },
      { label: "AI Assistant", to: paths.aiAssistant, icon: Bot },
      { label: "Reports", to: paths.reports, icon: FileText },
    ],
  },
  {
    title: "Workspace",
    items: [
      { label: "Employees", to: paths.employees, icon: UsersRound },
      { label: "Notifications", to: paths.notifications, icon: Receipt },
      { label: "Subscription", to: paths.subscriptions, icon: Building2 },
    ],
  },
];
