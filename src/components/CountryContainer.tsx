"use client";

import { useLeagueByCountry } from "@/hooks/useLeagueByCountry";
import Spinner from "./ui/spinner";
import LeagueCard from "./ui/LeagueCard";
import Link from "next/link";

type CountryContainerProps = {
  countryName: string;
};

const CountryContainer = ({ countryName }: CountryContainerProps) => {
  const { data, isLoading, error } = useLeagueByCountry(countryName);
  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data?.response?.map((league) => (
          <Link
            href={`/football/${countryName}/${league.league.id}`}
            key={league.league.id}
          >
            <LeagueCard data={league} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default CountryContainer;
