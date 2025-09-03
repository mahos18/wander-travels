import React from 'react'
import { FlipLink } from '../components/FlipLinks'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef ,useEffect} from 'react';

const About = () => {
  const bodyref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Timeline for images
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bodyref.current,
          start: "top top",     // when ranch hits top
          end: "+=200%",        // scroll distance
          scrub: true,
          pin: true,            // keep ranch fixed
          markers: true         // remove in production
        }
      });

      // Animate image divs one by one from bottom
      tl.from(".imagediv1", { y: 530, opacity: 0.8, duration: 1 })
        .from(".imagediv3", { y: 530, opacity: 0.8, duration: 1 }, "+=0.3")
        .from(".imagediv2", { y: 530, opacity: 0.8, duration: 1 }, "+=0.3");
    }, bodyref);

    return () => ctx.revert();
  }, []);



  return (
    <div id='ranch' ref={bodyref} className="main h-[100vh] w-[100%] bg-[#EFE5D7] flex flex-col  items-center justify-center ">
      <div className="content1 text-center lg:px-20 h-[40vh] flex flex-col justify-center gap-5">
        <div className="heading  ">WHAT LIVES HERE</div>
        <div className="text-wrapper text-[1.5em] lg:text-[2em] font-bold lg:px-25">Travel is more than a destination — it’s a feeling of freedom.Open skies. Endless roads waiting to be explored. </div>
      </div>
      <div className="content2 text-xl text-center h-[50vh] w-[30vw] relative flex items-start justify-center ">
        <div className="imagediv1 absolute  h-[60%] w-[190%] lg:h-[90%] lg:w-full bg-red-500 rounded-xl rotate-[-8deg] overflow-hidden">
          <img src="/images/2 (3).jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="imagediv3 absolute  h-[60%] w-[190%] lg:h-[90%] lg:w-full bg-red-300 rounded-xl rotate-[-3deg] overflow-hidden">
          <img src="/images/2 (2).jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="imagediv2 absolute  h-[60%] w-[190%] lg:h-[90%] lg:w-full bg-red-400 rounded-xl rotate-[3deg] overflow-hidden">
          <img src="/images/2 (1).jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
      </div>

    </div>
  )
}

export default About
