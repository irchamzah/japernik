const YouTubeFrame = () => {
  const videoId = "p0s0_4KO9t4";

  return (
    <div className="flex items-center justify-center mt-20 mb-32">
      <div className="w-full max-w-7xl aspect-auto px-5 rounded">
        <iframe
          className="w-full h-[589px] rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          title="YouTube video player"
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default YouTubeFrame;
