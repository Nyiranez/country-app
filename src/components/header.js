import React from 'react'
import menu from './images/menu1.png'
import{HeadB} from './pages/homee'



export const Header = () => {
  return (
    <div>
       <div className="w-full h-40 bg-black flex flex-row justify-around items-center " >
        <div>
         
        </div>
                    <h1 className="text-4xl text-blue-500 sm:opacity:0 md:opacity-100 opacity-0">Logoipsum</h1>
                    <h1 className='text-white md:opacity-100 sm:opacity-0 opacity-0'>Countries</h1>
                    <img src={menu} alt="" className='w-10 h-10 md:hidden '></img>
                   
                
                </div>
                <HeadB/>
    </div>
  )
}
