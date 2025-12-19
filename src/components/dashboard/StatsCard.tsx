import { cn } from '@/lib/utils';

interface StatsCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  variant: 'jobs' | 'applications' | 'hired';
}

export function StatsCard({ title, value, icon, variant }: StatsCardProps) {
  const variantStyles = {
    jobs: 'bg-stats-jobs/10 text-stats-jobs',
    applications: 'bg-stats-applications/10 text-stats-applications',
    hired: 'bg-stats-hired/10 text-stats-hired',
  };

  return (
    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-card-foreground mt-1">{value}</p>
        </div>
        <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', variantStyles[variant])}>
          {icon}
        </div>
      </div>
    </div>
  );
}
