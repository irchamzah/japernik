'use client';

import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');

    const handleMenuToggle = () => {
      mobileMenu?.classList.toggle('hidden');
      overlay?.classList.toggle('hidden');
    };

    const handleClickOutside = (event: any) => {
      if (
        mobileMenu &&
        !mobileMenu.contains(event?.target) &&
        !mobileMenuButton?.contains(event?.target)
      ) {
        mobileMenu.classList.add('hidden');
        overlay?.classList.add('hidden');
      }
    };

    mobileMenuButton?.addEventListener('click', handleMenuToggle);
    overlay?.addEventListener('click', handleClickOutside);
    document.addEventListener('click', handleClickOutside);

    return () => {
      mobileMenuButton?.removeEventListener('click', handleMenuToggle);
      overlay?.removeEventListener('click', handleClickOutside);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className='fixed top-0 z-50 h-20 w-full bg-gray-800 py-4'>
        <div className='mx-auto h-full px-6 sm:px-6 lg:px-8'>
          <div className='mx-auto flex h-full max-w-7xl justify-between'>
            <div className='flex items-center space-x-4'>
              <div>
                <Link href='/' className='text-2xl font-bold text-white'>
                  JAPERNIK
                </Link>
              </div>
            </div>

            <div className='hidden md:flex md:items-center md:space-x-4'>
              <Link
                href='#'
                className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Jadi Seller
              </Link>
              <Link
                href='#'
                className='rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white'
              >
                Login
              </Link>
              <Link
                href='#'
                className='rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-800'
              >
                Sign Up
              </Link>
            </div>

            <div className='mobile-menu-button text-3xl text-white focus:outline-none md:hidden'>
              <button className='h-full'>
                <FiMenu className='' />
              </button>
            </div>
          </div>
        </div>

        <div className='overlay z-9 fixed inset-0 hidden bg-black opacity-50'></div>

        <div className='mobile-menu absolute right-0 top-0 hidden h-screen w-48 bg-white p-4 text-gray-900 md:items-center md:space-x-4'>
          <Link
            href='#'
            className='my-3 block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white'
          >
            Jadi Seller
          </Link>
          <Link
            href='#'
            className='my-3 block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white'
          >
            Login
          </Link>
          <Link
            href='#'
            className='my-3 block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white'
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
