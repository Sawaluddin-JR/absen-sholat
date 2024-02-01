import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import About from "./pages/About.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Subuh from "./pages/Subuh.jsx";
import Dzuhur from "./pages/Dzuhur.jsx";
import Ashar from "./pages/Ashar.jsx";
import { Maghrib } from "./pages/Maghrib.jsx";
import Isya from "./pages/Isya.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "subuh",
        element: <Subuh />,
      },
      {
        path:"dzuhur",
        element:<Dzuhur/>
      },
      {
        path:"ashar",
        element:<Ashar/>
      },
      {
        path:"maghrib",
        element:<Maghrib/>
      },
      {
        path:"isya",
        element:<Isya/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
