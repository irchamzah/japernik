import { parse } from 'url';
import prisma from '../../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const searchQuery = parsedUrl.query.searchQuery;

  if (!searchQuery || typeof searchQuery !== 'string') {
    return NextResponse.json(
      { error: 'Query must be a string' },
      { status: 500 }
    );
  }

  try {
    const services = await prisma.service.findMany({
      where: {
        OR: [
          {
            title: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
        ],
      },
    });
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
