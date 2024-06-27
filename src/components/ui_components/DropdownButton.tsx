'use client';

import { ReactNode, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const DropdownButton = ({
  children,
  labelDropdown,
}: {
  children: ReactNode;
  labelDropdown: ReactNode;
}) => {
  // Dropdown Handle
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        title='ini title'
        className='flex w-full items-center justify-between'
        onClick={toggleDropdown}
      >
        {labelDropdown}
        {isOpen ? (
          <IoIosArrowUp className='text-xl text-gray-500 group-hover:text-purple-500' />
        ) : (
          <IoIosArrowDown className='text-xl text-gray-500 group-hover:text-purple-500' />
        )}
      </button>
      <div className={`${isOpen ? '' : 'hidden'}`}>{children}</div>
    </>
  );
};

export default DropdownButton;
