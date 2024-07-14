import { fetchUserByUserName } from '@/lib/actions/user.actions';
import Layout from '../../../components/Layout';
import GetToKnow from '../../../components/detail_service/GetToKnow';
import ProductContainer from '../../../components/all_services/ProductContainer';
import Reviews from '../../../components/detail_service/Reviews';
import { Suspense } from 'react';
import Loading from '@/components/Loading';

export default async function ProfilePage({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  const userWithRatings = await fetchUserByUserName(params.username);

  if (userWithRatings) {
    return (
      <Layout>
        <Suspense fallback={<Loading />}>
          <GetToKnow header='' userId={userWithRatings.id} />
        </Suspense>
        <h1 className='mx-6 my-5 max-w-7xl text-2xl font-bold text-gray-700 xl:mx-auto'>
          My Services
        </h1>
        <Suspense fallback={<Loading />}>
          <ProductContainer params={params} searchParams={searchParams} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Reviews
            userId={userWithRatings.id}
            serviceId={''}
            reviewsFor={'reviews for this seller.'}
            params={params}
            searchParams={searchParams}
          />
        </Suspense>
      </Layout>
    );
  }
}
