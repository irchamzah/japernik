import prisma from '../../../lib/prisma';

export interface Category {
  id: string;
  name: string;
  logo: string;
  slug: string;
}

async function fetchCategories(): Promise<Category[]> {
  try {
    const category = await prisma.category.findMany({});
    if (!category) {
      throw new Error('Kategori tidak ditemukan');
    }

    return category;
  } catch (error) {
    console.error('Terjadi kesalahan saat fetch category', error);
    process.exit(1);
  }
}

export { fetchCategories };