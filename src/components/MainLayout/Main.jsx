import React, { useState } from "react";
import Body from "../Body/Body";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Main() {
  const [menubar, setMenubar] = useState("hidden");
  const [cartIndex, setCartIndex] = useState("z-0");
  return (
    <div className="main">
      <div className={cartIndex==='z-30'?'opacity-30 cursor-not-allowed' :'opacity-100'} >
        <Navbar
          menubar={menubar}
          setMenubar={setMenubar}
          setCartIndex={setCartIndex}
        />
        <Body menubar={menubar} />
        <Footer />
      </div>
      <Cart cartIndex={cartIndex} setCartIndex={setCartIndex} />
    </div>
  );
}
