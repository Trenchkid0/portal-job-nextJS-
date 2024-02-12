"use client";
import TitleSection from "@/components/atoms/TitleSection";
import React, { useMemo } from "react";
import { BiCategory } from "react-icons/bi";
import { HiOutlineArrowRight } from "react-icons/hi";
import CategoryItem from "./CategoryItem";
import useSWR from "swr";
import { fetcher, parsingCategories } from "@/lib/utils";
import { categoryJobType } from "@/types";

type CategoryProps = {};

export default function Category({}: CategoryProps) {
  const { data, isLoading, error } = useSWR("/api/jobs/categories", fetcher);

  const categories = useMemo(
    () => parsingCategories(data, isLoading, error),
    [data, isLoading, error]
  );

  return (
    <div className=" mt-32 mb-8">
      <TitleSection title="Explore by" nextTitle="category" />
      <div className="grid grid-cols-5 gap-9 mt-12">
        {categories?.map((item: categoryJobType) => (
          <CategoryItem
            name={item.name}
            totalJobs={item.totalJobs}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
