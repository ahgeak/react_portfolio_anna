import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "./index.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    index: true,
    element: <Home />
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: (
      <div>
        <Projects></Projects>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Contact />
        {/* <Link to="contact">Contact</Link> */}
      </div>
    ),
  },
  {
    path: "/resume",
    element: (
      <div>
        <Resume />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // <App />
  // </React.StrictMode>
);
