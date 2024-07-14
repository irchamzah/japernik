import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import Filter from '@/components/all_services/Filter';
import ProductContainer from '@/components/all_services/ProductContainer';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import { fetchCategoryBySlug } from '@/lib/actions/category.actions';
import { Suspense } from 'react';

export default async function CategoriesPage({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  const category = await fetchCategoryBySlug(params.slug);

  return (
    <>
      <Layout>
        <BreadCrumbs categorySlug={category?.slug} currentServiceSlug={''} />
        <ServiceDescription
          title={category?.name}
          description={category?.description}
        />
        <Filter />
        <Suspense fallback={<Loading />}>
          <ProductContainer params={params} searchParams={searchParams} />
        </Suspense>
      </Layout>
    </>
  );
}
