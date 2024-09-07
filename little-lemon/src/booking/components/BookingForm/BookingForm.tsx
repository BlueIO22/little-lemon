import { useFormik } from "formik";
import * as Yup from "yup";
import { BookingResponse } from "../../../context/RestaurantBookingsHook";
import "./BookingForm.css";

type FormikValues = {
  name: string;
  email: string;
  datetime: string;
  guests: number;
};

export default function BookingForm({
  onSubmit,
  onBooking,
}: {
  onSubmit: (response: BookingResponse) => void;
  onBooking: (values: FormikValues) => BookingResponse;
}) {
  const formikProps = {
    initialValues: {
      name: "",
      email: "",
      datetime: "",
      guests: 0,
    } as FormikValues,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .email("Email must be valid, ex: little@lemon.com")
        .required("Required"),
      guests: Yup.number()
        .min(1, "Atleast one guests must be joining")
        .max(
          10,
          "As we dont have space for tables larger than 2x 5, we can unfortunatly only support 10 peoples"
        )
        .required("Required"),
      datetime: Yup.string()
        .matches(
          /(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})/,
          "Please provide a correct date time"
        )
        .required("Required"),
    }),
    onSubmit: function (values: FormikValues) {
      const response: BookingResponse = onBooking(values);
      onSubmit(response);
    },
  };

  function resetForm() {
    formik.resetForm();
  }
  const formik = useFormik(formikProps);

  return (
    <form
      method="POST"
      action="/api/booking"
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit(event);
      }}
      id="booking-table-form"
    >
      <fieldset>
        <label id="nameLabel">
          <p>Name</p>
        </label>
        <input
          id="name"
          placeholder="Please enter your name..."
          aria-labelledby="nameLabel"
          onChange={formik.handleChange}
          value={formik.values.name}
        ></input>
        {formik.errors.name && formik.touched && (
          <p data-error="true">{formik.errors.name}</p>
        )}
        <label id="emailLabel">
          <p>Email</p>
        </label>
        <input
          id="email"
          aria-labelledby="emailLabel"
          placeholder="Please enter your email..."
          onChange={formik.handleChange}
          value={formik.values.email}
        ></input>
        {formik.errors.email && formik.touched && (
          <p data-error="true">{formik.errors.email}</p>
        )}
      </fieldset>
      <div className="two-columns">
        <span>
          <label id="guestsLabel">
            <p>Guests</p>
          </label>
          <input
            type="number"
            id="guests"
            aria-labelledby="guestsLabel"
            onChange={formik.handleChange}
            value={formik.values.guests}
          />
          {formik.errors.guests && formik.touched && (
            <p data-error="true">{formik.errors.guests}</p>
          )}
        </span>
        <span>
          <label id="dateTimeLabel">
            <p>Date and time for the event</p>
          </label>
          <input
            id="datetime"
            aria-label="Date and time"
            onChange={(event) => {
              formik.handleChange(event);
            }}
            value={formik.values.datetime}
            type="datetime-local"
          />
          {formik.errors.datetime && formik.touched && (
            <p data-error="true">{formik.errors.datetime}</p>
          )}
        </span>
      </div>
      <section id="form-actions">
        <div>
          <button onClick={resetForm} className="secondary-button">
            Clear
          </button>
          <button type="submit" className="primary-button">
            Send reservation
          </button>
        </div>
      </section>
    </form>
  );
}
