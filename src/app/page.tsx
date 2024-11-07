"use client";

import CheckoutPage from "@/components/CheckoutPage";
import { FeatureFlagsProvider } from "@/components/FeatureFlagsContext";

export default function Page() {
  return (
    <FeatureFlagsProvider>
      <CheckoutPage />
    </FeatureFlagsProvider>
  );
}
