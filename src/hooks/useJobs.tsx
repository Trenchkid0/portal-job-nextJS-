import { fetcher, parsingJobs } from "@/lib/utils";
import { JobType } from "@/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import useSWR from "swr";

const JOB_PATH = "/api/jobs/filter";

export const useJobs = (filter?: string[]) => {
  const paramsCategory = useMemo(() => {
    if (filter && filter.length > 0) {
      return filter.join(",");
    }
    return "";
  }, [filter]);

  const { data, error, isLoading, mutate } = useSWR(
    `${JOB_PATH}?category=${paramsCategory}`,
    fetcher,
    { revalidateOnMount: false }
  );

  const [jobs, setJobs] = useState<JobType[]>([]);

  const parseJobs = useCallback(async () => {
    const parseData = await parsingJobs(data, error, isLoading);
    setJobs(parseData);
  }, [data, error, isLoading]);

  useEffect(() => {
    parseJobs();
  }, [data, error, isLoading]);

  return {
    jobs,
    mutate,
    isLoading,
  };
};
