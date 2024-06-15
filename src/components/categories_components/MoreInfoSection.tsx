import { IoIosArrowDown } from 'react-icons/io';
import InfoDropdown from '../ui_components/InfoDropdown';

const MoreInfoSection = () => {
  const dropdownDummy1 = [
    {
      label: 'Graphics & Design',
      link: '#',
    },
    {
      label: 'Digital Marketing',
      link: '#',
    },
    {
      label: 'Writing & Translation',
      link: '#',
    },
  ];

  const dropdownDummy2 = [
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
  ];

  const dropdownDummy3 = [
    {
      label: 'Help & Support',
      link: '#',
    },
    {
      label: 'Trust & Safety',
      link: '#',
    },
    {
      label: 'Learn',
      link: '#',
    },
  ];

  return (
    <div className='border-t py-12'>
      <section className='mx-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-4 sm:grid-cols-3 lg:grid-cols-5'>
            <InfoDropdown menuLabel='Categories' subMenus={dropdownDummy1} />
            <InfoDropdown menuLabel='About' subMenus={dropdownDummy2} />
            <InfoDropdown
              menuLabel='Support and Education'
              subMenus={dropdownDummy3}
            />
            <InfoDropdown menuLabel='Community' subMenus={dropdownDummy3} />
            <InfoDropdown
              menuLabel='Business Solutions'
              subMenus={dropdownDummy3}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfoSection;
