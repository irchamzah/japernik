import Layout from '@/components/Layout';
import HeroSection from '@/components/categories_components/HeroSection';
import ExploreSection from '@/components/categories_components/ExploreSection';
import HomePopularServices from '@/components/home_components/HomePopularServices';
import BannerSection from '@/components/ui_components/BannerSection';
import CategorySection from '@/components/ui_components/CategorySection';
import FaqSection from '@/components/categories_components/FaqSection';
import MoreInfoSection from '@/components/categories_components/MoreInfoSection';

export default function Categories() {
  return (
    <Layout>
      <HeroSection />
      <CategorySection />
      <BannerSection />
      <ExploreSection />
      <FaqSection />
      <HomePopularServices sectionTitle='Make Up Terdekat' />
      <MoreInfoSection />
    </Layout>
  );
}
