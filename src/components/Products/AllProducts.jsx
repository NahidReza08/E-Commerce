import React, { useContext } from "react";
import { Context } from "../../context/ProductsContext";
import Product from "../Products/Product";

export default function Body({ menubar }) {
  const { products } = useContext(Context);

  return (
    <div>
      
        <div className={ `${products.length===0?'flex':'hidden'} justify-center items-center`} >
          <div className="animate-spin rounded-full h-96 w-96 border-t-4 border-pink-900"></div>
        </div>

        <div className="mx-10">
          <div
            className="
              mt-4
              grid grid-cols-1
              gap-y-10 gap-x-6
              sm:grid-cols-2
              lg:grid-cols-4
              xl:gap-x-10
              space-x-1
              xl:container
              xl:mx-auto
            "
          >
            {/* <!--Start of Item 1--> */}
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
         
            {/* <!--End of Item 1--> */}

            
          </div>
        </div>
     
    </div>
  );
}
