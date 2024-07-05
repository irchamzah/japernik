import { IoIosStar } from 'react-icons/io';
import Reviewer from './Reviewer';
import {
  fetchReviewByServiceId,
  fetchReviewByUserId,
} from '@/lib/actions/review.actions';
import DropdownButton from '../ui_components/DropdownButton';

const Reviews = async ({
  userId,
  serviceId,
  reviewsFor,
}: {
  userId: string;
  serviceId: string;
  reviewsFor: string;
}) => {
  try {
    const [userReviews, serviceReviews] = await Promise.all([
      fetchReviewByUserId(userId),
      fetchReviewByServiceId(serviceId),
    ]);
    userReviews ? (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 my-12 xl:mx-0'>
          <DropdownButton
            labelDropdown={
              <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
            }
          >
            <div className='mb-8 mt-4 flex flex-col gap-1'>
              <div className='text-base font-semibold text-gray-700'>
                {userReviews?.countReviews} {reviewsFor}
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
                  {userReviews?.avgRating.toFixed(1)}
                </span>
              </div>
            </div>
            <div>
              {userReviews?.reviews.map((review, index) => (
                <Reviewer key={index} dataReviewer={review} />
              ))}
              <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
                Show More Reviews
              </button>
            </div>
          </DropdownButton>
        </div>
      </div>
    ) : (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 my-12 xl:mx-0'>
          <DropdownButton
            labelDropdown={
              <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
            }
          >
            <div className='mb-8 mt-4 flex flex-col gap-1'>
              <div className='text-base font-semibold text-gray-700'>
                {serviceReviews?.countReviews} {reviewsFor}
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
                  {serviceReviews?.avgRating.toFixed(1)}
                </span>
              </div>
            </div>
            <div>
              {serviceReviews?.reviews.map((review, index) => (
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
  } catch (error) {
    return <div>Terjadi kesalahan di Reviews</div>;
  }
  // if (userId !== '') {
  //   const reviews = await fetchReviewByUserId(userId);

  //   return (
  //     <div className='mx-auto max-w-7xl'>
  //       <div className='mx-6 my-12 xl:mx-0'>
  //         <DropdownButton
  //           labelDropdown={
  //             <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
  //           }
  //         >
  //           <div className='mb-8 mt-4 flex flex-col gap-1'>
  //             <div className='text-base font-semibold text-gray-700'>
  //               {reviews?.countReviews} {reviewsFor}
  //             </div>
  //             <div className='flex items-center gap-1'>
  //               <div className='flex gap-1 text-gray-700'>
  //                 <IoIosStar />
  //                 <IoIosStar />
  //                 <IoIosStar />
  //                 <IoIosStar />
  //                 <IoIosStar />
  //               </div>
  //               <span className='text-sm font-semibold text-gray-700'>
  //                 {reviews?.avgRating.toFixed(1)}
  //               </span>
  //             </div>
  //           </div>
  //           <div>
  //             {reviews?.reviews.map((review, index) => (
  //               <Reviewer key={index} dataReviewer={review} />
  //             ))}
  //             <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
  //               Show More Reviews
  //             </button>
  //           </div>
  //         </DropdownButton>
  //       </div>
  //     </div>
  //   );
  // }

  // if (serviceId !== '') {
  //   const reviews = await fetchReviewByServiceId(serviceId);

  //   return (
  //     <div className='mx-auto max-w-7xl'>
  //       <div className='mx-6 my-12 xl:mx-0'>
  //         <DropdownButton
  //           labelDropdown={
  //             <h1 className='text-xl font-semibold text-gray-700'>Reviews</h1>
  //           }
  //         >
  //           <div className='mb-8 mt-4 flex flex-col gap-1'>
  //             <div className='text-base font-semibold text-gray-700'>
  //               {reviews?.countReviews} {reviewsFor}
  //             </div>
  //             <div className='flex items-center gap-1'>
  //               <div className='flex gap-1 text-gray-700'>
  //                 <IoIosStar />
  //                 <IoIosStar />
  //                 <IoIosStar />
  //                 <IoIosStar />
  //                 <IoIosStar />
  //               </div>
  //               <span className='text-sm font-semibold text-gray-700'>
  //                 {reviews?.avgRating.toFixed(1)}
  //               </span>
  //             </div>
  //           </div>
  //           <div>
  //             {reviews?.reviews.map((review, index) => (
  //               <Reviewer key={index} dataReviewer={review} />
  //             ))}
  //             <button className='mb-5 rounded-lg border border-black px-4 py-2 font-semibold active:bg-gray-100'>
  //               Show More Reviews
  //             </button>
  //           </div>
  //         </DropdownButton>
  //       </div>
  //     </div>
  //   );
  // }
};

export default Reviews;
