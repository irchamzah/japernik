import prisma from '../../../lib/prisma';
import { Category } from './category.actions';
import { Review } from './review.actions';
import { ServicePortfolio } from './servicePortfolio.actions';
import { User } from './user.actions';

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  published: boolean;
  author?: User;
  authorId: string;
  category?: Category;
  categoryId: string;
  servicePortfolio?: ServicePortfolio[];
  review?: Review[];
  createdAt: Date;
  updatedAt: Date;
}

export async function getServicesIdByCategory(
  categorySlug: string | undefined,
  pageNumber: number = 1,
  pageSize: number = 2
) {
  const skipAmount = (pageNumber - 1) * pageSize;
  try {
    const category = await prisma.category.findUnique({
      where: {
        slug: categorySlug,
      },
    });

    if (!category) {
      console.error('category tidak ditemukan');
      return { services: [], isNext: false };
    }

    const services = await prisma.service.findMany({
      where: { published: true, categoryId: category.id },
      select: { id: true },
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });

    const totalServicesCount = await prisma.service.count();

    const isNext = totalServicesCount > skipAmount + services.length;
    return { services, isNext };
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch service', error);
    return { services: [], isNext: false };
  }
}

export async function getServiceBySlug(serviceSlug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
      include: {
        author: true,
        category: true,
        servicePortfolio: true,
        review: {
          include: {
            author: true,
            service: true,
            sellerResponses: { include: { author: true, review: true } },
          },
        },
      },
    });
    if (!service) {
      throw new Error('service tidak ditemukan');
    }

    let totalRating = 0;
    let countReviews = 0;
    service.review.forEach((review) => {
      totalRating += review.rating;
      countReviews += 1;
    });
    const avgRating = countReviews > 0 ? totalRating / countReviews : 0;

    const serviceWithRatings: Service & {
      avgRating: number;
      countReviews: number;
    } = {
      ...service,
      avgRating,
      countReviews,
    };

    return serviceWithRatings;
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch service', error);
  }
}

export async function fetchServicesByUserName(username: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username },
    });
    if (!user) {
      throw new Error('User tidak ditemukan');
    }

    const service = await prisma.service.findMany({
      where: { authorId: user?.id },
      include: {
        category: true,
        servicePortfolio: true,
        author: true,
        review: {
          include: {
            sellerResponses: true,
          },
        },
      },
    });
    return service;
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch service', error);
  }
}

export async function getServiceByServiceId(serviceId: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      select: { slug: true, title: true, price: true },
    });
    return service;
  } catch (error) {
    console.error(error);
  }
}
export async function getServiceByServiceSlug(serviceSlug: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
      select: {
        slug: true,
        title: true,
        authorId: true,
        description: true,
        id: true,
      },
    });
    return service;
  } catch (error) {
    console.error(error);
  }
}

export async function getServicesIdBySearch(search: string | undefined) {
  try {
    const services = await prisma.service.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      },
      select: { id: true },
    });
    return services;
  } catch (error) {}
}
