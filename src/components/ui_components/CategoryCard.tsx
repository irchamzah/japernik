import Link from 'next/link';
import { ReactNode } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { GiLips } from 'react-icons/gi';

const CategoryCard = ({ label, icon }: { label: string; icon: ReactNode }) => {
  return (
    <Link href='#'>
      <div
        title='1 card kategori yang berisi icon dan tulisan dan icon ke kanan'
        className='group flex h-16 min-w-72 items-center rounded-xl border shadow-md hover:border-2 active:bg-gray-100'
      >
        <div title='ini icon' className='p-4 group-hover:text-purple-500'>
          {icon}
        </div>
        <div
          title='ini nama kategori'
          className='grow text-nowrap font-semibold text-gray-700 group-hover:text-purple-500'
        >
          {label}
        </div>
        <div title='ini icon ke kanan' className='p-6'>
          <FaArrowRight className='text-gray-500 group-hover:text-purple-500' />
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
