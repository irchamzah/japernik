"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO of Company",
      comment:
        '"This service is fantastic! It has changed the way we do business."',
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Jane Smith",
      title: "CTO of Startup",
      comment: '"Amazing experience, highly recommend to others."',
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Michael Johnson",
      title: "Freelancer",
      comment:
        '"A truly exceptional platform that has helped me grow my business."',
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Michael Johnson",
      title: "Freelancer",
      comment:
        '"A truly exceptional platform that has helped me grow my business."',
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Michael Johnson",
      title: "Freelancer",
      comment:
        '"A truly exceptional platform that has helped me grow my business."',
      image: "https://randomuser.me/api/portraits/men/5.jpg",
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
    <div className="mt-20 mb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl text-center text-gray-900 mb-10">
          TESTIMONI
        </h2>

        <div className="relative px-5">
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
                serviceRef.current.scrollWidth - serviceRef.current.clientWidth
                ? "block"
                : ""
            }`}
            onClick={scrollRight}
          >
            &gt;
          </button>

          <div
            ref={serviceRef}
            className="flex overflow-x-hidden space-x-8 pb-4"
            style={{ overflowX: "hidden" }}
          >
            {testimonials.map((testimonial, index) => (
              <>
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex-none w-80"
                >
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                    <div className="ml-4 text-left">
                      <h3 className="text-xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-800 text-center">
                    {testimonial.comment}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
