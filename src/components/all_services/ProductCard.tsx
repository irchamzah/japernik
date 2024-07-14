import { getCategorySlugByServiceId } from '@/lib/actions/category.actions';
import { getReviewsByServiceId } from '@/lib/actions/review.actions';
import { getServiceByServiceId, Service } from '@/lib/actions/service.actions';
import { getServicePortfoliosByServiceId } from '@/lib/actions/servicePortfolio.actions';
import { getUserByServiceId } from '@/lib/actions/user.actions';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';

const ProductCard = async ({ serviceId }: { serviceId: string }) => {
  const [service, user, category, serviceReviews, servicePortfolios] =
    await Promise.all([
      getServiceByServiceId(serviceId),
      getUserByServiceId(serviceId),
      getCategorySlugByServiceId(serviceId),
      getReviewsByServiceId(serviceId),
      getServicePortfoliosByServiceId(serviceId),
    ]);

  if (serviceReviews) {
    const avgRating =
      serviceReviews.reviews.length > 0
        ? serviceReviews.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
          serviceReviews.reviews.length
        : 0;
    const countReview = serviceReviews.reviews.length;
    if (servicePortfolios) {
      const firstThumbnail =
        servicePortfolios.length > 0
          ? servicePortfolios[0].url
          : 'No URL available';

      return (
        <div title='container utk seller' className='mt-4'>
          <div
            title='isi foto & detail seller'
            className='flex w-full flex-col'
          >
            <Link href={`/categories/${category?.slug}/${service?.slug}`}>
              <div title='ini foto' className='flex w-full'>
                <Image
                  src={firstThumbnail}
                  alt=''
                  width={100}
                  height={0}
                  className='h-52 w-full rounded-lg border object-cover hover:opacity-90'
                />
              </div>
            </Link>
            <div title='ini detail seller' className='mt-3'>
              <div
                title='ini foto seller, nama seller'
                className='flex w-full items-center'
              >
                <Link href={`/profile/${user?.username}`}>
                  <Image
                    src={user?.photo || '/images/noImage.jpg'}
                    alt='foto seller'
                    width={20}
                    height={0}
                    className='mr-2 h-6 w-6 rounded-full object-cover hover:opacity-90'
                  />
                </Link>
                <Link href={`/profile/${user?.username}`}>
                  <span className='text-sm font-semibold hover:underline'>
                    {user?.name}
                  </span>
                </Link>
              </div>

              <Link href={`/categories/${category?.slug}/${service?.slug}`}>
                <div title='ini deskripsi'>
                  <p className='mt-1 w-full text-sm text-gray-700 decoration-gray-700 hover:underline'>
                    {service?.title}
                  </p>
                </div>
              </Link>
              <Link href={`/categories/${category?.slug}/${service?.slug}`}>
                <div title='ini rating' className='mt-2 flex items-center'>
                  <IoIosStar />
                  <span className='ml-1 font-semibold'>
                    {avgRating.toFixed(1)}
                  </span>
                  <span className='ml-1 text-gray-500'>({countReview})</span>
                </div>
              </Link>
              <Link href={`/categories/${category?.slug}/${service?.slug}`}>
                <div title='ini harga' className=''>
                  <span className='font-semibold'>
                    Mulai dari IDR {service?.price.toLocaleString('id-ID')}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default ProductCard;
