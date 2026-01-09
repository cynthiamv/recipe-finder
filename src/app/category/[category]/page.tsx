import Grid from "@/src/components/Grid";
import { TheMealDB } from "@/src/services";

const CategoryPage = async ({ params }: { params: Promise<{ category: string }>; }) => {
  const { category } = await params;

  const meals = await TheMealDB.filterByCategory(category);

  if (!meals || !meals.length) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-2">No recipes found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {`There are no recipes in the "${category}" category.`}
          </p>
          <a href="/categories" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
            Back to Categories
          </a>
        </div>
      </div>
    );
  }

  const items = meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    image: meal.strMealThumb ?? undefined,
    href: `/recipe/${meal.idMeal}`,
  }));

  return (
    <div className="p-8">
      <h1 className="mb-6 text-2xl font-bold">
        Category: {category}
      </h1>

      <Grid items={items} isRecipe />
    </div>
  );
};

export default CategoryPage;