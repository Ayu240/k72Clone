import React from 'react'
import K27 from '../../assets/K27.mp4';


const Video = () => {
  return (
    <div className='h-full w-full'>
      <video autoPlay loop muted className='h-full w-full object-cover ' src={K27} type="video/mp4"></video>
    </div>
  )
}

export default Video