import { useState, useMemo } from "react";
import { Briefcase, FileText, Users, Plus } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { JobCard } from "@/components/dashboard/JobCard";
import { SearchFilters } from "@/components/dashboard/SearchFilters";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { mockJobs, draftJobs } from "@/data/mockJobs";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [jobProfile, setJobProfile] = useState("all");
  const [experience, setExperience] = useState("all");
  const [employmentType, setEmploymentType] = useState("all");
  const [showClosed, setShowClosed] = useState(false);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
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
  }, [searchQuery, jobProfile, experience, employmentType]);

  const totalApplied = mockJobs.reduce((sum, job) => sum + job.applied, 0);
  const totalHired = Math.floor(totalApplied * 0.15);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
            Jobs
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your job postings and applications
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
            icon={<Users className="w-6 h-6" />}
            variant="hired"
          />
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Button variant="outline" className="gap-2">
              <FileText className="w-4 h-4" />
              Drafts
              <span className="bg-muted text-muted-foreground text-xs px-2 py-0.5 rounded-full ml-1">
                {draftJobs.length}
              </span>
            </Button>
            <Button className="gap-2">
              <Plus className="w-4 h-4" />
              Post New Job
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Switch
              id="show-closed"
              checked={showClosed}
              onCheckedChange={setShowClosed}
            />
            <Label
              htmlFor="show-closed"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              Show Closed Jobs
            </Label>
          </div>
        </div>

        {/* Search & Filters */}
        <div className="mb-6">
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            jobProfile={jobProfile}
            onJobProfileChange={setJobProfile}
            experience={experience}
            onExperienceChange={setExperience}
            employmentType={employmentType}
            onEmploymentTypeChange={setEmploymentType}
          />
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
      </main>
    </div>
  );
}
