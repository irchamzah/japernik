import Image from 'next/image';

const ProfileReviewer = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <Image
          src={'https://randomuser.me/api/portraits/men/1.jpg'}
          alt=''
          width={48}
          height={0}
          className='h-8 w-8 rounded-full'
        />
        <span className='text-sm font-bold'>sanghwa</span>
      </div>
      <div>
        <span className='text-xs text-gray-500'>Bondowoso - Jawa Timur</span>
      </div>
    </div>
  );
};

export default ProfileReviewer;
