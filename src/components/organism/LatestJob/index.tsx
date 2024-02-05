"use client";

import TitleSection from "@/components/atoms/TitleSection";
import React from "react";
import JobItem from "./JobItem";
import useFeaturedJobs from "@/hooks/useFeatured";
import { JobType } from "@/types";

type LatestJobProps = {};

export default function LatestJob({}: LatestJobProps) {
  const { jobs, isLoading, error } = useFeaturedJobs();
  return (
    <div className="py-16 mt-32 mb-10 relative">
      <TitleSection title="Latest" nextTitle="jobs open" />
      <div className="mt-12 grid grid-cols-3 gap-8">
        {jobs.map((item: JobType) => (
          <JobItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
