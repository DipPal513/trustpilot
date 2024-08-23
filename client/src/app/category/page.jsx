import React from "react";
import { MdSearch } from "react-icons/md";
import { FaPaw, FaAppleAlt, FaLeaf, FaCarrot } from "react-icons/fa";
import Link from "next/link";

export default function Category() {
  const categories = [
    {
      categoryName: "Animals",
      icon: <FaPaw />,
      color: "#FFC999",
      categoryItem: ["Animal Health", "Animal Parks & Zoo", "Cats & Dogs"],
    },
    {
      categoryName: "Fruits",
      icon: <FaAppleAlt />,
      color: "#FFB6C1",
      categoryItem: ["Apple", "Banana", "Cherry", "Banana", "Cherry"],
    },
    {
      categoryName: "Vegetables",
      icon: <FaCarrot />,
      color: "#98FB98",
      categoryItem: ["Carrot", "Broccoli", "Spinach"],
    },
    {
      categoryName: "Nature",
      icon: <FaLeaf />,
      color: "#AFEEEE",
      categoryItem: ["Forests", "Rivers", "Mountains"],
    },
    {
      categoryName: "Vegetables",
      icon: <FaCarrot />,
      color: "#98FB98",
      categoryItem: ["Carrot", "Broccoli", "Carrot", "Broccoli", "Spinach"],
    },
    {
      categoryName: "Nature",
      icon: <FaLeaf />,
      color: "#AFEEEE",
      categoryItem: ["Forests", "Rivers", "Mountains"],
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-lg">
            <MdSearch className="absolute left-4 top-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Search categories..."
              className="w-full pl-12 pr-4 py-2 border rounded-full shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Categories
        </h1>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg overflow-hidden transition-transform transform border h-full"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.2)] to-transparent"
                style={{ backgroundColor: category.color }}
              ></div>
              <div className="relative p-6 text-center">
                <div className="flex items-center border-b pb-4 mb-4">
                  <div className="text-5xl text-white">{category.icon}</div>
                  <h2 className="text-xl font-extrabold ms-3 text-white capitalize">
                    {category.categoryName}
                  </h2>
                </div>
                <ul className="text-sm text-gray-700 text-left space-y-2">
                  {category.categoryItem.map((item, idx) => (
                    <li key={idx} className="text-[16px] border-b pb-2">
                      <Link
                        href={`#${item}`}
                        className="block py-2 px-2 hover:ps-3 transition-all duration-300"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
