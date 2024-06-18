import { CiFaceSmile } from 'react-icons/ci';
import { RiNumber1, RiNumber2, RiNumber3 } from 'react-icons/ri';

const StepsSection = () => {
  const steps = [
    {
      icon: <RiNumber1 />,
      title: 'Pilih Layanan',
      description:
        'Pilih layanan yang Anda butuhkan. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!',
    },
    {
      icon: <RiNumber2 />,
      title: 'Jadwalkan',
      description:
        'Tentukan jadwal yang sesuai untuk Anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!',
    },
    {
      icon: <RiNumber3 />,
      title: 'Konfirmasi',
      description:
        'Konfirmasi detail pemesanan Anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!',
    },
    {
      icon: <CiFaceSmile />,
      title: 'Selesai',
      description:
        'Nikmati layanan kami! Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, assumenda!',
    },
  ];

  return (
    <div className='mx-6 mb-32 mt-20'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='mb-9 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
          Tahapan Pemesanan
        </h2>
        <div className='mx-auto grid grid-cols-1 gap-8 md:grid-cols-4'>
          {steps.map((step, index) => (
            <div
              key={index}
              className='flex flex-col rounded-lg bg-white lg:mx-auto'
            >
              <div className='mb-2 flex items-center'>
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
