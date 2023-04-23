import React from "react";

function Card() {
  return (
    <div>
      <div className="card-card">
        <h1 className="card-text HeadingOne">
          <span>Soft Design System.</span>
        </h1>
        <h1 className="card-text1 HeadingOne">
          <span>Choose the best</span>
        </h1>
        <span className="card-text2 Lead">
          <span>Find the story of Creative Tim&apos;s most complex design</span>
          <span>system and all the work that make this design available.</span>
        </span>
        <div className="card-container">
          <div className="card-container1">
            <div className="primary-pink-button-container">
              <button className="primary-pink-button-button button ButtonSmall">
                <span>contact us</span>
              </button>
            </div>
          </div>
          <div className="outline-gray-button-container">
            <button className="outline-gray-button-button button ButtonSmall">
              <span>read more</span>
            </button>
          </div>
        </div>
        <div className="card-container2">
          <img
            alt="image"
            src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-pinterest.svg"
            className="card-image"
          />
          <img
            alt="image"
            src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-netflix.svg"
            className="card-image1"
          />
          <img
            alt="image"
            src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-coinbase.svg"
            className="card-image2"
          />
          <img
            alt="image"
            src="https://demos.creative-tim.com/soft-ui-design-system-pro/assets/img/logos/gray-logos/logo-nasa.svg"
            className="card-image3"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
