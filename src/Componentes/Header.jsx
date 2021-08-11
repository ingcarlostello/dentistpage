import React, { useState } from "react";
import logoHeader from "../assets/logos/logoHeader.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log("hola");
    if (toggle === false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <>
      <div className="header-2 shadow-2xl">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <a href="#" className="font-bold text-xl text-indigo-600">
                <img src={logoHeader} alt="Dentista" />
              </a>
              <button
                onClick={handleToggle}
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                id="navbar-toggle"
              >
                <i class="fas fa-bars"></i>
              </button>
            </div>

            <div
              className={`${
                toggle === false
                  ? "hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                  : "flex md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
              }`}
              id="navbar-collapse"
            >
              <a
                href="www.google.com"
                className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
              >
                Home
              </a>
              <a
                href="www.google.com"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="www.google.com"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="www.google.com"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="www.google.com"
                className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
