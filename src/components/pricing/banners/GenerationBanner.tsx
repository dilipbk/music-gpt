import Text from "@/components/common/Text";
import Image from "next/image";
import React from "react";

const GenerationBanner = () => {
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
          <Text
            size="lg"
            className="font-medium flex items-center justify-center gap-2 text-white"
          >
            <Image
              src="/images/flash-icon.png"
              width={16}
              height={20}
              alt="flash icon"
            />
            Fastlane queue
          </Text>

          <Text className="!text-primary-800/80 mt-4 !leading-6 px-1">
            Get prioritized in the queue and enjoy lower waiting times.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default GenerationBanner;
