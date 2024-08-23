// components/SearchBar.js
"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ setBlogs, allBlogs }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/blogs?search=${search}`);
    const filteredBlogs = allBlogs.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="flex items-center justify-center"
    >
      <input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-l border-r-0 focus:outline-none transition-all"
      />
      <button
        className="hover:bg-[var(--main-color)] hover:text-white border px-4 py-3 rounded-e"
        type="submit"
      >
        <MdSearch className="" />
      </button>
    </form>
  );
};

export default SearchBar;
