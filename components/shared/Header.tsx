import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AppContext } from '@/app/layout'
import { useContext } from 'react'
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
  const a = useContext(AppContext)
  console.log(a)
  return (
    <nav className="flex items-center justify-between text-dark text-base my-[24px]">
      <CustomLink to="/" className="group">
        <img
          src="/svg/logo.svg"
          alt="logo"
          className="group-hover:scale-105 duration-150"
        />
      </CustomLink>
      <div className="flex gap-6">
        <CustomLink to="/" className="hover:text-blue">
          Home
        </CustomLink>
        <CustomLink to="/jobs" className="hover:text-blue">
          Find Jobs
        </CustomLink>
        <CustomLink to="/companies" className="hover:text-blue">
          Browse Companies
        </CustomLink>
        <CustomLink to="/about" className="hover:text-blue">
          About
        </CustomLink>
      </div>
      <CustomLink to="/post">
        <Button>Post a job</Button>
      </CustomLink>
    </nav>
  )
}
export default Header
