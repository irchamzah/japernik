import { Service } from '@/lib/actions/service.actions';
import ProductCard from './ProductCard';

async function ProductContainer({ services }: { services: Service[] }) {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
        {services.map((service) => {
          const averageRating =
            service.review.reduce((acc, curr) => acc + curr.rating, 0) /
            service.review.length;
          const countReview = service.review.length;

          const firstThumbnail =
            service.servicePortfolio.length > 0
              ? service.servicePortfolio[0].url
              : 'No URL available';

          return (
            <ProductCard
              key={service.id}
              thumbnail={firstThumbnail}
              authorImg={service.author?.photo || ''}
              authorName={service.author?.name || 'Unknown'}
              productDescription={service.description}
              rating={averageRating}
              countReview={countReview}
              price={service.price}
              productLink={`/service/${service.id}`}
              authorLink={service.author ? `/author/${service.author.id}` : '#'}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductContainer;
