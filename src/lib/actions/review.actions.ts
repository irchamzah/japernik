import prisma from '../../../lib/prisma';
import { SellerResponse } from './sellerResponse.actions';
import { Service } from './service.actions';
import { User } from './user.actions';

export interface Review {
  id: string;
  rating: number;
  response: string;
  price: number;
  author?: User;
  userId: string;
  service?: Service;
  serviceId: string;
  sellerResponses?: SellerResponse[];
  createdAt: Date;
  updatedAt: Date;
}

export async function fetchUserByUserId(id: string) {
  try {
    // console.log('ISI DARI fetchUserByUserId >>>>>>>>>>>>>', id);
    const reviewer = await prisma.user.findUnique({
      where: { id: id },
    });

    return reviewer;
  } catch (error) {
    console.error(
      'Terjadi kesalahan saat menjalankan fetchUserByUserId',
      error
    );
  }
}
