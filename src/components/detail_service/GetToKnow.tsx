import {
  fetchReviewByUserId,
  getReviewsByUserId,
} from '@/lib/actions/review.actions';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import DateToString from '../ui_components/DateToString';
import ProfileDescription from '../ui_components/ProfileDescription';
import { getUserByUserId } from '@/lib/actions/user.actions';

const GetToKnow = async ({
  header,
  userId,
}: {
  header: string;
  userId: string;
}) => {
  const [user, userReviews] = await Promise.all([
    getUserByUserId(userId),
    getReviewsByUserId(userId),
  ]);

  if (user && userReviews) {
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
                src={user?.photo || ''}
                alt=''
                width={100}
                height={0}
                className='rounded-full'
              />
            </div>
            <div className='flex flex-col items-center gap-1'>
              <div className='font-semibold text-gray-700 hover:underline'>
                <a href={`/profile/${user?.username}`}>{user?.name}</a>
              </div>
              <div className='text-sm text-gray-600'>{user?.title}</div>
              <div className='flex items-center'>
                <IoIosStar className='mr-1 text-gray-700' />
                <span className='mr-1 font-semibold text-gray-700'>
                  {userReviews.userRating.avgRating.toFixed(1)}
                </span>
                <span className='mr-1 text-gray-500'>
                  ({userReviews.userRating.countReview})
                </span>
              </div>
            </div>
            <div className='flex gap-2'>
              <Link href={`https://wa.me/${user?.phoneNumber}`} target='_blank'>
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
                {user?.address}
              </span>
            </div>
            <div className='mb-4 flex flex-col'>
              <span className='mb-1 text-gray-500'>Mulai Bergabung</span>
              <span className='font-semibold text-gray-600'>
                <DateToString date={user?.createdAt.toString()} />
              </span>
            </div>
            <hr />
            <ProfileDescription description={user?.description} />
          </div>
        </div>
      </div>
    );
  }
};

export default GetToKnow;
