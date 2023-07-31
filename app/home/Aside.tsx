import React from 'react'
import { Button } from '@/components/Button'
export const Aside = () => {
  return (
    <aside>
      <img alt="job" src="./svg/job.svg" />
      <div>Post a job today</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed.</div>
      <Button>Post a featured job</Button>
      <div>or post a free job</div>
    </aside>
  )
}
