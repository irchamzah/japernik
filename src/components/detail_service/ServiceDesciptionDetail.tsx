'use client';

import { useState } from 'react';

const ServiceDescriptionDetail = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-6 xl:mx-0'>
          <div className='mb-6'>
            <div className='mb-6 text-xl font-bold text-gray-700'>
              Tentang jasa ini
            </div>
            <div
              className={`relative overflow-hidden text-gray-600 ${isExpanded ? 'max-h-full' : 'max-h-48 sm:max-h-24'}`}
            >
              {description}
              <div
                className={`absolute bottom-0 h-20 w-full bg-white-fade ${isExpanded ? 'hidden' : ''}`}
              ></div>
            </div>
            <button
              onClick={toggleExpansion}
              className={`mt-4 font-medium active:bg-gray-100`}
            >
              {isExpanded ? '- See Less' : '+ See More'}
            </button>
          </div>
          <hr className='mb-6' />
        </div>
      </div>
    </>
  );
};

export default ServiceDescriptionDetail;
