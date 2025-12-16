import React from 'react'


const ProjetsCrads = (props) => {
    

    return (
        <>

            <div className='w-1/2 group h-full hover:rounded-4xl overflow-hidden transition-all relative duration-500'>
                <img className='h-full w-full object-cover ' src={props.image1} alt="" />

                <div className='opacity-0 group-hover:opacity-100 absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/10 '>
                    <h2 className='uppercase text-2xl text-white font-[font2] pt-1 px-0 rounded-full border-white border-2 '>Vior le project </h2>
                </div>
            </div>

            <div className='w-1/2 group h-full hover:rounded-4xl overflow-hidden transition-all relative duration-500'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 absolute h-full w-full flex items-center justify-center top-0 left-0 bg-black/10 '>
                    <h2 className='uppercase text-2xl text-white font-[font2] pt-1 px-0 rounded-full border-white border-2 '>Vior le project </h2>
                </div>
            </div>

        </>
    )
}

export default ProjetsCrads