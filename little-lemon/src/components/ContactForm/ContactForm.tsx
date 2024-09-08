import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import "./ContactForm.css";

type ContactValues = {
  name: string;
  email: string;
  subject: string;
  content: string;
};

export default function ContactForm() {
  const [savedSuccessfully, setSavedSuccessfully] = useState(false);
  const [keyExists, setKeyExists] = useState(false);

  const formikProps = {
    initialValues: {
      name: "",
      email: "",
      subject: "",
      content: "",
    } as ContactValues,
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Email must be valid, ex: little@lemon.com")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      content: Yup.string()
        .min(10, "Your content must be atleast 10 characters long")
        .max(100, "The content is just too long")
        .required("Content is required"),
    }),
    onSubmit: function (values: ContactValues) {
      const key = "contact:" + values.name + ":" + values.subject;
      const localStorageItem = localStorage.getItem(key);
      if (!localStorageItem) {
        localStorage.setItem(key, JSON.stringify(values));
        setTimeout(() => {
          setSavedSuccessfully(false);
        }, 5000);
        setSavedSuccessfully(true);
        return;
      }
      setTimeout(() => {
        setKeyExists(false);
      }, 5000);
      setKeyExists(true);
    },
  };

  const formik = useFormik(formikProps);

  const errorKeys = Object.keys(formik.errors);

  return (
    <form
      method="POST"
      action="/api/contact"
      onSubmit={(event) => {
        event.preventDefault();
        formik.handleSubmit(event);
      }}
      id="contact-form"
    >
      <label>
        <p>Name</p>
        <input
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          placeholder="Please write your name..."
          id="name"
        />
      </label>
      <label>
        <p>Email</p>
        <input
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Please write your email..."
          type="text"
          id="email"
        />
      </label>
      <label>
        <p>Subject</p>
        <input
          onChange={formik.handleChange}
          value={formik.values.subject}
          placeholder="Please write the subject..."
          type="text"
          id="subject"
        />
      </label>
      <label>
        <p>Content</p>
        <textarea
          onChange={formik.handleChange}
          value={formik.values.content}
          placeholder="Please write the content..."
          id="content"
        />
      </label>
      <section id="errors">
        {errorKeys.length > 0 && formik.touched && (
          <ul>
            {errorKeys.map((key) => {
              const errorKey = key as keyof ContactValues;
              return <li>{formik.errors[errorKey]}</li>;
            })}
          </ul>
        )}
      </section>
      <section id="notice">
        <h2>Response time</h2>
        <p>
          Due to alot of bookings and request we might not be able to answer
          your inquiry at our wanted speed. We are truly sorry for this, our
          customers is the chief end of our operations.{" "}
        </p>
        <p>
          If your inquiry is of more important concern please call us at: tel
          +00 0000 0000
        </p>
      </section>
      <section id="actions">
        <button
          id="clear"
          onClick={() => formik.resetForm()}
          className="secondary-button"
        >
          Clear
        </button>
        <button id="send" type="submit" className="primary-button">
          Send request
        </button>
      </section>
      {keyExists && (
        <section id="exists">
          <p>We are sorry, but it seems like this request allready exists</p>
        </section>
      )}
      {savedSuccessfully && (
        <section id="success">
          <article>
            <h3>Thank you for your inquiry!</h3>
            <p>We will send you an email confirmation of your request</p>
          </article>
        </section>
      )}
    </form>
  );
}
