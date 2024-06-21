import HomeHero from '@/components/home_components/HomeHero';
import Layout from '@/components/Layout';
import HomePopularServices from '@/components/home_components/HomePopularServices';
import HomeServices from '@/components/home_components/HomeServices';
import StepsSection from '@/components/home_components/StepsSection';
import YouTubeFrame from '@/components/home_components/YoutubeFrame';
import TestimonialsSection from '@/components/home_components/TestimonialsSection';
import Gallery from '@/components/home_components/Gallery';
import Test from '@/components/home_components/Test';
import MoreInfoSection from '@/components/categories_components/MoreInfoSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <Layout>
      <Navbar mode={'fixed'} />
      <HomeHero />
      <HomeServices />
      <StepsSection />
      <YouTubeFrame />
      <TestimonialsSection />
      <Gallery />
      <Test />
    </Layout>
  );
}
