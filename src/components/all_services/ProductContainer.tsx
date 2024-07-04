import { Service } from '@/lib/actions/service.actions';
import ProductCard from './ProductCard';

async function ProductContainer({ services }: { services: Service[] }) {
  // console.log('ISI DARI services >>>>>>>>>>>>>>>>>', services);

  return (
    <div className='mx-auto max-w-7xl'>
      <div className='mx-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:mx-0 xl:grid-cols-4'>
        {services.map((service) => {
          if (!service || !service.review || !service.servicePortfolio) {
            return null;
          }

          const averageRating =
            service.review.length > 0
              ? service.review.reduce((acc, curr) => acc + curr.rating, 0) /
                service.review.length
              : 0;
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
              productTitle={service.title}
              rating={averageRating}
              countReview={countReview}
              price={service.price}
              productLink={`/categories/${service.category.slug}/${service.slug}`}
              authorLink={
                service.author ? `/profile/${service.author.username}` : '#'
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductContainer;
