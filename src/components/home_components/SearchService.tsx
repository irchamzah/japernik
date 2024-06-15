import { CiSearch } from 'react-icons/ci';

const SearchService = () => {
  return (
    <div className='mb-4 flex items-center text-gray-600'>
      <div className='flex overflow-hidden rounded-lg border-2 border-gray-300'>
        <input
          type='text'
          className='w-full px-4 py-2 focus:outline-none'
          placeholder='Cari Jasa...'
        />
        <button className='flex items-center justify-center bg-pink-500 px-2 py-2 text-white'>
          <CiSearch className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

export default SearchService;
