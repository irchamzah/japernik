'use client';

import { useEffect, useRef, useState } from 'react';
import { CiFilter } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineSort } from 'react-icons/md';
import SortRadio from './SortRadio';
import { usePathname, useRouter } from 'next/navigation';

const Filter = () => {
  /////////////////////// Sticky filter handle
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        setIsSticky(stickyRef.current.getBoundingClientRect().top <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /////////////////////// Modal filter
  useEffect(() => {
    const filterModalButton = document.querySelector('.filterModalButton');
    const filterModal = document.querySelector('.filterModal');
    const filterCloseButton = document.querySelector('.filterCloseButton');

    const handleFilterMenuToggle = () => {
      filterModal?.classList.toggle('hidden');
      document.body.classList.add('no-scroll');
      console.log('handleFilterMenuToggle');
    };
    const handleFilterCloseButton = () => {
      filterModal?.classList.add('hidden');
      document.body.classList.remove('no-scroll');
      console.log('handleFilterCloseButton');
    };

    handleFilterCloseButtonRef.current = handleFilterCloseButton;

    filterModalButton?.addEventListener('click', handleFilterMenuToggle);
    filterCloseButton?.addEventListener('click', handleFilterCloseButton);
    return () => {
      filterModalButton?.removeEventListener('click', handleFilterMenuToggle);
      filterCloseButton?.removeEventListener('click', handleFilterCloseButton);
    };
  }, []);

  /////////////////////// Modal sort handle
  useEffect(() => {
    const sortModalButton = document.querySelector('.sortModalButton');
    const sortModal = document.querySelector('.sortModal');
    const sortCloseButton = document.querySelector('.sortCloseButton');
    const handleSortMenuToggle = () => {
      sortModal?.classList.toggle('hidden');
      document.body.classList.add('no-scroll');
      console.log('handleSortMenuToggle');
    };

    const handleSortCloseButton = () => {
      sortModal?.classList.add('hidden');
      document.body.classList.remove('no-scroll');
      console.log('handleSortCloseButton');
    };

    handleSortCloseButtonRef.current = handleSortCloseButton;

    sortModalButton?.addEventListener('click', handleSortMenuToggle);
    sortCloseButton?.addEventListener('click', handleSortCloseButton);

    return () => {
      sortModalButton?.removeEventListener('click', handleSortMenuToggle);
      sortModal?.removeEventListener('click', handleSortMenuToggle);
      sortCloseButton?.removeEventListener('click', handleSortCloseButton);
    };
  }, []);

  /////////////////////// Sort radio
  const [selectedOption, setSelectedOption] = useState('');
  const radioOptions = [
    { id: 'newest', label: 'Terbaru' },
    { id: 'latest', label: 'Terlama' },
    { id: 'bestSelling', label: 'Best selling' },
  ];

  const [priceFrom, setPriceFrom] = useState<number>(0);
  const [priceTo, setPriceTo] = useState<number>(0);
  const [selectedLocation, setSelectedLocation] = useState('null');
  const handleLocationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedLocation(event.target.value);
  };

  /////////////////////// Show Filter
  const router = useRouter();
  const pathname = usePathname();
  const handleFilterCloseButtonRef = useRef<() => void>();
  const handleFilter = () => {
    const query = new URLSearchParams({
      priceFrom: priceFrom.toString(),
      priceTo: priceTo.toString(),
      location: selectedLocation,
    }).toString();

    router.push(`${pathname}?${query}`);
    handleFilterCloseButtonRef.current?.();
  };
  /////////////////////// Show Sort
  const orderBy = selectedOption;
  const handleSortCloseButtonRef = useRef<() => void>();
  const handleSort = () => {
    const query = new URLSearchParams({
      orderBy: orderBy.toString(),
    }).toString();

    router.push(`${pathname}?${query}`);
    handleSortCloseButtonRef.current?.();
  };

  return (
    <>
      <div
        ref={stickyRef}
        className={`sticky top-0 mx-auto ${isSticky ? 'shadow-lg' : ''}`}
      >
        <div className='mx-auto my-6 max-w-7xl'>
          <div
            title='Filter & Sort'
            className='mx-6 flex justify-between gap-3 bg-white py-5 xl:mx-0'
          >
            <div
              title='Filter'
              className='filterModalButton flex h-11 w-1/2 items-center justify-center rounded border active:bg-gray-100'
            >
              <CiFilter className='mr-2 h-5 w-5 text-2xl text-purple-500' />
              <p className='text-xs font-semibold'>Filter</p>
            </div>
            <div
              title='Sort'
              className='sortModalButton flex h-11 w-1/2 items-center justify-center rounded border active:bg-gray-100'
            >
              <MdOutlineSort className='mr-2 h-5 w-5 text-2xl text-purple-500' />
              <p className='text-xs font-semibold'>Sort</p>
            </div>
          </div>
        </div>
      </div>

      <div className='filterModal hidden'>
        <div className='fixed inset-0 z-20 flex items-center justify-center bg-white'>
          <div className='relative h-full w-full max-w-xl overflow-auto bg-white px-6 pb-20 shadow-lg'>
            <div
              title='Clear All, Filter, Close Button'
              className='flex items-center justify-between py-5'
            >
              <span className='w-16 text-sm text-gray-500'>Clear All</span>
              <span className='grow text-center font-semibold text-gray-800'>
                Filter
              </span>
              <span className='flex w-16 justify-end text-gray-500'>
                <IoCloseOutline className='filterCloseButton cursor-pointer text-2xl active:bg-gray-100' />
              </span>
            </div>
            <hr />
            <div title='price' className='py-3'>
              <p className='my-4 font-semibold'>price</p>
              <div className='flex flex-row items-center justify-start'>
                <div className='flex w-36 border px-3 py-2'>
                  <span className='mr-3 text-gray-500'>$</span>
                  <input
                    type='number'
                    className='w-full'
                    onChange={(e) =>
                      setPriceFrom(
                        e.target.value ? parseFloat(e.target.value) : 0
                      )
                    }
                    value={Number(priceFrom).toString()}
                    min='0'
                  />
                </div>
                <span className='mx-4 font-semibold text-gray-500'>to</span>
                <div className='flex w-36 border px-3 py-2'>
                  <span className='mr-3 text-gray-500'>$</span>
                  <input
                    type='number'
                    className='w-full'
                    onChange={(e) =>
                      setPriceTo(
                        e.target.value ? parseFloat(e.target.value) : 0
                      )
                    }
                    value={Number(priceTo).toString()}
                    min='0'
                  />
                </div>
              </div>
            </div>
            <div title='Seller Location' className='py-3'>
              <p className='my-4 font-semibold'>Seller lives in</p>
              <div className='w-56 border px-3 py-2 text-gray-500'>
                <select
                  className='w-full'
                  value={selectedLocation}
                  onChange={handleLocationChange}
                >
                  <option value=''>Pilih wilayah</option>
                  <option value='jember'>Jember</option>
                  <option value='situbondo'>Situbondo</option>
                </select>
              </div>
            </div>
          </div>
          <div className='fixed bottom-0 w-full max-w-xl items-center justify-center bg-white px-6 py-3'>
            <div
              className='cursor-pointer rounded bg-black px-6 py-3 text-center font-semibold text-white active:opacity-80'
              onClick={handleFilter}
            >
              Show Results
            </div>
          </div>
        </div>
      </div>

      <div className='sortModal hidden'>
        <div className='fixed inset-0 z-20 flex items-center justify-center bg-white'>
          <div className='relative h-full w-full max-w-xl overflow-auto bg-white px-6 pb-20 shadow-lg'>
            <div
              title='Sort Header'
              className='flex items-center justify-between py-5'
            >
              <span className='w-16 text-sm text-gray-500'></span>
              <span className='grow text-center font-semibold text-gray-800'>
                Sort
              </span>
              <span className='flex w-16 justify-end text-gray-500'>
                <IoCloseOutline className='sortCloseButton cursor-pointer text-2xl active:bg-gray-100' />
              </span>
            </div>
            <hr className='mb-3' />
            <div title='Sort Options' className='flex flex-col'>
              <SortRadio
                options={radioOptions}
                selectedOption={selectedOption}
                onChange={setSelectedOption}
              />
            </div>
          </div>
          <div className='fixed bottom-0 w-full max-w-xl items-center justify-center bg-white px-6 py-3'>
            <div
              className='cursor-pointer rounded bg-black px-6 py-3 text-center font-semibold text-white active:opacity-80'
              onClick={handleSort}
            >
              Show Results
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
