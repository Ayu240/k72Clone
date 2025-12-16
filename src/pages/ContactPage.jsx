import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import LocomotiveScroll from 'locomotive-scroll'

const ContactPage = () => {
    const contactRef = useRef(null)
    const marqueeRef = useRef(null)

    useEffect(() => {
        // Initialize Locomotive Scroll for smooth infinite-like scrolling
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            lerp: 0.05 // Lower for smoother, more "infinite" feel
        })

        // Cleanup on unmount
        return () => {
            scroll.destroy()
        }
    }, [])

    const locomotiveScroll = new LocomotiveScroll();

    useEffect(() => {
        const marquee = marqueeRef.current
        const distance = marquee.scrollWidth / 2

        gsap.to(marquee, {
            x: -distance,
            duration: 10,        // decreased for faster speed
            ease: "linear",
            repeat: -1
        })
    }, [])

    const lastLine = [
        'fb', 'ig', 'in', 'be'
    ]



    return (
        <div data-scroll-container className="w-full h-full bg-black text-white overflow-hidden">

            {/* HERO TEXT */}
            <div className="w-full h-full bg-black text-white ">
                <h1 className="font-[font1] text-center
                  text-[10vw]
                  leading-[0.9]
                  uppercase
                  tracking-[-0.02em]
                  pl-[5vw]">

                    <span className='mt-3'>to talk</span><br />
                    about<br />
                    your<br />
                    project
                </h1>
            </div>


            {/* MOVING STRIP */}
            <div ref={contactRef} className="w-full h-screen flex items-center mb-20 overflow-hidden">
                <div className="w-[200vw] bg-[#d2fc51] -rotate-4 py-[2vh]">
                    <div
                        ref={marqueeRef}
                        className="flex gap-[5vw]"
                    >
                        <h1 className="whitespace-nowrap text-black font-[font1] text-[20vh] tracking-tighter leading-[14vh] mt-3 uppercase">
                            hello@k72.ca▽<span>hello@k72.ca▽</span>hello@k72.ca▽<span>hello@k72.ca▽</span>
                        </h1>
                    </div>

                </div>

            </div>

                <h2 className=' text-2xl uppercase text-center mb-4'>Follow us</h2>
            <div className='w-full h-full flex gap-2 items-center justify-center'>

                {lastLine.map((elem, idx) => {
                    return <div key={idx} className=' rounded-2xl flex items-center justify-center  '>
                        <h2 className='text-white text-2xl lg:text-6xl font-[font2] -pt-2 px-5 rounded-[4vw]
                             hover:border-[#d2fc51] border-white border-2  uppercase hover:text-[#d2fc51] '>{elem}</h2>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ContactPage
