"use client";

import { useLeagueByCountry } from "@/hooks/useLeagueByCountry";
import Spinner from "./ui/spinner";

type CountryContainerProps = {
  countryName: string;
};

const CountryContainer = ({ countryName }: CountryContainerProps) => {
  const { data, isLoading, error } = useLeagueByCountry(countryName);
  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data?.response?.map((league) => (
          <li key={league.league.id}>{league.league.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountryContainer;
