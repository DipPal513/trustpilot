import Image from "next/image";
import React from "react";

export default function Ad() {
  return (
    <section className="py-16 px-4 bg-[var(--color-light)]">
      <div className="max-w-screen-lg mx-auto bg-white border-2 border-gray-300 rounded-xl overflow-hidden">
        <div className="w-full flex flex-col items-center text-center px-4 sm:px-8 py-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-4">
            Shop smarter with the Trustpilot app
          </h2>
          <p className="my-4 text-sm sm:text-base lg:text-lg">
            Keep Trustpilot in your pocket. Find companies, read reviews, or write them—all while on the go.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Image
              width={150}
              height={60}
              src="/ad1.jpg"
              alt="ad image"
              className="object-contain"
            />
            <Image
              width={150}
              height={60}
              src="/ad1.jpg"
              alt="ad image"
              className="object-contain"
            />
            <Image
              width={150}
              height={60}
              src="/ad1.jpg"
              alt="ad image"
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-[var(--color-light)] py-8 px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="font-extrabold text-xl sm:text-2xl lg:text-3xl">
              Get the iOS app
            </h2>
            <p className="text-sm sm:text-base">
              Join the community! Scan the QR code with your phone camera to download.
            </p>
          </div>
          <div>
            <img
              src="https://consumersite-assets.trustpilot.net/consumersite-home/public/app-promo-banner/qr-codes/app-store-download-qr-code-production.svg"
              alt="QR code for app download"
              className="w-32 h-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
