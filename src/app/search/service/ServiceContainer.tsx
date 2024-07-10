import Loading from '@/components/Loading';
import { Suspense } from 'react';
import { getServicesIdBySearch } from '@/lib/actions/service.actions';
import ProductCard from '@/components/all_services/ProductCard';
import NoResult from '@/components/NoResult';

export default async function ServiceContainer({
  params,
}: {
  params: string | undefined;
}) {
  const services = await getServicesIdBySearch(params);
  if (!services) return null;

  return (
    <>
      {services.length === 0 ? (
        <NoResult object='Jasa' />
      ) : (
        <>
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
        </>
      )}
    </>
  );
}
