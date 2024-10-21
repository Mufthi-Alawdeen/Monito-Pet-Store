import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function ImageCarousel({ images }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={1} centeredSlides={true}>
      {" "}
      {/* Ensure the slide is centered */}
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="flex justify-center items-center w-full h-96 overflow-hidden">
            {" "}
            {/* Flexbox for centering */}
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-auto h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
