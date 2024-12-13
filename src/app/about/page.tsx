import AboutText from '@/components/AboutText'
import Image from 'next/image'
import React from 'react'



const About = () => {
  return (
    <> <div className="relative h-[300px] ">
      <Image
        src="/images/about-1.png"
        alt="Slide"
        width={100} 
        height={100} 
        objectFit="cover"
      />
      <div className="absolute z-30 top-0 left-0 w-full h-full bg-primary opacity-50 flex items-center justify-center ">
      </div>
      <div className="absolute z-30 top-0 left-0 w-full h-full flex items-center justify-center ">
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