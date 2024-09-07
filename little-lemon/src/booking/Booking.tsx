import { faClose, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import useRestaurantBooking, {
  BookingResponse,
  BookingStatus,
} from "../context/RestaurantBookingsHook";
import "./Booking.css";
import BookingForm from "./components/BookingForm/BookingForm";

export default function Booking() {
  const { numberOfBookingsAvailable, maxNumberOfBookings, onBooking } =
    useRestaurantBooking();

  const [showResponseDialog, setShowResponseDialog] = useState(false);
  const [showBookingExists, setShowBookingExists] = useState(false);

  function onBookingSubmit(response: BookingResponse) {
    switch (response.status) {
      case BookingStatus.EXISTS:
        setTimeout(() => {
          setShowBookingExists(false);
        }, 4000);
        setShowBookingExists(true);
        break;
      case BookingStatus.SUCCESS:
        setShowResponseDialog(true);
        break;
      default:
        alert("status:" + response.status + "-" + response.description);
        break;
    }
  }
  return (
    <section id="booking">
      <section id="top-content">
        <article>
          <div>
            <h1>Reserve a table</h1>
            <p>
              By booking a table you are not just booking a table but also
              booking an evening, event or just a good lunch with collegues
            </p>
          </div>
          <p>
            <FontAwesomeIcon icon={faPerson} /> {numberOfBookingsAvailable}/
            {maxNumberOfBookings} tables open for reservation
          </p>
        </article>
        <img
          src="public/little-lemon-icons/Mario and Adrian A.jpg"
          alt="Mario and Adrian standing over the desk preparing food and talking"
        />
      </section>
      <section id="booking-form">
        {numberOfBookingsAvailable > 0 ? (
          <BookingForm onBooking={onBooking} onSubmit={onBookingSubmit} />
        ) : (
          <p>Sorry, there is no more bookings available for this restaurant</p>
        )}
      </section>
      {showBookingExists && (
        <section id="booking-exists">
          <h2>Sorry, but it seems that this booking is allready made</h2>
        </section>
      )}
      {showResponseDialog && (
        <section id="response">
          <div className="response-container">
            <article>
              <h2>Congratulations, your booking was a success!</h2>
              <p>
                An email with confirmation will be sent to your email address.
                We look forward to seeing you and your guests. Please feel free
                to look at our menu
              </p>
            </article>
            <FontAwesomeIcon
              onClick={() => setShowResponseDialog(false)}
              size="2x"
              color="white"
              icon={faClose}
            />
          </div>
          <button
            className="primary-button"
            onClick={() => {
              // clear form
            }}
          >
            Make a new reservation
          </button>
        </section>
      )}
    </section>
  );
}
