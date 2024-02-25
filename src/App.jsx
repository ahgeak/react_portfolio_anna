import { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
// import AboutComponent from "./components/AboutComponent";
// import ContactComponent from "./components/ContactComponent";
// import FooterComponent from "./components/FooterComponent";
// import HeaderComponent from "./components/HeaderComponent";
// import NavigationComponent from "./components/NavigationComponent";
// import ProjectComponent from "./components/ProjectComponent";
// import SkillsComponent from "./components/SkillsComponent";
// import "./App.css";

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";
// import { Home } from "./pages/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <Home></Home>
//         {/* <Link to="home">Home</Link> */}
//       </div>
//     ),
//   },
//   {
//     path: "/contact",
//     element: (
//       <div>
//         <Link to="contact">Contact</Link>
//       </div>
//     ),
//   },
// ]);

export default function App() {
  const [title, setTitle] = useState("Anna Chuapetcharasopon");
  useEffect(() => {
    function updateTitle() {
      setTitle((previousTitle) => {
        console.log(previousTitle);
        document.title = title + ' Portfolio';
      })
    };

    updateTitle();
  }, []);

  return (
    <main>
          {/* <RouterProvider router={router} /> */}
          <Outlet />
    </main>
  );
}
