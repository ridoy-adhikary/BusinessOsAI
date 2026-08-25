import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";

export function SubscriptionGuard() {
  const subscription = useAuthStore((s) => s.subscription);

  if (!subscription || subscription.status === "cancelled") {
    return <Navigate to={paths.subscribe} replace />;
  }
  return <Outlet />;
}
