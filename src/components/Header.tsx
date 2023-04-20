import React from "react";
import {Link} from "react-router-dom";

import "./header.css";

const Header = (_props: any) => {
  return (
    <div>
      <div className="header-header">
        <nav className="header-nav">
          <div className="header-container">
            <a href="home.html" className="header-navlink Large">
              Soft UI Design System
            </a>
            <div className="header-menu">
              <a href="home.html" className="header-navlink1 Large">
                Home
              </a>
              <a href="profile.html" className="header-navlink2 Large">
                Profile
              </a>
              <a href="coming-soon.html" className="header-navlink3 Large">
                Coming Soon
              </a>
            </div>
            <div className="header-container1">
              <div className="header-container2">
                <div className="primary-pink-button-container">
                  <button className="primary-pink-button-button button ButtonSmall">
                    <span>buy now</span>
                  </button>
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
              Soft UI Design System
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
              <button className="primary-pink-button-button button ButtonSmall">
                <span>buy now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
