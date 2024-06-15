import Dropdown from '../ui_components/Dropdown';

const ExploreSection = () => {
  const dropdownDummy1 = [
    {
      label: 'Website Development',
      link: '#',
    },
    {
      label: 'Website Maintenance',
      link: '#',
    },
    {
      label: 'Next JS',
      link: '#',
    },
  ];

  const dropdownDummy2 = [
    {
      label: 'Web Application',
      link: '#',
    },
    {
      label: 'Desktop Application',
      link: '#',
    },
    {
      label: 'Game Development',
      link: '#',
    },
  ];

  const dropdownDummy3 = [
    {
      label: 'Software Development',
      link: '#',
    },
    {
      label: 'AI Development',
      link: '#',
    },
    {
      label: 'APIs & Integrations',
      link: '#',
    },
  ];
  return (
    <section className='mx-6 mt-12'>
      <div className='mx-auto max-w-7xl'>
        <div>
          <h1 className='mb-8 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'>
            Explore Programming & Tech
          </h1>
          <div className='grid gap-7 sm:grid-cols-3 md:grid-cols-4'>
            <Dropdown
              imgSrc='/images/random_image/img1.jpg'
              title='Websites'
              items={dropdownDummy1}
            />
            <Dropdown
              imgSrc='/images/random_image/img2.jpg'
              title='Application Development'
              items={dropdownDummy2}
            />
            <Dropdown
              imgSrc='/images/random_image/img3.jpg'
              title='Software Development'
              items={dropdownDummy3}
            />
            <Dropdown
              imgSrc='/images/random_image/img4.jpg'
              title='Mobile Apps'
              items={dropdownDummy1}
            />
            <Dropdown
              imgSrc='/images/random_image/img5.jpg'
              title='Website Platforms'
              items={dropdownDummy2}
            />
            <Dropdown
              imgSrc='/images/random_image/img6.jpg'
              title='Support & Cybersecurity'
              items={dropdownDummy3}
            />
            <Dropdown
              imgSrc='/images/random_image/img7.jpg'
              title='Blockchain & Cryptocurrency'
              items={dropdownDummy2}
            />
            <Dropdown
              imgSrc='/images/random_image/img8.jpg'
              title='Miscellaneous'
              items={dropdownDummy3}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
