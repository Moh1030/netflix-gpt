import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggestion from './GptMoviesSuggestion'
import { BG_IMG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div className="text-white">
      <div className="absolute -z-10 w-full h-screen">
        <img
          src={BG_IMG_URL}
          className="w-full h-screen object-cover"
          alt="Netflix background"
        />
      </div>
      <GptSearchBar />
      <GptMoviesSuggestion />
    </div>
  );
}

export default GptSearch