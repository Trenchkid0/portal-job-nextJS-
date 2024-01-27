import Image from 'next/image'
import React from 'react'
import pattern from '../../../public/images/pattern2.png'
import FormSearchDynamic from '@/components/organism/FormSearchDynamic'
import FormFIlter from '@/components/organism/FormFilter'
import FormFilter from '@/components/organism/FormFilter'
import { Form } from 'react-hook-form'
import { JobType, filterFormType } from '@/types'
import JobCard from '@/components/organism/JobCard'
import CompanyCard from '@/components/organism/CompanyCard'

type ExpoloreDataContainerProps = {
    formFilter:any ,
    onSubmitFilter: (val:any) => Promise<void>
    filterForm:filterFormType[];
    loading: boolean
    title:string
    subtitle:string
    data:any[]
    type:'job' | 'company'
}

export default function ExpoloreDataContainer({formFilter,onSubmitFilter,filterForm,loading,title,subtitle,data,type}: ExpoloreDataContainerProps) {
  return (
    <>
        <div className='bg-gray-200 px-32 pt-16 pb-14'>
            <div className='mb-10'>
                <div  className='mx-auto mb-11 text-center flex justify-center gap-2'>
                    <span className='text-5xl font-semibold'>
                        Find Your
                    </span>
                    <div className='relative'>
                        <span className='text-5xl font-semibold text-primary'>
                            {title}
                        </span>
                        <div className='absolute top-10 w-[220px] h-10'>
                            <Image src={pattern} alt='pattern' fill objectFit='contain'/>

                        </div>
                    </div>
                </div>
                <div className='text-center text-gray-500'>
                   {subtitle}
                </div>
            </div>
            <div>
                <FormSearchDynamic/>
            </div>

          

        </div>
        <div className='mt-20 mb-16 px-32 flex flex-row items-start gap-10'>
            <div className='w-1/5'>
                    <FormFilter
						formFilter={formFilter}
						onSubmitFilter={onSubmitFilter}
						filterForm={filterForm}
					/>
            </div>
            <div className='w-4/5'>
                <div className='mb-8'>
                    <div className='text-xl font-semibold'>All {type === 'job' ? 'Jobs' : 'Companies' }</div>
                    <div className='text-muted-foreground'>Showing {data.length} Result</div>
                    <div className='grid grid-cols-1 gap-7'>
                        {loading ? (
                            <div>...Loading</div>
                        ): (
                            <>
                            
                            {type === 'job' ? (
                                <div className='grid grid-cols-1 gap-7'>
                                {data?.map((item:any,index:number)=> (
                                        <JobCard key={index} {...item}/>
                                ))}
                                </div>
                            ):(
                                <div className='grid grid-cols-3 gap-5'>
                                {data?.map((item:any,index:number)=> (
                                    <CompanyCard key={index} {...item}/>
                                ))}
                                </div>
                            )}
                           
                            </>

                        )}
                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}