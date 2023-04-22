import {useState} from "react";
import {Link} from "react-router-dom";
import {Transition} from "@headlessui/react";
import {FiMenu, FiX} from "react-icons/fi";
import {FaHome, FaInfoCircle, FaEnvelope} from "react-icons/fa";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 w-full">
      <div className="fixed z-10 left-10 right-20 mx-auto max-w-7xl px-5 flex items-center justify-between">
        <nav className="flex items-center justify-between w-full h-16 bg-white shadow-lg rounded-full">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-16 w-auto right-4 absolute"
                  src="/playground_assets/logo0.svg"
                  alt="Logo"
                />
                <img
                  className="hidden lg:block h-16 w-auto"
                  src="/playground_assets/logo0.svg"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="absolute inset-y-0 left-72 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex  items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <FiX className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <FiMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-white font-bold text-xl">
                  My Site
                </Link>
              </div>
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
          isOpen ? "block" : "hidden"
        } sm:hidden absolute w-96 z-20 top-16 
  bg-white rounded-b-lg shadow-lg
  `}
      >
        <div className="shadow-md rounded-lg divide-y divide-gray-200">
          <Link
            to="/"
            className="flex items-center text-gray-900 hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-base font-medium"
          >
            <FaHome className="mr-2" />
            Home
          </Link>
          <Link
            to="/about"
            className="flex items-center text-gray-900 hover:bg-gray-100 hover:text-gray-900 block
        px-4 py-2 text-base font-medium"
          >
            <FaInfoCircle className="mr-2" />
            About
          </Link>
          <Link
            to="/contact"
            className="flex items-center text-gray-900 hover:bg-gray-100 hover:text-gray-900 block
        px-4 py-2 text-base font-medium"
          >
            <FaEnvelope className="mr-2" />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
