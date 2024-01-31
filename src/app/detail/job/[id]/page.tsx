import FormModal from '@/components/organism/FormModal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiCategory } from 'react-icons/bi'

type DetailJobPageProps = {}

export default function DetailJobPage({}: DetailJobPageProps) {
  return (
    <>
      <div className='bg-slate-100 px-32 pt-10 pb-14'>
        <div className='inline-flex gap-3 text-sm text-muted-foreground'>
          <Link className='hover:underline hover:text-black' href='/'>Home</Link>/{" "}
          <Link className='hover:underline hover:text-black' href='/find-companies'>Companies</Link>/{" "}
          <Link className='hover:underline hover:text-black' href='/detail/company/1'>Twitter</Link>/{" "}
          <Link className='hover:underline hover:text-black' href='/detail/job/1'>Social Media Assist</Link>/{" "}
        </div>
        <div className=' bg-white mt-10 p-5 w-11/12 mx-auto flex flex-row justify-between items-center '>
          <div className='inline-flex items-center gap-5'>
            <Image src='/images/company2.png' alt='company' width={88} height={88}/>
            <div>
              <div className='text-2xl font-semibold'>
                Social media Assist
              </div>
              <div>
                Agency . Madrid, Spain . Full-Time
              </div>
            </div>
          </div>
            <FormModal/>
        </div>
      </div>
      <div className=' px-32 py-16 flex flex-row items-start gap-10'>
        <div className='w-3/4'>
          <div className='mb-16'>
            <div className='text-3xl font-semibold mb-3'>Description</div>
            <div className='text-muted-foreground'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien tortor, fringilla quis sollicitudin ut, porta non erat. Fusce in fermentum turpis. Curabitur justo felis, facilisis nec lectus eu, iaculis gravida enim. Morbi faucibus dignissim quam, sed facilisis nisi laoreet eget. Duis nec velit ut lorem pellentesque cursus. Nullam convallis sapien et felis pulvinar, a ultrices odio eleifend. Vestibulum et posuere erat. Pellentesque pellentesque ligula vestibulum metus accumsan, id ultricies arcu condimentum. Nam iaculis, nisl non ultricies semper, est sapien vestibulum arcu, in tempus ipsum ligula ac urna. Cras dignissim accumsan orci eget mollis.</p>
            </div>
          </div>
          <div className='mb-16'>
            <div className='text-3xl font-semibold mb-3'>Responsibilities</div>
            <div className='text-muted-foreground'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien tortor, fringilla quis sollicitudin ut, porta non erat. Fusce in fermentum turpis. Curabitur justo felis, facilisis nec lectus eu, iaculis gravida enim. Morbi faucibus dignissim quam, sed facilisis nisi laoreet eget. Duis nec velit ut lorem pellentesque cursus. Nullam convallis sapien et felis pulvinar, a ultrices odio eleifend. Vestibulum et posuere erat. Pellentesque pellentesque ligula vestibulum metus accumsan, id ultricies arcu condimentum. Nam iaculis, nisl non ultricies semper, est sapien vestibulum arcu, in tempus ipsum ligula ac urna. Cras dignissim accumsan orci eget mollis.</p>
            </div>
          </div>
          <div className='mb-16'>
            <div className='text-3xl font-semibold mb-3'>Who You Are</div>
            <div className='text-muted-foreground'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien tortor, fringilla quis sollicitudin ut, porta non erat. Fusce in fermentum turpis. Curabitur justo felis, facilisis nec lectus eu, iaculis gravida enim. Morbi faucibus dignissim quam, sed facilisis nisi laoreet eget. Duis nec velit ut lorem pellentesque cursus. Nullam convallis sapien et felis pulvinar, a ultrices odio eleifend. Vestibulum et posuere erat. Pellentesque pellentesque ligula vestibulum metus accumsan, id ultricies arcu condimentum. Nam iaculis, nisl non ultricies semper, est sapien vestibulum arcu, in tempus ipsum ligula ac urna. Cras dignissim accumsan orci eget mollis.</p>
            </div>
          </div>
          <div className='mb-16'>
            <div className='text-3xl font-semibold mb-3'>Nice To Have</div>
            <div className='text-muted-foreground'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sapien tortor, fringilla quis sollicitudin ut, porta non erat. Fusce in fermentum turpis. Curabitur justo felis, facilisis nec lectus eu, iaculis gravida enim. Morbi faucibus dignissim quam, sed facilisis nisi laoreet eget. Duis nec velit ut lorem pellentesque cursus. Nullam convallis sapien et felis pulvinar, a ultrices odio eleifend. Vestibulum et posuere erat. Pellentesque pellentesque ligula vestibulum metus accumsan, id ultricies arcu condimentum. Nam iaculis, nisl non ultricies semper, est sapien vestibulum arcu, in tempus ipsum ligula ac urna. Cras dignissim accumsan orci eget mollis.</p>
            </div>
          </div>
        </div>
        <div className='w-1/4'>
          <div>
            <div className='text-3xl font-semibold'>
              About this role
            </div>
            <div className='mt-6 p-4 bg-slate-50'>
              <div className='mb-2'>
                <span className='font-semibold'>5 Applied</span>{" "}
                <span className='text-gray-600'>of 10 capacity</span>
              </div>
              <Progress value={50}/>
            </div>
            <div className='mt-6 space-y-4'>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>
                  Aplly Before
                </div>
                <div className='font-semibold'>
                  Apri 25,2024
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>
                  Job Posted On
                </div>
                <div className='font-semibold'>
                  Apri 21,2024
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>
                  Job Type
                </div>
                <div className='font-semibold'>
                  Full Time
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <div className='text-gray-500'>
                  Salary
                </div>
                <div className='font-semibold'>
                  $12k - $25k USD
                </div>
              </div>
            </div>
          </div>
            <Separator className='my-10'/>

            <div>
              <div className='text-3xl font-semibold' >Category</div>
              <div className='my-10 inline-flex gap-4'>
                <Badge>Marketing</Badge>
              </div>
            </div>

            <Separator className='my-10'/>

            <div>
              <div className='text-3xl font-semibold' >Required Skill</div>
              <div className='my-10 inline-flex gap-4'>
                {[0,1,2,3].map((item:number) => (
                  <Badge variant='outline' key={item}>Marketing</Badge>
                ))}
              </div>
            </div>
        </div>
      </div>
      <div className='px-32 pb-16'>
        <Separator className='mb-14'/>
        <div className='mb-6'>
          <div className='font-semibold text-3xl'>
              <div className='font-semibold text-3xl'>
                Perks & Benefits
              </div>
              <div className='text-gray-500 mt-1 text-2xl'>
                This jobs comes with several perks and benefits
              </div>
          </div>
          <div className='grid grid-cols-5 gap-5'>
              {[0,1,2].map((item:number)=> (
                   <div key={item}>
                   <BiCategory className='w-12 h-12 text-primary'/>
                   <div className='font-semibold text-xl mt-6'>
                    Full Healthcare
                   </div>
                   <div className='mt-3 text-sm text-gray-500 line-clamp-2 text-ellipsis'>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nisi quam, sodales in justo blandit, accumsan iaculis eros. Aliquam vitae aliquet magna. Nullam tincidunt elementum massa semper pretium. Etiam ut vestibulum lectus, a hendrerit lacus. Suspendisse sed leo tempor, ullamcorper arcu vitae, bibendum lacus. Vestibulum quis sem sed ligula facilisis viverra. Etiam convallis diam metus, eu porttitor nibh euismod a. Proin ex velit, malesuada nec faucibus eu, semper at mauris. Nulla quis accumsan odio. Aliquam vehicula tristique turpis nec imperdiet. Nam at iaculis urna.
                   </div>

               </div>
              ))}
          </div>
        </div>
      </div>
    
    </>
  )
}