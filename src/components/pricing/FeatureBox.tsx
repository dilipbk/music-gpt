import React, { ReactNode } from "react";
import Text from "../common/Text";

const FeatureBox = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="grow text-left">
        <Text size="sm" className="text-white tracking-[2%]">
          {title}
        </Text>
        <Text size="sm" className="text-white/50 text-[12px] tracking-[2%]">
          {description}
        </Text>
      </div>
    </div>
  );
};

export default FeatureBox;
