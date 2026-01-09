import type { MealDetail } from "./meal";

export interface IngredientItem {
  ingredient: string;
  measure: string;
};

export interface RecipeDetail {
  id: string;
  name: string;
  instructions: string;
  category: string | null;
  area: string | null;
  ingredients: IngredientItem[];
}

export function extractIngredients(recipe: Record<string, string | null | undefined>): IngredientItem[] {
  const ingredients: IngredientItem[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure?.trim() || "",
      });
    }
  }

  return ingredients;
}

export function mealDetailToRecipeDetail(meal: MealDetail): RecipeDetail {
  return {
    id: meal.idMeal,
    name: meal.strMeal,
    instructions: meal.strInstructions || "",
    category: meal.strCategory || null,
    area: meal.strArea || null,
    ingredients: extractIngredients(meal),
  };
}