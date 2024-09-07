import { useEffect } from "react";

export default function RestaurantConfiguration() {
  useEffect(() => {
    const configuration = localStorage.getItem("little-lemon-config");
    if (!configuration) {
      localStorage.setItem(
        "little-lemon-config",
        JSON.stringify({
          amountOfBookingsAvailable: 10,
        })
      );
    }
  }, []);
  return <></>;
}
