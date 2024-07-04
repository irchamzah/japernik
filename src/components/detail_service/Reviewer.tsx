import { Review } from '@/lib/actions/review.actions';
import ProfileReviewer from './ProfileReviewer';
import ReviewersResponse from './ReviewersResponse';
import SellersResponse from './SellersResponse';

const Reviewer = async ({ dataReviewer }: { dataReviewer: Review }) => {
  return (
    <div className='mb-8 mt-8 flex flex-col gap-4 rounded-2xl border p-4'>
      <ProfileReviewer userId={dataReviewer.userId} />
      <hr />
      <ReviewersResponse
        rating={dataReviewer.rating}
        postDate={dataReviewer.createdAt}
        response={dataReviewer.response}
        price={dataReviewer.price}
      />

      <SellersResponse sellerResponse={dataReviewer?.sellerResponses ?? []} />
    </div>
  );
};

export default Reviewer;
