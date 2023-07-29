'use client'
import React from 'react'
import { Outline } from '@/components/SearchForm'
import tailWindConfig from '@/tailwind.config'
import { Type } from '@/type'
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

const greyColor = tailWindConfig.theme?.extend?.colors?.grey ?? 'grey'
const getConfig = (type: Type = Type.latest) => {
  if (type === Type.latest) {
    return {
      borderColor: greyColor,
      bgColor: 'white',
    }
  } else {
    return {
      borderColor: '#ffde6a',
      bgColor: '#fffefa',
    }
  }
}

export const JobCard = ({ type = Type.latest }: { type?: Type }) => {
  // const config = getConfig(type);
  const config = {
    borderColor: '#ffde6a',
    bgColor: '#fffefa',
  }
  console.log(`!border-[${config.borderColor}]`)
  return (
    <>
      {console.log('render')}
      <Outline
        className={`!rounded-[20px] mt-5 !px-4 !py-5 !border-[#ffde6a] !bg-[${config.bgColor}] cursor-pointer hover:-translate-y-1 transition-all !duration-500 ease-in-out`}
      >
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
