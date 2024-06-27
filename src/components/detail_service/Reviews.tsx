import { IoIosStar } from 'react-icons/io';
import Reviewer from './Reviewer';
import { Review } from '@/lib/actions/review.actions';
import DropdownButton from '../ui_components/DropdownButton';

const Reviews = async ({
  avgRatingService,
  countReviewService,
  reviewsData,
}: {
  avgRatingService: number;
  countReviewService: number;
  reviewsData: Review[];
}) => {
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
              {countReviewService} reviews for this service.
            </div>
            <div className='flex items-center gap-1'>
              <div className='flex gap-1 text-gray-700'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
              </div>
              <span className='text-sm font-semibold text-gray-700'>
                {avgRatingService.toFixed(1)}
              </span>
            </div>
          </div>
          <div>
            {reviewsData.map((review, index) => (
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
};

export default Reviews;
