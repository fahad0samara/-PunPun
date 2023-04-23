import {useState} from "react";
import {Link} from "react-router-dom";
import {Transition} from "@headlessui/react";
import {FiMenu, FiX} from "react-icons/fi";
import {FaHome, FaInfoCircle, FaEnvelope} from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" w-full">
      <div className="fixed z-10 left-1 right-1 md:right-20 md:left-20 mx-auto max-w-7xl px-5 flex items-center justify-between">
        <nav className="flex items-center justify-between w-full h-16 bg-white shadow-lg rounded-full">
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
       
             items-center sm:hidden   "
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
            <div className="flex-1 flex  bg-teal-400 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`${
          isOpen
            ? `block   w-80  bg-white    transition-all    duration-300ease-in-out
        transform
        translate-x-0
        opacity-100
        scale-100`
            : "hidden"
        } sm:hidden absolute z-20 top-16 left-3  rounded-b-lg shadow-lg`}
      >
        <div
          className="shadow-md
        space-y-3
         rounded-lg divide-y divide-gray-200 flex flex-col justify-center items-center"
        >
          <Link
            to="/"
            className="flex items-center text-gray-900 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-base font-medium"
          >
            <FaHome className="mr-2" />
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

          <hr className="mt-4 w-full lg:hidden" />
          <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
            <a
              href="#"
              title=""
              className="whitespace-nowrap rounded font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 hover:text-opacity-50"
            >
              {" "}
              Log in{" "}
            </a>
            <a
              href="#"
              title=""
              className="whitespace-nowrap rounded-xl bg-blue-700 px-5 py-3 font-medium text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2 hover:bg-blue-600"
            >
              Get free trial
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
