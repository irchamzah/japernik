import Image from 'next/image';
import Link from 'next/link';

const BannerSection = () => {
  return (
    <section className='mx-6 mt-12'>
      <div className='mx-auto max-w-7xl'>
        <div
          title='ini bannernya'
          className='grid gap-6 overflow-hidden rounded-xl border border-gray-300 sm:grid-cols-2'
        >
          <div
            title='ini div buat tulisan dan button'
            className='m-6 flex basis-1/2 flex-col gap-6'
          >
            <div
              title='isi title dan paragraf'
              className='flex flex-grow flex-col gap-6'
            >
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
                  Seeking a full suite of services?
                </h1>
                <p>
                  Find a comprehensive software development agency to handle it
                  all.
                </p>
              </div>
            </div>
            <Link
              href='#'
              className='w-min text-nowrap rounded-xl bg-gray-900 px-4 py-2 font-semibold text-white hover:opacity-90 lg:mt-auto'
            >
              Browse agencies
            </Link>
          </div>
          <div title='ini buat fotonya' className='flex basis-1/2 items-center'>
            <Image
              alt=''
              width={300}
              height={0}
              src={'/images/random_image/img1.jpg'}
              className='max-h-64 w-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
