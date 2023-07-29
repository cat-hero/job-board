import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'
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
    <div>
      <Link href={to} className={className}>
        {children}
      </Link>
    </div>
  )
}

const Header = () => {
  return (
    <div className="flex items-center justify-between text-dark text-base my-[24px]">
      <CustomLink to="/">
        <img src="/svg/logo.svg" alt="logo" />
      </CustomLink>
      <div className="flex gap-6">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/jobs">Find Jobs</CustomLink>
        <CustomLink to="/companies">Browse Companies</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </div>
      <CustomLink to="/post">
        <Button>Post a job</Button>
      </CustomLink>
    </div>
  )
}
export default Header
