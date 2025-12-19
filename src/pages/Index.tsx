import { useState, useMemo, useEffect } from "react";
import { Briefcase, FileText, Plus, Handshake } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { JobCard } from "@/components/dashboard/JobCard";
import { SearchFilters } from "@/components/dashboard/SearchFilters";
import { ThemeToggle } from "@/components/ThemeToggle";
import { DashboardSkeleton } from "@/components/dashboard/DashboardSkeleton";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { mockJobs, draftJobs } from "@/data/mockJobs";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobProfile, setJobProfile] = useState("all");
  const [experience, setExperience] = useState("all");
  const [employmentType, setEmploymentType] = useState("all");
  const [showClosed, setShowClosed] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);

  const handleReset = () => {
    setSearchQuery("");
    setJobProfile("all");
    setExperience("all");
    setEmploymentType("all");
    setShowClosed(false);
    setShowDrafts(false);
  };

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredJobs = useMemo(() => {
    let jobsToFilter;
    if (showDrafts) {
      jobsToFilter = draftJobs;
    } else if (showClosed) {
      jobsToFilter = mockJobs.filter((job) => job.status === "closed");
    } else {
      jobsToFilter = mockJobs.filter((job) => job.status === "active");
    }
    return jobsToFilter.filter((job) => {
      const matchesSearch = job.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesEmployment =
        employmentType === "all" ||
        job.contractType.toLowerCase().replace("-", "") ===
          employmentType.replace("-", "");
      const matchesExperience =
        experience === "all" ||
        (experience === "5+" && job.experience.includes("5+")) ||
        job.experience.includes(experience);

      return matchesSearch && matchesEmployment && matchesExperience;
    });
  }, [
    searchQuery,
    jobProfile,
    experience,
    employmentType,
    showDrafts,
    showClosed,
  ]);

  const totalApplied = mockJobs.reduce((sum, job) => sum + job.applied, 0);
  const totalHired = Math.floor(totalApplied * 0.15);
  const closedJobsCount = mockJobs.filter(job => job.status === 'closed').length;

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[32px] tracking-widest lg:text-3xl font-bold text-foreground">
              JOBS
            </h1>
          </div>
          <ThemeToggle />
        </div>

        {isLoading ? (
          <DashboardSkeleton />
        ) : (
          <>
            {/* Stats Cards */}
            <div className="flex w-full flex-wrap xl:flex-nowrap gap-4 mb-8">
              <StatsCard
                title="Total Jobs Posted"
                value={mockJobs.length}
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
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between w-full gap-4">
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    className={`cursor-pointer gap-0 flex justify-center items-center border-none ${
                      showDrafts ? "bg-[#0032FB]" : "bg-[#000B37]"
                    }`}
                    onClick={() => {
                      setShowDrafts(!showDrafts);
                      setShowClosed(false);
                    }}
                  >
                    <div className="gap-2 h-full text-white flex items-center justify-center">
                      <FileText className="w-4 h-4 text-white" />
                      Drafts
                      <span className="text-white text-normal px-2 py-0.5 rounded-full">
                        {draftJobs.length}
                      </span>
                    </div>
                  </Button>
                  <Button className="gap-2 cursor-pointer bg-[#0032FB]">
                    <Plus className="w-4 h-4" />
                    Post New Job
                  </Button>
                </div>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="mb-6 flex flex-wrap gap-2 justify-between items-center">
              <SearchFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                jobProfile={jobProfile}
                onJobProfileChange={setJobProfile}
                experience={experience}
                onExperienceChange={setExperience}
                employmentType={employmentType}
                onEmploymentTypeChange={setEmploymentType}
                onReset={handleReset}
              />
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  className={`gap-2 cursor-pointer text-white border-0 ${
                    showClosed ? "bg-[#0032FB]" : "bg-[#1E2027]"
                  }`}
                  onClick={() => {
                    setShowClosed(!showClosed);
                    setShowDrafts(false);
                  }}
                >
                  <FileText className="w-4 h-4" />
                  Closed
                  <span className="text-white font-bold">{closedJobsCount}</span>
                </Button>
              </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No jobs found matching your criteria
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
