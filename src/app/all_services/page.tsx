import Layout from '@/components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { CiFilter } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';
import { IoFilterOutline } from 'react-icons/io5';
import { MdOutlineSort } from 'react-icons/md';

export default function all_services() {
  return (
    <Layout>
      <div title='ini kumpulan breadcrumbs' className='mx-6 mb-5 mt-40'>
        <ul className='flex flex-wrap text-gray-500'>
          <li className='my-1 flex items-center text-xs'>
            <Link href={'#'} className='decoration-gray-500 hover:underline'>
              HOME
            </Link>
            <FaChevronRight className='mx-2' />
          </li>
          <li className='my-1 flex items-center text-xs'>
            <Link href={'#'} className='decoration-gray-500 hover:underline'>
              PROGRAMMING & TECH
            </Link>
            <FaChevronRight className='mx-2' />
          </li>
          <li className='my-1 flex items-center text-xs'>
            <Link href={'#'} className='decoration-gray-500 hover:underline'>
              SOFTWARE DEVELOPMENT
            </Link>
            <FaChevronRight className='mx-2' />
          </li>
        </ul>
      </div>
      <div title='isi title dan description' className='mx-6 mb-5'>
        <h1 className='mb-1 text-2xl font-semibold text-gray-600'>
          Web Application
        </h1>
        <p className='text-gray-500'>
          Build your custom web application from scratch with help from skilled
          freelance coders
        </p>
      </div>
      <div
        title='ini isi filter & sort'
        className='mx-6 my-6 flex justify-between gap-3'
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
      <div title='container utk seller'>
        <div title='isi foto & detail seller'>
          <div title='ini foto'>
            <Image
              src={'/images/random_image/img1.jpg'}
              alt='foto seller'
              width={100}
              height={0}
            />
          </div>
          <div title='ini detail seller'>
            <div title='ini foto seller, nama seller, '>
              <Image
                src={'/images/random_image/img1.jpg'}
                alt='foto seller'
                width={100}
                height={0}
              />
              Irchamzah Developer
            </div>
            <div title='ini deskripsi'></div>
            <div title='ini rating'></div>
            <div title='ini harga'></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
