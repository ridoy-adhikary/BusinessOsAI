import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "@/stores/auth-store";
import { paths } from "@/routes/paths";

export function GuestGuard() {
  const token = useAuthStore((s) => s.token);
  const subscription = useAuthStore((s) => s.subscription);

  if (token) {
    const target =
      subscription && subscription.status !== "cancelled" ? paths.dashboard : paths.subscribe;
    return <Navigate to={target} replace />;
  }
  return <Outlet />;
}
