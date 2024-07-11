const ServiceDescription = ({
  title,
  description,
}: {
  title: string | undefined;
  description: string | undefined;
}) => {
  return (
    <div title='isi title dan description' className='mx-6 my-6'>
      <div className='mx-auto max-w-7xl'>
        <h1 className='mb-1 text-2xl font-semibold capitalize text-gray-600 sm:text-3xl sm:text-gray-800'>
          {title}
        </h1>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  );
};

export default ServiceDescription;
