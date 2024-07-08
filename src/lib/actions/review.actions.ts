import prisma from '../../../lib/prisma';
import { SellerResponse } from './sellerResponse.actions';
import { Service } from './service.actions';
import { User } from './user.actions';

export interface Review {
  id?: string;
  rating: number;
  response?: string;
  price?: number;
  author?: User;
  userId?: string;
  service?: Service;
  serviceId?: string;
  sellerResponses?: SellerResponse[];
  createdAt?: Date;
  updatedAt?: Date;
}

export async function fetchReviewByUserId(id: string) {
  try {
    const reviews = await prisma.review.findMany({
      where: { userId: id },
      include: {
        sellerResponses: true,
      },
    });

    const countReviews = reviews.length;
    const avgRating =
      reviews.reduce((acc: number, curr: any) => acc + curr.rating, 0) /
      countReviews;

    return { reviews, countReviews, avgRating };
  } catch (error) {
    console.error('Terjadi kesalahan saat fetchReviewByUserId', error);
  }
}

export async function fetchReviewByServiceId(serviceId: string) {
  try {
    const reviews = await prisma.review.findMany({
      where: { serviceId: serviceId },
      include: {
        sellerResponses: true,
      },
    });

    const countReviews = reviews.length;
    const avgRating =
      reviews.reduce((acc: number, curr: any) => acc + curr.rating, 0) /
      countReviews;

    // console.log('ISI DARI REVIEWS >>>>>>>>', reviews.map);
    return { reviews, countReviews, avgRating };
  } catch (error) {
    console.error('Terjadi kesalahan saat fetchReviewByServiceId', error);
  }
}

export async function getReviewsByServiceId(serviceId: string) {
  try {
    const reviews = await prisma.review.findMany({
      where: { serviceId: serviceId },
      include: { sellerResponses: true },
    });
    return reviews;
  } catch (error) {}
}

export async function getReviewByServiceSlug(serviceSlug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
      select: { id: true },
    });
    const reviews = await prisma.review.findMany({
      where: { serviceId: service?.id },
      select: { rating: true },
    });
    return reviews;
  } catch (error) {}
}

export async function getReviewsByUserId(userId: string) {
  try {
    const reviews = await prisma.review.findMany({
      where: { userId: userId },
      include: { sellerResponses: true },
    });
    return reviews;
  } catch (error) {}
}
