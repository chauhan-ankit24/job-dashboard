import {
  Clock,
  Users,
  MousePointer,
  Loader,
  EllipsisVertical,
} from "lucide-react";
import type { Job } from "@/data/mockJobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-card rounded-xl p-5 shadow-sm border border-border hover:shadow-md transition-shadow cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold flex-col flex text-card-foreground text-lg">
          {job.title}
          <span className="font-normal text-card-foreground text-sm">
            {job.postedTime}
          </span>
        </h3>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <EllipsisVertical className="w-3 h-3" />
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="px-3 rounded-md py-1 justify-center flex items-center text-xs font-medium bg-tag text-tag-foreground">
          {job.contractType}
        </span>
        <span className="px-3 rounded-md py-1 justify-center flex items-center text-xs font-medium bg-tag text-tag-foreground">
          {job.salaryRange}
        </span>
        <span className="px-3 rounded-md py-1 justify-center flex items-center text-xs font-medium bg-tag text-tag-foreground">
          {job.experience}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {job.description}
      </p>

      {/* Stats */}
      <div className="flex items-center justify-between gap-4 pt-3 border-t border-border">
        <div className="flex items-center flex-col gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">
            {job.applied}
          </span>
          <span className="text-muted-foreground">Applied</span>
        </div>
        <div className="flex items-center flex-col gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">
            {job.clicked}
          </span>
          <span className="text-muted-foreground">Clicked</span>
        </div>
        <div className="flex items-center flex-col gap-1.5 text-sm">
          <span className="font-medium text-card-foreground">
            {job.underProcess}
          </span>
          <span className="text-muted-foreground">Process</span>
        </div>
      </div>
    </div>
  );
}
