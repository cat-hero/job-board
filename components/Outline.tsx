import { JobTypes } from '@/type'
import { twMerge, twJoin } from 'tailwind-merge'
import tailWindConfig from '@/tailwind.config'

const greyColor = tailWindConfig.theme?.extend?.colors?.grey ?? 'grey'

export const Outline = ({
  children,
  className = '',
  jobCardType = undefined,
}: {
  children: any
  className?: string
  // className use for build time
  // jobCardType for generate class for runtime
  jobCardType?: undefined | JobTypes
}) => {
  const commonCardClassName =
    ' rounded-[20px] mt-5 !px-4 !py-5 cursor-pointer hover:-translate-y-1 transition-all !duration-500 ease-in-out origin-bottom'
  let cardClassName = {
    [JobTypes.latest]: `!border-[${greyColor}] !bg-[white]`.concat(
      commonCardClassName,
    ),
    [JobTypes.featured]: '!border-[#ffde6a] !bg-[#fffefa]'.concat(
      commonCardClassName,
    ),
  }

  return (
    <div
      className={twMerge(
        `w-max h-max px-[20px] py-[8px] rounded-[40px] border-[#e4e4ed] border-[1px] 
      flex items-center gap-3 border-solid 
      `,
        jobCardType && cardClassName[jobCardType],
        className,
      )}
    >
      {children}
    </div>
  )
}
