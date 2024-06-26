import { Category } from '@/lib/actions/category.actions';
import Image from 'next/image';
import Link from 'next/link';

const HomeServices = ({ categories }: { categories: Category[] }) => {
  return (
    <>
      <div className='mx-6'>
        <section className='mx-auto mb-12 grid max-w-7xl grid-cols-3 gap-x-4 gap-y-7 py-5 text-gray-600 md:grid-cols-4 lg:grid-cols-9'>
          {categories.map((category, index) => (
            <Link key={index} href={`/categories/${category.slug}`}>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <div className='relative rounded-2xl border border-gray-200 bg-white p-7 hover:border-blue-500'>
                    <Image src={category.logo} alt='' width={50} height={0} />
                  </div>
                  <div className='absolute -inset-1 -z-10 rounded-2xl bg-gray-100 blur-sm'></div>
                </div>
                <div className='mt-2 text-center text-sm font-bold'>
                  {category.name}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default HomeServices;
