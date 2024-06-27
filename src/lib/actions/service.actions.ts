import prisma from '../../../lib/prisma';
import { Category } from './category.actions';
import { Review } from './review.actions';
import { ServicePortfolio } from './servicePortfolio.actions';
import { User } from './user.actions';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  published: boolean;
  author?: User;
  authorId: string;
  category: Category;
  categoryId: string;
  servicePortfolio?: ServicePortfolio[];
  review?: Review[];
  createdAt: Date;
  updatedAt: Date;
}

async function getServicesByCategory(categorySlug: string) {
  try {
    const category = await prisma.category.findUnique({
      where: {
        slug: categorySlug,
      },
    });

    if (!category) {
      throw new Error('category tidak ditemukan');
    }

    const services = await prisma.service.findMany({
      where: { published: true, categoryId: category.id },
      include: {
        author: true,
        category: true,
        servicePortfolio: true,
        review: true,
      },
    });
    return services;
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch service', error);
  }
}

async function getServiceById(serviceId: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
      include: {
        author: true,
        category: true,
        servicePortfolio: true,
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

export { getServicesByCategory, getServiceById };
