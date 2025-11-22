import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import amazon from "../../../assets/brands/amazon.png";
import amazon_vector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import star_people from "../../../assets/brands/start_people.png";
import { Autoplay } from "swiper/modules";

const brandlogs = [
  amazon,
  amazon_vector,
  casio,
  moonstar,
  randstad,
  star,
  star_people,
];

const SalesTEAM = () => {
  const totalSlides = brandlogs.length;

  // Make sure slidesPerView never exceeds slide count
  const slidesPerView = Math.min(5, totalSlides);

  // Loop only if enough slides exist
  // const enableLoop = totalSlides > slidesPerView;

  return (
    <div className="mt-16">
      <h2 className="text-2xl text-secondary text-center pb-11 font-bold">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        // loop={enableLoop}
        slidesPerView={slidesPerView}
        // centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
      >
        {brandlogs.map((logo, index) => (
          <SwiperSlide key={index}>
            <img src={logo} alt="" className="h-12 w-auto mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SalesTEAM;
