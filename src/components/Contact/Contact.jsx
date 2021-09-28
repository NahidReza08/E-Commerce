import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";

export default function Contact() {
  return (
    <div>
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto bg-pink-900">
        <div className="w-full lg:w-2/5 h-full ">
          <img
            src={Logo}
            className="rounded-none lg:rounded-lg w-full h-auto"
            alt="dsi e-commerce logo"
          />
        </div>
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0 text-pink-900 border-b-2">
              Contact Us
            </h1>
            <b>Our Location :</b>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.9620950969997!2d90.39567831493372!3d23.784364084572577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c76b647646a9%3A0x3d8e312ddac5f950!2sDynamic%20Solution%20Innovators%20(DSi)!5e0!3m2!1sen!2sbd!4v1632735179657!5m2!1sen!2sbd"
              className="border-0 pt-2 w-full h-full mb-2"
              allowfullscreen=""
              title="google map location"
              loading="lazy"
            ></iframe>

            <b className="pt-4 mx-auto text-center ">Follow Us in Social Media :</b>
            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-around">
              <a
                className="link"
                href="https://www.facebook.com/DynamicSolutionInnovators"
                data-tippy-content="@facebook_handle"
              >
                <i class="fab fa-facebook-square text-3xl hover:text-blue-900"></i>
              </a>

              <a
                className="link"
                href="http://www.dsinnovators.com/"
                data-tippy-content="@website"
              >
                <i class="fas fa-window-maximize text-3xl hover:text-blue-900"></i>
              </a>
              <a className="link" href="mailto:info@dsinnovators.com" data-tippy-content="@email">
                <i class="fas fa-envelope-open-text text-3xl hover:text-blue-900"></i>
              </a>
              <a className="link" href="tel:02-9887041" data-tippy-content="@phone">
                <i class="fas fa-phone-square-alt text-3xl hover:text-blue-900"></i>
              </a>
            </div>

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
