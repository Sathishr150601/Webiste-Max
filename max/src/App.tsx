import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Paths from "./paths/Paths";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Paths />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
