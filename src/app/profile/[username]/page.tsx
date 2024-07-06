import ProfilePage from '@/app/profile/[username]/ProfilePage';
import PageLoading from '@/components/PageLoading';
import { Suspense } from 'react';

export default async function detail_profile({
  params,
}: {
  params: { username: string };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <ProfilePage username={params.username} />
    </Suspense>
  );
}
