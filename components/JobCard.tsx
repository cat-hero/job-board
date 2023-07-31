'use client'
import React from 'react'
import { Outline } from '@/components/SearchForm'

import { JobTypes } from '@/type'
const infos = [
  {
    label: 'Location',
    value: 'Remote',
    icon: 'location.svg',
  },
  {
    label: 'Level',
    value: 'Junior',
    icon: 'level.svg',
  },
  {
    label: 'Department',
    value: 'Marketing',
    icon: 'department.svg',
  },
]
// Todo: Hover latetest jobs

export const JobCard = ({ type = JobTypes.latest }: { type?: JobTypes }) => {
  // const config = getConfig(type);
  return (
    <>
      <Outline jobCardType={type}>
        <div className="flex items-center">
          <img
            src="./webflow-blue.svg"
            alt=""
            className="w-[55px] h-[55px] rounded-xl"
          />
          <div className="ml-6 mr-8">
            <div className="text-dark text-base font-bold">
              Backend Software Engineer
            </div>
            <div className="flex mt-2">Webflow</div>
          </div>

          {infos.map((info) => (
            <div className="ml-[80px]" key={info.label}>
              <div className="flex items-center gap-2">
                <img src={`./svg/${info.icon}`} className="text-grey" />
                <span className="text-grey">{info.label}</span>
              </div>
              <div className="mt-3 text-dark font-bold">{info.value}</div>
            </div>
          ))}
        </div>
      </Outline>
    </>
  )
}
