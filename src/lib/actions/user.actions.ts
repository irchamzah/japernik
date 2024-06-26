import prisma from '../../../lib/prisma';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  photo: string | null;
  title: string;
  phoneNumber: string;
  address: string | null;
  description: string | null;
  createdAt: Date;
}

export async function avgRatingSumReviewSeller(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: id },
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
    console.error('Terjadi kesalahan saat manjalankan sumRatingSeller', error);
    process.exit(1);
  }
}
