'use client';

import { Category } from '@/lib/actions/category.actions';
import { Review } from '@/lib/actions/review.actions';
import { Service } from '@/lib/actions/service.actions';
import { ServicePortfolio } from '@/lib/actions/servicePortfolio.actions';
import { User } from '@/lib/actions/user.actions';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosStar } from 'react-icons/io';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ServiceCard = ({ serviceId }: { serviceId: string }) => {
  const { data: service } = useSWR<Service>(
    `/api/service?getServiceByServiceId=${serviceId}`,
    fetcher
  );
  const { data: user } = useSWR<User>(
    `/api/user?getUserByServiceId=${serviceId}`,
    fetcher
  );

  const { data: category } = useSWR<Category>(
    `/api/category?getCategorySlugByServiceId=${serviceId}`,
    fetcher
  );
  const { data: serviceReviews } = useSWR<Review[]>(
    `/api/review?getReviewsByServiceId=${serviceId}`,
    fetcher
  );

  const { data: servicePortfolios } = useSWR<ServicePortfolio[]>(
    `/api/servicePortfolio?getServicePortfoliosByServiceId=${serviceId}`,
    fetcher
  );

  if (serviceReviews) {
    const avgRating =
      serviceReviews.length > 0
        ? serviceReviews.reduce((acc, curr) => acc + curr.rating, 0) /
          serviceReviews.length
        : 0;
    const countReview = serviceReviews.length;
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

export default ServiceCard;
