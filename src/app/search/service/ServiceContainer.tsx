import Loading from '@/components/Loading';
import { Suspense } from 'react';
import { getServicesIdBySearch } from '@/lib/actions/service.actions';
import ProductCard from '@/components/all_services/ProductCard';
import NoResult from '@/components/NoResult';
import Paging from '@/components/all_services/Paging';

export default async function ServiceContainer({
  params,
}: {
  params: { [key: string]: string | undefined };
}) {
  const services = await getServicesIdBySearch(
    params.searchQuery,
    params.pageNumber ? +params.pageNumber : 1,
    1
  );
  if (!services) return null;
  return (
    <>
      {services.services.length === 0 ? (
        <NoResult object='Jasa' />
      ) : (
        <>
          <div className='mx-auto max-w-7xl'>
            <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
              {services.services.map((service) => {
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
          <Paging
            path={`search/service`}
            pageNumber={params?.pageNumber ? +params.pageNumber : 1}
            isNext={services.isNext}
          />
        </>
      )}
    </>
  );
}
