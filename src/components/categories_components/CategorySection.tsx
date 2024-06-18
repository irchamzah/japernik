import { FaArrowRight } from 'react-icons/fa';
import { GiLips } from 'react-icons/gi';
import CategoryCard from '../ui_components/CategoryCard';
import LeftRightButton from '../ui_components/LeftRightButton';

const CategorySection = () => {
  return (
    <section className='mx-6 mt-12'>
      <div className='mx-auto max-w-7xl'>
        <div>
          <h1 className='mb-4 mr-28 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
            Most Popular in Programming & Tech
          </h1>
          <LeftRightButton>
            <div
              className='flex gap-3 py-4'
              title='kotak yang bisa menscroll items'
            >
              <div
                title='kotak yang berisi 3 card kategori'
                className='flex flex-col gap-3 md:flex-row'
              >
                <CategoryCard
                  label='Python Developers'
                  icon={<GiLips className='text-3xl' />}
                />
                <CategoryCard
                  label='HTML & CSS Developers'
                  icon={<GiLips className='text-3xl' />}
                />
                <CategoryCard
                  label='JavaScript Developers'
                  icon={<GiLips className='text-3xl' />}
                />
              </div>
              <div
                title='kotak yang berisi 3 card kategori '
                className='flex flex-col gap-3 md:flex-row'
              >
                <CategoryCard
                  label='WordPress Developers'
                  icon={<GiLips className='text-3xl' />}
                />
                <CategoryCard
                  label='Shopify Developers'
                  icon={<GiLips className='text-3xl' />}
                />
                <CategoryCard
                  label='Wix Developers'
                  icon={<GiLips className='text-3xl' />}
                />
              </div>
            </div>
          </LeftRightButton>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
