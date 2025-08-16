import { getFixturesToday } from "@/lib/query";
import { Root } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

export function useFixturesToday() {
  return useQuery<Root>({
    queryKey: ["fixtures-today"],
    queryFn: getFixturesToday,
  });
}
