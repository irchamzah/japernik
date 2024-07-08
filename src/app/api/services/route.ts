import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const { categorySlug } = parsedUrl.query;

  if (!categorySlug) {
    return null;
  }
  try {
    const category = await prisma.category.findUnique({
      where: { slug: categorySlug.toString() },
      select: { id: true },
    });
    if (!category) {
      return null;
    }
    const services = await prisma.service.findMany({
      where: { categoryId: category.id },
    });
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
