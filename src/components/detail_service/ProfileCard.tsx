import Image from 'next/image';
import { IoIosStar } from 'react-icons/io';

const ProfileCard = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 mb-4 flex items-center gap-4 xl:mx-0'>
        <div>
          <Image
            src={'https://randomuser.me/api/portraits/men/1.jpg'}
            alt=''
            width={100}
            height={0}
            className='h-20 w-20 rounded-full'
          />
        </div>
        <div className='text-gray-700'>
          <p className='font-semibold'>Malik</p>
          <div className='flex items-center'>
            <IoIosStar className='mr-1' />
            <span className='mr-1 font-semibold'>4.8</span>
            <span className='mr-1 text-gray-500'>(56)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
