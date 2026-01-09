import type {
  MealSummary,
  MealDetail,
  MealsResponse,
  MealDetailResponse,
  CategoriesResponse,
} from "../types/meal";

const BASE = "https://www.themealdb.com/api/json/v1/1";

async function fetchWithRetry<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
): Promise<T> {
  try {
    const url = new URL(`${BASE}/${path}`);
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
      });
    }

    const res = await fetch(url.toString(), { signal: AbortSignal.timeout(10000) });
    if (!res.ok) throw new Error(`TheMealDB request failed: ${res.status} ${res.statusText}`);
    return (await res.json()) as T;
  } catch (error) {
    throw error;
  }
}

async function fetchFrom<T>(path: string, params?: Record<string, string | number | undefined>): Promise<T> {
  return fetchWithRetry<T>(path, params);
}

export async function getMealById(id: string): Promise<MealDetail | null> {
  const data = await fetchFrom<MealDetailResponse>("lookup.php", { i: id });
  return data.meals && data.meals.length ? data.meals[0] : null;
} 

export async function filterByCategory(category: string): Promise<MealSummary[]> {
  const data = await fetchFrom<MealsResponse>("filter.php", {
    c: encodeURIComponent(category),
  });
  return data.meals ?? [];
}

export async function getCategories(): Promise<CategoriesResponse["categories"]> {
  const data = await fetchFrom<CategoriesResponse>("categories.php");
  return data.categories;
}

export async function lookupByName(name: string): Promise<MealDetail[] | []> {
  const data = await fetchFrom<MealDetailResponse>("search.php", { s: name });
  return data.meals ?? [];
}

export function mealToSummary(m: MealSummary) {
  return {
    id: m.idMeal,
    name: m.strMeal,
    image: m.strMealThumb,
    href: `/recipe/${m.idMeal}`,
  };
}

const TheMealDB = {
  getMealById,
  filterByCategory,
  getCategories,
  lookupByName,
  mealToSummary,
} as const;

export default TheMealDB;
