"use client";

import { useEffect, useState } from "react";

type DeviceType = "small" | "medium" | "large";

interface DeviceInfo {
  device: DeviceType;
  isMobile: boolean;
  isTablet: boolean;
  isLarge: boolean;
}

const getDeviceInfo = (width: number): DeviceInfo => {
  if (width < 786) {
    return {
      device: "small",
      isMobile: true,
      isTablet: false,
      isLarge: false,
    };
  } else if (width >= 786 && width <= 1284) {
    return {
      device: "medium",
      isMobile: false,
      isTablet: true,
      isLarge: false,
    };
  } else {
    return {
      device: "large",
      isMobile: false,
      isTablet: false,
      isLarge: true,
    };
  }
};

const defaultDeviceInfo: DeviceInfo = {
  device: "large", // or "medium" or "small" as a safe default
  isMobile: false,
  isTablet: false,
  isLarge: true,
};

const useDevice = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(defaultDeviceInfo);

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const handleResize = () => {
      setDeviceInfo(getDeviceInfo(window.innerWidth));
    };

    // Set initial value on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceInfo;
};

export default useDevice;
