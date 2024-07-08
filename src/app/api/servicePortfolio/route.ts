import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const { getServicePortfoliosByServiceId } = parsedUrl.query;

  if (getServicePortfoliosByServiceId) {
    try {
      const servicePortfolios = await prisma.servicePortfolio.findMany({
        where: { serviceId: getServicePortfoliosByServiceId.toString() },
        select: { url: true },
      });
      return NextResponse.json(servicePortfolios, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }
}
