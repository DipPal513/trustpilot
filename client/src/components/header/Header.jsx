"use client";
import { logout } from "@/redux/features/authSlice";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import "./header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () =>{
    Cookies.set('user', null, { path: '/' });
        Cookies.set('accessToken', null, { path: '/' });
    dispatch(logout());
    toast.success("logged out!")
    setTimeout(() => {
      router.push("/login");
    }, 200);
  }
  return (
    <header
      className={`sticky top-0 bg-white shadow z-50 ${
        isScrolled ? "shadow-lg z-[1111]" : ""
      }`}
    >
      <nav className="max-w-screen-xl mx-auto px-4 py-4 lg:py-0 flex justify-between items-center">
        {/* Logo */}
        <div className="logo" style={{ width: "180px" }}>
          <Link href="/">
            <Image
              src="/logo.svg"
              width={180}
              height={70}
              alt="main-logo"
            />
          </Link>
        </div>

        {/* Icons and Menu for Mobile */}
        <div className="flex items-center gap-4 black lg:hidden">
          <FaSearch className="cursor-pointer" />
          <FaBars onClick={toggleMenu} className="cursor-pointer" />
        </div>

        <div
          className={`menu p-4 flex lg:items-center lg:gap-8 text-black bg-white fixed lg:static top-0 right-0 h-full lg:h-auto w-3/4 flex-col-reverse lg:w-auto max-w-xs lg:max-w-full transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:flex-row`}
        >
          {/* Close Icon (Visible only when menu is open on small screens) */}
          {isMenuOpen && (
            <div className="self-start p-4 lg:hidden block">
              <FaTimes
                onClick={toggleMenu}
                className="text-2xl cursor-pointer"
              />
            </div>
          )}

          <p className="px-4 py-1 lg:py-0">
            <Link href="/category" onClick={toggleMenu}>
              Categories
            </Link>
          </p>
          <p className="px-4 py-1 lg:py-0">
            <Link href="/blogs" onClick={toggleMenu}>
              Blog
            </Link>
          </p>

          {user ? (
            <div className="relative px-4 py-1 lg:py-0">
              <button onClick={toggleDropdown} className="text-black">
                {user.firstName}
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 bg-white text-black shadow-lg mt-2 rounded-md w-48">
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-200">Profile</Link>
                  <Link href="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
                  <button onClick={handleLogout} href="/logout" className="block px-4 py-2 hover:bg-gray-200">Log out</button>
                </div>
              )}
            </div>
          ) : (
            <div className="px-4 py-1 lg:py-0">
              <Link
                href="/login"
                className="whitespace-nowrap"
                onClick={toggleMenu}
              >
                Log in
              </Link>
            </div>
          )}
          <hr className="mt-5" />
          <button className="businessBtn" onClick={toggleMenu}>
            For business
          </button>
        </div>
      </nav>
    </header>
  );
}
