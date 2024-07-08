'use client';

import { Service } from '@/lib/actions/service.actions';
import { Suspense } from 'react';
import { User } from '@/lib/actions/user.actions';
import Loading from '@/components/Loading';
import useSWR from 'swr';
import ServiceCard from './ServiceCard';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function ServicesContainer({
  categorySlug,
  username,
}: {
  categorySlug: string;
  username: string;
}) {
  const { data: services } = useSWR<Service[]>(
    `/api/service?getServicesIdByCategorySlug=${categorySlug}`,
    fetcher
  );
  const { data: userServices } = useSWR<User[]>(
    `/api/user?getServicesIdByUsername=${username}`,
    fetcher
  );

  if (services && Array.isArray(services)) {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
          {services.map((service) => {
            return (
              <>
                <Suspense key={service.id} fallback={<Loading />}>
                  <ServiceCard key={service.id} serviceId={service.id} />
                </Suspense>
              </>
            );
          })}
        </div>
      </div>
    );
  }

  if (userServices && Array.isArray(userServices)) {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
          {userServices.map((service) => {
            return (
              <>
                <Suspense key={service.id} fallback={<Loading />}>
                  <ServiceCard key={service.id} serviceId={service.id} />
                </Suspense>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ServicesContainer;
