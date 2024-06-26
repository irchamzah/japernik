import { Service } from '@/lib/actions/service.actions';
import { User } from '@/lib/actions/user.actions';
import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';

const ProfileCard = ({
  profileData,
  ratingSum,
  reviewCount,
}: {
  profileData: User;
  ratingSum: number;
  reviewCount: number;
}) => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 mb-4 flex items-center gap-4 xl:mx-0'>
        <div>
          <Image
            src={profileData.photo || ''}
            alt=''
            width={100}
            height={0}
            className='h-20 w-20 rounded-full'
          />
        </div>
        <div className='text-gray-700'>
          <p className='font-semibold capitalize'>{profileData.name}</p>
          <div className='flex items-center'>
            <IoIosStar className='mr-1' />
            <span className='mr-1 font-semibold'>{ratingSum.toFixed(1)}</span>
            <span className='mr-1 text-gray-500'>({reviewCount})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
