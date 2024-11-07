"use client";

import { Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { FeatureToggle } from "@/components/FeatureFlagsContext";

type OrderSummaryProps = {
  cartTotal: number;
  loyaltyPoints: number;
  pointsValue: number;
};

export default function OrderSummary({
  cartTotal,
  loyaltyPoints,
  pointsValue,
}: OrderSummaryProps) {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader className="border-b">
        <CardTitle className="text-xl text-gray-900">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex justify-between mb-4 text-lg">
          <span className="text-gray-600">Cart Total:</span>
          <span className="font-semibold text-gray-900">
            ${cartTotal.toFixed(2)}
          </span>
        </div>

        <FeatureToggle flagName="loyaltyRewards">
          <Alert className="bg-purple-50 border border-purple-200">
            <Crown className="w-5 h-5 text-purple-500" />
            <AlertDescription className="ml-2 text-purple-700">
              You have {loyaltyPoints} loyalty points (${pointsValue.toFixed(2)}{" "}
              value)
            </AlertDescription>
          </Alert>
        </FeatureToggle>
      </CardContent>
    </Card>
  );
}
