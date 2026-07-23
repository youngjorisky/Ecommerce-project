import "./App.css";
import { HomePage } from "./Pages/HomPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<div>test checkout page</div>} />
    </Routes>
  );
}

export default App;
