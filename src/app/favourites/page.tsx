"use client";

import Grid from "@/src/components/Grid";
import { useFavouritesStore } from "@/src/store/favourites.store";

const FavouritesPage = () => {
  const favourites = useFavouritesStore(state => state.favourites);

  if (favourites.length === 0) {
    return <p className="p-6 text-center">No favourites yet</p>
  }

  return <Grid items={favourites} isRecipe />;
}

export default FavouritesPage;
