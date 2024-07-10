import { getReviewAndUser } from '@/lib/actions/review.actions';
import Image from 'next/image';
import Link from 'next/link';

const TestimonialCard = async ({ reviewId }: { reviewId: string }) => {
  const reviewUser = await getReviewAndUser(reviewId);

  if (!reviewUser) {
    return null;
  }

  if (reviewUser.user && reviewUser?.review) {
    return (
      <>
        <Link
          href={`/categories/${reviewUser.category?.slug}/${reviewUser.service?.slug}`}
        >
          <div className='w-52 flex-none rounded-lg bg-white p-4 shadow-md lg:w-80 lg:p-6'>
            <div className='mb-4 flex flex-col items-center lg:flex-row'>
              <Image
                src={reviewUser.user?.photo || '/images/noImage.jpg'}
                alt={''}
                width={64}
                height={64}
                className='rounded-full object-cover'
              />
              <div className='mt-4 items-center text-center lg:ml-4 lg:mt-0 lg:text-left'>
                <h3 className='text-xl font-semibold'>
                  {reviewUser.user.name}
                </h3>
                <p className='text-gray-600'>{reviewUser.review.response}</p>
              </div>
            </div>
            <p className='text-center text-gray-800'>{}</p>
          </div>
        </Link>
      </>
    );
  }
};

export default TestimonialCard;
