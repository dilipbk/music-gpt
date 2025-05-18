import Text from "@/components/common/Text";
import Image from "next/image";
import React from "react";
import FeatureBox from "../FeatureBox";

const FeatureBanner = () => {
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
        <div className="text-center summary animate-fade-in">
          <Text size="lg" className="font-medium text-white">
            Core features
          </Text>

          <div className="mt-8 space-y-6">
            <FeatureBox
              icon={
                <Image
                  src="/images/music-icon.png"
                  alt="music icon"
                  width={15}
                  height={15}
                />
              }
              title="Songs"
              description="Create full songs and add your own lyrics"
            />
            <FeatureBox
              icon={
                <Image
                  src="/images/guitar-icon.png"
                  alt="music icon"
                  width={15}
                  height={15}
                />
              }
              title="Instrumentals"
              description="Generate instrumental songs without vocals"
            />
            <FeatureBox
              icon={
                <Image
                  src="/images/guitar-icon.png"
                  alt="music icon"
                  width={15}
                  height={15}
                />
              }
              title="Instrumentals"
              description="Generate instrumental songs without vocals"
            />
            <FeatureBox
              icon={
                <Image
                  src="/images/guitar-icon.png"
                  alt="music icon"
                  width={15}
                  height={15}
                />
              }
              title="Instrumentals"
              description="Generate instrumental songs without vocals"
            />
            <FeatureBox
              icon={
                <Image
                  src="/images/guitar-icon.png"
                  alt="music icon"
                  width={15}
                  height={15}
                />
              }
              title="Instrumentals"
              description="Generate instrumental songs without vocals"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;
