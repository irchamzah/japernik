import { CiSearch } from "react-icons/ci";

const SearchService = () => {
  return (
    <div className="flex items-center mb-4 text-gray-600">
      <div className="flex border-2 border-gray-300 rounded-lg overflow-hidden">
        <input
          type="text"
          className="px-4 py-2 w-full focus:outline-none"
          placeholder="Cari Jasa..."
        />
        <button className="px-2 py-2 bg-pink-500 text-white flex items-center justify-center">
          <CiSearch className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SearchService;
