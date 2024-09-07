import { Meal } from "../types";

const imageBaseUrl = "/little-lemon-icons/";

function getRandomMealImage() {
  const randomNumber = Math.random();

  if (randomNumber <= 0.2) {
    return imageBaseUrl + "bruchetta.svg";
  }

  if (randomNumber <= 0.5) {
    return imageBaseUrl + "greek salad.jpg";
  }

  if (randomNumber <= 0.7) {
    return imageBaseUrl + "lemon dessert.jpg";
  }

  return imageBaseUrl + "restauranfood.jpg";
}

export default function MenuItem({ meal }: { meal: Meal }) {
  return (
    <section id="menu-item">
      <img loading="lazy" src={getRandomMealImage()} alt="meal image" />
      <section id="menu-item-content">
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
      </section>
      <article id="price">
        <p>{meal.price},- NOK</p>
      </article>
    </section>
  );
}
