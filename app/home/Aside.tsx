import React from 'react'
import { Button } from '@/components/Button'
import { Outline } from '@/components/Outline'
const titleClass = 'text-[22px] text-dark'
export const Aside = () => {
  return (
    <aside>
      <Outline className="flex-col rounded-[20px] items-start mt-[50px] px-[32px] py-[40px] w-auto">
        <img alt="job" src="./svg/job.svg" className="rounded-lg" />
        <div className={titleClass}>Post a job today</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</div>
        <Button className="w-full text-center text-base">
          Post a featured job
        </Button>
        <div className="text-center w-full text-grey underline cursor-pointer">
          or post a free job
        </div>
      </Outline>
      <Outline className="mt-[40px] px-[32px] py-[40px] rounded-[20px] flex-col items-start w-full">
        <div className={titleClass}>Featured companies</div>
        {Array(4)
          .fill(1)
          .map((_, idx) => (
            <div
              key={`featured-companies-${idx}`}
              className="group flex items-center gap-4 w-full cursor-pointer hover:text-blue"
            >
              <img
                src="./webflow-blue.svg"
                alt=""
                className="w-[50px] h-auto rounded-lg"
              />
              <div className="font-bold">Facebook</div>
              <div className="ml-auto flex items-center group-hover:fill-blue group-hover:translate-x-1 duration-200">
                <box-icon name="right-arrow-alt"></box-icon>
              </div>
            </div>
          ))}
      </Outline>
    </aside>
  )
}
