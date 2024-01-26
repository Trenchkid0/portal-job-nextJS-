import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { LOCATION_OPTIONS } from '@/constants'
import { optionType } from '@/types'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'

type FormSearchDynamicProps = {}

export default function FormSearchDynamic({}: FormSearchDynamicProps) {
  return (
    <>
    <div className='mx-auto w-max'>

        <div className=' bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-20 text-center '>
            <div className='inline-flex gap-3 items-center'>
                <AiOutlineSearch className='w-6 h-6'/>
                <Input className='py-5 w-[350px] border-none' placeholder='Job title or keyword'/>
            </div>
            <div className='inline-flex gap-3 items-center'>
                <HiOutlineLocationMarker className='w-6 h-6'/>
                <Select>
                    <SelectTrigger className="w-[350px] border-none text-gray-500 outline-none py-5">
                        <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                        {LOCATION_OPTIONS.map((item:optionType,index:number)=> (
                            <SelectItem value={item.id} key={index}>{item.label}</SelectItem>
                        ))}
         
                    
                    </SelectContent>
                </Select>
            </div>
            <Button>Search</Button>
        </div>
        <div className='text-muted-foreground mt-3'>Popular : UI Designer, UX Researcher, Android, Admin</div>
    </div>
    
    </>
  )
}