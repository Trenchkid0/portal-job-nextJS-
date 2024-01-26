import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { JobType } from '@/types'
import Image from 'next/image'
import React from 'react'

type JobCardProps = {

}&JobType

export default function JobCard({applicants,category,desc,image,jobType,location,name,needs,type}: JobCardProps) {
  return (
    <div className='w-full border mb-5 p-6 border-border flex flex-row justify-between items-center'>
        <div className='flex flex-row items-start gap-6'>
            <div>
                <Image  src={image} alt={image} width={64} height={64}/>
            </div>
            <div >
                <div className=' text-lg font-semibold'>{name}</div>
                <div className=' text-sm text-muted-foreground mb-2'>{type} . {location}</div>
                <div className='h-5 inline-flex gap-2 items-center'>
                    <Badge variant='secondary' >{jobType}</Badge>
                    <Separator orientation='vertical'/>
                    {category.map((item:string,index:number) =>(
                        <Badge key={index}>{item}</Badge>
                    ))}
                </div>
            </div>
        </div>
        <div className="w-[200px]">
				<Button className="w-full" size="lg">
					Apply
				</Button>
				<Progress value={(applicants / needs) * 100} className="mt-2" />
				<div className="text-gray-500 text-sm text-center mt-2">
					<span className="text-black font-semibold">
						{applicants} applied
					</span>{" "}
					of {needs} capacity
				</div>
			</div>
        
    </div>
  )
}