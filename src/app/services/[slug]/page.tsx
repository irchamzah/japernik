import PageLoading from '@/components/PageLoading';
import { Suspense } from 'react';
import ServicesPage from './ServicesPage';

export default function Services({ params }: { params: { slug: string } }) {
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <ServicesPage categoriesSlug={params.slug} />
      </Suspense>
    </>
  );
}
