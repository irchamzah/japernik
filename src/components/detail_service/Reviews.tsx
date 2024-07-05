import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import Reviewer from './Reviewer';
import { Review } from '@/lib/actions/review.actions';
import DropdownButton from '../ui_components/DropdownButton';

const Reviews = async ({
  userReviewsData,
  serviceReviewsData,
  userReviewsCount,
  userReviewsAvg,
  reviewsFor,
}: {
  userReviewsData: Review[] | undefined;
  serviceReviewsData: Review[] | undefined;
  userReviewsCount: number;
  userReviewsAvg: number;
  reviewsFor: string;
}) => {
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

  if (userReviewsData && userReviewsData.length > 0) {
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
                {userReviewsCount} {reviewsFor}
              </div>
              <div className='flex items-center gap-1'>
                <div className='flex gap-1 text-gray-700'>
                  {renderStarRating(userReviewsAvg)}
                </div>
                <span className='text-sm font-semibold text-gray-700'>
                  {userReviewsAvg.toFixed(1)}
                </span>
              </div>
            </div>
            <div>
              {userReviewsData?.map((review, index) => (
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

  if (serviceReviewsData && serviceReviewsData.length > 0) {
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
                {userReviewsCount} {reviewsFor}
              </div>
              <div className='flex items-center gap-1'>
                <div className='flex gap-1 text-gray-700'>
                  {renderStarRating(userReviewsAvg)}
                </div>
                <span className='text-sm font-semibold text-gray-700'>
                  {userReviewsAvg.toFixed(1)}
                </span>
              </div>
            </div>
            <div>
              {serviceReviewsData.map((review, index) => (
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
};

export default Reviews;
