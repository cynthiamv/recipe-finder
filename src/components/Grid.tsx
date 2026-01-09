import Card from "./Card";
import { GridItem } from "../types/gridItem";

interface GridProps {
  items: GridItem[];
  isRecipe?: boolean;
}

const Grid = ({ items, isRecipe }:  GridProps) => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-16 py-16">
      {items.map((item) =>
        <Card 
          key={item.id} 
          item={{
            id: item.id,
            name: item.name,
            image: item.image,
            href: item.href
          } }
          isRecipe={ isRecipe }
        />)}
    </main>
  );
}

export default Grid;