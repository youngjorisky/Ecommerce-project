import "./App.css";
import { HomePage } from "./Pages/HomPage";
import { CheckoutPage } from "./Pages/CheckoutPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
