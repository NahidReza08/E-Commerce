import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from '../About/About';
import Cart from "../Cart/Cart";
import Checkout from "../Checkout/Checkout";
import Contact from '../Contact/Contact';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation";
import AllProducts from '../Products/AllProducts';


export default function Main() {
  const [menubar, setMenubar] = useState("hidden");
  const [cartIndex, setCartIndex] = useState("z-0");
  const paddingTop = (menubar !== "hidden") ? "pt-72" : "pt-28";

  return (
    <Router>
      <div className="main">
        <Navbar
          menubar={menubar}
          setMenubar={setMenubar}
          setCartIndex={setCartIndex}
        />
        <div className={`z-10 relative antialiased bg-blue-200 text-gray-900 font-sans p-6 min-h-screen ${paddingTop} md:pt-28`}>
        <Switch>
          <Route exact path="/"><AllProducts/></Route>
          <Route exact path="/products"><AllProducts/></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/contact"><Contact /></Route>
          <Route exact path="/checkout"><Checkout /></Route>
          <Route exact path="/confirmation"><OrderConfirmation /></Route>
          {/* <Route exact path="/product/:productId" component={ProductOverview} />
          <Route exact path="/about" component={AboutUs} />
          <Route exact path="/contact" component={ContactUs} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/order-summary" component={OrderSummary} />
          <Route exact path="*" component={ErrorPage} /> */}
        </Switch>
        </div>
        {/* <Body menubar={menubar} /> */}
        <Footer />

        <Cart cartIndex={cartIndex} setCartIndex={setCartIndex} />
      </div>
    </Router>
  );
}
