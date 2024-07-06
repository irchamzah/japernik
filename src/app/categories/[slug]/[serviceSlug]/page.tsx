import { Suspense } from 'react';
import DetailServicePage from './DetailServicePage';
import PageLoading from '@/components/PageLoading';

export default async function detail_service({
  params,
}: {
  params: { serviceSlug: string };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <DetailServicePage serviceSlug={params.serviceSlug} />
    </Suspense>
  );
}
