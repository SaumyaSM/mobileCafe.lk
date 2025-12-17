import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { colors } from "../../config/colors.js";
import logo from "../../assets/images/logo.PNG";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-white shadow-sm font-inter h-20">
      
      {/* LEFT */}
      <div className="flex items-center">
        <div>
          <img src={logo} alt="MobileCafe.lk Logo" className="h-20 w-auto object-contain" />
        </div>
        <h1 className="text-xl font-bold text-black ">MobileCafe.lk</h1>
      </div>

      {/* CENTER (empty for now) */}
      <div></div>

      {/* RIGHT */}
      <div className="flex items-center gap-10">
        <a href="#home" className="text-gray-600 text-lg hover:text-black font-medium">Home</a>
        <a href="#fix" className="text-gray-600 text-lg hover:text-black font-medium">Fix My Mobile</a>
        <a href="#buy" className="text-gray-600 text-lg hover:text-black font-medium">Buy</a>
        <a href="#used" className="text-gray-600 text-lg hover:text-black font-medium">Used Mobile</a>
        <a href="#shops" className="text-gray-600 text-lg hover:text-black font-medium">For Shops</a>
        <a href="#about" className="text-gray-600 text-lg hover:text-black font-medium">About</a>

        <button 
          className="text-white px-4 py-2 rounded-lg text-lg font-medium transition"
          style={{ 
            backgroundColor: colors.primaryDark,
            borderColor: colors.primaryDark,
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = colors.primary}
          onMouseLeave={(e) => e.target.style.backgroundColor = colors.primaryDark}
        >
          Sign In
        </button>

        <button 
          className="text-white px-4 py-2 rounded-lg text-lg font-medium transition border-2"
          style={{ 
            borderColor: colors.primary,
            color: colors.primary,
            backgroundColor: 'transparent'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = colors.primary;
            e.target.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = colors.primary;
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
