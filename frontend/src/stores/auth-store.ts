import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { BusinessType, PlanTier } from "@/types";

interface AuthUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface SubscriptionInfo {
  tier: PlanTier;
  status: "active" | "trialing" | "cancelled";
}

interface SessionPayload {
  token: string;
  user: AuthUser;
  businessId: string;
  businessType?: BusinessType;
}

interface AuthState {
  token: string | null;
  user: AuthUser | null;
  businessId: string | null;
  businessType: BusinessType | null;
  subscription: SubscriptionInfo | null;
  setSession: (session: SessionPayload) => void;
  setSubscription: (subscription: SubscriptionInfo) => void;
  clearSession: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      businessId: null,
      businessType: null,
      subscription: null,
      setSession: ({ token, user, businessId, businessType }) =>
        set({ token, user, businessId, businessType: businessType ?? null }),
      setSubscription: (subscription) => set({ subscription }),
      clearSession: () =>
        set({ token: null, user: null, businessId: null, businessType: null, subscription: null }),
    }),
    { name: "businessos-auth" },
  ),
);
