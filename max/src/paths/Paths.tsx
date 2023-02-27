import { Route, Routes } from "react-router-dom";
import { Home, UnderMaintanence } from "../Pages";

export default function Paths() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<UnderMaintanence />}></Route>
    </Routes>
  );
}
