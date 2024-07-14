import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

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
const ReviewersResponse = ({
  rating,
  postDate,
  response,
  price,
}: {
  rating: number;
  postDate: Date | undefined;
  response: string | undefined;
  price: number | undefined;
}) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-3'>
        <div className='flex items-center gap-1'>
          <div className='flex gap-1 text-gray-700'>
            {renderStarRating(rating)}
          </div>
          <span className='text-sm font-bold text-gray-700'>
            {rating.toFixed(1)}
          </span>
        </div>
        <span className='text-gray-300'>-</span>
        <span className='text-xs text-gray-500'>{postDate?.toString()}</span>
      </div>
      <div title='ini opinion'>
        <p className='text-base font-medium text-gray-600'>{response}</p>
      </div>
      <div title='ini price & duration' className='flex flex-col gap-1'>
        <div className='flex'>
          <span className='block w-24 text-sm text-gray-500'>Biaya</span>
          <span className='text-sm font-bold'>
            Rp. {price?.toLocaleString('id-ID')}
          </span>
        </div>
        {/* <div className='flex'>
          <span className='block w-24 text-sm text-gray-500'>Duration</span>
          <span className='text-sm font-bold'>4 weeks</span>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewersResponse;
