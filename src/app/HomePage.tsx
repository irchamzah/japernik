import Gallery from '@/components/home_components/Gallery';
import HomeHero from '@/components/home_components/HomeHero';
import HomeServices from '@/components/home_components/HomeServices';
import StepsSection from '@/components/home_components/StepsSection';
import Test from '@/components/home_components/Test';
import TestimonialsSection from '@/components/home_components/TestimonialsSection';
import YouTubeFrame from '@/components/home_components/YoutubeFrame';
import Layout from '@/components/Layout';

export default async function HomePage() {
  return (
    <>
      <Layout>
        <HomeHero />
        <HomeServices />
        <StepsSection />
        <YouTubeFrame />
        <TestimonialsSection />
        <Gallery />
        <Test />
      </Layout>
    </>
  );
}
