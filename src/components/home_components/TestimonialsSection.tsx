import Image from 'next/image';
import LeftRightButton from '../ui_components/LeftRightButton';
import Link from 'next/link';
import { getAllReviews } from '@/lib/actions/review.actions';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = async () => {
  // const testimonials = [
  //   {
  //     name: 'John Doe',
  //     title: 'CEO of Company',
  //     comment:
  //       '"This service is fantastic! It has changed the way we do business."',
  //     image: 'https://randomuser.me/api/portraits/men/1.jpg',
  //   },
  //   {
  //     name: 'Jane Smith',
  //     title: 'CTO of Startup',
  //     comment: '"Amazing experience, highly recommend to others."',
  //     image: 'https://randomuser.me/api/portraits/women/2.jpg',
  //   },
  //   {
  //     name: 'Michael Johnson',
  //     title: 'Freelancer',
  //     comment:
  //       '"A truly exceptional platform that has helped me grow my business."',
  //     image: 'https://randomuser.me/api/portraits/men/3.jpg',
  //   },
  //   {
  //     name: 'Michael Johnson',
  //     title: 'Freelancer',
  //     comment:
  //       '"A truly exceptional platform that has helped me grow my business."',
  //     image: 'https://randomuser.me/api/portraits/women/4.jpg',
  //   },
  //   {
  //     name: 'Michael Johnson',
  //     title: 'Freelancer',
  //     comment:
  //       '"A truly exceptional platform that has helped me grow my business."',
  //     image: 'https://randomuser.me/api/portraits/men/5.jpg',
  //   },
  // ];

  const testimonials = await getAllReviews();

  if (testimonials) {
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
                  <TestimonialCard key={index} reviewId={testimonial.id} />
                ))}
              </div>
            </LeftRightButton>
          </div>
        </div>
      </div>
    );
  }
};

export default TestimonialsSection;
