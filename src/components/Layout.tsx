import { ReactNode } from 'react';
import Footer from './Footer';
import MoreInfoSection from './categories_components/MoreInfoSection';
import { fetchCategories } from '@/lib/actions/category.actions';
import { GlobalStateProvider } from '@/contexts/GlobalStateContext';

const Layout = async ({ children }: { children: ReactNode }) => {
  const categories = (await fetchCategories()) || [];
  return (
    <GlobalStateProvider>
      <div>
        <div>{children}</div>
        <MoreInfoSection categories={categories} />
        <Footer />
      </div>
    </GlobalStateProvider>
  );
};

export default Layout;
