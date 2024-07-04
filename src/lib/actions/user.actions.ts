import prisma from '../../../lib/prisma';
import { Review } from './review.actions';
import { Service } from './service.actions';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  photo: string | null;
  title: string;
  phoneNumber: string;
  description: string;
  address: string;
  services?: Service[];
  reviews?: Review[];
  createdAt: Date;
  updatedAt: Date;
}

export async function fetchUserByUserId(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
    });

    return user;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat menjalankan fetchUserByUserId',
      error
    );
  }
}

export async function fetchUserByUserName(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
      include: { services: true, reviews: true, sellerResponses: true },
    });

    return user;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat menjalankan fetchUserByUserId',
      error
    );
  }
}

export async function avgRatingCountReviewSeller(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!user) {
      throw new Error('Gagal sumRatingSeller, user tidak ditemukan');
    }

    const sellerServices = await prisma.service.findMany({
      where: { authorId: user.id },
      include: { review: true },
    });

    let totalRating = 0;
    let totalReviews = 0;

    sellerServices.forEach((service) => {
      service.review.forEach((review) => {
        totalRating += review.rating;
        totalReviews += 1;
      });
    });

    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;

    return { averageRating, totalReviews };
  } catch (error) {
    console.error('Terjadi kesalahan saat menjalankan sumRatingSeller', error);
  }
}

export async function avgRatingCountReviewServiceByServiceSlug(
  serviceSlug: string
) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
      include: { review: true },
    });
    let avgRating = 0;
    let countReviews = 0;
    service?.review.forEach((review) => {
      avgRating += review.rating;
      countReviews += 1;
    });
    const averageRating = countReviews > 0 ? avgRating / countReviews : 0;
    return { averageRating, countReviews };
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat avgRatingCountReviewServiceByServiceSlug',
      error
    );
  }
}
