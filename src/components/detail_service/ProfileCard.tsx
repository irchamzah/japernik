import { Service } from '@/lib/actions/service.actions';
import { getUserByUserId, User } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';

const ProfileCard = async ({
  authorId,
  ratingAvg,
  reviewCount,
}: {
  authorId: string;
  ratingAvg: number;
  reviewCount: number;
}) => {
  const [profile] = await Promise.all([getUserByUserId(authorId)]);
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 mb-4 flex items-center gap-4 xl:mx-0'>
        <div>
          <Image
            src={profile?.photo || ''}
            alt=''
            width={100}
            height={0}
            className='h-20 w-20 rounded-full'
          />
        </div>
        <div className='text-gray-700'>
          <p className='font-semibold capitalize hover:underline'>
            <a href={`/profile/${profile?.username}`}>{profile?.name}</a>
          </p>
          <div className='flex items-center'>
            <IoIosStar className='mr-1' />
            <span className='mr-1 font-semibold'>{ratingAvg.toFixed(1)}</span>
            <span className='mr-1 text-gray-500'>({reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
