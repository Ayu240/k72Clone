// import React, { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';

// const BottomPart = () => {
//     const navigate = useNavigate();
//     const handle = [
//         'fb', 'ig', 'in', 'be'
//     ]

//     const handleClick = () => {
//         navigate('/contacts');
//     }

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     }

//     const lastLine = [
//         'privacypolicy', 'privacynotice', 'EthicsReport', 'consentchoices'
//     ]

//     const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentTime(new Date().toLocaleTimeString());
//         }, 1000);

//         return () => clearInterval(timer); // Cleanup on unmount
//     }, []);


//     return (
//         <div className="bg-black p-2 w-full  ">
//             <div className="w-full flex justify-between mb-[40vh]">

//                 <div className='w-full h-full flex gap-2'>
//                     {handle.map((elem, idx) => {
//                         return <div key={idx} className=' rounded-2xl flex items-center justify-center  '>
//                             <h2 className='text-white text-2xl lg:text-6xl font-[font2] pt-2 px-5 rounded-[4vw] 
//                             hover:border-[#d2fc51] border-white border-2 uppercase hover:text-[#d2fc51] cursor-pointer'>{elem}</h2>
//                         </div>
//                     })}
//                 </div>

//                 <div className=' rounded-2xl flex items-center justify-center'>
//                     <h2 className='text-white hover:text-[#d2fc51] text-2xl lg:text-6xl font-[font2] pt-2 px-5 rounded-[4vw] border-white 
//                     hover:border-[#d2fc51] border-2 uppercase cursor-pointer' onClick={handleClick}>contact</h2>
//                 </div>

//             </div>

//             <div className='w-full flex items-center justify-center'>
//                 <h2 className='text-xl font-[font1] text-white'>MONTREAL_{currentTime}</h2>
//             </div>

//             <div className="flex items-center justify-center gap-5">
//                 {lastLine.map((elem, idx) => {
//                     return <div key={idx} className='cursor-pointer mt-2'>
//                         <h2 className='text-sm lg:text-md text-white font-[font1] uppercase hover:text-[#d2fc51]'>{elem}</h2>
//                     </div>
//                 })}
//             </div>
//             <h2 className='text-white text-center uppercase hover:text-[#d2fc51] mt-3 cursor-pointer' onClick={scrollToTop}>back to top</h2>

//         </div>
//     )
// }

// export default BottomPart



import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const BottomPart = () => {
    const navigate = useNavigate();
    const handle = ['fb', 'ig', 'in', 'be']

    const handleClick = () => {
        navigate('/contacts');
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const lastLine = ['privacypolicy', 'privacynotice', 'EthicsReport', 'consentchoices']

    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-black p-3 sm:p-4 w-full">
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mb-[25vh] lg:mb-[40vh]">

                <div className="w-full flex flex-wrap gap-2 justify-center lg:justify-start">
                    {handle.map((elem, idx) => {
                        return (
                            <div key={idx} className="rounded-2xl flex items-center justify-center">
                                <h2 className="text-white text-xl sm:text-2xl lg:text-6xl font-[font2] pt-2 px-4 sm:px-5 rounded-[8vw] lg:rounded-[4vw]
                                hover:border-[#d2fc51] border-white border-2 uppercase hover:text-[#d2fc51] cursor-pointer">
                                    {elem}
                                </h2>
                            </div>
                        )
                    })}
                </div>

                <div className="rounded-2xl flex items-center justify-center">
                    <h2
                        className="text-white hover:text-[#d2fc51] text-xl sm:text-2xl lg:text-6xl font-[font2] pt-2 px-4 sm:px-5 rounded-[8vw] lg:rounded-[4vw]
                        border-white hover:border-[#d2fc51] border-2 uppercase cursor-pointer"
                        onClick={handleClick}
                    >
                        contact
                    </h2>
                </div>

            </div>

            <div className="w-full flex items-center justify-center">
                <h2 className="text-base sm:text-lg lg:text-xl font-[font1] text-white">
                    MONTREAL_{currentTime}
                </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2">
                {lastLine.map((elem, idx) => {
                    return (
                        <div key={idx} className="cursor-pointer">
                            <h2 className="text-xs sm:text-sm lg:text-md text-white font-[font1] uppercase hover:text-[#d2fc51]">
                                {elem}
                            </h2>
                        </div>
                    )
                })}
            </div>

            <h2
                className="text-white text-center text-sm sm:text-base uppercase hover:text-[#d2fc51] mt-4 cursor-pointer"
                onClick={scrollToTop}
            >
                back to top
            </h2>

        </div>
    )
}

export default BottomPart
