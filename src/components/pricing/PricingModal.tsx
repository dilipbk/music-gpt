"use client";

import Modal from "@/components/common/modal";
import Text from "@/components/common/Text";
import Image from "next/image";
import { useState } from "react";
import PriceBox from "./PriceBox";
import Tooltip from "../common/Tooltip";
import Button from "../common/Button";

const PricingModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("pro");
  return (
    <div>
      <h1>This is pricing</h1>
      <button onClick={() => setOpen(true)}>Click me</button>
      <Modal
        bodyClasses="!px-0 !py-0"
        isOpen={open}
        onClose={() => setOpen(false)}
        hasDismiss={false}
      >
        <div className="flex flex-col md:flex-row rounded-[28px] overflow-hidden bg-[#16191C]">
          <div className="basis-1/2 hidden md:block">
            <Image
              src="/images/limitless-banner.png"
              alt="banner"
              width={400}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-8 py-12 px-8 basis-1/2">
            <Text size="xl">Unlock the future of music.</Text>
            <form className="flex flex-col gap-8">
              <div className="pricing-plans flex gap-3">
                <label htmlFor="plus" className="grow cursor-pointer">
                  <input
                    hidden
                    type="radio"
                    id="plus"
                    name="plan"
                    value="plus"
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <PriceBox text="Plus" isActive={selectedPlan === "plus"} />
                </label>
                <label htmlFor="pro" className="grow cursor-pointer">
                  <input
                    hidden
                    type="radio"
                    id="pro"
                    name="plan"
                    value="pro"
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <PriceBox
                    text="Pro"
                    isPopular={true}
                    isActive={selectedPlan === "pro"}
                  />
                </label>
                <label htmlFor="ultra" className="grow cursor-pointer">
                  <input
                    hidden
                    type="radio"
                    id="ultra"
                    name="plan"
                    value="ultra"
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  />
                  <PriceBox text="Ultra" isActive={selectedPlan === "ultra"} />
                </label>
              </div>
              <ul className="plan-detail space-y-2">
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/check.png"
                    width={13}
                    height={12}
                    alt="list marker"
                  />
                  <Text size="sm" className="!font-medium">
                    Generate 6000 songs /year
                  </Text>
                  <Tooltip description="Generate 6000 songs /year">
                    <Image
                      src="/images/info-circle.png"
                      className="cursor-pointer"
                      width={15}
                      height={15}
                      alt="tooltip"
                    />
                  </Tooltip>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/check.png"
                    width={13}
                    height={12}
                    alt="list marker"
                  />
                  <Text size="sm" className="!font-medium">
                    Unlimited downloads
                  </Text>
                  <Tooltip description="Unlimited downloads">
                    <Image
                      src="/images/info-circle.png"
                      className="cursor-pointer"
                      width={15}
                      height={15}
                      alt="tooltip"
                    />
                  </Tooltip>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/check.png"
                    width={13}
                    height={12}
                    alt="list marker"
                  />
                  <Text size="sm" className="!font-medium">
                    Unlock all features
                  </Text>
                  <Tooltip description="Unlock all features">
                    <Image
                      src="/images/info-circle.png"
                      className="cursor-pointer"
                      width={15}
                      height={15}
                      alt="tooltip"
                    />
                  </Tooltip>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/check.png"
                    width={13}
                    height={12}
                    alt="list marker"
                  />
                  <Text size="sm" className="!font-medium">
                    Fast generation
                  </Text>
                  <Tooltip description="Fast generation">
                    <Image
                      src="/images/info-circle.png"
                      className="cursor-pointer"
                      width={15}
                      height={15}
                      alt="tooltip"
                    />
                  </Tooltip>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src="/images/check.png"
                    width={13}
                    height={12}
                    alt="list marker"
                  />
                  <Text size="sm" className="!font-medium">
                    Commercial use
                  </Text>
                  <Tooltip description="Commercial use">
                    <Image
                      src="/images/info-circle.png"
                      className="cursor-pointer"
                      width={15}
                      height={15}
                      alt="tooltip"
                    />
                  </Tooltip>
                </li>
              </ul>
              <div>
                <div className="price">
                  <Text size="xl">$16.99</Text>
                  <Text
                    size="sm"
                    className="text-[#BFC2C8] !font-medium !leading-[150%] mt-2"
                  >
                    USD per month, billed yearly
                  </Text>

                  <Button size="lg" className="w-full mt-4">
                    <Text className="font-semibold">Unlock Pro features →</Text>
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PricingModal;
