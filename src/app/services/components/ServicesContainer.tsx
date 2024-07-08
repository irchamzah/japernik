'use client';

import {
  getServicesIdByCategory,
  Service,
} from '@/lib/actions/service.actions';
import { Suspense } from 'react';
import { getServicesIdByUsername, User } from '@/lib/actions/user.actions';
import Loading from '@/components/Loading';
import ProductCard from '@/components/all_services/ProductCard';
import useSWR from 'swr';
import PageLoading from '@/components/PageLoading';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ProductContainer({
  categorySlug,
  username,
}: {
  categorySlug: string;
  username: string;
}) {
  //   const [services, userServices] = await Promise.all([
  //     getServicesIdByCategory(categorySlug),
  //     getServicesIdByUsername(username),
  //   ]);

  const { data: services } = useSWR<Service[]>(
    `/api/services?categorySlug=${categorySlug}`,
    fetcher
  );

  const { data: userServices } = useSWR<User[]>(
    `/api/services?categorySlug=${username}`,
    fetcher
  );

  if (services) {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
          {services.map((service) => {
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <ProductCard key={service.id} serviceId={service.id} />
                </Suspense>
              </>
            );
          })}
        </div>
      </div>
    );
  }

  if (userServices) {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
          {userServices.map((service) => {
            return (
              <>
                <Suspense fallback={<Loading />}>
                  <ProductCard key={service.id} serviceId={service.id} />
                </Suspense>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductContainer;
