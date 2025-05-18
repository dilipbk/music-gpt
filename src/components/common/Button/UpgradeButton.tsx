"use client";

import React from "react";
import Button from ".";
import Text from "../Text";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const UpgradeButton = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handlePricingModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("dialog", "pricing");
    const newUrl = `${pathname}?${params.toString()}`;
    router.push(newUrl);
  };

  return (
    <Button onClick={handlePricingModal}>
      <Text size="sm" className="!text-primary-100 !font-medium">
        Updgrade
      </Text>
    </Button>
  );
};

export default UpgradeButton;
