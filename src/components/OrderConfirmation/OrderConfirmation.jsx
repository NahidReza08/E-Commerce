import React from "react";

export default function OrderConfirmation({userDetails,cartItems}) {
    // console.log("user details",userDetails);
    // console.log("cart items",cartItems);
  return (
    <div>
      <div className="flex justify-center items-center mb-2 mx-auto">
        <h1 className="text-5xl font-bold text-pink-900">Successful!</h1>
      </div>
      <p className="p-2 bg-white text-blue-900 rounded-full mx-auto max-w-max text-center">Congratulations! Your order has been successfully placed. Our team will contact you soon whenever the product become ready. Thanks for shopping with us.</p>
    </div>
  );
}
