"use client";
import { CATEGORIES_OPTIONS } from "@/constants";
import ExpoloreDataContainer from "@/containers/ExploreDataContainer";
import useCategoryCompanyFilter from "@/hooks/useCategoryCompanyFilter";
import useCompanies from "@/hooks/useCompanies";
import { formFilterCompanySchema } from "@/lib/form-schema";
import { CompanyType, filterFormType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FindCompaniesProps = {};

const FILTER_FORMS: filterFormType[] = [
  {
    name: "industry",
    label: "Industry",
    items: CATEGORIES_OPTIONS,
  },
];

export default function FindCompanies({}: FindCompaniesProps) {
  const formFilter = useForm<z.infer<typeof formFilterCompanySchema>>({
    resolver: zodResolver(formFilterCompanySchema),
    defaultValues: {
      industry: [],
    },
  });

  const { filters } = useCategoryCompanyFilter();

  const [categories, setCategories] = useState<string[]>([]);

  const { companies, isLoading, mutate } = useCompanies(categories);

  const onSubmitFormFilter = async (
    val: z.infer<typeof formFilterCompanySchema>
  ) => {
    setCategories(val.industry);
  };
  return (
    <ExpoloreDataContainer
      formFilter={formFilter}
      onSubmitFilter={onSubmitFormFilter}
      filterForm={filters}
      title="Dream companies"
      subtitle="Find the dream companies you dream work for"
      loading={isLoading}
      type="company"
      data={companies}
    />
  );
}
