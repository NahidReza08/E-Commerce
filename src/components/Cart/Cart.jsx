import React, { useContext } from "react";
import Logo from "../../assets/logo2.png";
import { Context } from "../../context/ProductsContext";
import CartItem from "./CartItem";

export default function Cart({cartIndex,setCartIndex}) {
  const { cartProducts, setCartProducts } = useContext(Context);
  const totalItems = cartProducts.reduce((total,product)=>total+product['quantity'],0)
  return (
    <div className={`fixed top-0 right-0 w-3/5 md:w-2/6 ${cartIndex}`}>
      <div className="bg-pink-900  ml-auto h-screen flex flex-col justify-between border-0 border-l-2 border-black">
        <div className="flex-initial flex flex-row border-b-2 flex-nowrap border-black">
          <div className="flex-grow pr-2 ">
            <img src={Logo} alt="logo" className="w-auto sm:w-1/2 h-auto" />
          </div>
          <div className="flex-grow text-white font-bold ml-auto">
            <i className="fas fa-times ml-auto text-right text-xs md:text-base lg:mt-4 lg:ml-4 cursor-pointer hover:text-pink-700" onClick={(e)=>setCartIndex('z-0')}></i>
          </div>
        </div>

        <div className="flex-initial bg-gray-100 h-full">
          <div className="border-b">
            <h1 className="text-sm font-bold text-black md:text-lg  ">
              Selected Items:
            </h1>
          </div>
          
          <div className={`bg-white shadow-2xl m-2 rounded-lg py-4 ${totalItems!==0?'hidden':'block'}`}>
            <h1 className="text-center text-gray-800">No Item Slected</h1>
          </div>

          <div className={`${totalItems===0?'hidden':'flex'} flex-row flex-shrink justify-between rounded-lg`}>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center  ">
              Product
            </span>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
              Quantity
            </span>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
              Price
            </span>
            <span className="flex-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center ">
              Total
            </span>
          </div>

          {cartProducts.map((product) => (
                <CartItem key={product.id} id={product.id} cartItem={product} />
            ))}


        </div>

        <div className="flex-initial">
          <div className={`${totalItems===0?'hidden':'flex'} flex-row justify-between py-2`}>
            <span className="text-white font-bold text-lg">Total Amount </span>
            <span className="text-white font-bold text-lg">= $20000</span>
          </div>
          <div className={`${totalItems===0?'hidden':'flex'} flex flex-row justify-center pb-2`}>
            <button className="p-2 mx-2 bg-pink-600 border-solid rounded-full text-lg text-white font-bold hover:bg-pink-700">
              Clear Cart
            </button>
            <button className="p-2 mx-2 bg-pink-600 border-solid rounded-full text-lg text-white font-bold hover:bg-pink-700">
              Order Now
            </button>
          </div>
          <div className="bg-pink-900 mb-2">
            <span className="text-white font-bold text-center block" role="img">
              Thanks for staying with DSI E-Commerce {/*😍*/}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
