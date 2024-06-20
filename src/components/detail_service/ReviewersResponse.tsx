import { IoIosStar } from 'react-icons/io';

const ReviewersResponse = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-1'>
          <div className='flex gap-1 text-gray-700'>
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
          </div>
          <span className='text-sm font-bold text-gray-700'>5</span>
        </div>
        <span className='text-gray-300'>-</span>
        <span className='text-xs text-gray-500'>2 months ago</span>
      </div>
      <div title='ini opinion'>
        <p className='text-base font-medium text-gray-600'>
          He is a meticulous programmer. The final result was perfect, and we
          agreed to help with any future needs. He has excellent capabilities in
          API-based applications.
        </p>
      </div>
      <div title='ini price & duration' className='flex flex-col gap-1'>
        <div className='flex'>
          <span className='block w-24 text-sm text-gray-500'>Price</span>
          <span className='text-sm font-bold'>US$400-US$600</span>
        </div>
        <div className='flex'>
          <span className='block w-24 text-sm text-gray-500'>Duration</span>
          <span className='text-sm font-bold'>4 weeks</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewersResponse;
