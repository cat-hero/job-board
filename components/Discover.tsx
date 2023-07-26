import React from 'react'
import Image from 'next/image'
import { SeachForm } from './SearchForm'

export const Discover: React.FC = () => {
  return (
    <>
      <div className="bg-[#f2f5ff] h-[500px] flex items-center justify-center">
        <div className="text-center max-w-[580px] mt-[-80px]">
          <h1 className="text-dark text-[46px] font-[500] leading-[1.35em]">
            Job Board for Developers, Designers, and Marketers
          </h1>
          <div className="mt-4 text-grey text-base leading-8">
            Jobs is a curated job board of the best jobs for developers,
            designers and marketers in the tech industry.
          </div>
        </div>
      </div>
      <SeachForm />
    </>
  )
}
