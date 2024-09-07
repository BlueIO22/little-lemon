import "@fortawesome/fontawesome-svg-core/styles.css";
import { Dispatch } from "react";
import Badge from "../../Badge/Badge";

export default function DeliveryFilter({
  selectedBadges,
  setSelectedBadges,
}: {
  selectedBadges: string[];
  setSelectedBadges: Dispatch<string[]>;
}) {
  const filterOptions = [
    "Burger",
    "Seafood",
    "Mexican",
    "Vegetarian",
    "Pasta",
    "Pizza",
  ];
  return (
    <section id="delivery-filter">
      {filterOptions.map((option: string) => {
        return (
          <Badge
            title={option}
            selected={
              selectedBadges.find((badge) => badge === option) !== undefined
            }
            onBadgeClick={(option: string) => {
              if (selectedBadges.includes(option)) {
                setSelectedBadges(
                  selectedBadges.filter((badge) => badge !== option)
                );
                return;
              }

              setSelectedBadges([...selectedBadges, option]);
            }}
            key={option}
          />
        );
      })}
    </section>
  );
}
