'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose, IoSearch } from 'react-icons/io5';
import LeftRightButton_2 from './ui_components/LeftRightButton_2';
import { Category } from '@/lib/actions/category.actions';
import { useRouter } from 'next/navigation';

const Navbar = ({
  mode,
  categories,
}: {
  mode: string;
  categories: Category[];
}) => {
  const router = useRouter();

  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.closeButton');

    const handleMenuToggle = () => {
      mobileMenu?.classList.toggle('hidden');
      overlay?.classList.toggle('hidden');
      document.body.classList.add('no-scroll');
      console.log('handleMenuToggle');
    };

    const handleClickOutside = (event: any) => {
      if (
        mobileMenu &&
        !mobileMenu.classList.contains('hidden') &&
        !mobileMenu.contains(event?.target) &&
        !mobileMenuButton?.contains(event?.target)
      ) {
        mobileMenu.classList.add('hidden');
        overlay?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        console.log('handleClickOutside');
      }
    };

    const handleCloseButtonClick = () => {
      mobileMenu?.classList.toggle('hidden');
      overlay?.classList.toggle('hidden');
      document.body.classList.remove('no-scroll');
      console.log('handleCloseButtonClick');
    };

    mobileMenuButton?.addEventListener('click', handleMenuToggle);
    overlay?.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside);
    closeButton?.addEventListener('click', handleCloseButtonClick);

    return () => {
      mobileMenuButton?.removeEventListener('click', handleMenuToggle);
      overlay?.removeEventListener('click', handleClickOutside);
      closeButton?.removeEventListener('click', handleCloseButtonClick);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    router.push(
      `/search/service?searchQuery=${encodeURIComponent(searchQuery)}`,
      { scroll: false }
    );
  };

  return (
    <>
      <nav className={`top-0 z-20 w-full ${mode} `}>
        <div className='min-h-20 border-b bg-white'>
          <div className='mx-6 flex h-20 max-w-7xl items-center justify-between xl:mx-auto'>
            <Link href='/'>
              <div
                title='ini logo'
                className='text-3xl font-extrabold text-gray-800'
              >
                JAPERNIK
              </div>
            </Link>
            <div
              title='SEARCH FORMMMMMMMMMM'
              className={`hidden w-full justify-center overflow-hidden sm:flex`}
            >
              <div className='mx-6 flex w-full'>
                <input
                  type='text'
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                  className='-mr-1 w-full rounded-l-sm border px-4 py-2'
                  placeholder='Cari jasa apa?'
                />
                <button onClick={handleSearch}>
                  <div className='flex h-full rounded-r-sm bg-gray-800 px-4 py-2 text-white hover:opacity-90'>
                    <IoSearch className='my-auto h-5 w-5' />
                  </div>
                </button>
              </div>
            </div>
            <div
              title='A'
              className='hidden items-center gap-6 font-bold text-gray-500 lg:flex'
            >
              <Link href=''>
                <div
                  title='ini become seller'
                  className='flex h-10 items-center text-nowrap hover:text-purple-500'
                >
                  Menjadi Penjual
                </div>
              </Link>
              <Link href=''>
                <div
                  title='ini sign in'
                  className='flex h-10 items-center text-nowrap hover:text-purple-500'
                >
                  Sign In
                </div>
              </Link>
              <Link href=''>
                <div
                  title='ini join'
                  className='rounded-md border border-purple-500 px-4 py-2 text-purple-500 hover:bg-purple-500 hover:text-white'
                >
                  Join
                </div>
              </Link>
            </div>
            <div className='mobile-menu-button text-3xl focus:outline-none lg:hidden'>
              <button className='h-full'>
                <FiMenu className='' />
              </button>
            </div>
          </div>
          <div
            title='SEARCH FORMMMMMMMMMMMMMMMMM'
            className={`mx-6 flex justify-center overflow-hidden pb-6 sm:hidden`}
          >
            <div className='flex w-full'>
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                className='-mr-1 w-full rounded-sm border px-4 py-2'
                placeholder='Jasa apa yang kamu cari?'
              />
              <button onClick={handleSearch}>
                <div className='flex h-full rounded-r-sm bg-gray-800 px-4 py-2 text-white hover:opacity-90'>
                  <IoSearch className='my-auto h-5 w-5' />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          title='LIST MENU'
          className={`hidden min-h-10 border-b bg-white sm:block`}
        >
          <div className='mx-6'>
            <div className='mx-auto max-w-7xl px-10'>
              <LeftRightButton_2>
                <div className='no-scrollbar flex h-10 snap-x items-center text-nowrap font-medium text-gray-500'>
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/categories/${category.slug}`}
                      className=''
                    >
                      <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                        {category.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </LeftRightButton_2>
            </div>
          </div>
        </div>
      </nav>

      <div className='overlay fixed inset-0 z-30 hidden bg-black opacity-50'></div>

      <div className='mobile-menu fixed right-0 top-0 z-50 hidden h-screen w-72 overflow-auto bg-white px-6 py-[22px] text-gray-900'>
        <div className='mb-5 flex justify-end'>
          <button className='closeButton items-end'>
            <IoClose className='text-3xl' />
          </button>
        </div>
        <Link href={'#'}>
          <div
            title='ini isi join'
            className='mb-5 rounded bg-gray-900 px-6 py-3 text-center font-semibold text-white hover:opacity-90'
          >
            Join
          </div>
        </Link>
        <div title='ini isi menu'>
          <Link href={'#'}>
            <div className='rounded-xl p-3 hover:bg-gray-100'>Sign in</div>
          </Link>
          <Link href={'#'}>
            <div className='rounded-xl p-3 hover:bg-gray-100'>
              Become a Seller
            </div>
          </Link>
          <hr />
          <h1 className='mt-10 p-3 font-bold'>Jasa yang Tersedia:</h1>
          {categories.map((category, index) => (
            <Link key={index} href={`/categories/${category.slug}`}>
              <div className='ml-3 rounded-xl p-3 hover:bg-gray-100'>
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
