import { Category } from '@/lib/actions/category.actions';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { PiPersonSimpleCircleLight } from 'react-icons/pi';
import { TfiWorld } from 'react-icons/tfi';

export default function Footer() {
  return (
    <footer className='mx-6'>
      <div className='mx-auto max-w-7xl border-t py-6'>
        <div
          title='ini bungkus 4 item'
          className='flex flex-col items-center justify-center sm:items-start lg:flex-row lg:justify-between'
        >
          <div
            title='ini bungkus 2 item'
            className='my-auto flex flex-col items-center sm:flex-row'
          >
            <span className='text-2xl font-extrabold text-gray-500'>
              JAPERNIK
            </span>
            <span className='mt-2 text-sm text-gray-400 sm:ml-6 sm:mt-0'>
              © Japernik International Ltd. 2024
            </span>
          </div>
          <div
            title='ini bungkus 2 item'
            className='items-center pt-4 sm:flex sm:flex-row lg:pt-0'
          >
            <div
              title='ini bungkus 6 sosmed'
              className='flex justify-center gap-2 pb-4 text-gray-500 sm:py-2'
            >
              <Link href='#'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                  <FaTiktok className='h-5 w-5' />
                </div>
              </Link>
              <Link href='#'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                  <FaInstagram className='h-5 w-5' />
                </div>
              </Link>
              <Link href='#'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                  <FaLinkedin className='h-5 w-5' />
                </div>
              </Link>
              <Link href='#'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                  <FaFacebook className='h-5 w-5' />
                </div>
              </Link>
              <Link href='#'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                  <FaPinterest className='h-5 w-5' />
                </div>
              </Link>
              <Link href='#'>
                <div className='rounded-full p-2 hover:bg-gray-200'>
                  <FaSquareXTwitter className='h-5 w-5' />
                </div>
              </Link>
            </div>
            <div className='flex items-center justify-center gap-2 text-gray-500 sm:ml-6'>
              <div className='flex items-center rounded-full p-2 px-3 py-2 hover:bg-gray-200'>
                <TfiWorld className='mr-2' />
                <span className='text-sm'>English</span>
              </div>
              <div className='flex items-center rounded-full p-2 px-3 py-2 hover:bg-gray-200'>
                <span className='text-sm'>US$ USD</span>
              </div>
              <div
                title='icon'
                className='flex items-center rounded-full hover:bg-gray-200'
              >
                <PiPersonSimpleCircleLight className='h-8 w-8' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
