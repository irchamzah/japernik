import HeroSection from "@/components/home_components/HeroSection";
import Layout from "@/components/Layout";
import PopularServicesSection from "@/components/home_components/PopularServicesSection";
import Services from "@/components/home_components/Services";
import StepsSection from "@/components/home_components/StepsSection";
import YouTubeFrame from "@/components/home_components/YoutubeFrame";
import TestimonialsSection from "@/components/home_components/TestimonialsSection";
import Gallery from "@/components/home_components/Gallery";
import Test from "@/components/home_components/Test";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <Services />
      <PopularServicesSection />
      <StepsSection />
      <YouTubeFrame />
      <TestimonialsSection />
      <Gallery />
      <Test />
    </Layout>
  );
}
