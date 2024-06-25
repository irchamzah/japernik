import prisma from '../../../lib/prisma';
import ProductCard from './ProductCard';

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  published: boolean;
  author: {
    id: string;
    name: string;
    username: string;
    email: string;
    photo: string | null;
    title: string;
    phoneNumber: string;
  } | null;
  category: {
    id: string;
    name: string;
    logo: string;
  };
  servicePortfolio: {
    id: string;
    url: string;
    serviceId: string;
  }[];
  review: {
    id: string;
    rating: number;
    response: string;
    price: number;
    userId: string;
    serviceId: string;
  }[];
}

async function getServices(): Promise<Service[]> {
  const services = await prisma.service.findMany({
    where: { published: true },
    include: {
      author: true,
      category: true,
      servicePortfolio: true,
      review: true,
    },
  });
  return services;
}

// async function getUsers() {
//   const users = await prisma.user.findMany({});
//   return users;
// }

async function ProductContainer() {
  const services = await getServices();
  // const users = await getUsers();

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
