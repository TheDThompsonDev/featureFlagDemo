"use client";

import { CreditCard, CircleDollarSign, Wallet } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { FeatureToggle } from "@/components/FeatureFlagsContext";

type PaymentMethodProps = {
  selectedPayment: string;
  setSelectedPayment: (method: string) => void;
  cartTotal: number;
};

export default function PaymentMethod({
  selectedPayment,
  setSelectedPayment,
  cartTotal,
}: PaymentMethodProps) {
  return (
    <Card className="bg-white shadow-md">
      <CardHeader className="border-b">
        <CardTitle className="text-xl text-gray-900">Payment Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        <div
          className={`p-4 border rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${
            selectedPayment === "credit-card"
              ? "border-blue-500 bg-blue-50 text-blue-900"
              : "border-gray-200 hover:border-blue-300"
          }`}
          onClick={() => setSelectedPayment("credit-card")}
        >
          <CreditCard
            className={`w-6 h-6 ${
              selectedPayment === "credit-card"
                ? "text-blue-500"
                : "text-gray-500"
            }`}
          />
          <div>
            <div className="font-semibold">Credit Card</div>
            <div className="text-sm text-gray-500">Visa, Mastercard, Amex</div>
          </div>
        </div>

        <div
          className={`p-4 border rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${
            selectedPayment === "paypal"
              ? "border-blue-500 bg-blue-50 text-blue-900"
              : "border-gray-200 hover:border-blue-300"
          }`}
          onClick={() => setSelectedPayment("paypal")}
        >
          <CircleDollarSign
            className={`w-6 h-6 ${
              selectedPayment === "paypal" ? "text-blue-500" : "text-gray-500"
            }`}
          />
          <div>
            <div className="font-semibold">PayPal</div>
            <div className="text-sm text-gray-500">Fast and secure</div>
          </div>
        </div>

        {/* Crypto Payments That Is Taggled By  Feature Flag */}
        <FeatureToggle flagName="cryptoPayments">
          <div
            className={`p-4 border rounded-lg cursor-pointer flex items-center gap-3 transition-colors ${
              selectedPayment === "crypto"
                ? "border-blue-500 bg-blue-50 text-blue-900"
                : "border-gray-200 hover:border-blue-300"
            }`}
            onClick={() => setSelectedPayment("crypto")}
          >
            <Wallet
              className={`w-6 h-6 ${
                selectedPayment === "crypto" ? "text-blue-500" : "text-gray-500"
              }`}
            />
            <div className="flex-1">
              <div className="font-semibold">Cryptocurrency</div>
              <div className="text-sm text-gray-500">
                Bitcoin, Ethereum, USDC
              </div>
            </div>
            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
              New
            </span>
          </div>
        </FeatureToggle>
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t mt-6 py-6">
        <div className="text-sm text-gray-500">
          {selectedPayment === "crypto" &&
            "Cryptocurrency payments processed instantly"}
          {selectedPayment === "paypal" && "You will be redirected to PayPal"}
          {selectedPayment === "credit-card" &&
            "Your card will be charged immediately"}
        </div>
        <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
          Pay ${cartTotal.toFixed(2)}
        </button>
      </CardFooter>
    </Card>
  );
}
