import prisma from '../../../lib/prisma';
import { Category } from './category.actions';
import { ServicePortfolio } from './servicePortfolio.actions';

export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  published: boolean;
  author: {
    id: string;
    name: string;
    username: string;
    email: string;
    photo: string | null;
    title: string;
    phoneNumber: string;
  } | null;
  category: Category;
  servicePortfolio: ServicePortfolio[];
  review: {
    id: string;
    rating: number;
    response: string;
    price: number;
    userId: string;
    serviceId: string;
  }[];
}

async function getServicesByCategory(categorySlug: string): Promise<Service[]> {
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
    process.exit(1);
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
        review: true,
      },
    });
    return service;
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch service', error);
    process.exit(1);
  }
}

export { getServicesByCategory, getServiceById };
