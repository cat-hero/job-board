import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CustomLink = ({
  to,
  className,
  children,
}: {
  to: string
  className?: string
  children: string | any
}) => {
  return (
    <div className={className}>
      <Link href={to}>{children}</Link>
    </div>
  )
}

const Header = () => {
  return (
    <div className="w-full bg-[#f8f8f8] pt-4">
      <div className="flex items-center max-w-7xl mx-auto font-[600]">
        <CustomLink to="/">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width="24" height="24" />
            JobHuntly
          </div>
        </CustomLink>
        <div className="flex ml-7 gap-3 text-sm ">
          <CustomLink to="/jobs" className="text-[#001e00]">
            Find Jobs
          </CustomLink>
          <CustomLink to="/companies">Browse Companies</CustomLink>
        </div>
        <div className="flex ml-auto gap-3">
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/signup">Sign Up</CustomLink>
        </div>
      </div>
    </div>
  )
}
export default Header
