import React from "react";
import { IoBedOutline } from "react-icons/io5";
export default function () {
  return (
    <section className="w-full bg-[var(--color-light)]">
      <div className="max-w-screen-xl py-10 mx-auto px-3">
        <h2 className="font-extrabold text-2xl mb-5">Explore categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {["", "", "", "", "", "", "", "", "", "", "", ""].map((e, index) => (
            <div
              className="flex items-center px-5 py-6 hover:shadow-lg transition-all duration-300 cursor-pointer rounded border hover:translate-y-2 bg-white"
              key={index}
            >
              <IoBedOutline />
              <p className="ms-5">bedroom furniture store</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
