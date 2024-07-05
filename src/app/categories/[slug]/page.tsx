import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import ProductContainer from '@/components/all_services/ProductContainer';
import Paging from '@/components/all_services/Paging';
import Filter from '@/components/all_services/Filter';
import { getServicesByCategory } from '@/lib/actions/service.actions';
import {
  fetchCategories,
  fetchCategoryBySlug,
} from '@/lib/actions/category.actions';

export default async function all_services({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const [services, categories, category] = await Promise.all([
      getServicesByCategory(params.slug),
      fetchCategories(),
      fetchCategoryBySlug(params.slug),
    ]);
    if (!categories) {
      return <div>categories tidak ditemukan...</div>;
    }
    if (!services) {
      return (
        <Layout>
          <Navbar mode={'block'} categories={categories} />
          <div className='mx-auto flex h-96 max-w-7xl items-center justify-center'>
            <div className='mx-auto items-center text-center text-2xl font-semibold text-gray-700 xl:mx-0'>
              Service tidak ditemukan.
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <Navbar mode={'block'} categories={categories} />
        <BreadCrumbs
          categorySlug={category?.slug}
          categoryName={category?.name}
          currentServiceId={''}
          currentServiceSlug={''}
        />
        <ServiceDescription
          title={category?.name}
          description={category?.description}
        />
        <Filter />
        <ProductContainer services={services} />
        <Paging />
      </Layout>
    );
  } catch (error) {
    return <div>Terjadi kesalahan pada halaman Categories</div>;
  }
}
