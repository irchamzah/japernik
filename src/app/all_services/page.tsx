import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import ServiceDescription from '@/components/all_services/ServiceDescription';
import FilterSort from '@/components/all_services/FilterSort';
import ProductContainer from '@/components/all_services/ProductContainer';
import Paging from '@/components/all_services/Paging';

export default function all_services() {
  return (
    <Layout>
      <Navbar mode={'block'} />
      <BreadCrumbs />
      <ServiceDescription />
      <FilterSort />
      <ProductContainer />
      <Paging />
    </Layout>
  );
}
