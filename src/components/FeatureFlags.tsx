"use client";

import React, { createContext, useContext, useState } from "react";

type FeatureFlagsContextType = {
  flags: {
    isCryptoPaymentsEnabled: boolean;
    isLoyaltyRewardsEnabled: boolean;
  };
  toggleFlag: (
    flagName: "isCryptoPaymentsEnabled" | "isLoyaltyRewardsEnabled"
  ) => void;
};

const FeatureFlagsContext = createContext<FeatureFlagsContextType | undefined>(
  undefined
);

export const FeatureFlagsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flags, setFlags] = useState(() => {
    const stored = localStorage.getItem("featureFlags");
    return stored
      ? JSON.parse(stored)
      : {
          isCryptoPaymentsEnabled: false,
          isLoyaltyRewardsEnabled: false,
        };
  });

  const updateFlags = (updates: Partial<typeof flags>) => {
    setFlags((prev: typeof flags) => ({
      ...prev,
      ...updates,
    }));
  };

  const toggleFlag = (flagName: keyof typeof flags) => {
    updateFlags({ [flagName]: !flags[flagName] });
  };

  <FeatureFlagsContext.Provider value={{ flags, toggleFlag }}>
    {children}
  </FeatureFlagsContext.Provider>;
};

export const useFeatureFlags = () => {
  const context = useContext(FeatureFlagsContext);
  if (!context) {
    throw new Error(
      "useFeatureFlags must be used within a FeatureFlagsProvider"
    );
  }
  return context;
};

export const FeatureToggle = ({
  flagName,
  children,
}: {
  flagName: "isCryptoPaymentsEnabled" | "isLoyaltyRewardsEnabled";
  children: React.ReactNode;
}) => {
  const { flags } = useFeatureFlags();
  return flags[flagName] ? children : null;
};

export default FeatureFlagsProvider;
