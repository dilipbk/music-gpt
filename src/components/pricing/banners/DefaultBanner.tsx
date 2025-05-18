import Text from "@/components/common/Text";
import Image from "next/image";
import React from "react";

const DefaultBanner = () => {
  return (
    <div className="relative h-full">
      <Image
        src="/images/limitless-banner.png"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full z-10"
        width={400}
        height={600}
      />
      <div className="relative z-20 h-full flex flex-col justify-between items-center py-12 px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <Image src="/images/logo.png" width={36} height={36} alt="logo" />
            <Text size="md" className="font-medium text-white">
              MusicGPT
            </Text>
          </div>
          <Text size="lg" className="font-medium text-white mt-5">
            Limitless creation
          </Text>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src="/images/leaves-left.png"
            alt="leaves"
            width={14}
            height={14}
          />
          <Text size="xs" className="font-medium">
            Join 1M+ users
          </Text>
          <Image
            src="/images/leaves-left.png"
            alt="leaves"
            width={14}
            className="rotate-y-180"
            height={14}
          />
        </div>
      </div>
    </div>
  );
};

export default DefaultBanner;
