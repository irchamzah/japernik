'use client';
import { useRouter } from 'next/navigation';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewPaging = ({
  path,
  reviewPageNumber,
  isNext,
}: {
  path: string;
  reviewPageNumber: number;
  isNext: boolean;
}) => {
  const router = useRouter();

  const handleNavigation = (type: string) => {
    let nextPageNumber = reviewPageNumber;
    if (type === 'prev') {
      nextPageNumber = Math.max(1, reviewPageNumber - 1);
    } else if (type === 'next') {
      nextPageNumber = reviewPageNumber + 1;
    }

    const separator = path.includes('?') ? '&' : '?';

    if (nextPageNumber > 1) {
      router.push(`/${path}${separator}reviewPageNumber=${nextPageNumber}`, {
        scroll: false,
      });
    } else {
      router.push(`/${path}`, { scroll: false });
    }
  };

  if (!isNext && reviewPageNumber === 1) return null;

  return (
    <div className='mx-auto max-w-7xl'>
      <div
        title='ini paging'
        className='mx-auto my-6 flex items-center justify-center sm:my-12'
      >
        <button
          onClick={() => handleNavigation('prev')}
          disabled={reviewPageNumber === 1}
          title='ini left icon'
          className='mr-10 rounded-full p-3 text-gray-500 active:bg-gray-100'
        >
          <FaChevronLeft />
        </button>
        <div title='ini page number'>Page {reviewPageNumber}</div>
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

export default ReviewPaging;
