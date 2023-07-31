'use client'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

import { JobTypes } from '@/type'

import { Aside } from '@/app/home/Aside'
import { Discover } from '@/app/home/Discover'
import { JobCard } from '@/components/JobCard'

export default function HomePage() {
  const { data: session } = useSession()
  console.log(session)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // )
  return (
    <main>
      <Discover />
      <Aside />
      <h3 className="text-[32px] mt-[50px]">Featured Jobs</h3>

      <JobCard type={JobTypes.featured} />
      <JobCard type={JobTypes.featured} />

      <h3 className="text-[32px] mt-[50px]">Latest jobs</h3>

      <JobCard />
      <JobCard />
    </main>
  )
}
