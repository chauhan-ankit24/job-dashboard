import { Search, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  jobProfile: string;
  onJobProfileChange: (value: string) => void;
  experience: string;
  onExperienceChange: (value: string) => void;
  employmentType: string;
  onEmploymentTypeChange: (value: string) => void;
  onReset: () => void;
}

export function SearchFilters({
  searchQuery,
  onSearchChange,
  jobProfile,
  onJobProfileChange,
  experience,
  onExperienceChange,
  employmentType,
  onEmploymentTypeChange,
  onReset,
}: SearchFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Enter a job title"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <Select value={jobProfile} onValueChange={onJobProfileChange}>
          <SelectTrigger className="w-[140px] bg-card">
            <SelectValue placeholder="Job Profile" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">Job Profile</SelectItem>
            <SelectItem value="design">Design</SelectItem>
            <SelectItem value="engineering">Engineering</SelectItem>
            <SelectItem value="marketing">Marketing</SelectItem>
            <SelectItem value="operations">Operations</SelectItem>
          </SelectContent>
        </Select>

        <Select value={experience} onValueChange={onExperienceChange}>
          <SelectTrigger className="w-[140px] bg-card">
            <SelectValue placeholder="Experience" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">Experience</SelectItem>
            <SelectItem value="0-1">Exp 0-1</SelectItem>
            <SelectItem value="1-3">Exp 1-3</SelectItem>
            <SelectItem value="3-5">Exp 3-5</SelectItem>
            <SelectItem value="5+">Exp 5+</SelectItem>
          </SelectContent>
        </Select>

        <Select value={employmentType} onValueChange={onEmploymentTypeChange}>
          <SelectTrigger className="w-[150px] bg-card">
            <SelectValue placeholder="Employment Type" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">Employment Type</SelectItem>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon" onClick={onReset}>
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
