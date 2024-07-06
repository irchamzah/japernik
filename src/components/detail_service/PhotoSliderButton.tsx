export default function PhotoSliderButton() {
  return (
    <>
      <button className='absolute bottom-0 left-0 top-0 z-10 -mx-5 my-auto h-10 w-10 rounded-full border bg-white active:bg-gray-100'>
        <FaChevronLeft onClick={prevSlide} className='mx-auto text-gray-500' />
      </button>
      <button className='absolute bottom-0 right-0 top-0 z-10 -mx-5 my-auto h-10 w-10 rounded-full border bg-white active:bg-gray-100'>
        <FaChevronRight onClick={nextSlide} className='mx-auto text-gray-500' />
      </button>
    </>
  );
}
