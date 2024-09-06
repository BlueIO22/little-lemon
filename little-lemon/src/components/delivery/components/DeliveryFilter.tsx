import { Dispatch, useEffect, useState } from "react";
import { meals } from "../../../data/meals";
import Badge from "../../Badge/Badge";

export default function DeliveryFilter({
  selectedBadges,
  setSelectedBadges,
}: {
  selectedBadges: string[];
  setSelectedBadges: Dispatch<string[]>;
}) {
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  useEffect(() => {
    const filterOptions = [
      ...new Set(meals.map((x) => x.category).splice(0, 10)),
    ];

    setFilterOptions(filterOptions);
  }, []);

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
