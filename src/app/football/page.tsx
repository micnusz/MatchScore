"use server";

import CountriesContainer from "@/components/CountriesContainer";

interface CountryPageProps {
  params: { country: string };
}

export default async function CountryPage({ params }: CountryPageProps) {
  return (
    <div>
      <CountriesContainer />
    </div>
  );
}
