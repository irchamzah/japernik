import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import GetToKnow from '@/components/detail_service/GetToKnow';
import PhotoSlider from '@/components/detail_service/PhotoSlider';
import ProfileCard from '@/components/detail_service/ProfileCard';
import Reviews from '@/components/detail_service/Reviews';
import ServiceDescriptionDetail from '@/components/detail_service/ServiceDesciptionDetail';
import Layout from '@/components/Layout';
import Loading from '@/components/Loading';
import { avgRatingCountReview } from '@/contexts/context';
import { getCategoryByServiceSlug } from '@/lib/actions/category.actions';
import { getReviewByServiceSlug } from '@/lib/actions/review.actions';
import { getServiceByServiceSlug } from '@/lib/actions/service.actions';
import { getServicePortfoliosByServiceSlug } from '@/lib/actions/servicePortfolio.actions';
import { getUserByServiceSlug } from '@/lib/actions/user.actions';
import { Suspense } from 'react';

export default async function DetailServicePage({
  params,
  searchParams,
}: {
  params: { [key: string]: string | undefined };
  searchParams: { [key: string]: string | undefined };
}) {
  const [category, service, servicePortfolios, user, review] =
    await Promise.all([
      getCategoryByServiceSlug(params.serviceSlug),
      getServiceByServiceSlug(params.serviceSlug),
      getServicePortfoliosByServiceSlug(params.serviceSlug),
      getUserByServiceSlug(params.serviceSlug),
      getReviewByServiceSlug(params.serviceSlug),
    ]);

  if (service && category && servicePortfolios && user && review) {
    const serviceRating = avgRatingCountReview(review);
    return (
      <>
        <Layout>
          <BreadCrumbs
            categorySlug={category?.slug}
            currentServiceSlug={service?.slug}
          />
          <div className='mx-auto max-w-7xl'>
            <h1 className='mx-6 mb-4 mt-8 text-2xl font-semibold capitalize text-gray-700 xl:mx-0'>
              {service?.title}
            </h1>
          </div>
          <Suspense fallback={<Loading />}>
            <ProfileCard
              authorId={service.authorId}
              ratingAvg={serviceRating.avgRating} //todo whose rating? service or seller?
              reviewCount={serviceRating.countReview}
            />
          </Suspense>
          <PhotoSlider servicePortfolios={servicePortfolios} />
          <ServiceDescriptionDetail description={service?.description} />
          <Suspense fallback={<Loading />}>
            <GetToKnow header={`Tentang ${user.name}`} userId={user.id} />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <Reviews
              userId={''}
              serviceId={service.id}
              reviewsFor={'reviews for this service.'}
              params={params}
              searchParams={searchParams}
            />
          </Suspense>
        </Layout>
      </>
    );
  }
}
