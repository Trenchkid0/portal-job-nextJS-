import TitleSection from '@/components/atoms/TitleSection'
import React from 'react'
import { BiCategory } from 'react-icons/bi'
import { HiOutlineArrowRight } from 'react-icons/hi'
import CategoryItem from './CategoryItem'

type CategoryProps = {}

export default function Category({}: CategoryProps) {
  return (
    <div className=' mt-32 mb-8'>
        <TitleSection title='Explore by' nextTitle='category' />
        <div className='grid grid-cols-5 gap-9 mt-12'>
            {[0,1,2,3,4,5].map((item:number) =>(
               <CategoryItem name='Category' totalJobs={20} key={item}/>
            ))}
        </div>
    </div>
  )
}