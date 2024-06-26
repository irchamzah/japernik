import { Category } from '@/lib/actions/category.actions';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumbs = ({
  categorySlug,
  categoryName,
  currentServiceId,
  currentServiceName,
}: {
  categorySlug: string | undefined;
  categoryName: string | undefined;
  currentServiceId: string | undefined;
  currentServiceName: string | undefined;
}) => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div title='ini kumpulan breadcrumbs' className='mx-6 mb-5 mt-3 xl:mx-0'>
        <ul className='flex flex-wrap uppercase text-gray-500 sm:text-gray-800'>
          <li className='my-1 flex items-center text-xs'>
            <Link href={'/'} className='decoration-gray-500 hover:underline'>
              HOME
            </Link>
            <FaChevronRight className='mx-2' />
          </li>
          <li className='my-1 flex items-center text-xs'>
            <Link
              href={`/categories/${categorySlug}`}
              className='decoration-gray-500 hover:underline'
            >
              {categorySlug}
            </Link>
            <FaChevronRight className='mx-2' />
          </li>
          <li className='my-1 flex items-center text-xs'>
            {currentServiceId !== '' ? (
              <>
                <Link
                  href={`/service/${currentServiceId}`}
                  className='decoration-gray-500 hover:underline'
                >
                  {currentServiceName}
                </Link>
                <FaChevronRight className='mx-2' />
              </>
            ) : (
              ''
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumbs;
