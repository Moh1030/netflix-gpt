const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center px-24 pt-32 text-white bg-gradient-to-r from-black via-black/70 to-transparent z-20">
      
      <h1 className="text-6xl font-bold max-w-2xl leading-tight">
        {title}
      </h1>

      <p className="mt-4 text-lg max-w-xl text-gray-200">
        {overview}
      </p>

      <div className="mt-6 flex gap-4">
        <button className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-opacity-80 transition">
          ▶ Play
        </button>

        <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded-md font-semibold hover:bg-opacity-50 transition">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
