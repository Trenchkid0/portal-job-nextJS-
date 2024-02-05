"use client";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import JobItem from "./JobItem";
import useSWR from "swr";
import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";
import useFeaturedJobs from "@/hooks/useFeatured";

type FeaturedJobsProps = {};

export default function FeaturedJobs({}: FeaturedJobsProps) {
  const { jobs, isLoading, error } = useFeaturedJobs();

  return (
    <div className="mt-32 mb-10">
      <TitleSection title="Featured" nextTitle="jobs" />
      <div className="grid grid-cols-4 gap-4 mt-12">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
