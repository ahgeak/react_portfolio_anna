import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';


import App from "./App";
import Home from './pages/Home';
import About from './pages/About'
import "./index.css";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home></Home>
        {/* <Link to="home">Home</Link> */}
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <About></About>
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Link to="contact">Contact</Link>
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
