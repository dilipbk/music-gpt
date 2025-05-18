import Text from "@/components/common/Text";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { SelectedPlanProps } from "../PricingModal";

const CreditBanner = ({ plan }: { plan: SelectedPlanProps }) => {
  const typewriters = ["Create anything", "Create stunning"];

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  //   the typewriter effect
  useEffect(() => {
    const current = typewriters[loopNum % typewriters.length];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length - 1));
        setTypingSpeed(60);
      }, typingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + 1));
        setTypingSpeed(120);
      }, typingSpeed);
    }

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

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
            {plan === "plus"
              ? "Get 5K credits /month"
              : plan === "pro"
              ? "Get 25K credits /month"
              : "∞ Unlimited credits"}
          </Text>

          <Text className="!text-primary-800/80 mt-4 !leading-6">
            That equals to 100 full songs or instrumentals, and 40 sound effects
            generations.
          </Text>
        </div>
        <div className="w-full relative min-h-[172px] flex flex-col justify-center">
          <div className="bubbles absolute z-0 blur-2xl top-0 left-0 right-0 w-full min-w-[400px] h-full">
            <span className="block absolute top-1/2 -translate-y-1/2 animate-[pulse_4000ms_ease-in-out_infinite]">
              <Image
                src="/images/bubble-1.png"
                alt="bubble"
                width={400}
                height={300}
              />
            </span>
            <span className="block absolute top-1/2 -translate-y-1/2 animate-[pulse_4000ms_ease-in-out_200ms_infinite]">
              <Image
                src="/images/bubble-2.png"
                alt="bubble"
                width={400}
                height={300}
              />
            </span>
            <span className="block absolute top-1/2 -translate-y-1/2 animate-[pulse_4000ms_ease-in-out_400ms_infinite]">
              <Image
                src="/images/bubble-3.png"
                alt="bubble"
                width={400}
                height={300}
              />
            </span>
          </div>
          <div className="bg-primary-300/90 border-[3px] typewriter-wrapper animate-slide-in-right border-[#fff3] pointer-events-none h-16 w-full min-w-[400px] rounded-3xl relative -right-[24px] z-10 p-3">
            <Text className="!leading-8 flex items-center gap-1 typewriter pointer-events-none select-none relative">
              <span className="block h-9 text-primary-800">{text}</span>
              <span className="w-px block h-5 bg-primary-800 cursor"></span>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditBanner;
