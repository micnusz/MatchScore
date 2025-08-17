import { getLeagueByCountry } from "@/lib/query";
import { LeagueResponse } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useLeagueByCountry(countryName: string) {
  return useQuery<LeagueResponse>({
    queryKey: ["leagues-list", countryName],
    queryFn: () => getLeagueByCountry(countryName),
  });
}
