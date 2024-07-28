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
      1,
      searchParams.priceFrom ? +searchParams.priceFrom : 0,
      searchParams.priceTo ? +searchParams.priceTo : 0,
      searchParams.location ? searchParams.location : 'null',
      searchParams.orderBy ? searchParams.orderBy : 'null'
    ),
    getServicesIdByUsername(
      params.username,
      searchParams.pageNumber ? +searchParams.pageNumber : 1,
      1
    ),
  ]);
  if (services && services.services.length > 0) {
    return (
      <>
        <div className='mx-auto my-6 max-w-7xl'>
          <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
            {services.services.map((service) => (
              <Suspense fallback={<Loading />} key={service.id}>
                <ProductCard serviceId={service.id} />
              </Suspense>
            ))}
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

  if (userServices && userServices.services.length > 0) {
    return (
      <>
        <div className='mx-auto max-w-7xl'>
          <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
            {userServices.services.map((service) => (
              <Suspense fallback={<Loading />} key={service.id}>
                <ProductCard serviceId={service.id} />
              </Suspense>
            ))}
          </div>
        </div>
        <Paging
          path={`profile/${params.username}`}
          pageNumber={searchParams?.pageNumber ? +searchParams.pageNumber : 1}
          isNext={userServices.isNext}
        />
      </>
    );
  }

  return (
    <>
      <div className='flex h-52 items-center justify-center'>
        <div className='text-center'>
          <p className='text-3xl font-semibold'>Jasa Belum Tersedia</p>
        </div>
      </div>
    </>
  );
}

export default ProductContainer;
