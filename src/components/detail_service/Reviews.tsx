import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import Reviewer from './Reviewer';
import {
  getReviewsByServiceId,
  getReviewsByUserId,
  Review,
} from '@/lib/actions/review.actions';
import DropdownButton from '../ui_components/DropdownButton';
import { getUserByUserId } from '@/lib/actions/user.actions';
import { avgRatingCountReview } from '@/contexts/context';
import { getServiceByServiceId } from '@/lib/actions/service.actions';
import { Suspense } from 'react';

const Reviews = async ({
  userId,
  serviceId,
  reviewsFor,
}: {
  userId: string;
  serviceId: string;
  reviewsFor: string;
}) => {
  const [user, userReviews, service, serviceReviews] = await Promise.all([
    getUserByUserId(userId),
    getReviewsByUserId(userId),
    getServiceByServiceId(serviceId),
    getReviewsByServiceId(serviceId),
  ]);
  const renderStarRating = (avgRating: number) => {
    let stars = [];
    const fullStars = Math.floor(avgRating);
    const halfStar = avgRating % 1 !== 0;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoIosStar key={i} />);
    }
    if (halfStar) {
      stars.push(<IoIosStarHalf key={'half'} />);
    }
    while (stars.length < 5) {
      stars.push(<IoIosStarOutline key={stars.length} />);
    }
    return stars;
  };
  if (userReviews) {
    if (userReviews.length > 0) {
      const userRating = avgRatingCountReview(userReviews);
      return (
        <div className='mx-auto max-w-7xl'>
          <div className='mx-6 my-12 xl:mx-0'>
            <DropdownButton
              labelDropdown={
                <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
              }
            >
              <div className='mb-8 mt-4 flex flex-col gap-1'>
                <div className='text-base font-semibold text-gray-700'>
                  {userRating.countReview} {reviewsFor}
                </div>
                <div className='flex items-center gap-1'>
                  <div className='flex gap-1 text-gray-700'>
                    {renderStarRating(userRating.avgRating)}
                  </div>
                  <span className='text-sm font-semibold text-gray-700'>
                    {userRating.avgRating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div>
                {userReviews.map((userReview, index) => (
                  <Suspense key={index} fallback='Loading...'>
                    <Reviewer dataReviewer={userReview} />
                  </Suspense>
                ))}
                <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
                  Show More Reviews
                </button>
              </div>
            </DropdownButton>
          </div>
        </div>
      );
    }
  }

  if (service && serviceReviews) {
    if (service && serviceReviews.length > 0) {
      const serviceRating = avgRatingCountReview(serviceReviews);
      return (
        <div className='mx-auto max-w-7xl'>
          <div className='mx-6 my-12 xl:mx-0'>
            <DropdownButton
              labelDropdown={
                <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
              }
            >
              <div className='mb-8 mt-4 flex flex-col gap-1'>
                <div className='text-base font-semibold text-gray-700'>
                  {serviceRating.countReview} {reviewsFor}
                </div>
                <div className='flex items-center gap-1'>
                  <div className='flex gap-1 text-gray-700'>
                    {renderStarRating(serviceRating.avgRating)}
                  </div>
                  <span className='text-sm font-semibold text-gray-700'>
                    {serviceRating.avgRating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div>
                {serviceReviews.map((review, index) => (
                  <Reviewer key={index} dataReviewer={review} />
                ))}
                <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
                  Show More Reviews
                </button>
              </div>
            </DropdownButton>
          </div>
        </div>
      );
    }
  }
};

export default Reviews;
