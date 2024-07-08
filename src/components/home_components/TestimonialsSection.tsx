'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import LeftRightButton from '../ui_components/LeftRightButton';
import Link from 'next/link';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO of Company',
      comment:
        '"This service is fantastic! It has changed the way we do business."',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Jane Smith',
      title: 'CTO of Startup',
      comment: '"Amazing experience, highly recommend to others."',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      name: 'Michael Johnson',
      title: 'Freelancer',
      comment:
        '"A truly exceptional platform that has helped me grow my business."',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
      name: 'Michael Johnson',
      title: 'Freelancer',
      comment:
        '"A truly exceptional platform that has helped me grow my business."',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
      name: 'Michael Johnson',
      title: 'Freelancer',
      comment:
        '"A truly exceptional platform that has helped me grow my business."',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  ];

  return (
    <div className='mx-6 mb-32 mt-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-4 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
          Testimoni Terbaru
        </h2>

        <div className='relative'>
          <LeftRightButton>
            <div className='flex space-x-8 pb-4'>
              {testimonials.map((testimonial, index) => (
                <Link key={index} href={'#'}>
                  <div className='w-52 flex-none rounded-lg bg-white p-4 shadow-md lg:w-80 lg:p-6'>
                    <div className='mb-4 flex flex-col items-center lg:flex-row'>
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className='rounded-full object-cover'
                      />
                      <div className='mt-4 items-center text-center lg:ml-4 lg:mt-0 lg:text-left'>
                        <h3 className='text-xl font-semibold'>
                          {testimonial.name}
                        </h3>
                        <p className='text-gray-600'>{testimonial.title}</p>
                      </div>
                    </div>
                    <p className='text-center text-gray-800'>
                      {testimonial.comment}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </LeftRightButton>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
