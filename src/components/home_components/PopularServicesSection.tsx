"use client";

import Image from "next/image";
import CardImage from "./CardImage";
import { useRef, useState } from "react";

const PopularServicesSection = () => {
  const services = [
    {
      imageSrc: "/images/random_image/img1.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img2.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img3.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img4.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img5.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img6.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img7.jpg",
      title: "Title",
      description: "Description",
    },
    {
      imageSrc: "/images/random_image/img8.jpg",
      title: "Title",
      description: "Description",
    },
  ];

  const [scrollX, setScrollX] = useState(0);
  const serviceRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
      setScrollX(scrollX + 300);
    }
  };

  const scrollLeft = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
      setScrollX(scrollX - 300);
    }
  };

  return (
    <>
      <section className="lg:max-w-7xl lg:mx-auto mt-20 mb-32 px-4">
        <div className="flex flex-col h-full w-full mx-auto relative">
          <div className="px-5 text-3xl lg:text-4xl mb-7 font-base text-gray-900 text-center">
            <div>POPULAR SERVICES</div>
          </div>
          <div className="px-5 flex w-full gap-4 overflow-hidden relative">
            <button
              className={`absolute top-0 bottom-0 left-0 bg-white h-10 w-10 rounded-full my-auto z-10 border active:bg-gray-100 ${
                scrollX > 0 ? "block" : ""
              }`}
              onClick={scrollLeft}
            >
              &lt;
            </button>
            <button
              className={`absolute top-0 bottom-0 right-0 bg-white h-10 w-10 rounded-full my-auto z-10 border active:bg-gray-100 ${
                serviceRef.current &&
                scrollX <
                  serviceRef.current.scrollWidth -
                    serviceRef.current.clientWidth
                  ? "block"
                  : ""
              }`}
              onClick={scrollRight}
            >
              &gt;
            </button>

            <div
              ref={serviceRef}
              className="flex gap-4 overflow-x-hidden w-full"
              style={{ overflowX: "hidden" }}
            >
              {services.map((service, index) => (
                <CardImage
                  key={index}
                  imageSrc={service.imageSrc}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="lg:max-w-7xl lg:mx-auto">
      <div className="flex flex-col h-full w-full mx-auto">
        <div className="px-5 text-3xl mb-7 font-base text-gray-900 text-center">
          <div>POPULAR SERVICES</div>
        </div>
        <div className="px-5 flex w-full gap-4 overflow-x-scroll lg:overflow-x-auto ">
          {services.map((service, index) => (
            <CardImage
              key={index}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section> */}
    </>
  );
};

export default PopularServicesSection;
