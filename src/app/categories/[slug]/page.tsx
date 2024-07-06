import { Suspense } from 'react';
import CategoriesPage from './CategoriesPage';
import PageLoading from '@/components/PageLoading';

export default async function all_services({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Suspense fallback={<PageLoading />}>
      <CategoriesPage categoriesSlug={params.slug} />
    </Suspense>
  );
}
