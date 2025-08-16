import { create } from "zustand";

type AppState = {
  bookmarks: Record<string, boolean>;
  toggleBookmark: (id: string) => void;
  timezone: string;
  setTimezone: (timezone: string) => void;
};

export const useStore = create<AppState>((set) => ({
  bookmarks: {},
  toggleBookmark: (id) =>
    set((state) => ({
      bookmarks: { ...state.bookmarks, [id]: !state.bookmarks[id] },
    })),
  timezone: "Europe/warsaw",
  setTimezone: (tz) => set({ timezone: tz }),
}));
