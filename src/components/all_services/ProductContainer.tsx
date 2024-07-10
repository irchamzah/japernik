import { getServicesIdByCategory } from '@/lib/actions/service.actions';
import ProductCard from './ProductCard';
import { Suspense } from 'react';
import { getServicesIdByUsername } from '@/lib/actions/user.actions';
import Loading from '../Loading';

async function ProductContainer({
  categorySlug,
  username,
}: {
  categorySlug: string;
  username: string;
}) {
  const [services, userServices] = await Promise.all([
    getServicesIdByCategory(categorySlug),
    getServicesIdByUsername(username),
  ]);

  if (!services) {
    return null;
  }
  if (services.length > 0) {
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

  if (!userServices) {
    return null;
  }
  if (userServices.length > 0) {
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
