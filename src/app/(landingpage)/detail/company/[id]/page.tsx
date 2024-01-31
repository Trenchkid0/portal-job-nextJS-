import LatestJob from '@/components/organism/LatestJob'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { dateFormat } from '@/lib/utils'
import { FacebookIcon, InstagramIcon, Linkedin, TwitterIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillFacebook, AiOutlineFire } from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'
import {  HiOutlineLocationMarker, HiOutlineOfficeBuilding } from 'react-icons/hi'

type DetailCompanyProps = {}

export default function DetailCompany({}: DetailCompanyProps) {
  return (
    <>
    
        <div>
            <div className='bg-slate-100 px-32 pt-16 pb-14'>
                <div className='inline-flex gap-3 text-sm text-muted-foreground'>
                <Link className='hover:underline hover:text-black' href='/'>Home</Link>/{" "}
                <Link className='hover:underline hover:text-black' href='/find-companies'>Companies</Link>/{" "}
                <Link className='hover:underline hover:text-black' href='/detail/company/1'>Twitter</Link>/{" "}
                </div>
                <div>
                    
                    <div className='mt-10 inline-flex gap-6 items-start'>
                        <Image src='/images/company2.png' alt='company' width={150} height={150}/>
                        <div>
                            <div className='inline-flex items-center gap-4'>
                                <span className='text-4xl font-semibold'>Twitter</span>
                                <Badge>10 Jobs</Badge>
                            </div>
                            <div className='mt-2'>
                                <Link href='/' className='font-semibold text-primary'>https://www.netflix.com</Link>
                            </div>
                            <div className='inline-flex items-center gap-10 mt-6'>
                                <div className='inline-flex items-center gap-3'>
                                    <div>
                                        <div className='bg-white p-3 rounded-full'>
                                            <AiOutlineFire className='w-6 h-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>

                                        <div className='text-gray-500'>Founded</div>
                                        <div className='font-semibold'>{dateFormat(Date.now())}</div>
                                    </div>
                                </div>
                                <div className='inline-flex items-center gap-3'>
                                    <div>
                                        <div className='bg-white p-3 rounded-full'>
                                            <BsPeople className='w-6 h-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>

                                        <div className='text-gray-500'>Employee</div>
                                        <div className='font-semibold'>100-120</div>
                                    </div>
                                </div>
                                <div className='inline-flex items-center gap-3'>
                                    <div>
                                        <div className='bg-white p-3 rounded-full'>
                                            <HiOutlineLocationMarker className='w-6 h-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>

                                        <div className='text-gray-500'>Location</div>
                                        <div className='font-semibold'>Madrid, Spain</div>
                                    </div>
                                </div>
                                <div className='inline-flex items-center gap-3'>
                                    <div>
                                        <div className='bg-white p-3 rounded-full'>
                                            <HiOutlineOfficeBuilding className='w-6 h-6 text-primary'/>
                                        </div>
                                    </div>
                                    <div>

                                        <div className='text-gray-500'>Industry</div>
                                        <div className='font-semibold'>Ads</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='px-32 py-16 flex flex-row items-start gap-10'>
                <div className='w-3/4'>
                    <div className='mb-16'>
                        <div className='text-3xl font-semibold mb-3'>Company Profile</div>
                        <div className='text-muted-foreground'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien tortor, fringilla quis sollicitudin ut, porta non erat. Fusce in fermentum turpis. Curabitur justo felis, facilisis nec lectus eu, iaculis gravida enim. Morbi faucibus dignissim quam, sed facilisis nisi laoreet eget. Duis nec velit ut lorem pellentesque cursus. Nullam convallis sapien et felis pulvinar, a ultrices odio eleifend. Vestibulum et posuere erat. Pellentesque pellentesque ligula vestibulum metus accumsan, id ultricies arcu condimentum. Nam iaculis, nisl non ultricies semper, est sapien vestibulum arcu, in tempus ipsum ligula ac urna. Cras dignissim accumsan orci eget mollis.</p>
                    </div>
                    <div>
                        <div className='text-3xl font-semibold mb-4'>Contact</div>
                        <div className='flex items-center gap-5 w-[400px] flex-wrap'>
                            <div className='p-2 border inline-flex  border-primary w-max items-center gap-3 font-semibold'>
                                <FacebookIcon className='text-primary'/>
                                <span className='text-sm'>https://www.netflix.com</span>
                            </div>
                            <div className='p-2 border inline-flex  border-primary w-max items-center gap-3 font-semibold'>
                                <TwitterIcon className='text-primary'/>
                                <span className='text-sm'>https://www.netflix.com</span>
                            </div>
                            <div className='p-2 border inline-flex  border-primary w-max items-center gap-3 font-semibold'>
                                <Linkedin className='text-primary'/>
                                <span className='text-sm'>https://www.netflix.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            
                </div>
                <div className='w-1/4'>
                    <div className='text-3xl font-semibold mb-4'>
                        Tech Stack
                    </div>
                    <div className='text-gray-500 text-sm'>
                        Learn about the technology and tools
                    </div>
                    <div className='mt-5 inline-flex gap-4'>
                        <Badge>Java</Badge>
                        <Badge>Springboot</Badge>
                    </div>
                </div>
            </div>
            <div className='px-32'>
                <Separator/>
                <div className='my-16'>
                    <div className='font-semibold text-3xl mb-4'>Teams</div>
                    <div className='grid grid-cols-5 gap-5 mt-5'>
                        {[0,1,2].map((item:number)=> (
                            <div key={item} className='border border-border px-3 py-5'>
                                <div className='w-16 h-16 rounded-full mx-auto bg-gray-100'/>
                                <div className='text-center my-4'>
                                    <div className='font-semibold text-sm'>
                                        Junya Watanabe
                                    </div>
                                    <div className='text-gray-500 text-xs '>CEO</div>
                                </div>
                                <div className='mx-auto w-max'>
                                    <div className='inline-flex gap-2'>
                                        <InstagramIcon className='w-4 h-4 text-gray-500'/>
                                        <Linkedin className='w-4 h-4 text-gray-500'/>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
                <Separator/>
            </div>
            
        </div>
        <div className='px-32 mt-16'>
            <LatestJob/>
        </div>
       
    </>
  )
}