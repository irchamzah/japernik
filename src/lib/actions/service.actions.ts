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
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export async function getServicesIdByCategory(
  categorySlug: string | undefined,
  pageNumber: number = 1,
  pageSize: number = 2,
  priceFrom: number = 0,
  priceTo: number = 0,
  location: string = 'null',
  orderBy: string = 'null'
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

    const priceFilter: any = {};
    if (priceFrom > 0) priceFilter.gte = priceFrom;
    if (priceTo > 0) priceFilter.lte = priceTo;

    const locationFilter = location !== 'null' ? location : undefined;

    let orderCriteria: {
      createdAt?: 'asc' | 'desc';
      review?: { _count?: 'asc' | 'desc' };
    } = {};
    switch (orderBy) {
      case 'newest':
        orderCriteria = { createdAt: 'desc' };
        break;
      case 'oldest':
        orderCriteria = { createdAt: 'asc' };
        break;
      case 'bestSelling':
        orderCriteria = { review: { _count: 'desc' } };
        break;
      default:
        orderCriteria = {};
        break;
    }

    console.log(orderCriteria);

    const services = await prisma.service.findMany({
      where: {
        published: true,
        categoryId: category.id,
        price: priceFilter,
        location: locationFilter,
      },
      select: { id: true },
      orderBy: orderCriteria,
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });

    const totalServicesCount = await prisma.service.count({
      where: {
        published: true,
        categoryId: category.id,
        price: priceFilter,
        location: locationFilter,
      },
    });

    const isNext = totalServicesCount > skipAmount + services.length;
    return { services, isNext };
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getServicesIdByCategory',
      error
    );
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
    console.error('Terjadi error saat melakukan getServiceBySlug', error);
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
    console.error(
      'Terjadi error saat melakukan fetchServicesByUserName',
      error
    );
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
    console.error('Terjadi error saat melakukan getServiceByServiceId', error);
  }
}
export async function getServiceByServiceSlug(serviceSlug: string | undefined) {
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
    console.error(
      'Terjadi error saat melakukan getServiceByServiceSlug',
      error
    );
  }
}

export async function getServicesIdBySearch(
  search: string | undefined,
  pageNumber: number = 1,
  pageSize: number = 1
) {
  const skipAmount = (pageNumber - 1) * pageSize;
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
      skip: (pageNumber - 1) * pageSize,
      take: pageSize,
    });

    const totalServicesCount = await prisma.service.count({
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
    });

    const isNext = totalServicesCount > skipAmount + services.length;
    return { services, isNext };
  } catch (error) {
    console.error('Terjadi error saat melakukan getServicesIdBySearch', error);
  }
}
