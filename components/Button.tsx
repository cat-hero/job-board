import React from 'react'
import { twMerge } from 'tailwind-merge'
export const Button = ({
  children,
  className = '',
}: {
  children: any
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        'px-[30px] py-[16px] text-white bg-blue rounded-[1000px] font-bold transition-all !duration-[500ms] cursor-pointer hover:translate-y-[-3px] hover:bg-[#034fcb]',
        className,
      )}
    >
      {children}
    </div>
  )
}
