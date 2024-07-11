'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Paging = ({
  path,
  pageNumber,
  isNext,
}: {
  path: string;
  pageNumber: number;
  isNext: boolean;
}) => {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    let nextPageNumber = pageNumber;
    if (type === 'prev') {
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === 'next') {
      nextPageNumber = pageNumber + 1;
    }

    const separator = path.includes('?') ? '&' : '?';

    if (nextPageNumber > 1) {
      router.push(`/${path}${separator}pageNumber=${nextPageNumber}`);
    } else {
      router.push(`/${path}`);
    }
  };

  if (!isNext && pageNumber === 1) return null;

  return (
    <div className='mx-auto max-w-7xl'>
      <div
        title='ini paging'
        className='mx-auto my-6 flex items-center justify-center sm:my-12'
      >
        <button
          onClick={() => handleNavigation('prev')}
          disabled={pageNumber === 1}
          title='ini left icon'
          className='mr-10 rounded-full p-3 text-gray-500 active:bg-gray-100'
        >
          <FaChevronLeft />
        </button>
        <div title='ini page number'>Page {pageNumber}</div>
        <button
          onClick={() => handleNavigation('next')}
          disabled={!isNext}
          title='ini right icon'
          className='ml-10 rounded-full p-3 text-gray-500 active:bg-gray-100'
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Paging;
