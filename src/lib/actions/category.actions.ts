import prisma from '../../../lib/prisma';
import { Service } from './service.actions';

export interface Category {
  id: string;
  slug: string;
  name: string;
  logo: string;
  service?: Service[];
}

export async function fetchCategories() {
  try {
    const categories = await prisma.category.findMany({});
    if (!categories || categories.length === 0) {
      throw new Error('Kategori tidak ditemukan');
    }

    return categories;
  } catch (error) {
    console.error('Terjadi error saat melakukan fetchCategories', error);
  }
}

export async function fetchCategoryBySlug(slug: string | undefined) {
  try {
    const category = await prisma.category.findUnique({
      where: { slug: slug },
      select: { slug: true, name: true, description: true },
    });
    return category;
  } catch (error) {
    console.error('Terjadi error saat melakukan fetchCategoryBySlug', error);
  }
}

export async function getCategorySlugByServiceId(serviceId: string) {
  try {
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    });
    const category = await prisma.category.findFirst({
      where: { id: service?.categoryId },
      select: { slug: true },
    });
    return category;
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getCategorySlugByServiceId',
      error
    );
  }
}

export async function getCategoryByServiceSlug(
  serviceSlug: string | undefined
) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
    });
    const category = await prisma.category.findFirst({
      where: { id: service?.categoryId },
      select: { slug: true },
    });
    return category;
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getCategoryByServiceSlug',
      error
    );
  }
}
