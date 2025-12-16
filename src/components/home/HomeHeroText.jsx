import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className=' font-[font1] pt-5 text-center '>
      <div className='text-[9.5vw] flex justify-center items-center uppercase leading-[8vw]'>The spark for</div>

      {/* <div className='bg-green-600  text-[9.5vw] flex justify-center items-start uppercase leading-[8vw] '>all 
          <div className=' h-[7vw] w-[20vw] rounded-full -mt-5 overflow-hidden'> <Video /> 
        </div> things</div> */}


      <div className="mt-2 text-[9.5vw] flex justify-center items-start uppercase leading-[8vw] ">
        all
        <div className="h-[7vw] w-[16vw] rounded-full overflow-hidden ">
          <Video />
        </div>
        things
      </div>


      <div className='mt-2 text-[9.5vw] flex justify-center items-center uppercase leading-[8vw] '>creative</div>
    </div>
  )
}

export default HomeHeroText