import { IoIosArrowDown } from 'react-icons/io';
import InfoDropdown from '../ui_components/InfoDropdown';
import { Category } from '@/lib/actions/category.actions';

const MoreInfoSection = ({ categories }: { categories: Category[] }) => {
  const about = [
    {
      id: '',
      logo: '',
      name: 'Careers',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Press & News',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Partnerships',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Privacy Policy',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Terms of Service',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Intellectual Property Claims',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Investor Relations',
      slug: '#',
    },
  ];

  const support = [
    {
      id: '',
      logo: '',
      name: 'Help & Support',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Trust & Safety',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Selling on Japernik',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Buying on Japernik',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Japernik Guides',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Learn',
      slug: '#',
    },
  ];

  const community = [
    {
      id: '',
      logo: '',
      name: 'Customer Success Stories',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Community Hub',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Forum',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Events',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Blog',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Creators',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Affiliates',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Podcast',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Invite a Friend',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Become a Seller',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Community Standards',
      slug: '#',
    },
  ];

  const businessSolutions = [
    {
      id: '',
      logo: '',
      name: 'About Business Solutions',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Japernik Pro',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Japernik Certified',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Become an Agency',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Japernik Enterprise',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Clear Voice',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Working Not Working',
      slug: '#',
    },
    {
      id: '',
      logo: '',
      name: 'Contact Sales',
      slug: '#',
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
