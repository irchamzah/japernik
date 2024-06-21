import Link from 'next/link';
import { BiTrim } from 'react-icons/bi';
import { BsSoundwave } from 'react-icons/bs';
import { CiMicrophoneOn } from 'react-icons/ci';
import { FaGifts, FaPhotoVideo } from 'react-icons/fa';
import { GiAmpleDress, GiLipstick } from 'react-icons/gi';
import { IoCheckmarkDoneOutline, IoFastFoodOutline } from 'react-icons/io5';
import {
  MdEmojiTransportation,
  MdOutlineInsertInvitation,
  MdOutlineMapsHomeWork,
} from 'react-icons/md';
import { PiGuitar, PiHairDryerLight } from 'react-icons/pi';
import { RiSpeakLine } from 'react-icons/ri';
import { SiAwsorganizations } from 'react-icons/si';

const HomeServices = () => {
  const services = [
    {
      icon: <GiLipstick className='w-full text-5xl' />,
      label: 'Make Up',
      link: '/all_services',
    },
    {
      icon: <SiAwsorganizations className='w-full text-5xl' />,
      label: 'Wedding Organizer',
      link: '/all_services',
    },
    {
      icon: <FaPhotoVideo className='w-full text-5xl' />,
      label: 'Fotografi dan Videografi',
      link: '/all_services',
    },
    {
      icon: <BiTrim className='w-full text-5xl' />,
      label: 'Dekorasi',
      link: '/all_services',
    },
    {
      icon: <IoFastFoodOutline className='w-full text-5xl' />,
      label: 'Catering',
      link: '/all_services',
    },
    {
      icon: <GiAmpleDress className='w-full text-5xl' />,
      label: 'Penyewaan Gaun dan Jas',
      link: '/all_services',
    },
    {
      icon: <MdOutlineInsertInvitation className='w-full text-5xl' />,
      label: 'Undangan',
      link: '/all_services',
    },
    {
      icon: <FaGifts className='w-full text-5xl' />,
      label: 'Souvenir',
      link: '/all_services',
    },
    {
      icon: <PiGuitar className='w-full text-5xl' />,
      label: 'Hiburan',
      link: '/all_services',
    },
    {
      icon: <CiMicrophoneOn className='w-full text-5xl' />,
      label: 'MC',
      link: '/all_services',
    },
    {
      icon: <MdOutlineMapsHomeWork className='w-full text-5xl' />,
      label: 'Penyewaan Tempat',
      link: '/all_services',
    },
    {
      icon: <MdEmojiTransportation className='w-full text-5xl' />,
      label: 'Transportasi',
      link: '/all_services',
    },
    {
      icon: <RiSpeakLine className='w-full text-5xl' />,
      label: 'Konsultasi Pernikahan',
      link: '/all_services',
    },
    {
      icon: <PiHairDryerLight className='w-full text-5xl' />,
      label: 'Penataan Rambut (Hairdo)',
      link: '/all_services',
    },
    {
      icon: <BsSoundwave className='w-full text-5xl' />,
      label: 'Sound System dan Lighting',
      link: '/all_services',
    },
    {
      icon: <IoCheckmarkDoneOutline className='w-full text-5xl' />,
      label: 'Perawatan Pra-Pernikahan',
      link: '/all_services',
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
                  {service.label}
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
