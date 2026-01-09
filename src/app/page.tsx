import { TheMealDB } from "@/src/services";
import Grid from "../components/Grid";
import { GridItem } from "../types/gridItem";
import placeholder from "../assets/placeholder.svg";

const Page = async () => {
  const meals = await TheMealDB.filterByCategory("Beef");

  if (!meals || meals.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-2">No recipes available</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {`We couldn't load recipes at this time. Please try again later.`}
          </p>
        </div>
      </div>
    );
  }

  const items: GridItem[] = meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb || placeholder.src,
    href: `/recipe/${meal.idMeal}`,
  }));

  return (
    <div className="flex min-h-screen items-center justify-center font-sans">
      <Grid items={items} isRecipe />
    </div>
  );
} 



export default Page;
