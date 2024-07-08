import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const {
    getServicesIdByCategorySlug,
    getServicesIdByUsername,
    getServiceByServiceId,
  } = parsedUrl.query;

  if (getServicesIdByCategorySlug) {
    try {
      const category = await prisma.category.findUnique({
        where: { slug: getServicesIdByCategorySlug.toString() },
        select: { id: true },
      });
      if (!category) {
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        );
      }
      const services = await prisma.service.findMany({
        where: { categoryId: category.id },
        select: { id: true },
      });
      return NextResponse.json(services, { status: 200 });
    } catch (error) {
      console.error('Error saat mengambil services:', error);
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }

  if (getServicesIdByUsername) {
    try {
      const user = await prisma.user.findUnique({
        where: { username: getServicesIdByUsername.toString() },
        select: { id: true },
      });
      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
      const services = await prisma.service.findMany({
        where: { authorId: user.id },
        select: { id: true },
      });
      return NextResponse.json(services, { status: 200 });
    } catch (error) {
      console.error(
        'Error saat mengambil services berdasarkan username:',
        error
      );
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }

  if (getServiceByServiceId) {
    try {
      const service = await prisma.service.findUnique({
        where: { id: getServiceByServiceId.toString() },
        select: { slug: true, title: true, price: true },
      });
      if (!service) {
        return NextResponse.json(
          { error: 'Service not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(service, { status: 200 });
    } catch (error) {
      console.error('Error saat mengambil service berdasarkan ID:', error);
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json(
    { error: 'Invalid query parameters' },
    { status: 400 }
  );
}
