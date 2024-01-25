import TitleSection from '@/components/atoms/TitleSection'
import React from 'react'
import JobItem from './JobItem'

type LatestJobProps = {}

export default function LatestJob({}: LatestJobProps) {
  return (
    <div className='py-16 mt-32 mb-10 relative'>
        <TitleSection title='Latest' nextTitle='jobs open'/>
        <div className='mt-12 grid grid-cols-3 gap-8'>
            {[0,1,2,3].map((item:number)=> (
                <JobItem  key={item} image='/images/company2.png' name='Social Media Assistant' type='Agency' location='Madrid, Spain' jobType='Full-Time' category={["Marketing","Design"]} desc='description' />
            ))}
        </div>
    </div>
  )
}