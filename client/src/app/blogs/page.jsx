// components/Blogs.js
"use client";
import React, { useState, useEffect, Suspense } from "react";
import Slider from "react-slick";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BlogCard from "@/components/blog/BlogCard";
import { useRouter, useSearchParams } from "next/navigation";
import SearchBar from "@/components/search/SearchBar";

const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer z-10 transition-all md:p-3"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-black text-2xl md:text-2xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 cursor-pointer z-10 transition-all md:p-3"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-black text-xl md:text-2xl" />
  </div>
);

const allBlogs = [
  { id: 4, category: "Technology", title: "The Rise of AI", content: "AI is transforming the world..." },
  { id: 3, category: "Nature", title: "Exploring the Wild", content: "Discovering the beauty of nature..." },
  { id: 2, category: "Health", title: "Healthy Living Tips", content: "Simple tips for a healthier life..." },
  { id: 1, category: "Politics", title: "Election 2024", content: "An in-depth analysis..." },
];

const Blogs = () => {
  const [blogs, setBlogs] = useState(allBlogs);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      const filteredBlogs = allBlogs.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setBlogs(filteredBlogs);
    } else {
      setBlogs(allBlogs);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    router.push(`/blogs?category=${category}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section>
      <div className="max-w-screen-xl pt-20 pb-10 px-4 min-h-[30vh] mx-auto">
        <div className="grid grid-cols-2 mx-auto relative gap-4">
          <div className="mt-3">
            <Slider {...settings}>
              {["news", "politics", "media", "people", "family", "health", "science", "technology", "sports"].map((item, index) => (
                <button
                  key={index}
                  className=""
                  onClick={() => handleCategoryChange(item)}
                >
                  {item}
                </button>
              ))}
            </Slider>
          </div>

          <SearchBar setBlogs={setBlogs} allBlogs={allBlogs} />
        </div>
        <div className="text-sm mt-5">
          <p className="font-semibold text-gray-500">Found: {blogs.length} items</p>
        </div>
        <div className="blogs mt-12 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {blogs.length > 0 ? (
            blogs.map((blog, index) => <BlogCard key={index} blog={blog} />)
          ) : (
            <div className="col-span-4 text-center text-gray-500">
              No blogs found for "{searchParams.get("search") || searchParams.get("category")}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default function BlogsWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs />
    </Suspense>
  );
}
