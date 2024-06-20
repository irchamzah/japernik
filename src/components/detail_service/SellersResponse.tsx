'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SellersResponse = () => {
  // Dropdown Handle
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <Image
          src={'https://randomuser.me/api/portraits/men/2.jpg'}
          alt=''
          width={48}
          height={0}
          className='h-8 w-8 rounded-full'
        />
        <button className='flex w-full items-center' onClick={toggleDropdown}>
          <span className='text-sm font-bold'>Seller&apos;s Response</span>
          {isOpen ? (
            <IoIosArrowUp className='ml-auto text-xl text-gray-500 group-hover:text-purple-500' />
          ) : (
            <IoIosArrowDown className='ml-auto text-xl text-gray-500 group-hover:text-purple-500' />
          )}
        </button>
      </div>
      <div className={`${isOpen ? '' : 'hidden'}`}>
        <p className='ml-11 text-base font-medium text-gray-600'>
          Highly responsive and cooperative client, facilitating smooth
          communication and collaboration throughout the project. A pleasure to
          work with!
        </p>
      </div>
    </div>
  );
};

export default SellersResponse;
