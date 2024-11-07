"use client";

import { Settings, Wallet, Crown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useFeatureFlags } from "@/components/FeatureFlagsContext";

export default function FeatureFlagsAdmin() {
  const { flags, toggleFlag } = useFeatureFlags();

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          Feature Flags Control
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="w-4 h-4" />
            <span>Crypto Payments</span>
          </div>
          <Switch
            checked={flags.cryptoPayments}
            onCheckedChange={() => toggleFlag("cryptoPayments")}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-4 h-4" />
            <span>Loyalty Rewards</span>
          </div>
          <Switch
            checked={flags.loyaltyRewards}
            onCheckedChange={() => toggleFlag("loyaltyRewards")}
          />
        </div>
      </CardContent>
    </Card>
  );
}
