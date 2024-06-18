import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import MoreInfoSection from './categories_components/MoreInfoSection';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
      <MoreInfoSection />
      <Footer />
    </div>
  );
};

export default Layout;
