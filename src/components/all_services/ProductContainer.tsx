import {
  getServicesIdByCategory,
  Service,
} from '@/lib/actions/service.actions';
import ProductCard from './ProductCard';
import { Suspense } from 'react';
import { getServicesIdByUsername } from '@/lib/actions/user.actions';

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
  if (services) {
    return (
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
          {services?.map((service) => {
            return (
              <>
                <Suspense fallback={<div>Loading...</div>}>
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
          {userServices?.map((service) => {
            return (
              <>
                <Suspense fallback={<div>Loading...</div>}>
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
