'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { GiLips } from 'react-icons/gi';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

interface DropdownItem {
  label: string;
  link: string;
}

const Dropdown = ({
  imgSrc,
  title,
  items,
}: {
  imgSrc: string;
  title: string;
  items: DropdownItem[];
}) => {
  // Dropdown Handle
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // is Md Screen Handle
  const [isMdScreen, setIsMdScreen] = useState(false);
  const [isSmScreen, setIsSmScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMdScreen(window.innerWidth >= 640);
      setIsSmScreen(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <div className=''>
      <div className='mx-auto max-w-7xl'>
        <button
          type='button'
          className='w-full border-b border-gray-200 text-left text-gray-700 sm:border-none'
          id='menu-button'
          aria-expanded={isOpen}
          aria-haspopup='true'
          onClick={toggleDropdown}
          disabled={isMdScreen}
        >
          <div
            title='1 card kategori yang berisi icon dan tulisan dan icon ke bawah'
            className='group my-4 flex h-auto w-full items-center sm:my-0 sm:flex-col'
          >
            <div title='ini icon' className='sm:relative sm:w-full'>
              <Image
                src={imgSrc}
                alt={title}
                width={200}
                height={0}
                className='h-14 min-w-20 max-w-20 rounded-lg object-cover sm:h-32 sm:w-full sm:max-w-none lg:h-48'
              />
            </div>
            <div
              title='ini nama kategori'
              className='ml-4 grow text-left text-xl font-semibold text-gray-900 sm:mb-1 sm:ml-0 sm:mt-6 sm:w-full sm:grow-0'
            >
              {title}
            </div>
            <div title='ini icon ke kanan' className='px-3 py-6 sm:hidden'>
              {isOpen ? (
                <IoIosArrowUp className='text-xl text-gray-500 group-hover:text-purple-500' />
              ) : (
                <IoIosArrowDown className='text-xl text-gray-500 group-hover:text-purple-500' />
              )}
            </div>
          </div>
        </button>
        <div
          className={`-mx-6 bg-gray-100 px-3 shadow-inner ring-1 ring-black ring-opacity-5 sm:mx-0 sm:bg-opacity-0 sm:px-0 sm:shadow-none sm:ring-0 ${isMdScreen ? 'block' : isOpen ? 'block' : 'hidden'}`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
        >
          <div className='py-1' role='none'>
            <div className='mb-2'></div>
            {items.map((item, index) => (
              <Link
                href={item.link}
                className={`group block rounded-lg px-4 py-1 text-lg font-medium text-gray-700 decoration-gray-600 hover:bg-gray-100 ${isSmScreen ? 'hover:underline' : ''} no-underline sm:-mx-3 sm:px-3 sm:text-gray-600`}
                role='menuitem'
                key={index}
              >
                <div className='flex items-center'>
                  <span className='grow'>{item.label}</span>
                  <FaArrowRight className='hidden text-sm text-gray-500 sm:group-hover:block' />
                </div>
              </Link>
            ))}
            <div className='mb-6'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
