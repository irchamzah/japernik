import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import ProductContainer from '@/components/all_services/ProductContainer';
import GetToKnow from '@/components/detail_service/GetToKnow';
import Reviews from '@/components/detail_service/Reviews';
import { fetchCategories } from '@/lib/actions/category.actions';
import { fetchUserByUserName } from '@/lib/actions/user.actions';

export default async function detail_profile({
  params,
}: {
  params: { username: string };
}) {
  try {
    const [categories, userWithRatings] = await Promise.all([
      fetchCategories() || [],
      fetchUserByUserName(params.username),
    ]);
    if (!categories) {
      return <div>Categories tidak ditemukan</div>;
    }
    if (!userWithRatings) {
      return (
        <Layout>
          <Navbar mode={'block'} categories={categories} />
          <div className='mx-auto flex h-96 max-w-7xl items-center justify-center'>
            <div className='mx-auto items-center text-center text-2xl font-semibold text-gray-700 xl:mx-0'>
              Profile tidak ditemukan.
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        <Navbar mode={'block'} categories={categories} />
        <GetToKnow header='' userData={userWithRatings} />
        <h1 className='mx-6 mb-5 max-w-7xl text-2xl font-bold text-gray-700 xl:mx-auto'>
          My Services
        </h1>
        <ProductContainer services={userWithRatings.services} />
        <Reviews
          userReviewsData={userWithRatings.reviews}
          serviceReviewsData={[]}
          userReviewsCount={userWithRatings.countReviews}
          userReviewsAvg={userWithRatings.avgRating}
          reviewsFor={'reviews for this seller.'}
        />
      </Layout>
    );
  } catch (error) {
    return <div>Terjadi kesalahan saat menampilkan halaman profile</div>;
  }
}
