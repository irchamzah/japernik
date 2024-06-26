import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import ProductContainer from '@/components/all_services/ProductContainer';
import GetToKnow from '@/components/detail_service/GetToKnow';
import Reviews from '@/components/detail_service/Reviews';

export default function detail_service() {
  return (
    <Layout>
      {/* <Navbar mode={'block'} />
      <GetToKnow header=' ' /> */}
      <h1 className='mx-6 mb-5 max-w-7xl text-2xl font-bold text-gray-700 xl:mx-auto'>
        My Services
      </h1>
      {/* <ProductContainer /> */}
      <Reviews />
    </Layout>
  );
}
