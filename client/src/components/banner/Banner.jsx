import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="w-full bg-[var(--main-color)] flex items-center">
      <div className="max-w-screen-lg mx-auto py-16 px-4 grid sm:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-8">
            Read reviews. Write reviews. <br />
            Find companies you can trust.
          </h1>
          <div className="flex items-center justify-center sm:justify-start">
            <input
              type="text"
              placeholder="Company or category"
              className="py-4 rounded-full border-2 border-black px-5 w-full "
            />
            <button className="bg-[var(--blue)] text-white px-8 sm:px-10 py-3 rounded-full -ms-[90px] sm:-ms-[140px]">
              Search
            </button>
          </div>
        </div>

        {/* Image container */}
        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] max-w-[900px] mx-auto">
          <Image
            src="https://consumersite-assets.trustpilot.net/consumersite-home/public/hero-banner/hero-image-l.webp"
            alt="banner-img"
            fill
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
