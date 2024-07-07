import Image from 'next/image';
import Link from 'next/link';

const HomeServices = async () => {
  // const categories = (await fetchCategories()) || [];
  const categories = [
    {
      id: 'cly1iwy8r00027qjaga07n42s',
      slug: 'make-up',
      name: 'Make Up',
      logo: '/icons/categories_icon/makeUp.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyj900047qjapwkmcf75',
      slug: 'wedding-organizer',
      name: 'Wedding Organizer',
      logo: '/icons/categories_icon/weddingOrganizer.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwymt000c7qjapckqcarm',
      slug: 'fotografi-dan-videografi',
      name: 'Fotografi dan Videografi',
      logo: '/icons/categories_icon/fotografi.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwz9a000h7qja2vs5ipx6',
      slug: 'dekorasi',
      name: 'Dekorasi',
      logo: '/icons/categories_icon/dekorasi.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjr000b7qja6vqs0oby',
      slug: 'catering',
      name: 'Catering',
      logo: '/icons/categories_icon/catering.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjm00057qja4kklhryt',
      slug: 'penyewaan-gaun-dan-jas',
      name: 'Penyewaan Gaun dan Jas',
      logo: '/icons/categories_icon/penyewaanGaunDanJas.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwz95000g7qjans3ytg5d',
      slug: 'undangan',
      name: 'Undangan',
      logo: '/icons/categories_icon/undangan.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjp00087qjav2bpjn02',
      slug: 'souvenir',
      name: 'Souvenir',
      logo: '/icons/categories_icon/souvenir.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjq000a7qjamzo7nrh5',
      slug: 'hiburan',
      name: 'Hiburan',
      logo: '/icons/categories_icon/hiburan.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjp00077qja9iunhtl7',
      slug: 'mc',
      name: 'MC',
      logo: '/icons/categories_icon/mc.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyhl00037qjav3t9wgt1',
      slug: 'penyewaan-tempat',
      name: 'Penyewaan Tempat',
      logo: '/icons/categories_icon/tempat.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyrm000f7qjahk2alanu',
      slug: 'transportasi',
      name: 'Transportasi',
      logo: '/icons/categories_icon/transportasi.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjo00067qja7espnoqh',
      slug: 'konsultasi-pernikahan',
      name: 'Konsultasi Pernikahan',
      logo: '/icons/categories_icon/konsultasi.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyjp00097qjagjrnn7kz',
      slug: 'penataan-rambut',
      name: 'Penataan Rambut',
      logo: '/icons/categories_icon/hairdo.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwypu000d7qjawxkpfvk3',
      slug: 'sound-system-dan-lighting',
      name: 'Sound System dan Lighting',
      logo: '/icons/categories_icon/soundSystem.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
    {
      id: 'cly1iwyq5000e7qjap26efwly',
      slug: 'perawatan-pra-pernikahan',
      name: 'Perawatan Pra-Pernikahan',
      logo: '/icons/categories_icon/praPernikahan.svg',
      description: 'Ini deskripsi tentang kategorinya',
    },
  ];
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
