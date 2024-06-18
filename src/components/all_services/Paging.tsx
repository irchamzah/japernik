import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Paging = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div
        title='ini paging'
        className='mx-auto my-6 flex items-center justify-center sm:my-12'
      >
        <div title='ini left icon' className='mr-10 text-gray-500'>
          <FaChevronLeft />
        </div>
        <div title='ini page number'>Page 1</div>
        <div title='ini right icon' className='ml-10 text-gray-500'>
          <FaChevronRight />
        </div>
      </div>
    </div>
  );
};

export default Paging;
