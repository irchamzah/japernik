import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const { categorySlug, username } = parsedUrl.query;

  if (categorySlug) {
    try {
      const category = await prisma.category.findUnique({
        where: { slug: categorySlug.toString() },
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
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }

  if (username) {
    try {
      const user = await prisma.user.findUnique({
        where: { username: username.toString() },
        select: { id: true },
      });
      if (!user) {
        return NextResponse.json(
          { error: 'Category not found' },
          { status: 404 }
        );
      }
      const services = await prisma.service.findMany({
        where: { authorId: user.id },
        select: { id: true },
      });
      return NextResponse.json(services, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }
}
