import { createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "@/components/guards/auth-guard";
import { GuestGuard } from "@/components/guards/guest-guard";
import { SubscriptionGuard } from "@/components/guards/subscription-guard";
import { AppLayout } from "@/components/layout/app-layout";
import { PagePlaceholder } from "@/components/common/page-placeholder";
import { HomePage } from "@/features/landing/pages/home-page";
import { SolutionsPage } from "@/features/solutions/pages/solutions-page";
import { AboutPage } from "@/features/about/pages/about-page";
import { LoginPage } from "@/features/auth/pages/login-page";
import { RegisterPage } from "@/features/auth/pages/register-page";
import { SubscribePage } from "@/features/subscriptions/pages/subscribe-page";
import { DashboardPage } from "@/features/dashboard/pages/dashboard-page";
import { OrdersPage } from "@/features/dashboard/pages/orders-page";
import { PosPage } from "@/features/dashboard/pages/pos-page";
import { CustomersPage } from "@/features/dashboard/pages/customers-page";
import { ProductsPage } from "@/features/dashboard/pages/products-page";
import { InventoryPage } from "@/features/dashboard/pages/inventory-page";
import { WarehousesPage } from "@/features/dashboard/pages/warehouses-page";
import { SuppliersPage } from "@/features/dashboard/pages/suppliers-page";
import { PackagingPage } from "@/features/dashboard/pages/packaging-page";
import { CourierPage } from "@/features/dashboard/pages/courier-page";
import { ReturnsPage } from "@/features/dashboard/pages/returns-page";
import { PaymentsPage } from "@/features/dashboard/pages/payments-page";
import { FinancePage } from "@/features/dashboard/pages/finance-page";
import { MarketingPage } from "@/features/dashboard/pages/marketing-page";
import { AnalyticsPage } from "@/features/dashboard/pages/analytics-page";
import { AiAssistantPage } from "@/features/dashboard/pages/ai-assistant-page";
import { ReportsPage } from "@/features/dashboard/pages/reports-page";
import { EmployeesPage } from "@/features/dashboard/pages/employees-page";
import { NotificationsPage } from "@/features/dashboard/pages/notifications-page";
import { paths } from "./paths";

export const router = createBrowserRouter([
  { path: paths.home, element: <HomePage /> },
  { path: paths.solutions, element: <SolutionsPage /> },
  { path: paths.about, element: <AboutPage /> },
  {
    element: <GuestGuard />,
    children: [
      { path: paths.login, element: <LoginPage /> },
      { path: paths.register, element: <RegisterPage /> },
    ],
  },
  {
    element: <AuthGuard />,
    children: [
      { path: paths.subscribe, element: <SubscribePage /> },
      {
        element: <SubscriptionGuard />,
        children: [
          {
            element: <AppLayout />,
            children: [
              { path: paths.dashboard, element: <DashboardPage /> },
              { path: "orders", element: <OrdersPage /> },
              { path: "pos", element: <PosPage /> },
              { path: "customers", element: <CustomersPage /> },
              { path: "products", element: <ProductsPage /> },
              { path: "inventory", element: <InventoryPage /> },
              { path: "warehouses", element: <WarehousesPage /> },
              { path: "suppliers", element: <SuppliersPage /> },
              { path: "packaging", element: <PackagingPage /> },
              { path: "courier", element: <CourierPage /> },
              { path: "returns", element: <ReturnsPage /> },
              { path: "payments", element: <PaymentsPage /> },
              { path: "finance", element: <FinancePage /> },
              { path: "marketing", element: <MarketingPage /> },
              { path: "analytics", element: <AnalyticsPage /> },
              { path: "ai-assistant", element: <AiAssistantPage /> },
              { path: "reports", element: <ReportsPage /> },
              { path: "employees", element: <EmployeesPage /> },
              { path: "notifications", element: <NotificationsPage /> },
              { path: "subscriptions", element: <SubscribePage /> },
              { path: "admin", element: <PagePlaceholder title="Platform Admin" /> },
            ],
          },
        ],
      },
    ],
  },
]);
