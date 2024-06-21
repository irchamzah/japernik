import { IoIosArrowDown } from 'react-icons/io';
import InfoDropdown from '../ui_components/InfoDropdown';

const MoreInfoSection = () => {
  const categories = [
    {
      label: 'Make Up',
      link: '/all_services',
    },
    {
      label: 'Wedding Organizer',
      link: '/all_services',
    },
    {
      label: 'Fotografi dan Videografi',
      link: '/all_services',
    },
    {
      label: 'Dekorasi',
      link: '/all_services',
    },
    {
      label: 'Catering',
      link: '/all_services',
    },
    {
      label: 'Penyewaan Gaun dan Jas',
      link: '/all_services',
    },
    {
      label: 'Undangan',
      link: '/all_services',
    },
    {
      label: 'Souvenir',
      link: '/all_services',
    },
    {
      label: 'Hiburan',
      link: '/all_services',
    },
    {
      label: 'MC',
      link: '/all_services',
    },
    {
      label: 'Penyewaan Tempat',
      link: '/all_services',
    },
    {
      label: 'Transportasi',
      link: '/all_services',
    },
    {
      label: 'Konsultasi Pernikahan',
      link: '/all_services',
    },
    {
      label: 'Penataan Rambut (Hairdo)',
      link: '/all_services',
    },
    {
      label: 'Sound System dan Lighting',
      link: '/all_services',
    },
    {
      label: 'Perawatan Pra-Pernikahan',
      link: '/all_services',
    },
  ];

  const about = [
    {
      label: 'Careers',
      link: '#',
    },
    {
      label: 'Press & News',
      link: '#',
    },
    {
      label: 'Partnerships',
      link: '#',
    },
    {
      label: 'Privacy Policy',
      link: '#',
    },
    {
      label: 'Terms of Service',
      link: '#',
    },
    {
      label: 'Intellectual Property Claims',
      link: '#',
    },
    {
      label: 'Investor Relations',
      link: '#',
    },
  ];

  const support = [
    {
      label: 'Help & Support',
      link: '#',
    },
    {
      label: 'Trust & Safety',
      link: '#',
    },
    {
      label: 'Selling on Japernik',
      link: '#',
    },
    {
      label: 'Buying on Japernik',
      link: '#',
    },
    {
      label: 'Japernik Guides',
      link: '#',
    },
    {
      label: 'Learn',
      link: '#',
    },
  ];

  const community = [
    {
      label: 'Customer Success Stories',
      link: '#',
    },
    {
      label: 'Community Hub',
      link: '#',
    },
    {
      label: 'Forum',
      link: '#',
    },
    {
      label: 'Events',
      link: '#',
    },
    {
      label: 'Blog',
      link: '#',
    },
    {
      label: 'Creators',
      link: '#',
    },
    {
      label: 'Affiliates',
      link: '#',
    },
    {
      label: 'Podcast',
      link: '#',
    },
    {
      label: 'Invite a Friend',
      link: '#',
    },
    {
      label: 'Become a Seller',
      link: '#',
    },
    {
      label: 'Community Standards',
      link: '#',
    },
  ];

  const businessSolutions = [
    {
      label: 'About Business Solutions',
      link: '#',
    },
    {
      label: 'Japernik Pro',
      link: '#',
    },
    {
      label: 'Japernik Certified',
      link: '#',
    },
    {
      label: 'Become an Agency',
      link: '#',
    },
    {
      label: 'Japernik Enterprise',
      link: '#',
    },
    {
      label: 'Clear Voice',
      link: '#',
    },
    {
      label: 'Working Not Working',
      link: '#',
    },
    {
      label: 'Contact Sales',
      link: '#',
    },
  ];

  return (
    <div className='border-t py-12'>
      <section className='mx-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-5'>
            <InfoDropdown menuLabel='Categories' subMenus={categories} />
            <InfoDropdown menuLabel='About' subMenus={about} />
            <InfoDropdown
              menuLabel='Support and Education'
              subMenus={support}
            />
            <InfoDropdown menuLabel='Community' subMenus={community} />
            <InfoDropdown
              menuLabel='Business Solutions'
              subMenus={businessSolutions}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfoSection;
