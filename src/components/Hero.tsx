import React from 'react'
import photo1 from '../assets/photo-de-home.png'

const Hero = () => {
  return (
    <div id="hero" className="flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40
    text-center w-full overflow-hidden text-gray-700">
      <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84 px] font-medium
      xl:leading-[95px] max-w-5xl bg-gradient-to-r from-[#e65540] to-[#e65540] bg-clip-text text-transparent'>Fête Forum</h1>
      <p className='text-sm sm:text-lg font-medium text-gray-500 max-w-4/5 sm:max-w-lg pb-3'>Candidat au Forum Télécom Paris Octobre 2025</p>
      <div className='relative'>
        <img src={photo1} width={800} height={700} />
      </div>
    </div>
  )
}

export default Hero
