import React from 'react'

export const Button = ({ children }: { children: any }) => {
  return (
    <div className="px-[30px] py-[16px] text-white bg-blue rounded-[1000px] font-bold cursor-pointer hover:translate-y-[-1px]">
      {children}
    </div>
  )
}
