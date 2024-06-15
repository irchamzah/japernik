'use client';

import Image from 'next/image';
import CardImage from './CardImage';
import { useRef, useState } from 'react';
import LeftRightButton from '../ui_components/LeftRightButton';

const HomePopularServices = ({ sectionTitle }: { sectionTitle: string }) => {
  const services = [
    {
      imageSrc: '/images/random_image/img1.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img2.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img3.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img4.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img5.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img6.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img7.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      imageSrc: '/images/random_image/img8.jpg',
      title: 'Title',
      description: 'Description',
    },
  ];

  return (
    <>
      <div className='mx-6'>
        <section className='my-12 lg:mx-auto lg:mb-32 lg:max-w-7xl'>
          <div className='relative mx-auto flex h-full w-full flex-col'>
            <div className='mb-4 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
              <div>{sectionTitle}</div>
            </div>
            <LeftRightButton>
              <div className='flex gap-4 py-4'>
                {services.map((service, index) => (
                  <CardImage
                    key={index}
                    imageSrc={service.imageSrc}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </LeftRightButton>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePopularServices;
