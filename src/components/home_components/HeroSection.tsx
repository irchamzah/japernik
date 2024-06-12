"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Search from "./SearchService";
import SearchService from "./SearchService";

const HeroSection = () => {
  const images = [
    "/images/herobg1.jpg",
    "/images/herobg2.jpg",
    "/images/herobg3.jpg",
    "/images/herobg4.jpg",
    "/images/herobg5.jpg",
  ];
  const [bgImage, setBgImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="lg:pb-2 lg:mt-32 mt-16 max-w-7xl mx-auto rounded-xl">
      <div
        className="text-white rounded-t-xl"
        style={{
          backgroundImage: `url(${images[bgImage]})`,
        }}
      >
        <div className="container mx-auto px-4 py-24 max-h-[500px] flex items-center">
          <div className="max-w-2xl flex flex-col h-full w-full bg-gray-900 bg-opacity-70 p-10 rounded-lg mx-auto items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MUA, MC, dan Dekorasi <br /> semua ada disini!
            </h1>
            <SearchService />
            <div className="mb-8 text-sm md:flex items-center hidden">
              <p className="">Popular Services:</p>
              <div className="flex gap-2 mx-2 items-center">
                <a
                  href="#"
                  className="border-white border-[1px] rounded-full px-4 py-1"
                >
                  Make Up
                </a>
                <a
                  href="#"
                  className="border-white border-[1px] rounded-full px-4 py-1"
                >
                  MC
                </a>
                <a
                  href="#"
                  className="border-white border-[1px] rounded-full px-4 py-1"
                >
                  Dekorasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 min-h-24 mx-auto md:flex hidden items-center justify-center text-gray-400 rounded-b-xl">
        <div className="container flex items-center justify-center gap-12">
          <span className="font-bold">Trusted By:</span>
          <ul className="flex gap-12">
            <li>
              <Image
                src={"/icons/javascript.svg"}
                alt="logo"
                height={48}
                width={48}
              />
            </li>
            <li>
              <Image
                src={"/icons/laravel.svg"}
                alt="logo"
                height={48}
                width={48}
              />
            </li>
            <li>
              <Image
                src={"/icons/nextjs.svg"}
                alt="logo"
                height={48}
                width={48}
              />
            </li>
            <li>
              <Image
                src={"/icons/react.svg"}
                alt="logo"
                height={48}
                width={48}
              />
            </li>
            <li>
              <Image
                src={"/icons/tailwind.svg"}
                alt="logo"
                height={48}
                width={48}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
