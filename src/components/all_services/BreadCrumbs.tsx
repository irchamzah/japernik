import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumbs = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div title='ini kumpulan breadcrumbs' className='mx-6 mb-5 mt-3 xl:mx-0'>
        <ul className='flex flex-wrap text-gray-500 sm:text-gray-800'>
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
    </div>
  );
};

export default BreadCrumbs;
