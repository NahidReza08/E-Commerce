import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";


export default function About() {
  return (
    <div>
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto bg-pink-900">
        <div className="w-full lg:w-2/5 h-full "><img
            src={Logo}
            className="rounded-none lg:rounded-lg w-full h-auto"
            alt="dsi e-commerce logo"
          /></div>
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-pink-900">
              About Us
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-8 text-sm">
              <b>DSI E-Commerece</b> is a trusted online shopping platform. You
              can find beautiful, unique products all over the world in one
              place. So, just simply search your product, choose from the
              availble one and buy it just in one click.
            </p>
            <p className="pt-8 text-sm">
              You can order your products from any where in Bangladesh. Just
              order it and our delivery team will be at your door.😜
            </p>
            <p className="pt-8 text-sm">
              Thanks for your visit. Enjoy yourself with <b>DSI E-Commerece</b>.
            </p>

            <div className="pt-12 pb-8">
              <Link to="/">
                <button className="bg-pink-700 hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full">
                  Home
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
