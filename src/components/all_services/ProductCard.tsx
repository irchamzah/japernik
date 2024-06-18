import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';

const ProductCard = () => {
  return (
    <div title='container utk seller' className='mt-4'>
      <div title='isi foto & detail seller' className='flex w-full flex-col'>
        <div title='ini foto' className='flex w-full'>
          <Image
            src={'/images/random_image/img1.jpg'}
            alt='foto seller'
            width={100}
            height={0}
            className='h-52 w-full rounded-lg border object-cover'
          />
        </div>
        <div title='ini detail seller' className='mt-3'>
          <div
            title='ini foto seller, nama seller'
            className='flex w-full items-center'
          >
            <Image
              src={'/images/random_image/img1.jpg'}
              alt='foto seller'
              width={20}
              height={0}
              className='mr-2 h-6 w-6 rounded-full object-cover'
            />
            <span className='text-sm font-semibold'>Irchamzah Developer</span>
          </div>
          <div title='ini deskripsi'>
            <p className='mt-1 w-full text-sm text-gray-700'>
              I will build saas business as a full stack saas developer web app
            </p>
          </div>
          <div title='ini rating' className='mt-2 flex items-center'>
            <IoIosStar />
            <span className='ml-1 font-semibold'>5.0</span>
            <span className='ml-1 text-gray-500'>(45)</span>
          </div>
          <div title='ini harga' className=''>
            <span className='font-semibold'>From US $1,445</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
