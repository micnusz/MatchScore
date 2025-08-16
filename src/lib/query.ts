import { api } from "./axios";

export const getFixturesToday = async () => {
  const today = new Date().toISOString().split("T")[0];
  const res = await api.get(`/fixtures?date=${today}&timezone=Europe/london`);
  return res.data;
};
