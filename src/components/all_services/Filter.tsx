'use client';

import { useEffect, useRef, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineSort } from 'react-icons/md';
import CheckBoxFilter from './CheckBoxFilter';
import SortRadio from './SortRadio';

const Filter = () => {
  // sticky filter handle
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

  //modal filter & sort handle
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [isSortVisible, setIsSortVisible] = useState(false);
  useEffect(() => {
    if (isFilterVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isFilterVisible]);
  useEffect(() => {
    if (isSortVisible) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isSortVisible]);

  //sort radio
  const [selectedOption, setSelectedOption] = useState('');
  const radioOptions = [
    { id: 'recommended', label: 'Recommended' },
    { id: 'bestSelling', label: 'Best selling' },
    { id: 'newestArrivals', label: 'Newest arrivals' },
  ];

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
              onClick={() => setIsFilterVisible(true)}
            >
              <CiFilter className='mr-2 h-5 w-5 text-2xl text-purple-500' />
              <p className='text-xs font-semibold'>Filter</p>
            </div>
            <div
              title='ini sort'
              className='flex h-11 w-1/2 items-center justify-center rounded border active:bg-gray-100'
              onClick={() => setIsSortVisible(true)}
            >
              <MdOutlineSort className='mr-2 h-5 w-5 text-2xl text-purple-500' />
              <p className='text-xs font-semibold'>Sort</p>
            </div>
          </div>
        </div>
      </div>
      {isFilterVisible && (
        <>
          <div className='fixed inset-0 z-20 w-full'>
            <div className='relative h-full overflow-auto bg-white px-6 pb-20'>
              <div
                title='ini isi clear all, Filter, close button'
                className='flex items-center justify-between py-5'
              >
                <span className='w-16 text-sm text-gray-500'>Clear All</span>
                <span className='grow text-center font-semibold text-gray-800'>
                  Filter
                </span>
                <span className='flex w-16 justify-end text-gray-500'>
                  <IoCloseOutline
                    className='text-2xl'
                    onClick={() => setIsFilterVisible(false)}
                  />
                </span>
              </div>
              <hr />
              <div title='ini budget' className='py-3'>
                <p className='my-4 font-semibold'>Budget</p>
                <div className='flex flex-row items-center justify-between'>
                  <div className='flex w-36 border px-3 py-2'>
                    <span className='mr-3 text-gray-500'>$</span>
                    <input type='text' className='w-full' />
                  </div>
                  <span className='text-gray-500'>to</span>
                  <div className='flex w-36 border px-3 py-2'>
                    <span className='mr-3 text-gray-500'>$</span>
                    <input type='text' className='w-full' />
                  </div>
                </div>
              </div>
              <div title='ini seller live in' className='py-3'>
                <p className='my-4 font-semibold'>Seller lives in</p>
                <div className='w-56 border px-3 py-2 text-gray-500'>
                  <select name='' id='' className='w-full'>
                    <option value='*'>Pilih wilayah</option>
                    <option value=''>Jember</option>
                    <option value=''>Situbondo</option>
                  </select>
                </div>
              </div>
              <div title='ini filter lainnya' className='py-3'>
                <p className='my-4 font-semibold'>Programming language</p>
                <CheckBoxFilter id='checkbox-1' label='JavaScript' />
                <CheckBoxFilter id='checkbox-2' label='PHP' />
                <CheckBoxFilter id='checkbox-3' label='HTML & CSS' />
              </div>
              <div title='ini filter lainnya' className='py-3'>
                <p className='my-4 font-semibold'>Expertise</p>
                <CheckBoxFilter id='checkbox-4' label='Performance' />
                <CheckBoxFilter id='checkbox-5' label='Design' />
                <CheckBoxFilter
                  id='checkbox-6'
                  label='Algorithm & Data structures'
                />
              </div>
              <div title='ini filter lainnya' className='py-3'>
                <p className='my-4 font-semibold'>Front End Framework</p>
                <CheckBoxFilter id='checkbox-7' label='React JS' />
                <CheckBoxFilter id='checkbox-8' label='Bootstrap' />
                <CheckBoxFilter id='checkbox-9' label='Tailwind CSS' />
              </div>
            </div>
            <div className='fixed bottom-0 w-full bg-white px-6 py-3 ring-2 ring-gray-200'>
              <div className='rounded bg-black px-6 py-3 text-center font-semibold text-white'>
                Show Results
              </div>
            </div>
          </div>
        </>
      )}
      {isSortVisible && (
        <>
          <div className='fixed inset-0 z-20 w-full'>
            <div className='relative h-full overflow-auto bg-white px-6 pb-20'>
              <div
                title='ini isi clear all, Filter, close button'
                className='flex items-center justify-between py-5'
              >
                <span className='w-16 text-sm text-gray-500'></span>
                <span className='grow text-center font-semibold text-gray-800'>
                  Sort
                </span>
                <span className='flex w-16 justify-end text-gray-500'>
                  <IoCloseOutline
                    className='text-2xl'
                    onClick={() => setIsSortVisible(false)}
                  />
                </span>
              </div>
              <hr className='mb-3' />
              <div title='ini 3 radio' className='flex flex-col'>
                <SortRadio
                  options={radioOptions}
                  selectedOption={selectedOption}
                  onChange={setSelectedOption}
                />
              </div>
            </div>
            <div className='fixed bottom-0 w-full bg-white px-6 py-3 ring-2 ring-gray-200'>
              <div className='rounded bg-black px-6 py-3 text-center font-semibold text-white'>
                Show Results
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Filter;