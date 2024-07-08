import PageLoading from '@/components/PageLoading';
import { Suspense } from 'react';
import CategoriesPage from '../../categories/[slug]/CategoriesPage';

export default function Services({ params }: { params: { slug: string } }) {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <CategoriesPage categoriesSlug={params.slug} />
      </Suspense>
    </>
  );
}
