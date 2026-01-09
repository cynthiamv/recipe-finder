"use client";

import { Heart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useFavouritesStore } from "../store/favourites.store";
import { GridItem } from "../types/gridItem";

const FavouriteButton = ({ recipe }: { recipe: GridItem }) => {
  const pathname = usePathname();
  const isInsideRecipePage = pathname.startsWith("/recipe/"); 
  const isFavourite = useFavouritesStore(state => state.isFavourite(recipe.id));
  const toggleFavourite = useFavouritesStore(state => state.toggleFavourite);

  const handleFavouriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavourite({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      href: recipe.href,
    });
  }
  return (
    <button
      onClick={handleFavouriteClick}
      className={`absolute top-${isInsideRecipePage ? "0" : "2"} right-2 p-2 rounded-full bg-white bg-opacity-75 hover:bg-opacity-100 transition-colors cursor-pointer`}
      >
      {isFavourite
        ? <Heart className="fill-red-500 text-red-500 h-5 w-5" />
        : <Heart className="text-red-500 h-5 w-5" />}
    </button>
  )
}

export default FavouriteButton;
