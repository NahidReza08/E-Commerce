import React from "react";

export default function Footer() {
  return (
    <div className="z-10 relative">
      <footer className="footer bg-pink-900 relative pt-1 ">
        <div className="container mx-auto px-6">
          <div className="sm:flex sm:mt-4">
            <div
              className="
                mt-8
                sm:mt-0 sm:w-full sm:px-8
                flex flex-col
                md:flex-row
                justify-between
              "
            >
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mb-2">
                  Footer header 1
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                  Footer header 2
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white uppercase mt-4 md:mt-0 mb-2">
                  Footer header 3
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <div className="mt-2 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-2">
              <p className="text-sm text-blue-100 font-bold mb-2">
                © 2021 by MD. NAHID REZA
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
