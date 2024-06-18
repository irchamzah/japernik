'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose, IoSearch } from 'react-icons/io5';
import LeftRightButton_2 from './ui_components/LeftRightButton_2';

const Navbar = ({ mode }: { mode: string }) => {
  // const [isScrolled, setIsScrolled] = useState(false);
  // const [isScrolled_2, setIsScrolled_2] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 300) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }

  //     if (window.scrollY > 700) {
  //       setIsScrolled_2(true);
  //     } else {
  //       setIsScrolled_2(false);
  //     }
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.closeButton');

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

    const handleCloseButtonClick = () => {
      mobileMenu?.classList.toggle('hidden');
      overlay?.classList.toggle('hidden');
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

  return (
    <>
      <nav className={`top-0 z-20 w-full ${mode}`}>
        <div className='min-h-20 border-b bg-white'>
          <div className='mx-6 flex h-20 max-w-7xl items-center justify-between lg:mx-auto'>
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
              <form action='' className='mx-6 flex w-full'>
                <input
                  type='text'
                  className='-mr-1 w-full rounded-l-sm border px-4 py-2'
                  placeholder='Jasa apa yang kamu cari?'
                />
                <button className=''>
                  <div className='flex h-full rounded-r-sm bg-gray-800 px-4 py-2 text-white hover:opacity-90'>
                    <IoSearch className='my-auto h-5 w-5' />
                  </div>
                </button>
              </form>
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
                  Become a Seller
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
            <form action='' className='flex w-full'>
              <input
                type='text'
                className='-mr-1 w-full rounded-sm border px-4 py-2'
                placeholder='Jasa apa yang kamu cari?'
              />
              <button className=''>
                <div className='flex h-full rounded-r-sm bg-gray-800 px-4 py-2 text-white hover:opacity-90'>
                  <IoSearch className='my-auto h-5 w-5' />
                </div>
              </button>
            </form>
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
                  <Link href='/categories' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Graphic & Design
                    </div>
                  </Link>
                  <Link href='/all_services' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Programming & Tech
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Digital Marketing
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Video & Animation
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Writing & Translation
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Music & Audio
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Business
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Consulting
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      Data
                    </div>
                  </Link>
                  <Link href='#' className='snap-center'>
                    <div className='px-3 py-2 hover:border-b-2 hover:border-purple-500'>
                      AI Services
                    </div>
                  </Link>
                </div>
              </LeftRightButton_2>
            </div>
          </div>
        </div>
      </nav>

      <div className='overlay fixed inset-0 z-30 hidden bg-black opacity-50'></div>

      <div className='mobile-menu fixed right-0 top-0 z-50 hidden h-screen w-72 bg-white px-6 py-[22px] text-gray-900'>
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
