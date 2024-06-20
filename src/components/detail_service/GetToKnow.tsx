'use client';

import Image from 'next/image';
import { useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';

const GetToKnow = ({ header }: { header: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 mb-8 xl:mx-0'>
        <h1 className='mb-6 text-xl font-bold text-gray-700'>{header}</h1>
        <div
          title='foto, nama, profesi, rating'
          className='flex flex-col items-center gap-3'
        >
          <div>
            <Image
              src={'https://randomuser.me/api/portraits/men/1.jpg'}
              alt=''
              width={100}
              height={0}
              className='rounded-full'
            />
          </div>
          <div className='flex flex-col items-center gap-1'>
            <div className='font-semibold text-gray-700'>Malik</div>
            <div className='text-sm text-gray-600'>
              Senior Full Stack Developer
            </div>
            <div className='flex items-center'>
              <IoIosStar className='mr-1 text-gray-700' />
              <span className='mr-1 font-semibold text-gray-700'>4.7</span>
              <span className='mr-1 text-gray-500'>(84)</span>
            </div>
          </div>
          <div className='flex gap-2'>
            <button className='flex items-center rounded border bg-purple-500 px-4 py-2 text-white active:bg-purple-600'>
              <IoChatbubblesOutline className='mr-2' />
              Contact Seller
            </button>
            <button className='flex items-center rounded border px-4 py-2 active:bg-gray-100'>
              <MdEdit className='mr-2' />
              Edit Profile
            </button>
          </div>
        </div>
        <div className='mt-6 rounded border p-6'>
          <div className='mb-4 flex flex-col'>
            <span className='mb-1 text-gray-500'>From</span>
            <span className='font-semibold text-gray-600'>Pakistan</span>
          </div>
          <div className='mb-4 flex flex-col'>
            <span className='mb-1 text-gray-500'>Member since</span>
            <span className='font-semibold text-gray-600'>Apr 2020</span>
          </div>
          <div className='mb-4 flex flex-col'>
            <span className='mb-1 text-gray-500'>Avg. response time</span>
            <span className='font-semibold text-gray-600'>16 hours</span>
          </div>
          <div className='mb-4 flex flex-col'>
            <span className='mb-1 text-gray-500'>Last delivery</span>
            <span className='font-semibold text-gray-600'>3 weeks</span>
          </div>
          <div className='mb-4 flex flex-col'>
            <span className='mb-1 text-gray-500'>Languages</span>
            <span className='font-semibold text-gray-600'>English</span>
          </div>
          <hr />
          <div className='mt-4 text-gray-600'>
            <div
              className={`relative overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-48 sm:max-h-24'}`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              qui soluta ullam error fugit voluptatem reprehenderit iste facere
              labore nesciunt cum sit, omnis, magnam tempora! Repudiandae,
              numquam. Repellendus autem asperiores tenetur possimus nostrum
              assumenda debitis esse adipisci ipsum maxime, iusto architecto cum
              sit accusantium tempora, quaerat culpa porro laborum sed? Omnis,
              id? Non doloribus modi velit, et, mollitia quas a earum
              repellendus consectetur rem placeat distinctio tempore sed nihil
              vitae? Itaque beatae esse magni non harum temporibus obcaecati
              debitis mollitia aliquam ipsam facere, expedita possimus veritatis
              nisi eos recusandae qui dignissimos ea numquam doloribus quos.
              Asperiores, unde doloremque? Eaque, vel?
              <div
                className={`bg-white-fade absolute bottom-0 h-20 w-full ${isExpanded ? 'hidden' : ''}`}
              ></div>
            </div>
          </div>
          <button
            onClick={toggleExpansion}
            className={`mt-4 font-medium active:bg-gray-100`}
          >
            {isExpanded ? '- See Less' : '+ See More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetToKnow;
