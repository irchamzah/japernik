import { Suspense } from 'react';
import CategoriesPage from './CategoriesPage';
import PageLoading from '@/components/PageLoading';

export default async function all_services({
  params,
  searchParams,
}: {
  params: { slug?: string; username?: string };
  searchParams: { pageNumber: number };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <CategoriesPage params={params} searchParams={searchParams} />
    </Suspense>
  );
}
