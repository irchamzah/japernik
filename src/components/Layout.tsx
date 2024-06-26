import { ReactNode } from 'react';
import Footer from './Footer';
import MoreInfoSection from './categories_components/MoreInfoSection';
import { fetchCategories } from '@/lib/actions/category.actions';

const Layout = async ({ children }: { children: ReactNode }) => {
  const categories = await fetchCategories();
  return (
    <div>
      <div>{children}</div>
      <MoreInfoSection categories={categories} />
      <Footer />
    </div>
  );
};

export default Layout;
