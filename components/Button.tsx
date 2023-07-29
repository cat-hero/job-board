import React from 'react'

export const Button = ({ children }: { children: any }) => {
  return (
    <div className="px-[30px] py-[16px] text-white bg-blue rounded-[1000px] font-bold transition-all !duration-[500ms] cursor-pointer hover:translate-y-[-3px] hover:bg-[#034fcb]">
      {children}
    </div>
  )
}
