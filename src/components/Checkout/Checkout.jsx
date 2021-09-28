import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/ProductsContext";
import CartItem from "../Cart/CartItem";
import CheckoutForm from "./CheckoutForm";

export default function Checkout({ cartIndex, setCartIndex }) {
  const { products, cartProducts } = useContext(Context);
  //console.log(cartProducts);
  const totalItems = cartProducts.reduce(
    (total, product) => total + product["quantity"],
    0
  );
  const getTotalAmount = (total, cartProduct) => {
    const { id, quantity } = cartProduct;
    const product = products.filter((product) => product["id"] === id)[0];
    const { price } = product;
    return total + quantity * price;
  };
  const totalAmount = cartProducts.reduce(getTotalAmount, 0);

  //console.log(totalAmount);
  return (
    <div className="flex flex-col lg:flex-row justify-center ">
      <div className="relative w-full lg:w-2/6 flex flex-col h-auto max-h-screen justify-between border-black border-2 lg:border-0">
        <div className="flex-initial h-auto">
          <h1 className="text-lg text-center font-bold border-b-2 border-solid border-black">
            Order Preview<span className="text-sm">({totalItems} items)</span>
          </h1>
          <div className=" flex flex-row flex-shrink justify-between p-2 border-b-2 border-solid border-black">
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center  ">
              Product
            </span>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
              Quantity
            </span>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
              Price<span className="text-xxs">(unit)</span>
            </span>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
              Total
            </span>
          </div>
        </div>
        <div className=" flex flex-col flex-shrink p-2 items-start h-full rounded-lg overflow-auto">
          {cartProducts.map((product) => (
            <CartItem key={product.id} id={product.id} cartItem={product} />
          ))}
        </div>
        <div className="flex-initial h-auto">
          <div className="flex flex-row justify-between py-2 border-t-2 border-b-2 border-solid border-black">
            <span className="text-black font-bold text-lg">Total Amount</span>
            <span className="text-black font-bold text-lg">
              = ${totalAmount.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-center items-center pt-2">
            <Link to="/">
              <button className="py-3 px-6 bg-pink-700 border-solid rounded-full text-lg text-white font-bold hover:bg-pink-900">
                Continue Shopping
              </button>
            </Link>
          </div>

          <div className="pt-2">
            <span className="text-black font-bold text-center block" role="img">
              Thanks for staying with DSI E-Commerce {/*😍*/}
            </span>
          </div>
        </div>
      </div>

      <div
        className={`relative w-full lg:w-4/6 h-auto flex justify-center border-black border-2 mt-4 lg:mt-0 lg:border-0`}
      >
        <CheckoutForm />
        
      </div>
    </div>
  );
}
