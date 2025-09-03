import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { useRef ,useEffect,useState} from 'react';

const Features = () => {
  const bodyref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth <= 768 || /Mobi|Android/i.test(navigator.userAgent)) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: bodyref.current,
          start: isMobile ? "top 50%" : "top 80%",   
          end: isMobile ? "+=150%" : "+=300%",       
          scrub: 0.9
          
        }
      });

      // Animate image divs one by one from bottom
      tl.from(".featurecard1 .featureimg", { x: -530, opacity: 0, duration: 0.5 },"1")
        .from(".featurecard1 .featurecontent", { x: 530, opacity: 0, duration: 0.5,pin:true },"1")
        .from(".featurecard2 .featurecontent", { x: -530, opacity: 0, duration: 0.5 },"2")
        .from(".featurecard2 .featureimg", { x: 530, opacity: 0, duration: 0.5 },"2")
        .from(".featurecard3 .featureimg", { x: -530, opacity: 0, duration: 0.5 },"3")
        .from(".featurecard3 .featurecontent", { x: 530, opacity: 0, duration: 0.5 },"3");
    }, bodyref);

    return () => ctx.revert()
  }, [isMobile]);


  return (
    <div id='features' ref={bodyref} className="featurecard min-h-screen w-[100%] bg-[#EFE5D7] flex flex-col gap-5 justify-center items-center pt-5 py-10 overflowX-hidden">
      <div className="page-head  h-[12vh] lg:h-[25vh] w-[80vw] lg:w-[50vw]  text-center flex flex-col justify-between ">
        <h2 className='font1'>the Things That Still Matter</h2>
        <h1 className='font2 lg:text-[2em] font-weight-200'>Wander invites you to slow down — to move with purpose, to remember what life feels like when it breathes with meaning.</h1>
      </div>


      <div className="featurecard1 min-h-[50vh] lg:h-[90vh] w-[95vw] lg:w-[80vw]  m-5 p-5 grid grid-cols-1 lg:grid-cols-2  rounded-xl ">
        <div className="featureimg  h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/mountain.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="featurecontent   lg:h-[100%] lg:w-[100%] flex  flex-row items-center justify-center ">
            <div className="text-wrapper  m-15 flex flex-col items-center justify-end">
              <h1 className='text-[1.5em] lg:text-[2.5em] main '>THE LAND </h1>
              <img src="/images/divider.png" className='scale-[0.7]' alt="________" />
              <p className='text-[1.1em] text-center '>From mountains that breathe silence to coasts that sing with waves — the land carries stories older than time.</p>
            </div> 
        </div>
      </div>

      <div className="featurecard2 min-h-[50vh] lg:h-[90vh] w-[95vw] lg:w-[80vw]  m-5 p-5 grid grid-cols-1 lg:grid-cols-2  rounded-xl">
        <div className="featureimg lg:hidden flex h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/spirit.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="featurecontent   lg:h-[100%] lg:w-[100%] flex  flex-row items-center justify-center px-2">
            <div className="text-wrapper  m-15 flex flex-col items-center justify-end">
              <h1 className='  text-[1.5em] lg:text-[2.5em] main '>THE SPIRIT </h1>
              <img src="/images/divider.png" className='scale-[0.7]' alt="________" />
              <p className='text-[1.1em] text-center '>Every journey is more than miles traveled. It’s the spirit of discovery — finding yourself while finding the world.</p>
            </div> 
        </div>
        <div className="featureimg lg:flex hidden h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/spirit.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="featurecard3 min-h-[50vh] lg:h-[90vh] w-[95vw] lg:w-[80vw]  m-5 p-5 grid grid-cols-1 lg:grid-cols-2  rounded-xl ">
        <div className="featureimg  h-[25vh] w-full lg:h-[100%] lg:w-[1/2] overflow-hidden rounded-2xl">
          <img src="/images/vision.jpg" alt="cover" className="h-full w-full object-cover" />
        </div>
        <div className="featurecontent   lg:h-[100%] lg:w-[100%] flex flex-row items-center justify-center  ">
            <div className="text-wrapper  m-15 flex flex-col items-center justify-center">
              <h1 className='text-[1.5em] lg:text-[2.5em] main '>THE VISION </h1>
              <img src="/images/divider.png" className='scale-[0.7]' alt="________" />
              <p className='text-[1.1em] text-center '>A future of travel that is mindful, modern, and meaningful. Where journeys connect people, places, and purpose.</p>
            </div> 
        </div>
      </div>
    </div>
  )
}

export default Features
