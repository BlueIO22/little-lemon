import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <p>Not implementet yet</p>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <RouterProvider router={router} />
    <Footer />
  </StrictMode>
);
