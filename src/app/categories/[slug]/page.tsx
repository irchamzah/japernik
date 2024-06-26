import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import ProductContainer from '@/components/all_services/ProductContainer';
import Paging from '@/components/all_services/Paging';
import Filter from '@/components/all_services/Filter';
import { getServicesByCategory } from '@/lib/actions/service.actions';
import { fetchCategories } from '@/lib/actions/category.actions';

export default async function all_services({
  params,
}: {
  params: { slug: string };
}) {
  const services = await getServicesByCategory(params.slug);
  const categories = await fetchCategories();
  return (
    <Layout>
      <Navbar mode={'block'} categories={categories} />
      <BreadCrumbs
        categorySlug={params.slug}
        categoryName={params.slug}
        currentServiceId={''}
        currentServiceName={''}
      />
      <ServiceDescription />
      <Filter />
      <ProductContainer services={services} />
      <Paging />
    </Layout>
  );
}
