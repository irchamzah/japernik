const YouTubeFrame = () => {
  const videoId = 'p0s0_4KO9t4';

  return (
    <div className='mx-6 mb-32 mt-20 flex items-center justify-center'>
      <div className='aspect-auto w-full max-w-7xl rounded'>
        <iframe
          className='h-[589px] w-full rounded-lg'
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title='YouTube video player'
          allow='autoplay'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeFrame;
