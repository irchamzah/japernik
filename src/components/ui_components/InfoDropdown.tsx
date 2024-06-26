'use client';

import { Category } from '@/lib/actions/category.actions';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const InfoDropdown = ({
  menuLabel,
  subMenus,
}: {
  menuLabel: string;
  subMenus: Category[];
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [isMdScreen, setIsMdScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 640);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className=''>
      <div className='mx-auto max-w-7xl pb-5'>
        <button
          type='button'
          className={`w-full text-left text-gray-700`}
          id='menu-button'
          aria-expanded={isOpen}
          aria-haspopup='true'
          onClick={toggleDropdown}
          disabled={isMdScreen}
        >
          <div className='group flex w-full items-center'>
            <div className='grow font-semibold text-gray-700'>{menuLabel}</div>
            <div title='ini icon ke kanan' className=''>
              {isOpen ? (
                <IoIosArrowUp className='text-xl text-gray-500 group-hover:text-blue-500 sm:hidden' />
              ) : (
                <IoIosArrowDown className='text-xl text-gray-500 group-hover:text-blue-500 sm:hidden' />
              )}
            </div>
          </div>
        </button>
      </div>

      <div
        className={`origin-top-right transform pb-5 ${isMdScreen ? 'block' : isOpen ? 'block' : 'hidden'}`}
        aria-labelledby='menu-button'
      >
        {subMenus.map((subMenu, index) => (
          <div
            key={index}
            className='w-min decoration-gray-500 hover:underline'
          >
            <Link href={`/categories/${subMenu.slug}`}>
              <div className='w-max pb-4 font-medium text-gray-500' role='none'>
                {subMenu.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoDropdown;
