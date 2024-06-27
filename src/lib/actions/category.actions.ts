import prisma from '../../../lib/prisma';
import { Service } from './service.actions';

export interface Category {
  id: string;
  slug: string;
  name: string;
  logo: string;
  service?: Service[];
}

async function fetchCategories() {
  try {
    const categories = await prisma.category.findMany({});
    if (!categories || categories.length === 0) {
      throw new Error('Kategori tidak ditemukan');
    }

    return categories;
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch category', error);
  }
}

export { fetchCategories };
