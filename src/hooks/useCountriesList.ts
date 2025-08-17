import { getCountryList } from "@/lib/query";
import { CountriesResponse } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useCountriesList() {
  return useQuery<CountriesResponse>({
    queryKey: ["countries"],
    queryFn: getCountryList,
  });
}
