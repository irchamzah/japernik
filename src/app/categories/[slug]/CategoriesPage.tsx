import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import Filter from '@/components/all_services/Filter';
import Paging from '@/components/all_services/Paging';
import ProductContainer from '@/components/all_services/ProductContainer';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import { fetchCategoryBySlug } from '@/lib/actions/category.actions';
import { Suspense } from 'react';

export default async function CategoriesPage({
  categoriesSlug,
}: {
  categoriesSlug: string;
}) {
  const category = await fetchCategoryBySlug(categoriesSlug);
  return (
    <>
      <Layout>
        <Suspense fallback={<Loading />}>
          <BreadCrumbs categorySlug={category?.slug} currentServiceSlug={''} />
          <ServiceDescription
            title={category?.name}
            description={category?.description}
          />
        </Suspense>
        <Filter />
        <Suspense fallback={<Loading />}>
          <ProductContainer categorySlug={categoriesSlug} username={''} />
        </Suspense>
        <Paging />
      </Layout>
    </>
  );
}
