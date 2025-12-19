import { Briefcase, FileText, Handshake, Users } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { mockJobs } from "@/data/mockJobs";

export default function Dashboard() {
  const totalJobs = mockJobs.length;
  const totalApplied = mockJobs.reduce((sum, job) => sum + job.applied, 0);
  const totalHired = Math.floor(totalApplied * 0.15);
  const totalCandidates = 187; // Mock data, adjust as needed

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[32px] tracking-widest lg:text-3xl font-bold text-foreground">
              DASHBOARD
            </h1>
          </div>
          <ThemeToggle />
        </div>

        {/* Stats Cards */}
        <div className="flex w-full flex-wrap xl:flex-nowrap gap-4 mb-8">
          <StatsCard
            title="Total Jobs Posted"
            value={totalJobs}
            icon={<Briefcase className="w-6 h-6" />}
            variant="jobs"
          />
          <StatsCard
            title="Applications Received"
            value={totalApplied}
            icon={<FileText className="w-6 h-6" />}
            variant="applications"
          />
          <StatsCard
            title="Hired"
            value={totalHired}
            icon={<Handshake className="w-6 h-6" />}
            variant="hired"
          />
          <StatsCard
            title="Total Candidates"
            value={totalCandidates}
            icon={<Users className="w-6 h-6" />}
            variant="jobs"
          />
        </div>

        {/* Placeholder for additional dashboard content */}
        <div className="text-center py-12">
          <p className="text-muted-foreground">Dashboard overview coming soon...</p>
        </div>
      </main>
    </div>
  );
}
