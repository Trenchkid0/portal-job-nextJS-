"use client";
import ExpoloreDataContainer from '@/containers/ExploreDataContainer'
import { formFilterSchema } from '@/lib/form-schema'
import React from 'react'

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobType, filterFormType } from '@/types';
import { CATEGORIES_OPTIONS } from '@/constants';

type FindJobsProps = {}


const FILTER_FORMS: filterFormType[] = [
  {
    name: 'categories',
    label: 'Categories',
    items: CATEGORIES_OPTIONS,
  }
]

const dummyData:JobType[] =[
  {
    applicants: 5,
    category: ['Marketing','Sosial Media'],
    desc:'test',
    image: '/images/company2.png',
    jobType: 'Full-Time',
    location: 'Madrid, Spain',
    name: 'Social Media Assist',
    needs:10,
    type: 'Agency'
  }
]

export default function FindJobs({}: FindJobsProps) {
  const form = useForm<z.infer<typeof formFilterSchema>>({
		resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: []
    }
	});

  const onSubmitFormFilter = async(val:z.infer<typeof formFilterSchema>) => {
    console.log(val)
  }
  return (
    <>
      <ExpoloreDataContainer formFilter={form} onSubmitFilter={onSubmitFormFilter} filterForm={FILTER_FORMS} title='Dream jobs' subtitle='Find your next career at companies like HubSpot, Nike,and Dropbox' loading={false} type='job' data={dummyData} />
    
    </>
  )
}