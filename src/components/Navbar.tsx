"use client";

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  useEffect(() => {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const overlay = document.querySelector(".overlay");

    const handleMenuToggle = () => {
      mobileMenu?.classList.toggle("hidden");
      overlay?.classList.toggle("hidden");
    };

    const handleClickOutside = (event: any) => {
      if (
        mobileMenu &&
        !mobileMenu.contains(event?.target) &&
        !mobileMenuButton?.contains(event?.target)
      ) {
        mobileMenu.classList.add("hidden");
        overlay?.classList.add("hidden");
      }
    };

    mobileMenuButton?.addEventListener("click", handleMenuToggle);
    overlay?.addEventListener("click", handleClickOutside);
    document.addEventListener("click", handleClickOutside);

    return () => {
      mobileMenuButton?.removeEventListener("click", handleMenuToggle);
      overlay?.removeEventListener("click", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="bg-gray-800 py-4 fixed top-0 w-full z-50 h-20 ">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 h-full ">
          <div className="flex justify-between h-full mx-auto max-w-7xl">
            <div className="flex space-x-4 items-center">
              <div>
                <Link href="#" className="text-white text-2xl  font-bold">
                  JAPERNIK
                </Link>
              </div>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-4">
              <Link
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Jadi Seller
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                href="#"
                className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium"
              >
                Sign Up
              </Link>
            </div>

            <div className="md:hidden mobile-menu-button focus:outline-none text-white text-3xl">
              <button className="h-full">
                <FiMenu className="" />
              </button>
            </div>
          </div>
        </div>

        <div className="overlay hidden fixed inset-0 bg-black opacity-50 z-9"></div>

        <div className=" md:items-center md:space-x-4  absolute right-0 top-0 bg-white h-screen w-48 p-4 text-gray-900 hidden mobile-menu">
          <Link
            href="#"
            className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium my-3"
          >
            Jadi Seller
          </Link>
          <Link
            href="#"
            className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium my-3"
          >
            Login
          </Link>
          <Link
            href="#"
            className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium my-3"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
