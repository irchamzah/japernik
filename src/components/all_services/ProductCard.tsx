import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';

const ProductCard = ({
  thumbnail,
  authorImg,
  authorName,
  productDescription,
  rating,
  countReview,
  price,
  productLink,
  authorLink,
}: {
  thumbnail: string;
  authorImg: string;
  authorName: string;
  productDescription: string;
  rating: number;
  countReview: number;
  price: number;
  productLink: string;
  authorLink: string;
}) => {
  return (
    <div title='container utk seller' className='mt-4'>
      <div title='isi foto & detail seller' className='flex w-full flex-col'>
        <Link href={productLink}>
          <div title='ini foto' className='flex w-full'>
            <Image
              src={thumbnail}
              alt='foto seller'
              width={100}
              height={0}
              className='h-52 w-full rounded-lg border object-cover'
            />
          </div>
        </Link>
        <div title='ini detail seller' className='mt-3'>
          <div
            title='ini foto seller, nama seller'
            className='flex w-full items-center'
          >
            <Link href={authorLink}>
              <Image
                src={authorImg}
                alt='foto seller'
                width={20}
                height={0}
                className='mr-2 h-6 w-6 rounded-full object-cover'
              />
            </Link>
            <Link href={authorLink}>
              <span className='text-sm font-semibold'>{authorName}</span>
            </Link>
          </div>

          <Link href={productLink}>
            <div title='ini deskripsi'>
              <p className='mt-1 w-full text-sm text-gray-700'>
                {productDescription}
              </p>
            </div>
          </Link>
          <Link href={productLink}>
            <div title='ini rating' className='mt-2 flex items-center'>
              <IoIosStar />
              <span className='ml-1 font-semibold'>{rating.toFixed(1)}</span>
              <span className='ml-1 text-gray-500'>({countReview})</span>
            </div>
          </Link>
          <Link href={productLink}>
            <div title='ini harga' className=''>
              <span className='font-semibold'>
                Mulai dari IDR {price.toLocaleString('id-ID')}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
