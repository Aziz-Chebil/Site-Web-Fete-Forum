import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-4sm:px-12
    lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50'>
      
        <img src={logo} width={120} height={120} alt="Logo"/>
        <div className='text-gray-700 text-lg max-sm:w-60 
        max-sm:pl-10 max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen 
        max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white
        max-sm:pt-20 flex sm:items-center gap-5 transition-all'>
            <a href="#Home" className="sm:hover:border-b">Home</a>
            <a href="#évènements" className="sm:hover:border-b">Evénements</a>
            <a href="#bureau" className="sm:hover:border-b">Bureau</a>
            <a href="#blog  " className="sm:hover:border-b">Blog</a>


        </div>
        

    </div>
  )
}

export default Navbar
