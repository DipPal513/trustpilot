import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--nav-bg)]">
      <div className="py-16 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center lg:justify-start">
          <Link href="/">
            <Image
              src="https://cdn.trustpilot.net/brand-assets/4.3.0/logo-white.svg"
              width={180}
              height={70}
              alt="logo"
              className="mx-auto lg:mx-0"
            />
          </Link>
        </div>
        <div className="mt-5 mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white">
          <div>
            <p className="font-bold text-gray-400 text-lg mb-5">About</p>
            <ul>
              {[
                "About",
                "Jobs",
                "Contact",
                "Blog",
                "How Trustpilot works",
                "Transparency report",
                "Press",
                "Investor relations",
              ].map((item, index) => (
                <li key={index} className="mb-3 hover:underline">
                  <Link href="/">{item}</Link>
                </li>
              ))}
            </ul>
            <Image
              src="https://cdn.trustpilot.net/app-store/ios/badges/en-US.svg"
              width={150}
              height={70}
              alt="Download on the App Store"
              className="mt-5"
            />
          </div>
          {["Community", "Business", "Support", "Resources"].map((section, idx) => (
            <div key={idx}>
              <p className="font-bold text-gray-400 text-lg mb-5">{section}</p>
              <ul>
                {["Community", "Jobs", "Contact", "Investor relations"].map(
                  (item, index) => (
                    <li key={index} className="mb-3 hover:underline">
                      <Link href="/">{item}</Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-between text-white mt-4 space-y-2 sm:space-y-0">
          {[
            "Legal",
            "Privacy Policy",
            "Terms & Conditions",
            "Guidelines for Reviewers",
            "System status",
            "Modern Slavery Statement",
          ].map((item, index) => (
            <li key={index} className="hover:underline">
              <Link href="/">{item}</Link>
            </li>
          ))}
        </ul>
        <p className="text-gray-400 mt-8 text-center lg:text-left">
          © 2024 Trustpilot, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
