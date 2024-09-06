import { useEffect, useState } from "react";
import { meals } from "../../data/meals";
import MenuItem from "./components/MenuItem";
import "./MenuItems.css";
import { Meal } from "./types";

function filterMealsByCategory(
  categories: string[] | undefined,
  preview: boolean | undefined
) {
  if (!categories || categories.length <= 0) {
    return [meals[0], meals[1], meals[2], meals[3]];
  }

  const foundMeals = meals.filter((meal: Meal) => {
    const found = categories.find(
      (x) => x.toLowerCase() === meal.category.toLowerCase()
    );
    return found !== undefined;
  });

  console.log(foundMeals);

  if (preview) {
    return foundMeals.splice(0, 4);
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
