'use client'
import React from 'react'
import 'boxicons'
import { Button } from '@/components/Button'
import { Outline } from '@/components/Outline'

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
    </>
  )
}
