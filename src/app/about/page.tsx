import AboutText from '@/components/AboutText'
import Image from 'next/image'
import React from 'react'



const About = () => {
  return (
    <> <div className="relative h-[300px] ">
          <div className="absolute z-30 top-0 left-0 w-full h-full opacity-60 bg-[#1B436B] flex items-center justify-center ">
          </div>
      <Image
        src="/images/about-1.png"
        alt="Slide"
       layout='fill'
        objectFit="cover"
      />
      {/* <div className="absolute z-30 top-0 left-0 w-full h-full bg-bg-[#1B436B] opacity-90 flex items-center justify-center ">
      </div> */}
      <div className="absolute z-40 top-0 left-0 w-full h-full flex items-center justify-center ">
        <div
          className="w-[400px]  p-5 rounded flex justify-center items-center opacity-90"
        >
          <p className="text-white text-[25px] text-center tracking-wider leading-6">About Us</p>
        </div>
      </div>
    </div>
      <AboutText />
    </>

  )
}

export default About