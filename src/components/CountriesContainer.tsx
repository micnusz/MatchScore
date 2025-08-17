"use client";

import { useCountriesList } from "@/hooks/useCountriesList";
import Spinner from "./ui/spinner";

const CountriesContainer = () => {
  const { data, isLoading, error } = useCountriesList();
  if (isLoading) return <Spinner />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold capitalize"></h1>
      <ul>
        {data?.data.map((country) => (
          <li key={country.name}>
            <a>{country.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesContainer;
