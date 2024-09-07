import { FormikValues } from "formik";
import { useEffect, useState } from "react";

export type State = {
  maxAmountOfBookings: number;
  numberOfBookingsAvailable: number;
};

export enum BookingStatus {
  ERROR,
  UNKNOWN,
  EXISTS,
  SUCCESS,
}

export type BookingResponse = {
  status: BookingStatus;
  description: string;
};

export default function useRestaurantBooking() {
  const [numberOfBookingsAvailable, setNumberOfBookingsAvailable] = useState(0);
  const [maxNumberOfBookings, setMaxNumberOfBookings] = useState(0);

  const localStorageKey = "little-lemon-config";

  const initialState = {
    maxAmountOfBookings: 10,
    numberOfBookingsAvailable: 10,
  };

  function getConfig() {
    const config = window.localStorage.getItem("little-lemon-config");
    if (!config) {
      console.log("inserting config");
      window.localStorage.setItem(
        "little-lemon-config",
        JSON.stringify(initialState)
      );
    }
    return config ? (JSON.parse(config) as State) : initialState;
  }

  function updateNumberOfAvailableBookings(config: State) {
    const newNumberOfbookingsAvailable = config.numberOfBookingsAvailable - 1;
    if (newNumberOfbookingsAvailable < 0) {
      return false;
    }
    window.localStorage.setItem(
      localStorageKey,
      JSON.stringify({
        ...config,
        numberOfBookingsAvailable: newNumberOfbookingsAvailable,
      })
    );
    setNumberOfBookingsAvailable(newNumberOfbookingsAvailable);
    return true;
  }

  function onBooking(values: FormikValues): BookingResponse {
    const config = getConfig();
    const key = "form-booking-" + values.name + "-" + values.datetime;
    if (window.localStorage.getItem(key)) {
      return {
        status: BookingStatus.EXISTS,
        description: "It looks like booking allready exists",
      };
    }

    if (updateNumberOfAvailableBookings(config)) {
      localStorage.setItem(key, JSON.stringify(values));
      return {
        status: BookingStatus.SUCCESS,
        description: "Booking was a success",
      };
    }

    return {
      status: BookingStatus.ERROR,
      description: "Unknown error occoured",
    };
  }

  useEffect(() => {
    const config = getConfig();
    setMaxNumberOfBookings(config.maxAmountOfBookings);
    setNumberOfBookingsAvailable(config.numberOfBookingsAvailable);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    numberOfBookingsAvailable,
    maxNumberOfBookings,
    setMaxNumberOfBookings,
    setNumberOfBookingsAvailable,
    onBooking,
  };
}
