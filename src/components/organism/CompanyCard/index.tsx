import Image from "next/image";
import React from "react";
import company from "/images/comapny2.png";
import { Badge } from "@/components/ui/badge";
import { CompanyType } from "@/types";

type CompanyCardProps = {} & CompanyType;

export default function CompanyCard({
  industry,
  description,
  name,
  image,
  totalJobs,
}: CompanyCardProps) {
  return (
    <div className="border border-border p-6">
      <div className="flex flex-row justify-between items-start ">
        <Image src={image} alt="company" width={66} height={66} />
        <Badge>{totalJobs} Jobs</Badge>
      </div>
      <div className="my-4">
        <div className="text-lg font-semibold mb-2">{name}</div>
        <div
          className="line-clamp-3 text-sm text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>
      <div className="space-x-2">
        <Badge variant="outline">{industry}</Badge>
      </div>
    </div>
  );
}
