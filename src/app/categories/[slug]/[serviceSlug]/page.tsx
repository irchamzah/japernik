import { Suspense } from 'react';
import DetailServicePage from './DetailServicePage';
import PageLoading from '@/components/PageLoading';

export default async function detail_service({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <DetailServicePage params={params} searchParams={searchParams} />
    </Suspense>
  );
}
