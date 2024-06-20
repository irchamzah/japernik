'use client';

import { useState } from 'react';

const ServiceDescriptionDetail = () => {
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
              About this service
            </div>
            <div
              className={`relative overflow-hidden text-gray-600 ${isExpanded ? 'max-h-full' : 'max-h-48 sm:max-h-24'}`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus, ullam! Nihil officiis, exercitationem consequatur quod
              cumque debitis id dolorem ea autem mollitia praesentium obcaecati
              voluptatem hic omnis aperiam quas assumenda. Mollitia incidunt
              repellat distinctio nobis rerum natus sunt quam! Atque eum magnam
              odit aliquid beatae aliquam quos laboriosam neque quis. Dolores
              libero voluptatum velit dolorum debitis exercitationem ea soluta?
              Non ex iure doloremque nisi in nihil necessitatibus? Rerum vero,
              quisquam saepe quam illum corporis illo impedit, hic itaque labore
              ullam molestias in iure. Architecto sint quas consequuntur
              cupiditate ad, perspiciatis vero expedita assumenda, dolores
              aspernatur necessitatibus earum officia odit laudantium.
              <div
                className={`bg-white-fade absolute bottom-0 h-20 w-full ${isExpanded ? 'hidden' : ''}`}
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
