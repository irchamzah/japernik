import { fetchReviewByUserId } from '@/lib/actions/review.actions';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import DateToString from '../ui_components/DateToString';
import ProfileDescription from '../ui_components/ProfileDescription';
import { fetchUserByUserId, User } from '@/lib/actions/user.actions';

const GetToKnow = async ({
  header,
  userData,
}: {
  header: string;
  userData: (User & { avgRating: number; countReviews: number }) | undefined;
}) => {
  try {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 mb-8 xl:mx-0'>
          <h1 className='mb-6 text-xl font-bold capitalize text-gray-700'>
            {header}
          </h1>
          <div
            title='foto, nama, profesi, rating'
            className='flex flex-col items-center gap-3'
          >
            <div>
              <Image
                src={userData?.photo || ''}
                alt=''
                width={100}
                height={0}
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='font-semibold text-gray-700 hover:underline'>
                <a href={`/profile/${userData?.username}`}>{userData?.name}</a>
              </div>
              <div className='text-sm text-gray-600'>{userData?.title}</div>
              <div className='flex items-center'>
                <IoIosStar className='mr-1 text-gray-700' />
                <span className='mr-1 font-semibold text-gray-700'>
                  {userData?.avgRating}
                </span>
                <span className='mr-1 text-gray-500'>
                  ({userData?.countReviews})
                </span>
              </div>
            </div>
            <div className='flex gap-2'>
              <Link
                href={`https://wa.me/${userData?.phoneNumber}`}
                target='_blank'
              >
                <button className='flex items-center rounded border bg-purple-500 px-4 py-2 text-white active:bg-purple-600'>
                  <IoChatbubblesOutline className='mr-2' />
                  Whatsapp Seller
                </button>
              </Link>
              <button className='flex items-center rounded border px-4 py-2 active:bg-gray-100'>
                <MdEdit className='mr-2' />
                Edit Profile
              </button>
            </div>
          </div>
          <div className='mt-6 rounded border p-6'>
            <div className='mb-4 flex flex-col'>
              <span className='mb-1 text-gray-500'>Lokasi</span>
              <span className='font-semibold text-gray-600'>
                {userData?.address}
              </span>
            </div>
            <div className='mb-4 flex flex-col'>
              <span className='mb-1 text-gray-500'>Mulai Bergabung</span>
              <span className='font-semibold text-gray-600'>
                <DateToString date={userData?.createdAt.toString()} />
              </span>
            </div>
            <hr />
            <ProfileDescription description={userData?.description} />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div>Terjadi kesalahan pada GetToKnow</div>;
  }
};

export default GetToKnow;
