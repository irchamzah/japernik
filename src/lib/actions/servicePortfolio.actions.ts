import prisma from '../../../lib/prisma';
import { Service } from './service.actions';

export interface ServicePortfolio {
  id?: string;
  url: string;
  service?: Service;
  serviceId?: string;
}

export async function getServicePortfoliosByServiceId(serviceId: string) {
  try {
    const servicePortfolios = await prisma.servicePortfolio.findMany({
      where: { serviceId: serviceId },
      select: { url: true },
    });
    return servicePortfolios;
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getServicePortfoliosByServiceId',
      error
    );
  }
}
export async function getServicePortfoliosByServiceSlug(
  serviceSlug: string | undefined
) {
  try {
    const service = await prisma.service.findUnique({
      where: { slug: serviceSlug },
    });
    const servicePortfolios = await prisma.servicePortfolio.findMany({
      where: { serviceId: service?.id },
      select: { url: true },
    });
    return servicePortfolios;
  } catch (error) {
    console.error(
      'Terjadi error saat melakukan getServicePortfoliosByServiceSlug',
      error
    );
  }
}
