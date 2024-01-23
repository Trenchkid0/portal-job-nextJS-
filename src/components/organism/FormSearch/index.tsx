import { Input } from '@/components/ui/input'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Button } from '@/components/ui/button'

type FormSearchProps = {}

export default function FormSearch({}: FormSearchProps) {
  return (
    <>
        <div className='mt-6 bg-white p-4 shadow-md inline-flex items-center gap-4 relative w-max z-20'>
            <div className='inline-flex gap-3 items-center'>
                <AiOutlineSearch className='w-6 h-6'/>
                <Input className='py-8 w-[300px] border-none' placeholder='Job title or keyword'/>
            </div>
            <div className='inline-flex gap-3 items-center'>
                <HiOutlineLocationMarker className='w-6 h-6'/>
                <Select>
                    <SelectTrigger className="w-[300px] border-none text-gray-500 outline-none py-8">
                        <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Indonesia">Indonesia</SelectItem>
                    
                    </SelectContent>
                </Select>
            </div>
            <Button className='py-8 px-10 text-lg'>Search Jobs</Button>
        </div>
        <div className='text-muted-foreground mt-3'>Popular : UI Designer, UX Researcher, Android, Admin</div>
    
    </>
  )
}