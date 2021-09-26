import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

export default function ProductsContext({ children }) {
  const [products, setProducts] = useState(localStorage.getItem("products")?JSON.parse(localStorage.getItem("products")):[]);
  const [cartProducts,setCartProducts] = useState([]);

  useEffect(() => {
    //console.log("Useeffect has called.");
    if (localStorage.getItem("items") === null) {
      fetch("https://fakestoreapi.com/products/")
        .then((response) => response.json())
        .then((responseData) =>
          localStorage.setItem("products", JSON.stringify(responseData))
        )
        .then(() => setProducts(JSON.parse(localStorage.getItem("products"))));
    }
  },[]);

  return (
    <Context.Provider
      value={{
        products,
        cartProducts,
        setProducts,
        setCartProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
}
