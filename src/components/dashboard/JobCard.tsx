import {
  Clock,
  Users,
  MousePointer,
  Loader,
  EllipsisVertical,
  SignalMediumIcon,
  Wallet,
} from "lucide-react";
import type { Job } from "@/data/mockJobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-card rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="p-3">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold flex-col flex text-card-foreground text-lg">
            {job.title}
            <span className="font-medium italic text-muted-foreground text-xs">
              Posted: {job.postedTime}
            </span>
          </h3>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <EllipsisVertical className="w-4 h-4" />
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 rounded-md py-1 justify-center flex items-center text-xs font-medium gap-1 bg-[#303822] text-white">
            <Clock className="w-3 h-3" />
            {job.contractType}
          </span>
          <span className="px-3 rounded-md py-1 justify-center flex items-center text-xs font-medium bg-[#22382E] gap-1 text-white">
            <Wallet className="w-3 h-3" />
            {job.salaryRange}
          </span>
          <span className="px-3 rounded-md py-1 justify-center flex items-center text-xs font-medium bg-[#372238] text-white">
            <SignalMediumIcon className="w-4 h-4 -mt-1" />
            {job.experience}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm max-h-10 h-10 font-medium text-muted-foreground line-clamp-2">
          {job.description}
        </p>
      </div>
      {/* Stats */}
      <div className="flex justify-between m-0.5 rounded-t-sm rounded-b-lg gap-4 px-5 py-2 bg-background">
        <div className="flex items-center flex-col text-lg">
          <span className="font-medium text-card-foreground">
            {job.applied}
          </span>
          <span className="text-muted-foreground text-xs">Applied</span>
        </div>
        <div className="flex flex-col text-lg">
          <span className="font-medium text-card-foreground">
            {job.clicked}
          </span>
          <span className="text-muted-foreground text-xs">Clicked</span>
        </div>
        <div className="flex flex-col text-lg">
          <span className="font-medium text text-card-foreground">
            {job.underProcess}
          </span>
          <span className="text-muted-foreground text-xs">Process</span>
        </div>
      </div>
    </div>
  );
}
