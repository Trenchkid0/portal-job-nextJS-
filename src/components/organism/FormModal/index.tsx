"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formApplySchema } from '@/lib/form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage, } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import UploadField from '../UploadField'

type FormModalProps = {}

export default function FormModal({}: FormModalProps) {
    const form = useForm<z.infer<typeof formApplySchema>>({
        resolver: zodResolver(formApplySchema),
        
    })
    const onSubmit = (val: z.infer<typeof formApplySchema>) => {
        console.log(val);
    }
  return (
    <Dialog>
        <DialogTrigger asChild>
        <Button size='lg' className='text-lg px-12 py-6'>Apply</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[600px]'>
            <div>
                <div className='inline-flex items-center gap-4'>
                    <div>
                        <Image src='/images/company2.png' alt='company' width={60} height={60}/>
                    </div>
                    <div>
                        <div className='text-lg font-semibold'>
                            Social Media Assist
                        </div>
                        <div className='text-gray-500'>
                            Agency . Madrid,Spain . Full-Time
                        </div>
                    </div>
                </div>

                <Separator className='my-5'/>

                <div className='mb-5'>
                    <div className='font-semibold text-lg'>
                        Submit yout application
                    </div>
                    <div className=' text-gray-500 mt-2'>
                        The following is required and will only be shared with Nomad
                    </div>
                </div>
                <Form {...form} >
                    <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                        <div className='grid grid-cols-2 gap-6'>
                            <FormField
                                control={form.control}
                                name="fullname"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Fullname</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ichigo kurosaki" {...field} />
                                    </FormControl>
                                
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="ichigokurosaki@gmail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-6'>
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone  number" {...field} />
                                    </FormControl>
                                
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="previousJobTitle"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Cuurent of previous job title</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Mangaka" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <Separator />
                        <h2 className='font-semibold'>LINKS</h2>
                        <div className='grid grid-cols-2 gap-6'>
                            <FormField
                                control={form.control}
                                name="linkedIn"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>LinkedIn URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Link to your Linkedin URL" {...field} />
                                    </FormControl>
                                
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="portfolio"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Portofolio URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Link to your portofolio" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                                control={form.control}
                                name="coverLetter"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Additional Information</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Add a coverlater or anything else" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        
                        <UploadField form={form}/>

                        <Button className='w-full'>Apply</Button>
                        
                    </form>
                </Form>
            </div>

        </DialogContent>
    </Dialog>
  )
}