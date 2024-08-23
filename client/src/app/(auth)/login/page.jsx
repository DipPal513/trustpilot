"use client";
import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import base_url from "@/utils/base_url";

import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { loginSuccess } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import Head from 'next/head';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // Password validation function
  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password))
      errors.push("Password must contain at least one uppercase letter.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      errors.push("Password must contain at least one special character.");
    if (!/\d/.test(password))
      errors.push("Password must contain at least one number.");
    return errors;
  };

  // Handle input changes
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    const errors = validatePassword(newPassword);
    setPasswordErrors(errors);
    setIsPasswordValid(errors.length === 0);
  };
  console.log(
    "email ",
    email,
    "password: ",
    password,
    isLoading,
    isPasswordValid
  );
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPasswordValid) return; // Exit if password is not valid

    setIsLoading(true);

    try {
      const response = await axios.post(`${base_url + "/auth/login"}`, {
        email,
        password,
      });
      console.log(response);
      // Assuming successful response means status 200
      if (response.status === 200) {
        console.log(response);
        Cookies.set("user", JSON.stringify(response?.data.user), { path: "/" });
        Cookies.set("accessToken", response?.data.accessToken, { path: "/" });
        toast.success("Login successful!");
        dispatch(
          loginSuccess({
            user: response.data.user,
            accessToken: response.data.accessToken,
          })
        );
        setPassword("");
        setEmail("");
        setPasswordErrors("");
        setTimeout(() => router.push("/"), 300);
      }
    } catch (error) {
      // Show specific error message if available
      const errorMessage =
        error.response?.data?.description || "Login failed. Please try again.";
      toast.error(errorMessage);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* <Head>
      <title>Login - </title>
    </Head> */}
      <div className="my-24 p-6 max-w-md mx-auto">
        <Toaster />
        <div className="shadow p-4">
          <p className="text-center my-2 text-2xl font-extrabold">
            Welcome back
          </p>
          <form
            className="w-full flex flex-col gap-4 mb-4"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Email"
            />
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3 w-full"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500">
                {/* You can add an icon or indicator here if desired */}
              </div>
            </div>
            {passwordErrors.length > 0 && (
              <ul className="list-disc pl-5 text-red-500">
                {passwordErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <p className="text-end text-gray-500 underline">
              <span className="cursor-pointer text-xs font-bold">
                Forgot Password?
              </span>
            </p>
            <button
              type="submit"
              className={`py-2 px-4 rounded-full border-0 bg-teal-500 text-white shadow-md hover:bg-teal-600 active:shadow-none ${
                !isPasswordValid || isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={!isPasswordValid || isLoading}
            >
              {isLoading ? (
                <p className="w-full text-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm-1 0a9 9 0 1 0 18 0 9 9 0 0 0-18 0z"
                    />
                  </svg>
                </p>
              ) : (
                "Log in"
              )}
            </button>
          </form>
          <p className="text-gray-500 text-xs font-sans">
            Don't have an account?{" "}
            <Link
              href={"/register"}
              className="ml-1 text-sm text-teal-500 underline font-bold cursor-pointer"
            >
              Sign up
            </Link>
          </p>
          <div className="w-full flex flex-col justify-start mt-5 gap-4">
            <div className="flex items-center justify-center gap-2 rounded-full border-2 border-black bg-black text-white shadow-lg cursor-pointer p-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                className="text-xl"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
              </svg>
              <span>Log in with Apple</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-500 p-3 cursor-pointer">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                className="text-xl"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 48 48"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,21.124,43.741,20.6,43.611,20.083z"
                />
              </svg>
              <span>Log in with Google</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
