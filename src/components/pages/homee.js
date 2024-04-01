import React from 'react'

export const HeadB = () => {
  return (
    <div className='bg-black flex flex-col items-center pb-8'>
      <h1 className='text-4xl text-white font-bold'>Country API App</h1>
      <h1 className='text-white mt-8'>This is a simple app that allows you to search for countries and continents using the API.</h1>
      <input type="text" placeholder='Search country By name' className='mt-8 w-96 h-12 pl-4'></input>
    </div>
  )
}
