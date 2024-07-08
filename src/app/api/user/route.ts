import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';
import { parse } from 'url';

export async function GET(req: Request) {
  const parsedUrl = parse(req.url, true);
  const { getUserByServiceId, getServicesIdByUsername } = parsedUrl.query;

  if (getUserByServiceId) {
    try {
      const service = await prisma.service.findUnique({
        where: { id: getUserByServiceId.toString() },
        select: { authorId: true },
      });

      if (!service) {
        return NextResponse.json(
          { error: 'service not found' },
          { status: 404 }
        );
      }
      const user = await prisma.user.findUnique({
        where: { id: service?.authorId },
        select: { username: true, photo: true, name: true },
      });

      if (!user) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 });
      }
      return NextResponse.json(user, { status: 200 });
    } catch (error) {
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
        return NextResponse.json({ error: 'user not found' }, { status: 404 });
      }
      const services = await prisma.service.findMany({
        where: { authorId: user.id },
        select: { id: true },
      });
      if (!services) {
        return NextResponse.json({ error: 'user not found' }, { status: 404 });
      }
      return NextResponse.json(services, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      );
    }
  }

  return NextResponse.json({ error: 'user not found' }, { status: 404 });
}
