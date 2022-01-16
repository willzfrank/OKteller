import React from "react";
import { useRoutes } from "react-router-dom"; // New
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/HomePage"; // New
import Policy from "./pages/Policy"; // New
import ContactUs from "./pages/ContactUs"; // New
// import Services from "./pages/Services"; // New
import OkExchange from "./components/OkExchange";

export default function App() {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/policy",
      element: <Policy />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/okexchange",
      element: <OkExchange />,
    },
  ]); // New
  return routes; // New
}
