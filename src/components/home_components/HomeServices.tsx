import Link from 'next/link';
import {
  FaBasketballBall,
  FaBattleNet,
  FaBuysellads,
  FaConciergeBell,
  FaCouch,
} from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import { MdBluetoothSearching } from 'react-icons/md';
import { SiElasticsearch, SiOpensearch } from 'react-icons/si';

const HomeServices = () => {
  const services = [
    {
      link: '/categories',
      icon: <FiCamera className='w-full text-5xl' />,
      Description: 'Detail Categories',
    },
    {
      link: '/all_services',
      icon: <MdBluetoothSearching className='w-full text-5xl' />,
      Description: 'All Services',
    },
    {
      link: '/detail_service',
      icon: <SiElasticsearch className='w-full text-5xl' />,
      Description: 'Service Name',
    },
    {
      link: '#',
      icon: <FaBasketballBall className='w-full text-5xl' />,
      Description: 'Service Name',
    },
    {
      link: '#',
      icon: <FaBattleNet className='w-full text-5xl' />,
      Description: 'Service Name',
    },
    {
      link: '#',
      icon: <FaBuysellads className='w-full text-5xl' />,
      Description: 'Service Name',
    },
    {
      link: '#',
      icon: <FaConciergeBell className='w-full text-5xl' />,
      Description: 'Service Name',
    },
    {
      link: '#',
      icon: <FaCouch className='w-full text-5xl' />,
      Description: 'Service Name',
    },
    {
      link: '#',
      icon: <SiOpensearch className='w-full text-5xl' />,
      Description: 'Service Name',
    },
  ];

  return (
    <>
      <div className='mx-6'>
        <section className='mx-auto mb-12 grid max-w-7xl grid-cols-3 gap-x-4 gap-y-7 py-5 text-gray-600 md:grid-cols-4 lg:grid-cols-9'>
          {services.map((service, index) => (
            <Link key={index} href={`${service.link}`}>
              <div className='flex flex-col items-center'>
                <div className='relative'>
                  <div className='relative rounded-2xl border border-gray-200 bg-white p-7 hover:border-blue-500'>
                    {service.icon}
                  </div>
                  <div className='absolute -inset-1 -z-10 rounded-2xl bg-gray-100 blur-sm'></div>
                </div>
                <div className='mt-2 text-center text-sm font-bold'>
                  {service.Description}
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
