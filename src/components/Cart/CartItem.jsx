import React, { useContext } from "react";
import { Context } from "../../context/ProductsContext";

export default function CartItem({ id }) {
  const { products, cartProducts, setCartProducts } = useContext(Context);
  const index = products.findIndex((product) => product["id"] === id);
  const product = products[index];
  const { price, image } = product;

  const copycartProducts = [...cartProducts]
  const cartIndex = copycartProducts.findIndex((product) => product["id"] === id);
  const {quantity} = copycartProducts[cartIndex]
  //console.log("Render",quantity)

  const buttonClickHandler = (value) => {
    if(value==='+'){
      if(index===-1)copycartProducts.push({'id':id,'quantity':quantity+1})
      else copycartProducts[index].quantity = quantity+1;
    }
    else{
      if(quantity<=1){
        alert("Quantity of item should be greater than 0");
        return;
      }
      if(index===-1)copycartProducts.push({'id':id,'quantity':quantity-1})
      else copycartProducts[index].quantity = quantity-1;
    }
    setCartProducts(copycartProducts);
    //console.log(cartProducts);
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(quantity<=0){
      alert("Quantity of item should be greater than 0");
    }
  }

  const onChange = (e) => {
    const { value } = e.target;
    copycartProducts[cartIndex].quantity = Math.ceil(value);
    setCartProducts(copycartProducts);
  };

  return (
    <div
      className={`bg-white shadow-2xl m-2 rounded-lg px-2 py-4 }`}
    >
      <span className="m-0 p-0 rounded-full bg-pink-700 hover:bg-pink-900 cursor-pointer text-white text-xs w-4 h-4 flex items-center justify-center" onClick={e=>setCartProducts(cartProducts.filter((product)=>product['id']!==id))}>
        x
      </span>
      <div className="grid grid-flow-row grid-cols-5 gap-0">
        <div className="bg-white col-span-1 my-auto">
          <img
            src={image}
            alt="Product"
            className="w-3/5 h-auto object-center"
          />
        </div>

        <div className="custom-number-input my-auto col-span-2 mx-auto gap-1">
          <div className="flex flex-row h-7 md:h-10 w-3/5 md:w-4/5 rounded-lg relative bg-transparent mt-1 bg-black mr-auto xs:mx-auto">
            <button className=" bg-pink-700 text-white hover:text-red-700 hover:bg-pink-900 h-full w-5 rounded-l cursor-pointer outline-none" onClick={e=>buttonClickHandler('-')}>
              <span className="m-auto text-sm md:text-2xl font-bold">−</span>
            </button>
            <form onSubmit={e=>handleSubmit(e)}><input
              type="number"
              className="outline-none focus:outline-none text-center w-10 h-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="custom-input-number"
              value={Number(quantity).toString()}
              onChange={(e) => onChange(e)}
              required
            ></input></form>
            <button className="bg-pink-700 text-white hover:text-red-700 hover:bg-pink-900 h-full w-5 rounded-r cursor-pointer outline-none" onClick={e=>buttonClickHandler('+')}>
              <span className="m-auto text-sm md:text-2xl font-bold">+</span>
            </button>
          </div>
        </div>

        <div
          className="bg-white font-bold my-auto text-xxs md:text-base lg:text-lg font-bold text-black text-center col-span-1 
          ml-2 sm:-ml-2"
        >
          ${price}
        </div>
        <div className="bg-white font-bold my-auto text-xxs md:text-base lg:text-lg font-bold text-black text-right col-span-1">
         ${price * quantity}
        </div>
      </div>
    </div>
  );
}
