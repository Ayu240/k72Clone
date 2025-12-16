import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Stair from "../components/comman/Stair";
import LocomotiveScroll from 'locomotive-scroll';
import BottomPart from "../components/comman/BottomPart";

const Agence = () => {

  const locomotiveScroll = new LocomotiveScroll();

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 30%',
        end: 'top -78%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className="section1 py-1">

        <div
          ref={imageDivRef}
          className="
          absolute overflow-hidden
          h-[45vw] sm:h-[35vw] lg:h-[20vw]
          w-[40vw] sm:w-[28vw] lg:w-[16vw]
          top-[40vw] sm:top-[32vw] lg:top-[14vw]
          left-[10%] sm:left-[20%] lg:left-[29%]
          rounded-3xl
          "
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
        </div>

        <div className="relative font-[font2]">
          <div className="mt-[65vh] sm:mt-[55vh]">
            <h1 className="text-[28vw] sm:text-[22vw] leading-[24vw] sm:leading-[18vw] text-center text-black">
              SEVEN7Y
              <br /> TWO
            </h1>
          </div>

          <div className="lg:pl-[40%] mt-10 lg:mt-2 font-[font1] p-3 sm:p-4 text-black">
            <p className="text-xl sm:text-3xl lg:text-6xl leading-snug sm:leading-tight lg:leading-14">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We're inquisitive and open-minded,
              and we make sure creativity crowds out ego from every corner.
              A brand is a living thing, with values, a personality and a story.
              If we ignore that, we can achieve short-term success,
              but not influence that goes the distance.
              We bring that perspective to every brand story we help tell.
            </p>
          </div>

        </div>
      </div>

      <div className="section2 h-screen"></div>

      <BottomPart />
    </div>
  )
}

export default Agence
