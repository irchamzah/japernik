const CheckBoxFilter = ({ id, label }: { id: string; label: string }) => {
  return (
    <label htmlFor={id} className=''>
      <div className='mb-4 flex rounded border px-3 py-4'>
        <input id={id} type='checkbox' className='mr-3' />
        <div className='flex w-full items-center justify-between'>
          <p className='text-sm text-gray-600'>{label}</p>
          <p className='text-gray-500'>(12,462)</p>
        </div>
      </div>
    </label>
  );
};

export default CheckBoxFilter;
