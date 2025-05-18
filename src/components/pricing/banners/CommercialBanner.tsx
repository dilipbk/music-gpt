import Text from "@/components/common/Text";
import Image from "next/image";
import React from "react";
import SocialBox from "../SocialBox";

const CommercialBanner = () => {
  return (
    <div className="relative h-full">
      <Image
        src="/images/credit-banner.png"
        alt="banner"
        className="absolute top-0 left-0 w-full h-full z-10"
        width={400}
        height={600}
      />
      <div className="relative z-20 h-full flex flex-col justify-center items-center py-12 px-0">
        <div className="text-center summary animate-fade-in">
          <Text size="lg" className="font-medium text-white">
            Commercial use
          </Text>

          <Text className="!text-primary-800/80 mt-4 !leading-6 px-1">
            Use your downloads anywhere
          </Text>
        </div>
        <div className="overflow-hidden w-full flex flex-col gap-4 mt-8 relative social-container animate-fade-in">
          <div className="flex gap-4">
            <div className="flex gap-3 animate-slide">
              <SocialBox name="tiktok" />
              <SocialBox name="twitch" />
              <SocialBox name="youtube" />
              <SocialBox name="instagram" />
            </div>
            <div className="flex gap-3 animate-slide">
              <SocialBox name="nonprofit" />
              <SocialBox name="website" />
              <SocialBox name="presentation" />
              <SocialBox name="blogs" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-3 animate-slide">
              <SocialBox name="wedding" />
              <SocialBox name="ads" />
              <SocialBox name="broadcast" />
              <SocialBox name="nonprofit" />
            </div>
            <div className="flex gap-3 animate-slide">
              <SocialBox name="game" />
              <SocialBox name="movies" />
              <SocialBox name="project" />
              <SocialBox name="spotify" />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-3 animate-slide">
              <SocialBox name="twitch" />
              <SocialBox name="youtube" />
              <SocialBox name="instagram" />
              <SocialBox name="spotify" />
            </div>
            <div className="flex gap-3 animate-slide">
              <SocialBox name="ads" />
              <SocialBox name="broadcast" />
              <SocialBox name="nonprofit" />
              <SocialBox name="website" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialBanner;
