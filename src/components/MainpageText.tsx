import { ArrowsIcons } from '@/app/icons'
import Link from 'next/link'
import React from 'react'

const MainpageText = () => {
  return (
    <div className="m-auto py-7 md:w-[70%] px-5 lg:w-[70%]">
      <div className="w-full">
        <h1 className='py-2 text-[20px] md:text-[25px] font-[700] text-primary'>Introduction</h1>
        <p className='md:text-[15px] text-[14px] leading-6 text-justify '>We are a specialized contract advisory firm redefining consultancy for the
          modern global economy. Our expertise includes procurement management, contract and claim
          management, construction support, and legal services. Through data-driven insights, dispute resolution,
          and legal analytics, we deliver high-quality solutions and specialized guidance to help clients thrive in a
          competitive marketplace.</p>
      </div>
      <div className="flex-col mt-10 flex md:text-[15px] text-[14px] font-bold justify-start gap-2 lg:w-[60%] sm:w-[70%] w-[90%]">
        <Link href={"#"} className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center ">Procurement Management Solutions  <ArrowsIcons /> </Link>
        <Link href={"#"} className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center">Contract and Claim Management <ArrowsIcons /></Link>
        <Link href={"#"} className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center">Contract Advisory Services <ArrowsIcons /> </Link>
        <Link href={"#"}className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center" >Construction Management Support <ArrowsIcons /> </Link>
        <Link href={"#"} className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center">Advanced Dispute Resolution and Legal Analytics <ArrowsIcons /></Link>
        <Link href={"#"} className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center">Data-Driven Insights for Business Units <ArrowsIcons /></Link>
        <Link href={"#"} className=" border-b-2 border-gray-600 hover:text-primary py-2 flex items-center">Presentation and Communication <ArrowsIcons /></Link>
      </div>
    </div>
  )
}

export default MainpageText