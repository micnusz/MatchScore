"use server";
import CountryContainer from "@/components/CountryContainer";

interface CountryPageProps {
  params: { country: string };
}

export default async function CountryPage({ params }: CountryPageProps) {
  const countryName = params.country;
  return (
    <div className="fluid-padding">
      <CountryContainer countryName={countryName} />
    </div>
  );
}
