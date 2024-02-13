// "use client";

// import ExploreDataContainer from "@/containers/ExploreDataContainer";
// import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
// import { useJobs } from "@/hooks/useJobs";
// import { formFilterSchema } from "@/lib/form-schema";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// export default function FindJobsPage() {
//   const formFilter = useForm<z.infer<typeof formFilterSchema>>({
//     resolver: zodResolver(formFilterSchema),
//     defaultValues: {
//       categories: [],
//     },
//   });

//   const { filters } = useCategoryJobFilter();

//   const [categories, setCategories] = useState<string[]>([]);

//   const { jobs, isLoading, mutate } = useJobs(categories);

//   const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
//     setCategories(val.categories);
//   };

//   useEffect(() => {
//     mutate();
//   }, [categories]);

//   return (
//     <ExploreDataContainer
//       formFilter={formFilter}
//       onSubmitFilter={onSubmitFormFilter}
//       filterForm={filters}
//       title="dream job"
//       subtitle="Find your next career at companies like HubSpot, Nike,
// 			and Dropbox"
//       loading={isLoading}
//       type="job"
//       data={jobs}
//     />
//   );
// }

"use client";
import ExpoloreDataContainer from "@/containers/ExploreDataContainer";
import { formFilterSchema } from "@/lib/form-schema";
import React, { useEffect, useMemo, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobType, filterFormType } from "@/types";
import { CATEGORIES_OPTIONS } from "@/constants";
import useCategoryJobFilter from "@/hooks/useCategoryJobFilter";
import { useJobs } from "@/hooks/useJobs";
import FormFilter from "@/components/organism/FormFilter";

type FindJobsProps = {};

export default function FindJobs({}: FindJobsProps) {
  const form = useForm<z.infer<typeof formFilterSchema>>({
    resolver: zodResolver(formFilterSchema),
    defaultValues: {
      categories: [],
    },
  });

  const { filters } = useCategoryJobFilter();
  const [categories, setCategories] = useState<string[]>([]);
  const { jobs, isLoading, mutate } = useJobs(categories);

  const onSubmitFormFilter = async (val: z.infer<typeof formFilterSchema>) => {
    setCategories(val.categories);
  };

  useEffect(() => {
    mutate();
  }, [categories]);

  return (
    <ExpoloreDataContainer
      formFilter={form}
      onSubmitFilter={onSubmitFormFilter}
      filterForm={filters}
      title="Dream jobs"
      subtitle="Find your next career at companies like HubSpot, Nike,and Dropbox"
      loading={isLoading}
      type="job"
      data={jobs}
    />
  );
}
