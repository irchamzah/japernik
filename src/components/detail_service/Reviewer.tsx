import ProfileReviewer from './ProfileReviewer';
import ReviewersResponse from './ReviewersResponse';
import SellersResponse from './SellersResponse';

const Reviewer = () => {
  return (
    <div className='mb-8 mt-8 flex flex-col gap-4 rounded-2xl border p-4'>
      <ProfileReviewer />
      <hr />
      <ReviewersResponse />
      <hr />
      <SellersResponse />
    </div>
  );
};

export default Reviewer;
