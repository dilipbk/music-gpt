"use client";

import Modal from "@/components/common/modal";
import Text from "@/components/common/Text";
import PriceBox from "./PriceBox";
import Tooltip from "../common/Tooltip";
import Button from "../common/Button";
import PricingSummary from "./PricingSummary";
import { redirect, usePathname, useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import useDevice from "@/hooks/useDevice";
import { Plan } from "./types";
import clsx from "clsx";
import Icon from "../common/icon";

export type SelectedPlanProps = "pro" | "plus" | "ultra";

const PricingModal = ({
  searchParams,
  data = [],
  error,
}: {
  searchParams: { [key: string]: string | string[] };
  data: Plan[];
  error: string;
}) => {
  const open = searchParams.dialog === "pricing";
  const [selectedPlan, setSelectedPlan] = useState<SelectedPlanProps>("plus");
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const [redirecting, setRedirecting] = useState<boolean>(false);
  const router = useRouter();

  const pathname = usePathname();
  const handleCloseModal = () => {
    router.push(pathname, { scroll: false });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setRedirecting(true);
    const timer = setTimeout(() => {
      setRedirecting(false);
      clearTimeout(timer);
    }, 500);

    e.preventDefault();
    redirect("https://www.musicgpt.com");
  };

  const currentPlan = data?.find((plan) => plan.name === selectedPlan);

  const { isMobile } = useDevice();

  return (
    <div>
      <Modal
        bodyClasses="!px-0 !py-0"
        isOpen={open}
        onClose={handleCloseModal}
        hasDismiss={isMobile}
      >
        {!!data?.length && (
          <div className="flex flex-col md:flex-row rounded-[28px] overflow-hidden h-screen md:h-auto bg-[#16191C]">
            <div className="basis-1/2 w-1/2 hidden md:block relative z-10">
              <PricingSummary
                selectedIndex={selectedFeature}
                selectedPlan={selectedPlan}
              />
            </div>
            <div className="flex flex-col gap-8 py-12 px-8 basis-full md:basis-1/2 w-full md:w-1/2 relative z-20 bg-[#16191C]">
              <Text size="xl">Unlock the future of music.</Text>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 h-full md:h-auto"
              >
                <div className="pricing-plans flex gap-3">
                  {data?.map(({ id, name, displayName, isPopular }) => (
                    <label
                      key={id}
                      htmlFor={name}
                      className="grow cursor-pointer"
                    >
                      <input
                        hidden
                        type="radio"
                        id={name}
                        name="plan"
                        value={name}
                        onChange={(e) =>
                          setSelectedPlan(e.target.value as SelectedPlanProps)
                        }
                      />
                      <PriceBox
                        text={displayName}
                        isActive={selectedPlan === name}
                        isPopular={isPopular}
                      />
                    </label>
                  ))}
                </div>

                <ul className="plan-detail space-y-2">
                  {currentPlan?.features?.map((feat, idx) => (
                    <li
                      onClick={() => setSelectedFeature(idx)}
                      key={idx}
                      className={clsx("flex items-center gap-2 cursor-pointer")}
                    >
                      <Icon
                        name="check"
                        width={13}
                        height={12}
                        className={clsx(
                          selectedFeature === null || selectedFeature === idx
                            ? "opacity-100"
                            : "opacity-60"
                        )}
                      />
                      <Text
                        size="sm"
                        className={clsx(
                          "!font-medium",
                          selectedFeature === null || selectedFeature === idx
                            ? "opacity-100"
                            : "opacity-60"
                        )}
                      >
                        {feat}
                      </Text>
                      <Tooltip description={feat}>
                        <Icon
                          name="infocircle"
                          className="cursor-pointer"
                          width={15}
                          height={15}
                        />
                      </Tooltip>
                    </li>
                  ))}
                </ul>

                <div className="price grow md:grow-0">
                  <Text size="xl">{currentPlan?.price}</Text>
                  <Text
                    size="sm"
                    className="text-primary-800 !font-medium !leading-[150%] mt-2"
                  >
                    USD per month, billed yearly
                  </Text>

                  <div className="mt-4 content-end md:content-starth-[80%] md:h-auto">
                    <Button
                      disabled={redirecting}
                      type="submit"
                      size="lg"
                      className={clsx("w-full", redirecting && "opacity-45")}
                    >
                      <Text className="font-semibold !text-primary">
                        {redirecting
                          ? "Redirecting..."
                          : `Unlock ${currentPlan?.displayName} features →`}
                      </Text>
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
        {error && (
          <div className="flex items-center justify-center h-screen md:h-[500px] bg-[#16191C] rounded-3xl">
            <Text>{error}</Text>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PricingModal;
