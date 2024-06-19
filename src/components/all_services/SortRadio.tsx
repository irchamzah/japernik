const SortRadio = ({
  options,
  selectedOption,
  onChange,
}: {
  options: { id: string; label: string }[];
  selectedOption: string;
  onChange: (selected: string) => void;
}) => {
  return (
    <>
      {options.map((option) => (
        <label
          htmlFor={option.id}
          title='radio1'
          key={option.id}
          className='mb-3 flex h-16 items-center border p-3 shadow'
        >
          <input
            type='radio'
            id={option.id}
            name='radio-group'
            checked={selectedOption === option.id}
            onChange={() => onChange(option.id)}
            className='mr-2'
          />
          {option.label}
        </label>
      ))}
    </>
  );
};

export default SortRadio;
