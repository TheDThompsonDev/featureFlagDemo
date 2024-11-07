"use client";

import React, { createContext, useContext, useState } from "react";

type FeatureFlagsContextType = {
  flags: { [key: string]: boolean };
  toggleFlag: (flagName: string) => void;
};

const FeatureFlagsContext = createContext<FeatureFlagsContextType>({
  flags: {},
  toggleFlag: () => {},
});

export const FeatureFlagsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [flags, setFlags] = useState({
    cryptoPayments: false,
    loyaltyRewards: false,
  });

  const toggleFlag = (flagName: string) => {
    setFlags((prev) => ({
      ...prev,
      [flagName]: !prev[flagName],
    }));
  };

  return (
    <FeatureFlagsContext.Provider value={{ flags, toggleFlag }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
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
  flagName: string;
  children: React.ReactNode;
}) => {
  const { flags } = useFeatureFlags();
  return flags[flagName] ? children : null;
};

export default FeatureFlagsContext;
