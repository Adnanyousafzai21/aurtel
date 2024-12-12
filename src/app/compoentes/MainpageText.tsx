import Link from 'next/link'
import React from 'react'

type Props = {}

const MainpageText = (props: Props) => {
  return (
    <div className="m-auto py-5 md:w-[90%] px-5 lg:w-[80%]">
      <div className="w-full">
        <h1 className='py-2  text-3xl font-[700]'>Aurtel Consulting Group</h1>
        <p className='text-[18px] leading-8'>We are a specialized contract advisory firm redefining consultancy for the
          modern global economy. Our expertise includes procurement management, contract and claim
          management, construction support, and legal services. Through data-driven insights, dispute resolution,
          and legal analytics, we deliver high-quality solutions and specialized guidance to help clients thrive in a
          competitive marketplace.</p>
      </div>
      <div className="flex-col flex justify-start gap-2 lg:w-[60%] w-[70%]">
        <Link href={"#"} className="text-[15px] font-bold border-b-2 border-gray-600 py-2">Procurement Management Solutions </Link>
        <Link href={"#"} className="text-[15px] font-bold border-b-2 border-gray-600 py-2">Contract and Claim Management  </Link>
        <Link href={"#"} className="text-[15px] font-bold border-b-2 border-gray-600 py-2">Contract Advisory Services  </Link>
        <Link href={"#"}className="text-[15px] font-bold border-b-2 border-gray-600 py-2" >Construction Management Support </Link>
        <Link href={"#"} className="text-[15px] font-bold border-b-2 border-gray-600 py-2">Advanced Dispute Resolution and Legal Analytics</Link>
        <Link href={"#"} className="text-[15px] font-bold border-b-2 border-gray-600 py-2">Data-Driven Insights for Business Units </Link>
        <Link href={"#"} className="text-[15px] font-bold border-b-2 border-gray-600 py-2">Presentation and Communication </Link>
      </div>
    </div>
  )
}

export default MainpageText