import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import GetToKnow from '@/components/detail_service/GetToKnow';
import PhotoSlider from '@/components/detail_service/PhotoSlider';
import ProfileCard from '@/components/detail_service/ProfileCard';
import Reviews from '@/components/detail_service/Reviews';
import ServiceDescriptionDetail from '@/components/detail_service/ServiceDesciptionDetail';
import { fetchCategories } from '@/lib/actions/category.actions';
import {
  getServiceById,
  getServicesByCategory,
} from '@/lib/actions/service.actions';
import { avgRatingSumReviewSeller } from '@/lib/actions/user.actions';

export default async function detail_service({
  params,
}: {
  params: { id: string };
}) {
  const categories = await fetchCategories();
  const service = await getServiceById(params.id);

  if (!service) {
    return (
      <Layout>
        <Navbar mode={'block'} categories={categories} />
        <div className='mx-auto flex h-96 max-w-7xl items-center justify-center'>
          <div className='mx-auto items-center text-center text-2xl font-semibold text-gray-700 xl:mx-0'>
            Service tidak ditemukan.
          </div>
        </div>
      </Layout>
    );
  }

  const ratingReviewSeller = await avgRatingSumReviewSeller(service?.author.id);

  const averageRating =
    service.review.reduce((acc, curr) => acc + curr.rating, 0) /
    service.review.length;
  const countReview = service.review.length;

  return (
    <Layout>
      <Navbar mode={'block'} categories={categories} />
      <BreadCrumbs
        categorySlug={service.category.slug}
        categoryName={service.category.name}
        currentServiceId={service.id}
        currentServiceName={service.title}
      />
      <div className='mx-auto max-w-7xl'>
        <h1 className='mx-6 mb-4 mt-8 text-2xl font-semibold capitalize text-gray-700 xl:mx-0'>
          {service.title}
        </h1>
      </div>
      <ProfileCard
        profileData={service.author}
        ratingSum={averageRating}
        reviewCount={countReview}
      />
      <PhotoSlider images={service.servicePortfolio} />
      <ServiceDescriptionDetail description={service.description} />
      <GetToKnow
        header='Get to Know Malik'
        profileData={service.author}
        ratingAvg={ratingReviewSeller.averageRating}
        reviewCount={ratingReviewSeller.totalReviews}
      />
      <Reviews />
    </Layout>
  );
}
