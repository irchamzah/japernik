import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const BreadCrumbs = ({
  categorySlug,
  currentServiceSlug,
}: {
  categorySlug: string | undefined;
  currentServiceSlug: string | undefined;
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
            {currentServiceSlug !== '' ? (
              <>
                <Link
                  href={`/categories/${categorySlug}/${currentServiceSlug}`}
                  className='decoration-gray-500 hover:underline'
                >
                  {currentServiceSlug}
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
