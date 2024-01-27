'use client'
import { CATEGORIES_OPTIONS } from '@/constants';
import ExpoloreDataContainer from '@/containers/ExploreDataContainer';
import { formFilterCompanySchema } from '@/lib/form-schema';
import { CompanyType, filterFormType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FindCompaniesProps = {}

const FILTER_FORMS: filterFormType[] = [
    {
      name: 'industry',
      label: 'Industry',
      items: CATEGORIES_OPTIONS,
    }
  ]

const dataDummy:CompanyType[] = [
    {
        image:'/images/company2.png',
        categories: 'Marketing',
        description: 'Free',
        name:'Facebook',
        totalJobs: 10,
    },
    {
        image:'/images/company2.png',
        categories: 'Marketing',
        description: 'Free',
        name:'Facebook',
        totalJobs: 10,
    },
    {
        image:'/images/company2.png',
        categories: 'Marketing',
        description: 'Free',
        name:'Facebook',
        totalJobs: 10,
    }
]


export default function FindCompanies({}: FindCompaniesProps) {
    const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
		resolver: zodResolver(formFilterCompanySchema),
        defaultValues:{
            industry: []
        }
       
	});

    const onSubmitFormFilter = async(val:z.infer<typeof formFilterCompanySchema>) => {
        console.log(val)
      }
  return (
    <ExpoloreDataContainer formFilter={formFilter} onSubmitFilter={onSubmitFormFilter} filterForm={FILTER_FORMS} title='Dream companies' subtitle='Find the dream companies you dream work for' loading={false} type='company' data={dataDummy} />
  )
}