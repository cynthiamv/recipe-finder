import Link from "next/link";
import { TheMealDB } from "@/src/services";
import Grid from "@/src/components/Grid";
import { GridItem } from "@/src/types/gridItem";
import placeholder from "../../assets/placeholder.svg";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};


const ResultsPage = async ({ searchParams }: Props) => {
  const { q } = await searchParams

  if (!q) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-4">No search query</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Please enter a recipe name to search.
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const meals = await TheMealDB.lookupByName(q);

  if (!meals || meals.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-2">No results found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {`We couldn't find any recipes matching "${q}". Try searching for something else.`}
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
            Try a new search
          </Link>
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
    <div>
      <h1 className="text-xl font-bold pt-6 pl-14">{`Search Results for "${q}" (${meals.length} found)`}</h1>
      <Grid items={items} />
    </div>
  );
}

export default ResultsPage;