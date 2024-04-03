import React from 'react'

export const Footer = () => {
  return (
    <div>
        <div className=" bg-slate-50 h-24 w-full flex dm:flex-row sm:flex-row flex-col sm:justify-around md:justify-around sm:items-center md:items-center">
        <h1 className="text-4xl text-blue-600 font-bold">Logoipsum</h1>
        <p className='text-gray-600 mt-4'>Copyright &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
    </div>
  )
}
