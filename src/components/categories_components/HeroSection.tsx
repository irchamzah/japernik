import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className='mt-40 sm:mt-36 lg:mx-6'>
      <div
        className='relative mx-auto flex min-h-60 max-w-7xl items-center overflow-hidden bg-green-900 bg-cover bg-center lg:rounded-xl'
        style={{
          backgroundImage: `url("/images/random_image/img1.jpg")`,
        }}
      >
        <div className='absolute inset-0 bg-black opacity-35'></div>
        <div className='z-10 mx-auto flex w-full flex-col items-center text-white'>
          <h1 className='text-3xl font-semibold'>Programming & Tech</h1>
          <p className='mt-2 text-xl'>
            You think it. A programmer develops it.
          </p>
          <div className='mt-6 rounded-md border border-white px-4 py-2 hover:bg-white hover:text-gray-900'>
            <Link href='#'>How It Works?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
