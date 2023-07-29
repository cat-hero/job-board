import React from 'react'
import { SeachForm } from '@/components/SearchForm'
export const Discover: React.FC = () => {
  return (
    <>
      <div className="h-[500px] flex items-center justify-center relative">
        <div className="text-center max-w-[580px] mt-[-80px] z-10">
          <h1 className="text-dark text-[46px] font-[500] leading-[1.35em]">
            Job Board for Developers, Designers, and Marketers
          </h1>
          <div className="mt-4 text-grey text-base leading-8">
            Jobs is a curated job board of the best jobs for developers,
            designers and marketers in the tech industry.
          </div>
        </div>
        <div className="bg-[#f2f5ff] h-[100%] w-screen absolute" />
      </div>
      <SeachForm />
      <div className="mt-[120px] flex items-center justify-between">
        <div>Trusted by</div>
        <div className="flex gap-[40px]">
          <img src="./svg/google.svg" />
          <img src="./svg/facebook.svg" />
          <img src="./svg/youtube.svg" />
          <img src="./svg/pinterest.svg" />
          <img src="./svg/webflow.svg" />
        </div>
      </div>
    </>
  )
}
