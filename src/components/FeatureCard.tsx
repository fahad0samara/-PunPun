import React from "react";


import {
  FaShoppingBag,
  FaPercent,
  FaShippingFast,
  FaHeadset,
} from "react-icons/fa";
const FeatureCard = () => {
  return (
    <section className=" flex flex-wrap justify-center mt-20">
      <div className=" flex flex-col items-center p-6 w-64 md:w-1/4 mb-8">
        <div className="inline-block leading-tight w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
          <FaShoppingBag className="text-white text-3xl" />
        </div>

        <h5 className=" text-xl font-medium text-secondary-600 mb-1 mt-2 italic">
          Wide Selection
        </h5>
        <span className="text-base font-extrabold text-center  mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ">
          Choose from a wide selection of products in our store.
        </span>
      </div>
      <div className="feature-card-container flex flex-col items-center p-6 w-64 md:w-1/4 mb-8">
        <div className="inline-block leading-tight w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
          <FaPercent className="text-white text-3xl" />
        </div>
        <h5 className=" text-xl font-medium text-secondary-600 mb-1 mt-2 italic">
          Deals and Discounts
        </h5>
        <span className="text-base font-extrabold text-center  mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ">
          Take advantage of our deals and discounts to save big.
        </span>
      </div>
      <div className="feature-card-container flex flex-col items-center p-6 w-64 md:w-1/4 mb-8">
        <div className="inline-block leading-tight w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
          <FaShippingFast className="text-white text-3xl" />
        </div>
        <h5 className=" text-xl font-medium text-secondary-600 mb-1 mt-2 italic">
          Fast Shipping
        </h5>
        <span className="text-base font-extrabold text-center  mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ">
          Enjoy fast and reliable shipping on all orders.
        </span>
      </div>
      <div className="feature-card-container flex flex-col items-center p-6 w-64 md:w-1/4 mb-8">
        <div className="inline-block leading-tight w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full flex items-center justify-center">
          <FaHeadset className="text-white text-3xl" />
        </div>
        <h5 className=" text-xl font-medium text-secondary-600 mb-1 mt-2 italic">
          Exceptional Customer Service
        </h5>
        <span className="text-base font-extrabold text-center  mb-4 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent ">
          We are here to help you with any questions or concerns.
        </span>
      </div>
    </section>
  );
};

export default FeatureCard;


