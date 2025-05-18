import Text from "@/components/common/Text";
import Image from "next/image";
import React from "react";
import FeatureBox from "../FeatureBox";
import { SelectedPlanProps } from "../PricingModal";
import { allFeatures, coreFeatures } from "@/config/features";
import Icon from "@/components/common/icon";

const FeatureBanner = ({ plan }: { plan: SelectedPlanProps }) => {
  const features = plan === "plus" ? coreFeatures : allFeatures;
  return (
    <div className="relative h-full">
      <Image
        src="/images/credit-banner.png"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full z-10"
        width={400}
        height={600}
      />
      <div className="relative z-20 h-full flex flex-col justify-evenly items-center py-12 px-8">
        <div className="text-center summary">
          <Text size="lg" className="font-medium text-white animate-fade-in">
            {plan === "plus" ? (
              "Core features"
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Icon name="lockopen" />
                Unlock all features
              </span>
            )}
          </Text>

          <div className="mt-8 space-y-6">
            {features?.map(({ icon, title, description }, idx) => (
              <FeatureBox
                key={idx}
                icon={<Icon name={icon} />}
                title={title}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
