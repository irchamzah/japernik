'use client';

import { ServicePortfolio } from '@/lib/actions/servicePortfolio.actions';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PhotoSlider = ({
  servicePortfolios,
}: {
  servicePortfolios: ServicePortfolio[] | undefined;
}) => {
  if (!servicePortfolios) {
    servicePortfolios = [];
  }
  //slider handle
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const newIndex =
      currentIndex === 0 ? servicePortfolios.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const newIndex =
      currentIndex === servicePortfolios.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className='mx-auto max-w-7xl'>
      <div className='relative mx-6 mb-10 xl:mx-0'>
        <div>
          <Image
            src={servicePortfolios[currentIndex].url}
            alt={`Slide ${currentIndex}`}
            className='h-56 w-full object-cover sm:h-[427px]'
            width={500}
            height={0}
          />
        </div>
        <button className='absolute bottom-0 left-0 top-0 z-10 -mx-5 my-auto h-10 w-10 rounded-full border bg-white active:bg-gray-100'>
          <FaChevronLeft
            onClick={prevSlide}
            className='mx-auto text-gray-500'
          />
        </button>
        <button className='absolute bottom-0 right-0 top-0 z-10 -mx-5 my-auto h-10 w-10 rounded-full border bg-white active:bg-gray-100'>
          <FaChevronRight
            onClick={nextSlide}
            className='mx-auto text-gray-500'
          />
        </button>
      </div>
    </div>
  );
};

export default PhotoSlider;
