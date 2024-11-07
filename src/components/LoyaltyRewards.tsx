"use client";

import { Gift } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FeatureToggle } from "@/components/FeatureFlagsContext";

type LoyaltyRewardsProps = {
  loyaltyPoints: number;
  pointsValue: number;
};

export default function LoyaltyRewards({
  loyaltyPoints,
  pointsValue,
}: LoyaltyRewardsProps) {
  return (
    <FeatureToggle flagName="loyaltyRewards">
      <Card className="bg-white shadow-md">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
            <Gift className="w-5 h-5 text-purple-500" />
            Redeem Loyalty Points
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex justify-between items-center">
            <div>
              <div className="font-semibold text-gray-900">
                Available Points
              </div>
              <div className="text-sm text-gray-500">
                {loyaltyPoints} points = ${pointsValue.toFixed(2)}
              </div>
            </div>
            <button className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
              Apply Points
            </button>
          </div>
        </CardContent>
      </Card>
    </FeatureToggle>
  );
}
