'use client'
import React from 'react'
import 'boxicons'
import { Button } from '@/components/Button'
const Outline = ({
  children,
  className = '',
}: {
  children: any
  className?: string
}) => {
  return (
    <div
      className={`w-max h-max px-[20px] py-[8px] rounded-[40px] border-[#e4e4ed] border-[1px] 
      flex items-center gap-3 ${className} 
      `}
    >
      {children}
    </div>
  )
}
{
  /* <box-icon name='chevron-down'></box-icon> */
}
{
  /* <box-icon name='chevron-up'></box-icon> */
}
const level = ['fresher', 'junior', 'middle', 'senior']
const location = ['Ha Noi', 'Ho Chi Minh City', 'Da Nang']
const department = ['Business', 'Marketing', 'Development', 'Design']

const Dropdown = () => {
  return (
    <Outline>
      <img src="/location.svg" />
      Location
    </Outline>
  )
}

export const SeachForm: React.FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <Outline className="absolute translate-y-[-50%] bg-white !px-[42px] !py-[40px] rounded-[16px]">
          <form className="flex gap-4">
            <Outline>
              <box-icon name="search" color="#cdcdd5"></box-icon>
              <input
                type="text"
                placeholder="Search for jobs"
                className="outline-0"
              />

              <Button>Search</Button>
            </Outline>
            {/* <Dropdown /> */}
          </form>
        </Outline>
      </div>
      <div className="mt-[120px] flex items-center justify-between">
        <div>Trusted by</div>
        <div className="flex gap-[30px]">
          <img src="./google.svg" />
          <img src="./facebook.svg" />
          <img src="./youtube.svg" />
          <img src="./pinterest.svg" />
          <img src="./webflow.svg" />
        </div>
      </div>
    </>
  )
}
