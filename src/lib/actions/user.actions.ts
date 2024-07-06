import { SellerResponse } from '@prisma/client';
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
  sellerResponses?: SellerResponse[];
  createdAt: Date;
  updatedAt: Date;
}

export async function getUserByUserId(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch (error) {
    console.error('Terjadi kesalahan saat menjalankan getUserByUserId', error);
  }
}

export async function getUserByServiceSlug(serviceSlug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
      select: { authorId: true },
    });
    const user = await prisma.user.findUnique({
      where: { id: service?.authorId },
    });

    return user;
  } catch (error) {
    console.error('Terjadi kesalahan saat menjalankan getUserByUserId', error);
  }
}

export async function fetchUserByUserName(username: string | undefined) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
      include: {
        services: {
          include: {
            author: true,
            category: true,
            servicePortfolio: true,
            review: { include: { sellerResponses: true } },
          },
        },
        reviews: { include: { sellerResponses: true } },
        sellerResponses: true,
      },
    });

    if (!user) {
      console.error(`User dengan username ${username} tidak ditemukan.`);
      return null;
    }

    let totalRating = 0;
    let countReviews = 0;
    user.services.forEach((service) => {
      service.review.forEach((review) => {
        totalRating += review.rating;
        countReviews += 1;
      });
    });
    const avgRating = countReviews > 0 ? totalRating / countReviews : 0;

    const userWithRatings: User & { avgRating: number; countReviews: number } =
      {
        ...user,
        avgRating,
        countReviews,
      };

    return userWithRatings;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat menjalankan fetchUserByUserId',
      error
    );
  }
}

export async function fetchUserByServiceSlug(serviceSlug: string | undefined) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
    });
    console.log('///////////////////////////////', service?.authorId);
    const user = await prisma.user.findUnique({
      where: { id: service?.authorId },
      include: {
        services: {
          include: {
            author: true,
            category: true,
            servicePortfolio: true,
            review: { include: { sellerResponses: true } },
          },
        },
        reviews: { include: { sellerResponses: true } },
        sellerResponses: true,
      },
    });

    if (!user) {
      console.error(`User dengan username tidak ditemukan.`);
      return null;
    }

    let totalRating = 0;
    let countReviews = 0;
    user.services.forEach((service) => {
      service.review.forEach((review) => {
        totalRating += review.rating;
        countReviews += 1;
      });
    });
    const avgRating = countReviews > 0 ? totalRating / countReviews : 0;

    const userWithRatings: User & { avgRating: number; countReviews: number } =
      {
        ...user,
        avgRating,
        countReviews,
      };

    return userWithRatings;
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

export async function getUserByServiceId(serviceId: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      select: { authorId: true },
    });
    const user = await prisma.user.findUnique({
      where: { id: service?.authorId },
    });
    return user;
  } catch (error) {
    console.error(error);
  }
}

export async function getServicesByUsername(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
      select: { id: true },
    });
    if (user) {
      const service = await prisma.service.findMany({
        where: { authorId: user.id },
      });
      return service;
    }
  } catch (error) {
    console.error(error);
  }
}
