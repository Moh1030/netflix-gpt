import React from 'react'

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex items-center justify-center">
      <form className=" w-1/2 grid grid-cols-12 gap-4 mx-auto">
        <input
          type="text"
          placeholder="What do you want to watch?Let's find it for you!"
          className="w-full p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-red-500 col-span-10 "
        />
        <button
          type="submit"
          className=" bg-red-500 text-white py-2 rounded-xl w-full hover:bg-red-700 transition duration-300 col-span-2"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar