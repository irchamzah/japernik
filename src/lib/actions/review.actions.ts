import { avgRatingCountReview } from '@/contexts/context';
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
    console.error('Terjadi error saat melakukan fetchReviewByUserId', error);
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
    return { reviews, countReviews, avgRating };
  } catch (error) {
    console.error('Terjadi error saat melakukan fetchReviewByServiceId', error);
  }
}

export async function getReviewsByServiceId(
  serviceId: string,
  pageNumber: number = 1,
  pageSize: number = 2
) {
  const skipAmount = (pageNumber - 1) * pageSize;
  try {
    const reviews = await prisma.review.findMany({
      where: { serviceId: serviceId },
      include: { sellerResponses: true },
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });
    const totalReviews = await prisma.review.findMany({
      where: { serviceId: serviceId },
    });
    const totalReviewsCount = totalReviews.length;
    const isNext = totalReviewsCount > skipAmount + reviews.length;

    const serviceRating = avgRatingCountReview(totalReviews);
    return { reviews, serviceRating, isNext };
  } catch (error) {
    console.error('Terjadi error saat melakukan getReviewsByServiceId', error);
  }
}

export async function getReviewByServiceSlug(serviceSlug: string | undefined) {
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
  } catch (error) {
    console.error('Terjadi error saat melakukan getReviewByServiceSlug', error);
  }
}

export async function getReviewsByUserId(
  userId: string,
  pageNumber: number = 1,
  pageSize: number = 1
) {
  const skipAmount = (pageNumber - 1) * pageSize;
  try {
    const reviews = await prisma.review.findMany({
      where: { userId: userId },
      include: { sellerResponses: true },
      skip: skipAmount,
      take: pageSize,
    });
    const totalReviews = await prisma.review.findMany({
      where: { userId: userId },
    });
    const totalReviewsCount = totalReviews.length;
    const isNext = totalReviewsCount > skipAmount + reviews.length;
    const userRating = await avgRatingCountReview(totalReviews);
    return { reviews, userRating, isNext };
  } catch (error) {
    console.error('Terjadi error saat melakukan getReviewsByUserId', error);
  }
}

export async function getAllReviews() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return reviews;
  } catch (error) {
    console.error('Terjadi error saat melakukan getAllReviews', error);
  }
}

export async function getReviewAndUser(reviewId: string) {
  try {
    const review = await prisma.review.findUnique({
      where: { id: reviewId },
    });
    const service = await prisma.service.findUnique({
      where: { id: review?.serviceId },
      select: { slug: true, categoryId: true },
    });
    const category = await prisma.category.findUnique({
      where: { id: service?.categoryId },
      select: { slug: true },
    });
    const user = await prisma.user.findUnique({
      where: { id: review?.userId },
    });
    return { review, service, category, user };
  } catch (error) {
    console.error('Terjadi error saat melakukan getReviewAndUser', error);
  }
}
