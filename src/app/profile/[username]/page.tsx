import ProfilePage from '@/app/profile/[username]/ProfilePage';
import PageLoading from '@/components/PageLoading';
import { Suspense } from 'react';

export default async function detail_profile({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <ProfilePage params={params} searchParams={searchParams} />
    </Suspense>
  );
}
