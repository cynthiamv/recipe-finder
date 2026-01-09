import { GridItem } from "@/src/types/gridItem";
import Grid from "../../components/Grid";
import { TheMealDB } from "@/src/services";
import placeholder from "../../assets/placeholder.svg";

const CategoriesPage = async () => {
  const categories = await TheMealDB.getCategories();

  if (!categories || categories.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-body text-text">
        <div className="text-center max-w-md">
          <h2 className="text-2xl font-semibold mb-2">No categories available</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {`We couldn't load categories at this time. Please try again later.`}
          </p>
        </div>
      </div>
    );
  }

  const items: GridItem[] = categories.map((cat) => ({
    id: cat.idCategory,
    name: cat.strCategory,
    image: cat.strCategoryThumb || placeholder.src,
    href: `/category/${cat.strCategory}`,
  }));
  return (
    <div>
      <Grid items={items} />
    </div>
  );
}

export default CategoriesPage;
