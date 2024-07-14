import prisma from '../../../lib/prisma';
import { Review } from './review.actions';
import { User } from './user.actions';

export interface SellerResponse {
  id: string;
  response: string;
  author?: User;
  userId: string;
  review?: Review;
  reviewId: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getSellerResponseByServiceId(serviceId: string) {
  try {
    const service = await prisma.service.findFirst({
      where: { id: serviceId },
    });

    const seller = await prisma.user.findUnique({
      where: { id: service?.authorId },
    });

    const sellerResponse = await prisma.sellerResponse.findFirst({
      where: { userId: seller?.id },
    });

    return sellerResponse;
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getSellerResponseByServiceId',
      error
    );
  }
}

export async function getSellerResponseByReviewid(reviewId: string) {
  try {
    const review = await prisma.review.findUnique({
      where: { id: reviewId },
    });
    if (review) {
      const user = await prisma.user.findUnique({
        where: { id: review.userId },
      });
      return user;
    } else console.error('review tidak ditemukan');
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getSellerResponseByReviewid',
      error
    );
  }
}
