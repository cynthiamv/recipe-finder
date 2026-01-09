import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouriteRecipe {
  id: string;
  name: string;
  image: string;
  href: string;
}

interface FavouritesStore {
  favourites: FavouriteRecipe[];
  toggleFavourite: (recipe: FavouriteRecipe) => void;
  isFavourite: (id: string) => boolean;
}

export const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set, get) => ({
      favourites: [],

      toggleFavourite: (recipe) => {
        const exists = get().favourites.some(f => f.id === recipe.id);

        set({
          favourites: exists
            ? get().favourites.filter(f => f.id !== recipe.id)
            : [...get().favourites, recipe],
        });
      },
      isFavourite: (id) => get().favourites.some(f => f.id === id),
    }),
    {
      name: "favourites",
    }
  )
);