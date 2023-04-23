import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from "swiper";

const images = [
  "https://via.placeholder.com/200x100?text=Image%201",
  "https://via.placeholder.com/200x100?text=Image%202",
  "https://via.placeholder.com/200x100?text=Image%203",
  "https://via.placeholder.com/200x100?text=Image%204",
  "https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI2fHxsYXB0b3B8ZW58MHx8fHwxNjgxOTY1ODA4&ixlib=rb-4.0.3&h=1500",
];

export default function Scrolling() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 2000, // adjust this value to change the interval between image transitions
      }}
      slidesPerView="auto"
      spaceBetween={2}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <img
            alt={`Image ${index + 1}`}
            src={imageUrl}
            className="card-image w-16"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
