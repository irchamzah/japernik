import Reviewer from './Reviewer';
import {
  getReviewsByServiceId,
  getReviewsByUserId,
} from '@/lib/actions/review.actions';
import DropdownButton from '../ui_components/DropdownButton';
import { Suspense } from 'react';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import ReviewPaging from '../ui_components/ReviewPaging';

export function renderStarRating(avgRating: number) {
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
}

const Reviews = async ({
  userId,
  serviceId,
  reviewsFor,
  params,
  searchParams,
}: {
  userId: string;
  serviceId: string;
  reviewsFor: string;
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) => {
  const [userReviews, serviceReviews] = await Promise.all([
    getReviewsByUserId(
      userId,
      searchParams.reviewPageNumber ? +searchParams.reviewPageNumber : 1,
      1
    ),
    getReviewsByServiceId(
      serviceId,
      searchParams.reviewPageNumber ? +searchParams.reviewPageNumber : 1,
      1
    ),
  ]);

  if (userReviews) {
    if (userReviews.reviews.length > 0) {
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
                  {userReviews.userRating.countReview} {reviewsFor}
                </div>
                <div className='flex items-center gap-1'>
                  <div className='flex gap-1 text-gray-700'>
                    {renderStarRating(userReviews.userRating.avgRating)}
                  </div>
                  <span className='text-sm font-semibold text-gray-700'>
                    {userReviews.userRating.avgRating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div>
                {userReviews.reviews.map((userReview, index) => (
                  <Suspense key={index} fallback='Loading...'>
                    <Reviewer dataReviewer={userReview} />
                  </Suspense>
                ))}
                <ReviewPaging
                  path={`profile/${params.username}`}
                  reviewPageNumber={
                    searchParams?.reviewPageNumber
                      ? +searchParams.reviewPageNumber
                      : 1
                  }
                  isNext={userReviews.isNext}
                />
              </div>
            </DropdownButton>
          </div>
        </div>
      );
    }
  }

  if (serviceReviews) {
    if (serviceReviews.reviews.length > 0) {
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
                  {serviceReviews.serviceRating.countReview} {reviewsFor}
                </div>
                <div className='flex items-center gap-1'>
                  <div className='flex gap-1 text-gray-700'>
                    {renderStarRating(serviceReviews.serviceRating.avgRating)}
                  </div>
                  <span className='text-sm font-semibold text-gray-700'>
                    {serviceReviews.serviceRating.avgRating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div>
                {serviceReviews.reviews.map((review, index) => (
                  <Reviewer key={index} dataReviewer={review} />
                ))}
                {/* <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
                  Show More Reviews
                </button> */}
                <ReviewPaging
                  path={`categories/${params.slug}/${params.serviceSlug}`}
                  reviewPageNumber={
                    searchParams?.reviewPageNumber
                      ? +searchParams.reviewPageNumber
                      : 1
                  }
                  isNext={serviceReviews.isNext}
                />
              </div>
            </DropdownButton>
          </div>
        </div>
      );
    }
  }
};

export default Reviews;
