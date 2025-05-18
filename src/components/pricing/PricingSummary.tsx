import React from "react";
import CommercialBanner from "./banners/CommercialBanner";
import DefaultBanner from "./banners/DefaultBanner";
import CreditBanner from "./banners/CreditBanner";
import DownloadBanner from "./banners/DownloadBanner";
import FeatureBanner from "./banners/FeatureBanner";
import GenerationBanner from "./banners/GenerationBanner";
import { SelectedPlanProps } from "./PricingModal";

const PricingSummary = ({
  selectedIndex,
  selectedPlan,
}: {
  selectedIndex: number | null;
  selectedPlan: SelectedPlanProps;
}) => {
  if (selectedIndex === null) return <DefaultBanner />;
  if (selectedIndex === 0) return <CreditBanner plan={selectedPlan} />;
  if (selectedIndex === 1) return <DownloadBanner />;
  if (selectedIndex === 2) return <FeatureBanner plan={selectedPlan} />;
  if (selectedIndex === 3) return <GenerationBanner />;
  if (selectedIndex === 4) return <CommercialBanner />;
};

export default PricingSummary;
