import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'

type TitleSectionProps = {
    title: string,
    nextTitle: string
}

export default function TitleSection({title,nextTitle}: TitleSectionProps) {
  return (
    <div className='flex flex-row justify-between items-center'>
        <div className='text-4xl font-bold'>
            {title} <span className='text-primary'>{nextTitle}</span>
        </div>
        <div className='inline-flex gap-3 items-center text-primary font-semibold cursor-pointer'>
            <span>Show all jobs</span>
            <HiOutlineArrowRight/>
        </div>
    </div>
  )
}