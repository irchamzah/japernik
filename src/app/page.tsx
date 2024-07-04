import HomeHero from '@/components/home_components/HomeHero';
import Layout from '@/components/Layout';
import HomeServices from '@/components/home_components/HomeServices';
import StepsSection from '@/components/home_components/StepsSection';
import YouTubeFrame from '@/components/home_components/YoutubeFrame';
import TestimonialsSection from '@/components/home_components/TestimonialsSection';
import Gallery from '@/components/home_components/Gallery';
import Test from '@/components/home_components/Test';
import Navbar from '@/components/Navbar';
import { fetchCategories } from '@/lib/actions/category.actions';

export default async function Home() {
  const categories = (await fetchCategories()) || [];
  return (
    <Layout>
      <Navbar mode={'fixed'} categories={categories} />
      <HomeHero />
      <HomeServices categories={categories} />
      <StepsSection />
      <YouTubeFrame />
      <TestimonialsSection />
      <Gallery />
      <Test />
    </Layout>
  );
}
