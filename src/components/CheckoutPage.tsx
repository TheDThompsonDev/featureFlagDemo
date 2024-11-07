"use client";

import { useState } from "react";
import FeatureFlagsAdmin from "./FeatureFlagsAdmin";
import OrderSummary from "./OrderSummary";
import PaymentMethod from "./PaymentMethod";
import LoyaltyRewards from "./LoyaltyRewards";

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const cartTotal = 99.99;
  const loyaltyPoints = 500;
  const pointsValue = 5.0;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

        <FeatureFlagsAdmin />

        <div className="space-y-6">
          <OrderSummary
            cartTotal={cartTotal}
            loyaltyPoints={loyaltyPoints}
            pointsValue={pointsValue}
          />

          <PaymentMethod
            selectedPayment={selectedPayment}
            setSelectedPayment={setSelectedPayment}
            cartTotal={cartTotal}
          />

          <LoyaltyRewards
            loyaltyPoints={loyaltyPoints}
            pointsValue={pointsValue}
          />
        </div>
      </div>
    </div>
  );
}
