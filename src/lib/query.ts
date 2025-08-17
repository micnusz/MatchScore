import { api } from "./axios";
import { FixturesResponse } from "./types";

export const getFixturesToday = async () => {
  const today = new Date().toISOString().split("T")[0];
  const res = await api.get<FixturesResponse>(
    `/fixtures?date=${today}&timezone=Europe/warsaw&page=5&limit=2`
  );
  return res.data;
};
