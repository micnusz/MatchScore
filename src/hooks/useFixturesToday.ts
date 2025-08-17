import { getFixturesToday } from "@/lib/query";
import { FixturesResponse } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useFixturesToday() {
  return useQuery<FixturesResponse>({
    queryKey: ["fixtures-today"],
    queryFn: getFixturesToday,
  });
}
