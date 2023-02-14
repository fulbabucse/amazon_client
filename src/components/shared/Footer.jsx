import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#131A22] text-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="md:flex md:-mx-3 md:items-center md:justify-between">
            <h1 className="text-lg font-semibold tracking-tight text-white md:mx-3 xl:text-2xl ">
              Subscribe our newsletter to get update.
            </h1>

            <div className="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
              <Link
                to="/sign-up"
                className="flex items-center gap-2 px-4 py-2 text-sm bg-[#FFC940] text-primary transition-colors hover:bg-opacity-80 font-medium duration-200 ease-in-out rounded-md text-center"
              >
                <span>Sign Up Now</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <hr className="my-6 border-gray-100 md:my-10" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-white dark:text-white">
                Quick Link
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Who We Are
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Our Philosophy
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-white">
                Industries
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Retail & E-Commerce
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Information Technology
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Finance & Insurance
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white">Services</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Translation
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Proofreading & Editing
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  Content Creation
                </Link>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white dark:text-white">
                Contact Us
              </p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  +880 768 473 4978
                </Link>
                <Link
                  to="/"
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-[#C9563C] text-sm"
                >
                  info@merakiui.com
                </Link>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center justify-between sm:flex-row">
            <Link to="/">Crafty Commerce</Link>

            <p className="mt-4 text-sm text-white sm:mt-0 dark:text-gray-300">
              © Copyright {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
