import TitleSection from '@/components/atoms/TitleSection'
import React from 'react'
import JobItem from './JobItem'

type FeaturedJobsProps = {}

export default function FeaturedJobs({}: FeaturedJobsProps) {
  return (
    <div className='mt-32 mb-10'>
        <TitleSection title='Featured' nextTitle='jobs'/>
        <div className='grid grid-cols-4 gap-4 mt-12'>
            {[0,1,2,3].map((index:number)=> (
                  <JobItem key={index} image='/images/company.png' jobType='Full-Time'  name='Email Marketing' type='agency' location='Madrid, Spain' desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consequat odio a justo placerat iaculis. Phasellus velit sem, gravida sit amet nulla eget, scelerisque porttitor sem. Phasellus accumsan efficitur aliquet. Aliquam erat volutpat. Nunc ut leo leo. Vestibulum bibendum accumsan ipsum, ut bibendum nisl ultrices eget. Nunc venenatis molestie velit, ac finibus risus aliquam et. Praesent est est, sollicitudin nec tellus eget, pellentesque hendrerit arcu.' category={['Marketing','Social Media','Design']}/>
            ))}
        </div>
    </div>
  )
}