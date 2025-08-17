import { api } from "./axios";
import { CountriesResponse, FixturesResponse, LeagueResponse } from "./types";

export const getFixturesToday = async () => {
  const today = new Date().toISOString().split("T")[0];
  const res = await api.get<FixturesResponse>(
    `/fixtures?date=${today}&timezone=Europe/warsaw&page=5&limit=2`
  );
  return res.data;
};

export const getCountryList = async () => {
  const res = await api.get<CountriesResponse>(`/countries`);
  return res.data;
};

export const getLeagueByCountry = async (countryName: string) => {
  const res = await api.get<LeagueResponse>(
    `/leagues?country=${countryName.toLowerCase()}`
  );
  return res.data;
};
