import { create } from "zustand";

type AppState = {
  bookmarks: Record<string, boolean>;
  toggleBookmark: (id: string) => void;
};

export const useStore = create<AppState>((set) => ({
  bookmarks: JSON.parse(localStorage.getItem("bookmarks") || "{}"),
  toggleBookmark: (id: string) =>
    set((state) => {
      const newBookmarks = { ...state.bookmarks, [id]: !state.bookmarks[id] };
      localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
      return { bookmarks: newBookmarks };
    }),
}));
