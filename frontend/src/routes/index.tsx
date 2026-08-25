import { createBrowserRouter } from "react-router-dom";
import { AuthGuard } from "@/components/guards/auth-guard";
import { GuestGuard } from "@/components/guards/guest-guard";
import { SubscriptionGuard } from "@/components/guards/subscription-guard";
import { AppLayout } from "@/components/layout/app-layout";
import { PagePlaceholder } from "@/components/common/page-placeholder";
import { HomePage } from "@/features/landing/pages/home-page";
import { SolutionsPage } from "@/features/solutions/pages/solutions-page";
import { LoginPage } from "@/features/auth/pages/login-page";
import { RegisterPage } from "@/features/auth/pages/register-page";
import { SubscribePage } from "@/features/subscriptions/pages/subscribe-page";
import { DashboardPage } from "@/features/dashboard/pages/dashboard-page";
import { paths } from "./paths";

export const router = createBrowserRouter([
  { path: paths.home, element: <HomePage /> },
  { path: paths.solutions, element: <SolutionsPage /> },
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
              { path: "orders", element: <PagePlaceholder title="Orders" /> },
              { path: "pos", element: <PagePlaceholder title="POS" /> },
              { path: "customers", element: <PagePlaceholder title="Customers" /> },
              { path: "products", element: <PagePlaceholder title="Products" /> },
              { path: "inventory", element: <PagePlaceholder title="Inventory" /> },
              { path: "warehouses", element: <PagePlaceholder title="Warehouses" /> },
              { path: "suppliers", element: <PagePlaceholder title="Suppliers & Purchases" /> },
              { path: "packaging", element: <PagePlaceholder title="Packaging & QR" /> },
              { path: "courier", element: <PagePlaceholder title="Courier" /> },
              { path: "returns", element: <PagePlaceholder title="Returns" /> },
              { path: "payments", element: <PagePlaceholder title="Payments" /> },
              { path: "finance", element: <PagePlaceholder title="Finance" /> },
              { path: "marketing", element: <PagePlaceholder title="Marketing" /> },
              { path: "analytics", element: <PagePlaceholder title="Analytics" /> },
              { path: "ai-assistant", element: <PagePlaceholder title="AI Assistant" /> },
              { path: "reports", element: <PagePlaceholder title="Reports" /> },
              { path: "employees", element: <PagePlaceholder title="Employees & Roles" /> },
              { path: "notifications", element: <PagePlaceholder title="Notifications" /> },
              { path: "subscriptions", element: <SubscribePage /> },
              { path: "admin", element: <PagePlaceholder title="Platform Admin" /> },
            ],
          },
        ],
      },
    ],
  },
]);
