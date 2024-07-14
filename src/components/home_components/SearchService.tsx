import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

const SearchService = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    router.push(
      `/search/service?searchQuery=${encodeURIComponent(searchQuery)}`,
      { scroll: false }
    );
  };
  return (
    <div className='mb-4 flex items-center text-gray-600'>
      <div className='flex overflow-hidden rounded-lg border-2 border-gray-300'>
        <input
          type='text'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSearch();
            }
          }}
          className='w-full px-4 py-2 focus:outline-none'
          placeholder='Cari jasa apa?'
        />
        <button
          onClick={handleSearch}
          className='flex items-center justify-center bg-purple-500 px-2 py-2 text-white'
        >
          <CiSearch className='h-6 w-6' />
        </button>
      </div>
    </div>
  );
};

export default SearchService;
