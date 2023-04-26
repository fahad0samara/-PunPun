import {useState} from "react";
import {Link} from "react-router-dom";
import {Transition} from "@headlessui/react";
import {FiMenu, FiX} from "react-icons/fi";
import {FaHome, FaInfoCircle, FaEnvelope} from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full">
      <div className="fixed z-10 left-1 right-1 mt-5 md:mx-11  max-w-7xl px-5 flex items-center justify-between">
        <nav
          style={{
            transition: "all 0.5s ease",
            boxShadow:
              "0 .25rem .375rem -.0625rem hsla(0, 0%, 8%, .12), 0 .125rem .25rem -.0625rem hsla(0, 0%, 8%, .07)",
            backgroundColor: "hsla(0, 0%, 100%, .8)",
          }}
          className="flex 
        shadow-md 
        items-center justify-between w-full h-16  rounded-full"
        >
          <div className="relative flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className="block md:hidden h-20 w-auto mt-3   fixed right-10"
                  src="/playground_assets/logo0.svg"
                  alt="Logo"
                />
                <img
                  className="hidden md:block h-20 mt-3 w-auto"
                  src="/playground_assets/logo0.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div
              className=" inset-y-0  flex 
          justify-center
           left-5
          bottom-0
       
             items-center md:hidden   "
            >
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex  items-center justify-center p-2 rounded-md  hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2
                ml-7
                
                   focus:ring-inset focus:ring-white
                 "
              >
                {isOpen ? (
                  <FiX className="block h-7 w-7" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-7 w-7" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex-1 flex   items-center justify-center sm:items-stretch ">
              <div className="hidden sm:ml-6 md:flex sm:justify-between ">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="
                    leading-tight font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white text-transparent hover:bg-gradient-to-bl hover:text-xs
                      px-3 py-2 rounded-md text-sm"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Shop"
                    className="
                    leading-tight font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white text-transparent hover:bg-gradient-to-bl hover:text-xs
                      px-3 py-2 rounded-md text-sm"
                  >
                    Shop
                  </Link>
                  <Link
                    to="/contact"
                    className="
                    leading-tight font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white text-transparent hover:bg-gradient-to-bl hover:text-xs
                      px-3 py-2 rounded-md text-sm"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block mr-5">
            <Link
              to="/"
              className="
                    leading-tight font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-white text-transparent hover:bg-gradient-to-bl hover:text-xs
                    rounded-full
                      px-3 py-2  text-sm"
            >
              BUY Now
            </Link>
          </div>
        </nav>
      </div>

      <div
        className={`${
          isOpen
            ? `block   w-80  bg-white sm:mt-8
          mt-16
             h-auto    transition-all    duration-300ease-in-out
        transform
        translate-x-0
        opacity-100
        scale-100`
            : "hidden"
        } md:hidden absolute z-20 top-16 left-3  rounded-b-lg shadow-lg`}
      >
        <div
          className="
        space-y-2
         rounded-lg divide-y divide-gray-200 flex flex-col justify-center items-center"
        >
          <Link
            to="/"
            className="px-4 py-2 text-base font-medium leading-tight bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            <FaHome className="mr-2 " />
            Home
          </Link>

          <Link
            to="/about"
            className="flex items-center text-gray-900 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-base font-medium"
          >
            <FaInfoCircle className="mr-2" />
            About
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-gray-900 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-base font-medium"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>

          <hr className="mt-4 w-full " />

          <Link
            to="/"
            className="mt-2 relative inline-flex items-center justify-center p-2 px-4 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span className="relative text-white">BUY Now</span>
          </Link>
          <hr className="mt-4 w-full " />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
