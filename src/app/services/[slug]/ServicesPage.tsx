import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import Filter from '@/components/all_services/Filter';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import { fetchCategoryBySlug } from '@/lib/actions/category.actions';
import { Suspense } from 'react';
import ServicesContainer from '../components/ServicesContainer';

export default async function ServicesPage({
  categoriesSlug,
}: {
  categoriesSlug: string;
}) {
  const category = await fetchCategoryBySlug(categoriesSlug);

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
          <ServicesContainer categorySlug={categoriesSlug} username={''} />
        </Suspense>
      </Layout>
    </>
  );
}
