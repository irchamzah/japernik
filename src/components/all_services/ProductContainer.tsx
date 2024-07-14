import { getServicesIdByCategory } from '@/lib/actions/service.actions';
import ProductCard from './ProductCard';
import { Suspense } from 'react';
import { getServicesIdByUsername } from '@/lib/actions/user.actions';
import Loading from '../Loading';
import Paging from './Paging';

async function ProductContainer({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  const [services, userServices] = await Promise.all([
    getServicesIdByCategory(
      params.slug,
      searchParams.pageNumber ? +searchParams.pageNumber : 1,
      1
    ),
    getServicesIdByUsername(
      params.username,
      searchParams.pageNumber ? +searchParams.pageNumber : 1,
      1
    ),
  ]);

  if (!services) {
    return null;
  }
  if (services.services.length > 0) {
    return (
      <>
        <div className='mx-auto my-6 max-w-7xl'>
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
          path={`categories/${params.slug}`}
          pageNumber={searchParams?.pageNumber ? +searchParams.pageNumber : 1}
          isNext={services.isNext}
        />
      </>
    );
  }

  if (!userServices) {
    return null;
  }
  if (userServices.services.length > 0) {
    return (
      <>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
            {userServices.services.map((service) => {
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
          path={`profile/${params.username}${searchParams.reviewPageNumber ? `?reviewPageNumber=${searchParams.reviewPageNumber}` : ''}`}
          pageNumber={searchParams?.pageNumber ? +searchParams.pageNumber : 1}
          isNext={userServices.isNext}
        />
      </>
    );
  }
}

export default ProductContainer;
