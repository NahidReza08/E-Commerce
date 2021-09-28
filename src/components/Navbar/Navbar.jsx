import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo2.png";
import { Context } from "../../context/ProductsContext";


export default function Navbar({menubar,setMenubar,setCartIndex}) {

  const { cartProducts } = useContext(Context);
  const totalItems = cartProducts.reduce((total,product)=>total+product['quantity'],0)

    //const [menubar,setMenubar] = useState("hidden"); //flex-col, hidden
    const toggleMenubar = (e) => {
        if(menubar==="hidden")
            setMenubar("flex-col");
        else
            setMenubar("hidden");
    }

  return (
    <div className="z-20 absolute">
      <nav className="p-6 bg-pink-900 flex flex-col md:flex-row fixed w-full">
        <div
          className="
            flex-initial flex flex-row
            font-semibold
            text-xl
            tracking-tight
            text-white
          "
        >
          <div className="flex-auto">
            <img src={Logo} alt="logo" className="w-40 h-auto" />
          </div>
          <div className="flex-auto text-right md:hidden ">
            <i className="fas fa-bars hover:text-blue-700 focus:ring-4 " onClick={e=>toggleMenubar(e)}></i>
          </div>
        </div>
        <div
          className={ `flex-auto ${menubar} text-center text-lg text-white justify-center md:flex-row md:flex` }
        >
          <Link to="/"><div className="flex-initial px-4 py-1">Home</div></Link>
          <Link to="/about"><div className="flex-initial px-4 py-1">About Us</div></Link>
          <Link to="/contact"><div className="flex-initial px-4 py-1">Contact Us</div></Link>
        </div>

        <div className={`flex-initial ${menubar} text-center justify-center md:flex`}>
            <div className="mx-auto text-lg text-white p-1 ">
            <i className="fas fa-cart-arrow-down hover:text-pink-500 cursor-pointer text-lg" onClick={(e)=>setCartIndex("z-30")}><sup className="p-1 pb-2">{totalItems>0?totalItems:null}</sup></i>
            </div>
        </div>
        
      </nav>
      
    </div>
  );
}
