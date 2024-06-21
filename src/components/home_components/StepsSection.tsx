import { CiFaceSmile } from 'react-icons/ci';
import {
  RiNumber1,
  RiNumber2,
  RiNumber3,
  RiNumber4,
  RiNumber5,
} from 'react-icons/ri';

const StepsSection = () => {
  const steps = [
    {
      icon: <RiNumber1 />,
      title: 'Pilih Jasa',
      description:
        'Pilih kategori jasa yang Anda butuhkan untuk pernikahan, seperti fotografi, dekorasi, atau catering',
    },
    {
      icon: <RiNumber2 />,
      title: 'Kontak Penyedia Jasa',
      description:
        'Hubungi penyedia jasa yang dipilih untuk menanyakan ketersediaan, detail layanan, dan harga.',
    },
    {
      icon: <RiNumber3 />,
      title: 'Buat Pesanan',
      description:
        'Setelah mendapatkan informasi yang diperlukan, buat pesanan dengan penyedia jasa, termasuk mengonfirmasi tanggal, layanan, dan biaya.',
    },
    {
      icon: <RiNumber4 />,
      title: 'Eksekusi Jasa',
      description:
        'Pada hari pernikahan, penyedia jasa akan melaksanakan layanan sesuai kesepakatan.',
    },
    {
      icon: <RiNumber5 />,
      title: 'Konfirmasi Pesanan',
      description:
        'Setelah layanan selesai, konfirmasikan bahwa semua telah dilakukan sesuai perjanjian. Berikan rating dan ulasan untuk penyedia jasa.',
    },
    {
      icon: <CiFaceSmile />,
      title: 'Selesai',
      description:
        'Proses pemesanan jasa selesai. Anda telah mendapatkan layanan yang diperlukan untuk pernikahan Anda.',
    },
  ];

  return (
    <div className='mx-6 mb-32 mt-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-9 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
          Tahapan Pemesanan
        </h2>
        <div className='mx-auto grid grid-cols-1 gap-8 md:grid-cols-6'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='flex flex-col rounded-lg bg-white lg:mx-auto'
            >
              <div className='mb-2 flex'>
                <div className='mr-3 text-xl text-blue-500'>{step.icon}</div>
                <h3 className='font-base text-xl'>{step.title}</h3>
              </div>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;
