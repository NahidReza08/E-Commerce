import React from "react";
import "./App.css";
import MainLayout from "./components/MainLayout/Main";
import ProductsContext from "./context/ProductsContext";

function App() {
  return (
    <ProductsContext>
      <MainLayout />
    </ProductsContext>
  );
}

export default App;
