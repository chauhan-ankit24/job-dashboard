import { Skeleton } from '@/components/ui/skeleton';

export function StatsCardSkeleton() {
  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-16" />
        </div>
        <Skeleton className="w-12 h-12 rounded-xl" />
      </div>
    </div>
  );
}

export function JobCardSkeleton() {
  return (
    <div className="bg-card rounded-xl p-5 shadow-sm border border-border">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <Skeleton className="h-6 w-40" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Skeleton className="h-6 w-20 rounded-full" />
        <Skeleton className="h-6 w-24 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>

      {/* Description */}
      <div className="space-y-2 mb-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      {/* Stats */}
      <div className="flex items-center gap-4 pt-3 border-t border-border">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
}

export function SearchFiltersSkeleton() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <Skeleton className="h-10 flex-1" />
      <div className="flex flex-wrap gap-3">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}

export function ActionBarSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-32" />
      </div>
      <Skeleton className="h-6 w-36" />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <>
      {/* Stats Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <StatsCardSkeleton />
        <StatsCardSkeleton />
        <StatsCardSkeleton />
      </div>

      {/* Action Bar Skeleton */}
      <div className="mb-6">
        <ActionBarSkeleton />
      </div>

      {/* Search & Filters Skeleton */}
      <div className="mb-6">
        <SearchFiltersSkeleton />
      </div>

      {/* Jobs Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
