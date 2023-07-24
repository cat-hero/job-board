import React from 'react'
import Image from 'next/image'
export const Discover: React.FC = () => {
  return (
    <div className="h-[600px] bg-[#f8f8f8] relative flex items-center">
      <div className="max-w-7xl w-[80rem] mx-auto">
        <div className="w-96 h-max">
          <h2 className="text-5xl leading-[1.4] font-semibold">
            Discover <br />
            more than <br /> <span className="text-[#26A4FF]">500+ Jobs</span>
          </h2>
          <div className="text-[#9EA3B1] text-sm">
            Great platform for the job seeker that searching for new career
            heights and passionate about startups.
          </div>
        </div>
        <img
          className="h-[600px] w-auto absolute right-[150px] bottom-0"
          alt="human"
          src="/man.png"
        />
      </div>
    </div>
  )
}
