import Image from "next/image";
import Link from "next/link";
import { TheMealDB } from "@/src/services";
import FavouriteButton from "@/src/components/FavouriteButton";
import { mealDetailToRecipeDetail, type RecipeDetail } from "@/src/types/recipeDetail";
import placeholder from "../../../assets/placeholder.svg";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const RecipePage = async ({ params }: Props) => {
  const { id } = await params;
  const recipeData = await TheMealDB.getMealById(id);

  if (!recipeData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-2">Recipe not found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {`We couldn't find the recipe you're looking for.`}
          </p>
          <Link href="/" className="inline-block px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors">
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  const recipe: RecipeDetail = mealDetailToRecipeDetail(recipeData);

  const renderInstructions = (instructions: string) => {
    if (instructions) {
      const list = instructions.split(new RegExp(/\n/)).filter((item) => item.length > 1);
      return (
        <ul className="list-disc">
          {list.map((item, index) => <li key={index} className="ml-4 text-sm/7">{item}</li>)}
        </ul>
      );
    }
    return instructions;
  };

  const imageSrc = recipeData.strMealThumb
    ? `${recipeData.strMealThumb}/large`
    : placeholder.src;

  return (
    <div className="grid md:grid-cols-2 p-8 bg-header gap-8">
      <Image 
        src={imageSrc}
        alt={recipe.name}
        width={550}
        height={500}
        className="rounded-lg w-full"
      />
      <div>
        <div className="relative">
          <h1 className="text-xl font-bold mb-6 w-[85%]">{recipe.name}</h1>
          <FavouriteButton recipe={{
            id: recipe.id,
            name: recipe.name,
            image: recipeData.strMealThumb || placeholder.src,
            href: `/recipe/${recipe.id}`,
          }} />
        </div>
        <div className="rounded-lg border border-neutral-400 bg-[var(--bg-card)] p-4 shadow">
          <h2 className="mb-2 text-rose-600 text-lg">Ingredients</h2>
          <ul className="list-disc">
            {recipe.ingredients.map((item, index) => (
              <li key={index} className="ml-4 text-text">
                {item.measure
                  ? `${item.measure} ${item.ingredient}`
                  : item.ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="mb-2 text-rose-600 text-lg">Instructions</h2>
          {renderInstructions(recipe.instructions)}
        </div>
      </div>  
    </div>
  );
};

export default RecipePage;