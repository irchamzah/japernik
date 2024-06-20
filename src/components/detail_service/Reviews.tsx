'use client';

import { IoIosArrowDown, IoIosArrowUp, IoIosStar } from 'react-icons/io';
import Reviewer from './Reviewer';
import { useState } from 'react';

const Reviews = () => {
  // Dropdown Handle
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 mb-12 xl:mx-0'>
        <button
          title='ini title'
          className='flex w-full items-center justify-between'
          onClick={toggleDropdown}
        >
          <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
          {isOpen ? (
            <IoIosArrowUp className='text-xl text-gray-500 group-hover:text-purple-500' />
          ) : (
            <IoIosArrowDown className='text-xl text-gray-500 group-hover:text-purple-500' />
          )}
        </button>
        <div className={`${isOpen ? '' : 'hidden'}`}>
          <div className='mb-8 mt-4 flex flex-col gap-1'>
            <div className='text-base font-semibold text-gray-700'>
              56 reviews for this service
            </div>
            <div className='flex items-center gap-1'>
              <div className='flex gap-1 text-gray-700'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <span className='text-sm font-semibold text-gray-700'>4.9</span>
            </div>
          </div>
          <div>
            <Reviewer />
            <Reviewer />
            <Reviewer />
            <Reviewer />
            <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
              Show More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
