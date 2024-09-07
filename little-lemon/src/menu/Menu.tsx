import { useState } from "react";
import Banner from "../components/Banner/Banner";
import DeliveryFilter from "../components/delivery/components/DeliveryFilter";
import MenuItems from "../components/MenuItems/MenuItems";
import "./Menu.css";

export default function Menu() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  return (
    <section id="menu">
      <Banner
        title="Our menu"
        imageAlt="Image of sushi"
        imageUrl="/little-lemon-icons/restauranfood.jpg"
      />
      <section id="categories-section">
        <h2>Categories</h2>
        <DeliveryFilter
          selectedBadges={selectedCategories}
          setSelectedBadges={setSelectedCategories}
        />
      </section>
      <section id="items">
        <MenuItems key={"menu"} categories={selectedCategories} />
      </section>
    </section>
  );
}
