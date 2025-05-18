import PricingModal from "./PricingModal";

const PricingContent = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) => {
  const params = await searchParams;

  const data = await fetch("http://localhost:8000/api/v1/subscription-plans");
  const plans = await data.json();

  return (
    <PricingModal
      searchParams={params}
      data={plans?.data?.length ? plans?.data : []}
      error={plans?.error}
    />
  );
};

export default PricingContent;
