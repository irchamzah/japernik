'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FaqDropdown = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-b border-gray-200'>
      <div className='mx-auto max-w-7xl'>
        <button
          type='button'
          className={`w-full text-left text-gray-700`}
          id='menu-button'
          aria-expanded={isOpen}
          aria-haspopup='true'
          onClick={toggleDropdown}
        >
          <div className='group flex w-full items-center py-5'>
            <div className='grow font-medium text-gray-700'>{title}</div>
            <div title='ini icon ke kanan' className=''>
              {isOpen ? (
                <IoIosArrowUp className='text-xl text-gray-500 group-hover:text-purple-500' />
              ) : (
                <IoIosArrowDown className='text-xl text-gray-500 group-hover:text-purple-500' />
              )}
            </div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div
          className='origin-top-right transform border-b border-gray-200 bg-gray-100'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
        >
          <div className='w-5/6 pb-5 text-gray-700' role='none'>
            <div className=''></div>
            {description}
            <div className=''></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqDropdown;
