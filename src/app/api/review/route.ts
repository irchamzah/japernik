import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const { getReviewsByServiceId } = parsedUrl.query;

  if (getReviewsByServiceId) {
    try {
      const reviews = await prisma.review.findMany({
        where: { serviceId: getReviewsByServiceId.toString() },
        include: { sellerResponses: true },
      });
      return NextResponse.json(reviews, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }
}
