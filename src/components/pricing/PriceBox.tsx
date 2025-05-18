import Text from "@/components/common/Text";
import clsx from "clsx";
import React from "react";
import Badge from "../common/Badge";

const PriceBox = ({
  text,
  isActive = false,
  isPopular = false,
}: {
  text: string;
  isActive: boolean;
  isPopular?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "text-center relative py-3 px-4 h-[50px] rounded-md border flex items-center justify-center",
        !isActive ? "border-[#3A3E42]" : "border-white outline-1 outline-white"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge text="Popular" />
        </div>
      )}
      <Text
        className={clsx(
          "font-semibold",
          isActive ? "!text-primary-900" : "!text-primary-800"
        )}
      >
        {text}
      </Text>
    </div>
  );
};

export default PriceBox;
