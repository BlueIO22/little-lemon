import { useEffect, useState } from "react";
import MenuItem from "./components/MenuItem";
import { meals } from "./meals";
import "./MenuItems.css";
import { Meal } from "./types";

function filterMealsByCategory(
  categories: string[] | undefined,
  preview: boolean | undefined
) {
  const filterMeals = [...meals];
  if (!categories || categories.length <= 0) {
    if (!preview) {
      return [...filterMeals.splice(0, 20)];
    }
    return [filterMeals[0], filterMeals[1], filterMeals[2], filterMeals[3]];
  }

  const foundMeals = filterMeals.filter((meal: Meal) =>
    categories.includes(meal.category)
  );

  if (preview) {
    return [...foundMeals.splice(0, 4)];
  }

  return foundMeals;
}

export default function MenuItems({
  categories,
  preview,
}: {
  categories?: string[];
  preview?: boolean;
}) {
  const [displayMeals, setDisplayMeals] = useState<Meal[]>([]);

  useEffect(() => {
    setDisplayMeals(filterMealsByCategory(categories, preview));
  }, [categories, preview]);

  return (
    <>
      <section id="menu-items">
        <ul>
          {displayMeals.map((meal: Meal) => {
            return (
              <li key={"meal-" + meal.name}>
                <MenuItem meal={meal} />
              </li>
            );
          })}
        </ul>
        <section id="see-more">
          <a href="/menu" className="primary-button">
            See more
          </a>
        </section>
      </section>
    </>
  );
}
