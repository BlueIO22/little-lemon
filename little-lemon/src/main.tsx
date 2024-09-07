import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./about-us/AboutUs";
import Booking from "./booking/Booking";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import ContactUs from "./contact/ContactUs";
import Home from "./home/Home";
import Menu from "./menu/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "contact",
    element: <ContactUs />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
