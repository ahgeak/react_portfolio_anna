import { useEffect } from "react";
import AboutComponent from "./components/AboutComponent";
import ContactComponent from "./components/ContactComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import NavigationComponent from "./components/NavigationComponent";
import ProjectComponent from "./components/ProjectComponent";
import SkillsComponent from "./components/SkillsComponent";


import "./App.css";

export default function App() {
  useEffect(() => {
    document.title = "Anna Chuapetcharasopon Portfolio";
  }, []);

  return 
  <HeaderComponent>

  </HeaderComponent>;
}
