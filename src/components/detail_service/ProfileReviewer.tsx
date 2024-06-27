import { fetchUserByUserId } from '@/lib/actions/review.actions';
import { User } from '@/lib/actions/user.actions';
import Image from 'next/image';

const ProfileReviewer = async ({ userId }: { userId: string }) => {
  const reviewer = await fetchUserByUserId(userId);
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <Image
          src={reviewer?.photo ?? ''}
          alt=''
          width={48}
          height={0}
          className='h-8 w-8 rounded-full'
        />
        <span className='text-sm font-bold'>{reviewer?.name}</span>
      </div>
      <div>
        <span className='text-xs text-gray-500'>{reviewer?.address}</span>
      </div>
    </div>
  );
};

export default ProfileReviewer;
