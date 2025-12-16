import React from 'react'
import ProjetsCrads from '../components/project/ProjetsCrads'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import LocomotiveScroll from 'locomotive-scroll';
import BottomPart from '../components/comman/BottomPart';



const Projects = () => {


  const locomotiveScroll = new LocomotiveScroll();

  const projects = [
    {
      image1: 'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
      image2: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
    }, {

      image1: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
      image2: 'https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      image2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    },
    {
      image1: 'https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860',
      image2: 'https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f'
    },


  ]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'top -160%',
        scrub: true
      }
    })
  })

  return (
    <div className="p-[2px]">
      <div className=" pt-[45vh] mt-4">
        <h2 className='font-[font2] text-[9vw] lg:text-[15vw] uppercase tracking-tight'>WOKs</h2>
      </div>

      <div className='lol lg:-mt-22'>
        {
          projects.map(function (elem, idx) {
            return <div key={idx} className='hero w-full h-[400px] lg:h-[400px] mb-4 flex gap-2 '>
              <ProjetsCrads image1={elem.image1} image2={elem.image2} />
            </div>
          })
        }

      </div>
      <BottomPart />
    </div>
  )
}

export default Projects