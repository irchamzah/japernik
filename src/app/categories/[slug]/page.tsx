import { Suspense } from 'react';
import CategoriesPage from './CategoriesPage';
import PageLoading from '@/components/PageLoading';

export default async function all_services({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <CategoriesPage params={params} searchParams={searchParams} />
    </Suspense>
  );
}
