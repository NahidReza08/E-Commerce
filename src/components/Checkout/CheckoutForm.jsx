import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/ProductsContext";

export default function CheckoutForm() {
  const { cartProducts, setCartProducts } = useContext(Context);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if(cartProducts.some((product)=>product.quantity<=0)){
      alert("Quantity of item should be greater than 0");
      return;
    }
    const userDetails={
      firstName:e.target.firstName.value,
      lastName:e.target.lastName.value,
      email:e.target.email.value,
      contact:e.target.contact.value,
      address:e.target.address.value,
      city:e.target.city.value,
      union:e.target.union.value,
      postCode:e.target.postCode.value
    };
    const cartItems = [...cartProducts];
    //console.log("submit");
    setCartProducts([]);
    history.push("/confirmation",[{userDetails,cartItems}]);
  //   to={{
  //     pathname: "/confirmation",
  //     state: { cartItems, userDetails}
  //   }}
  // />
  }
  return (
    <div className="mt-0">
      <div className="mb-2 text-xl text-center font-bold border-b-2 border-black"><h1>User Information</h1></div>
      <form className="w-full max-w-lg" onSubmit={e=>onSubmit(e)}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstName"
              type="text"
              placeholder="Jane"
            />
            {/* <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="lastName"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              name="email"
              type="email"
              placeholder="doe@something.com"
            />
            {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Contact No.
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-contact"
              name="contact"
              type="text"
              placeholder="+880 1xxx-xxxxxx"
            />
            {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Address
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-contact"
              type="text"
              name="address"
              placeholder="Your Present Address"
            />
            {/* <p className="text-gray-600 text-xs italic">
              Make it as long and as crazy as you'd like
            </p> */}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="city"
              type="text"
              placeholder="Gazipur"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Union
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-union"
              name="union"
              type="text"
              placeholder="Tongi"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Post Code
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="post-code"
              name="postCode"
              type="text"
              placeholder="6696"
            />
          </div>
        </div>
        <div className="flex justify-center pt-2">
          {cartProducts.some((product)=>product.quantity<=0)?(
          <div className="flex flex-col">
            <span className="text-xs text-red-900">Quantity of an item should be greater than 0<br/></span>
          <button
            type="submit"
            className="bg-pink-700 hover:bg-pink-900 text-white font-bold rounded-lg px-6 py-2"
            disabled
          >
            Place Order
          </button>
          </div>):(<button
            type="submit"
            className="bg-pink-700 hover:bg-pink-900 text-white font-bold rounded-lg px-6 py-2"
          >
            Place Order
          </button>)}
        </div>
      </form>
    </div>
  );
}
