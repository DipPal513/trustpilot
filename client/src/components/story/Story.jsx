"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./story.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full cursor-pointer z-10 hover:bg-gray-500 transition-all md:p-3"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-white text-2xl md:text-3xl" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full cursor-pointer z-10 hover:bg-gray-500 transition-all md:p-3"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-white text-2xl md:text-3xl" />
    </div>
  );
};

export default function Story() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="w-full bg-[#fcfbf3] py-10">
      <div className="max-w-screen-xl py-10 mx-auto px-3">
        <p className="text-xl font-bold mb-5 text-gray-500 text-center">
          Your stories
        </p>
        <h2 className="font-extrabold text-center text-4xl mb-5">
          Each review has a personal story
        </h2>
        <div className="max-w-screen-lg mx-auto rounded min-h-[50vh] bg-white relative">
          <Slider {...settings}>
            {[1, 2, 3, 4, 5].map((e, index) => (
              <div
                className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-3 slider_element p-5 md:p-10"
                key={index}
              >
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <Image
                    height={100}
                    width={200}
                    src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"
                    alt="star"
                    className="rounded"
                  />
                  <h2 className="mt-5 text-2xl md:text-4xl font-extrabold mb-4">
                    The first birthday gift my wife didn't want to return.
                  </h2>
                  <p className="font-bold">
                    Marjori <span className="text-gray-700">experienced</span>{" "}
                    Patch
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <img
                    src="https://consumersite-assets.trustpilot.net/consumersite-home/public/_rebrand/plant-shopping-review.webp"
                    alt=""
                    className="w-full h-auto rounded"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
