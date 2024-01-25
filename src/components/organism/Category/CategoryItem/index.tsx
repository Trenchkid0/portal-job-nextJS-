import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineArrowRight } from 'react-icons/hi'

type CategoryItemProps = {
    name:string,
    totalJobs:number,
}

export default function CategoryItem({name,totalJobs}: CategoryItemProps) {
  return (
    <div className='border border-border p-8 cursor-pointer transition-colors group hover:border-primary hover:bg-primary hover:text-white'>
    <BiCategory className='w-12 h-12 text-primary group-hover:text-white '/>
    <div className='mt-7 '>
        <div className='text-2xl font-semibold'>{name}</div>
        <div className='text-muted-foreground inline-flex items-center gap-1 mt-1 group-hover:text-white'>
            <span>{totalJobs} jobs available</span>
            <HiOutlineArrowRight/>
        </div>
    </div>
</div>
  )
}