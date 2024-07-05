import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import ProductContainer from '@/components/all_services/ProductContainer';
import GetToKnow from '@/components/detail_service/GetToKnow';
import Reviews from '@/components/detail_service/Reviews';
import { fetchCategories } from '@/lib/actions/category.actions';
import { fetchServicesByUserName } from '@/lib/actions/service.actions';
import {
  avgRatingCountReviewSeller,
  fetchUserByUserName,
} from '@/lib/actions/user.actions';

export default async function detail_profile({
  params,
}: {
  params: { username: string };
}) {
  const categories = (await fetchCategories()) || [];
  const profile = await fetchUserByUserName(params.username);
  const services = (await fetchServicesByUserName(params.username)) || [];
  // console.log('ISI DARI services >>>>>>>>>>>>>>>>>', services);

  if (!profile) {
    return (
      <Layout>
        <Navbar mode={'block'} categories={categories} />
        <div className='mx-auto flex h-96 max-w-7xl items-center justify-center'>
          <div className='mx-auto items-center text-center text-2xl font-semibold text-gray-700 xl:mx-0'>
            Profile tidak ditemukan.
          </div>
        </div>
      </Layout>
    );
  }

  const ratingReviewSeller = await avgRatingCountReviewSeller(params.username);
  if (!ratingReviewSeller) {
    return <div>ratingReviewSeller tidak ditemukan...</div>;
  }

  return (
    <Layout>
      <Navbar mode={'block'} categories={categories} />
      <GetToKnow header='' userId={profile.id} />
      <h1 className='mx-6 mb-5 max-w-7xl text-2xl font-bold text-gray-700 xl:mx-auto'>
        My Services
      </h1>
      <ProductContainer services={services} />
      <Reviews
        userId={profile.id}
        serviceId={''}
        reviewsFor={'reviews for this seller.'}
      />
    </Layout>
  );
}