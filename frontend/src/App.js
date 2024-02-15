import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import CartPage from "./Pages/CartPage";
import ProductdetailPage from "./Pages/ProductetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-detail" element={<ProductdetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
