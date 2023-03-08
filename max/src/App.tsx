import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Paths from "./paths/Paths";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Paths />
    </div>
  );
}
