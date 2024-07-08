import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const { getCategorySlugByServiceId } = parsedUrl.query;

  if (getCategorySlugByServiceId) {
    try {
      const service = await prisma.service.findUnique({
        where: { id: getCategorySlugByServiceId?.toString() },
      });
      if (!service) {
        return NextResponse.json(
          { error: 'service not found' },
          { status: 404 }
        );
      }
      const category = await prisma.category.findFirst({
        where: { id: service?.categoryId },
        select: { slug: true },
      });
      return NextResponse.json(category, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }
}
