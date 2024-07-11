import ProfilePage from '@/app/profile/[username]/ProfilePage';
import PageLoading from '@/components/PageLoading';
import { Suspense } from 'react';

export default async function detail_profile({
  params,
  searchParams,
}: {
  params: { slug?: string; username?: string };
  searchParams: { pageNumber: number };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <ProfilePage params={params} searchParams={searchParams} />
    </Suspense>
  );
}
