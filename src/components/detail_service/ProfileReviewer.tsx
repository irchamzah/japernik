import { getUserByUserId } from '@/lib/actions/user.actions';
import Image from 'next/image';

const ProfileReviewer = async ({ userId }: { userId: string | undefined }) => {
  const reviewer = await getUserByUserId(userId);
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
        <span className='text-sm font-bold hover:underline'>
          <a href={`/profile/${reviewer?.username}`}>{reviewer?.name}</a>
        </span>
      </div>
      <div>
        <span className='text-xs text-gray-500'>{reviewer?.address}</span>
      </div>
    </div>
  );
};

export default ProfileReviewer;
