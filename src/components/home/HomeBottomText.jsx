import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-0">
      <div className="flex w-full justify-between flex-col lg:flex-row">
        <div className="w-full lg:w-1/2"></div>

        <div className="w-full sm:w-[70vw] md:w-[50vw] lg:w-[20vw]">
          <p className="text-xs sm:text-sm p-2 leading-snug sm:leading-tight">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that builds brands from every angle.
            Today, tomorrow and years from now.
            We think the best sparks fly when comfort zones get left behind and friction infuses our strategies,
            brands and communications with real feeling. We’re transparent,
            honest and say what we mean,
            and when we believe in something, we’re all in.
          </p>
        </div>
      </div>

      <div className="section2 font-[font2] flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-2 mb-1.5 mt-6">
        <div className="flex items-end leading-[10vw] sm:leading-[7vw] lg:leading-[5.5vw] border-2 border-white rounded-full px-6 sm:px-9 hover:text-[#d2fc51] hover:border-[#d2fc51]">
          <Link
            className="uppercase text-[10vw] sm:text-[7vw] lg:text-[6vw] mt-[3vw] sm:mt-[2vw] lg:mt-[1vw] -mb-1"
            to="/projects"
          >
            Work
          </Link>
        </div>

        <div className="flex items-end leading-[10vw] sm:leading-[7vw] lg:leading-[5.5vw] border-2 border-white rounded-full px-6 sm:px-9 hover:text-[#d2fc51] hover:border-[#d2fc51]">
          <Link
            className="uppercase text-[10vw] sm:text-[7vw] lg:text-[6vw] mt-[3vw] sm:mt-[2vw] lg:mt-[1vw] -mb-1"
            to="/agence"
          >
            Agence
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBottomText
