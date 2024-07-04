'use client';

import { useState } from 'react';

const ProfileDescription = ({
  description,
}: {
  description: string | undefined;
}) => {
  // toggle buat deskripsi user
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <div className='mt-4 text-gray-600'>
        <div
          className={`relative overflow-hidden ${isExpanded ? 'max-h-full' : 'max-h-48 sm:max-h-24'}`}
        >
          {description}
          <div
            className={`absolute bottom-0 h-20 w-full bg-white-fade ${isExpanded ? 'hidden' : ''}`}
          ></div>
        </div>
      </div>
      <button
        onClick={toggleExpansion}
        className={`mt-4 font-medium active:bg-gray-100`}
      >
        {isExpanded ? '- See Less' : '+ See More'}
      </button>
    </>
  );
};

export default ProfileDescription;
