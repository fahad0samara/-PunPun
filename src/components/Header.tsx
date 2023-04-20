import React from "react";
import {Link} from "react-router-dom";

import "./header.css";

const Header = (_props: any) => {
  return (
    <div>
      <div className="header-header">
        <nav className="header-nav">
          <div className="header-container">
            <Link
              to="/"
              className="
   items-center
          justify-between
            rounded-md
            flex
             ml-2
            space-x-2"
            >
              <img
                src="/playground_assets/logo0.svg"
                alt="logo"
                className="   h-16
                w-20
                rounded-full
               

            
            "
              />
            </Link>
            <div
              className="
              items-center
            justify-between
            rounded-md
            flex
            space-x-5
            ml-2
            "
            >
              <Link
                to="/"
                className="font-bold text-indigo-500 transition duration-300 ease-out hover:text-white hover:font-bold group hover:bg-pink-500 hover:p-1/5 hover:ring-purple-500"
              >
                Home
              </Link>
              <a
                href="profile.html"
                className="font-bold text-indigo-500 transition duration-300 ease-out hover:text-white hover:font-bold group hover:bg-pink-500 hover:p-1/5 hover:ring-purple-500"
              >
                Profile
              </a>
              <a
                href="coming-soon.html"
                className="font-bold text-indigo-500 transition duration-300 ease-out hover:text-white hover:font-bold group hover:bg-pink-500 hover:p-1/5 hover:ring-purple-500"
              >
                Coming Soon
              </a>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <div className="primary-pink-button-container">
                  <a
                    href="#_"
                    className="relative inline-flex items-center justify-center p-4 px-5 py-1 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                  >
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Buy Now</span>
                  </a>
                </div>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <svg viewBox="0 0 1024 1024" className="header-icon">
                  <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                </svg>
              </div>
            </div>
          </div>
        </nav>
        <div data-role="MobileMenu" className="header-mobile-menu">
          <div className="header-top">
            <a href="home.html" className="header-navlink4 Large">
              Soft UI Design Syste
            </a>
            <div data-role="CloseMobileMenu" className="header-close-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon2">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="header-mid">
            <div className="header-menu1">
              <a href="home.html" className="header-navlink5 Large"></a>
              <a href="profile.html" className="header-navlink6 Large">
                Profile
              </a>
              <a href="coming-soon.html" className="header-navlink7 Large">
                Coming Soon
              </a>
            </div>
          </div>
          <div className="header-bot">
            <div className="primary-pink-button-container">
              <a href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Button Text</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
