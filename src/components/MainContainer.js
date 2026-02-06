import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';

const MainContainer = () => {
    const mainMovie = useSelector((store) => store.movies?.nowPlayingMovies?.[0]);

if (!mainMovie) return <div className="text-white">Loading...</div>;

const { original_title, overview, id } = mainMovie;


    //console.log(mainMovie);
  return (
    <div className="relative w-screen h-screen">
        <VideoBG movieId={id} />
        <VideoTitle title={original_title} overview={overview} />

    </div>
  )
}

export default MainContainer