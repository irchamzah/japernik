'use client';

import { useEffect, useRef, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { MdOutlineSort } from 'react-icons/md';

const FilterSort = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (stickyRef.current) {
      setIsSticky(stickyRef.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        ref={stickyRef}
        className={`sticky top-0 mx-auto ${isSticky ? 'shadow-lg' : ''}`}
      >
        <div className='mx-auto max-w-7xl'>
          <div
            title='ini isi filter & sort'
            className='mx-6 flex justify-between gap-3 bg-white py-6 xl:mx-0'
          >
            <div
              title='ini filter'
              className='flex h-11 w-1/2 items-center justify-center rounded border active:bg-gray-100'
            >
              <CiFilter className='mr-2 h-5 w-5 text-2xl text-purple-500' />
              <p className='text-xs font-semibold'>Filter</p>
            </div>
            <div
              title='ini sort'
              className='flex h-11 w-1/2 items-center justify-center rounded border active:bg-gray-100'
            >
              <MdOutlineSort className='mr-2 h-5 w-5 text-2xl text-purple-500' />
              <p className='text-xs font-semibold'>Sort</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSort;
