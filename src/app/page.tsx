import PricingContent from "@/components/pricing/PricingContent";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] };
}) {
  const params = await searchParams;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {params.dialog === "pricing" && (
        <PricingContent searchParams={searchParams} />
      )}
    </div>
  );
}
