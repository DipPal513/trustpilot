"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import base_url from '@/utils/base_url';

import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    designation: '',
    bio: '',
    img: '',
    mobile: '',
    password: '',
  });

  const [passwordErrors, setPasswordErrors] = useState([]);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Password validation function
  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password)) errors.push("Password must contain at least one uppercase letter.");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("Password must contain at least one special character.");
    if (!/\d/.test(password)) errors.push("Password must contain at least one number.");
    return errors;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'password') {
      const errors = validatePassword(value);
      setPasswordErrors(errors);
      setIsPasswordValid(errors.length === 0);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isPasswordValid) return; // Exit if password is not valid

    setIsLoading(true);

    try {
      const response = await axios.post(`${base_url + "/auth/register"}`, formData);
      console.log(response)
      if (response.status == 201) {
        toast.success('Registration successful!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          designation: '',
          bio: '',
          img: '',
          mobile: '',
          password: '',
        });
        setTimeout(() => router.push("/login"), 300);
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Registration failed. Please try again.';
      toast.error(errorMessage);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="my-24 p-6 max-w-md mx-auto">
        <Toaster />
        <div className="shadow p-4">
          <p className="text-center my-2 text-2xl font-extrabold">Create an account</p>
          <form className="w-full flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Email"
            />
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Designation"
            />
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Bio"
            />
            <input
              type="text"
              name="img"
              value={formData.img}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Profile Image URL"
            />
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3"
              placeholder="Mobile Number"
            />
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-full border border-gray-300 outline-none py-3 sm:px-5 px-3 w-full"
                placeholder="Password"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-sm text-gray-500">
                {/* Add icon or indicator here if desired */}
              </div>
            </div>
            {passwordErrors.length > 0 && (
              <ul className="list-disc pl-5 text-red-500">
                {passwordErrors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )}
            <button
              type="submit"
              className={`py-2 px-4 rounded-full border-0 bg-teal-500 text-white shadow-md hover:bg-teal-600 active:shadow-none ${!isPasswordValid || isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
                'Sign up'
              )}
            </button>
          </form>
          <p className="text-gray-500 text-xs font-sans">
            Already have an account?{' '}
            <span className="ml-1 text-sm text-teal-500 underline font-bold cursor-pointer">
              Log in
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
