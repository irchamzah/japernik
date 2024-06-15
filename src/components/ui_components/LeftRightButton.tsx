'use client';

import { ReactNode, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LeftRightButton = ({ children }: { children: ReactNode }) => {
  const [scrollX, setScrollX] = useState(0);
  const serviceRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
      setScrollX(scrollX + 300);
    }
  };

  const scrollLeft = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
      setScrollX(scrollX - 300);
    }
  };

  return (
    <>
      <div className='relative'>
        <button
          className={`absolute -top-12 right-0 z-10 mx-3 my-auto mr-16 h-10 w-10 rounded-full border bg-white active:bg-gray-100 lg:-top-14`}
          onClick={scrollLeft}
        >
          <FaChevronLeft className='mx-auto text-gray-500' />
        </button>
        <button
          className={`absolute -top-12 right-0 z-10 mx-3 my-auto h-10 w-10 rounded-full border bg-white active:bg-gray-100 lg:-top-14`}
          onClick={scrollRight}
        >
          <FaChevronRight className='mx-auto text-gray-500' />
        </button>

        <div ref={serviceRef} className='no-scrollbar overflow-x-scroll'>
          {children}
        </div>
      </div>
    </>
  );
};

export default LeftRightButton;
