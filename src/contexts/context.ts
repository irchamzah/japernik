import { Review } from '@/lib/actions/review.actions';
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';

export function avgRatingCountReview(review: Review[]) {
  const avgRating =
    review.length > 0
      ? review.reduce((acc, curr) => acc + curr.rating, 0) / review.length
      : 0;
  const countReview = review.length;
  return { avgRating, countReview };
}
