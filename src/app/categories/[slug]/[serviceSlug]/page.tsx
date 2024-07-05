import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import BreadCrumbs from '@/components/all_services/BreadCrumbs';
import GetToKnow from '@/components/detail_service/GetToKnow';
import PhotoSlider from '@/components/detail_service/PhotoSlider';
import ProfileCard from '@/components/detail_service/ProfileCard';
import Reviews from '@/components/detail_service/Reviews';
import ServiceDescriptionDetail from '@/components/detail_service/ServiceDesciptionDetail';
import { fetchCategories } from '@/lib/actions/category.actions';
import { getServiceBySlug } from '@/lib/actions/service.actions';
import { fetchUserByUserName } from '@/lib/actions/user.actions';

export default async function detail_service({
  params,
}: {
  params: { serviceSlug: string };
}) {
  try {
    const [categories, serviceWithRatings] = await Promise.all([
      fetchCategories(),
      getServiceBySlug(params.serviceSlug),
    ]);
    if (!categories) {
      return <div>categories tidak ditemukan...</div>;
    }
    if (!serviceWithRatings) {
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
    const userData = await fetchUserByUserName(
      serviceWithRatings.author?.username
    );
    if (!userData) {
      return <div>userData tidak ditemukan</div>;
    }

    return (
      <Layout>
        <Navbar mode={'block'} categories={categories} />
        <BreadCrumbs
          categorySlug={serviceWithRatings.category?.slug}
          categoryName={serviceWithRatings.category?.name}
          currentServiceId={serviceWithRatings.id}
          currentServiceSlug={serviceWithRatings.slug}
        />
        <div className='mx-auto max-w-7xl'>
          <h1 className='mx-6 mb-4 mt-8 text-2xl font-semibold capitalize text-gray-700 xl:mx-0'>
            {serviceWithRatings.title}
          </h1>
        </div>
        <ProfileCard
          profileData={serviceWithRatings.author}
          ratingAvg={serviceWithRatings.avgRating}
          reviewCount={serviceWithRatings.countReviews}
        />
        <PhotoSlider images={serviceWithRatings.servicePortfolio} />
        <ServiceDescriptionDetail
          description={serviceWithRatings.description}
        />
        <GetToKnow
          header={`Tentang ${serviceWithRatings.author?.name}`}
          userData={userData}
        />

        <Reviews
          userReviewsData={[]}
          serviceReviewsData={serviceWithRatings.review}
          userReviewsCount={serviceWithRatings.countReviews}
          userReviewsAvg={serviceWithRatings.avgRating}
          reviewsFor={'reviews for this service.'}
        />
      </Layout>
    );
  } catch (error) {
    return <div>Terjadi kesalahan pada Halaman Detail Service</div>;
  }
}
