import FaqDropdown from './FaqDropdown';

const FaqSection = () => {
  const faqdropdownitems = {
    title: 'What is Web programming?',
    description:
      'Web programming or development use code to focus on the website functionality and ensure it works and is easy to use. It involves markup, writing, network security and coding which is client and server side. The most popular web programming languages are HTML, XML, JavaScript, PHP, ASP.Net and Python.',
  };
  const faqdropdownitems1 = {
    title: 'How do I choose the right freelance programmer for my project?',
    description:
      'With so many programming services, it’s a challenge to choose the right programmer. Formulate a clear brief, decide on a budget, deadlines and scope. Select a programmer based not only on their skills and experience but also on how well you might work and communicate.',
  };
  const faqdropdownitems2 = {
    title: 'Do I need to prepare something for my programmer?',
    description:
      'Yes, good documentation and a clear brief are crucial for the success of getting the desired result for your project. Formulate your initial high level idea and brainstorm it until you have a clear vision. Next, turn your idea into detailed functionality requirements for the backend programming and detail your technical requirements (platform, devices etc.) Also add non-functional requirements e.g. performance, security, load and clearly specify the scope of the project.',
  };
  return (
    <div className='mt-12 bg-gray-100 py-12'>
      <section className='mx-6 mb-12'>
        <div className='mx-auto max-w-7xl'>
          <div>
            <h1
              title='ini judul'
              className='mb-4 text-2xl font-semibold text-gray-900 md:text-3xl lg:text-4xl'
            >
              Programming & Tech FAQs
            </h1>
            <FaqDropdown
              title={faqdropdownitems.title}
              description={faqdropdownitems.description}
            />
            <FaqDropdown
              title={faqdropdownitems1.title}
              description={faqdropdownitems1.description}
            />
            <FaqDropdown
              title={faqdropdownitems2.title}
              description={faqdropdownitems2.description}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FaqSection;
