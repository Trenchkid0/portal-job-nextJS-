import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, { ChangeEvent, InputHTMLAttributes, useRef, useState } from 'react'

type UploadFieldProps = {
    form:any,
    
}

export default function UploadField({form}: UploadFieldProps) {
    const inputRef = useRef<HTMLInputElement>(null) 
    const [nameFile, setNameFile] = useState<string>(" Attach Your resume / CV")

    const handleSelectFile = () => {
        inputRef.current?.click()
    }

    const handleFIleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files){
            setNameFile(e.target.files[0].name)
            form.setValue('resume',e.target.files[0])
        }
    }

  return (
    <div className='flex flex-row justify-between items-center'>
        <div className='font-semibold'> Attach Your resume</div>
        <div>
            <div>
                <div onClick={handleSelectFile} className='text-xs border border-dashed border-primary text-primary text-center font-semibold p-3 cursor-pointer'>
                   
                    {nameFile}
                </div>
            </div>
            <FormField
            control={form.control}
            name="resume"
            render={({ field }) => (
                <FormItem>
                    <FormMessage className="mt-2"/>
                </FormItem>
            )}
            />
            <input ref={inputRef} type="file" className="hidden" accept="application/pdf" onChange={handleFIleChange}></input>
        </div>
    </div>
  )
}