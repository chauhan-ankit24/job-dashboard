import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  jobProfile: string;
  onJobProfileChange: (value: string) => void;
  experience: string;
  onExperienceChange: (value: string) => void;
  employmentType: string;
  onEmploymentTypeChange: (value: string) => void;
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
}: SearchFiltersProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search jobs..."
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
            <SelectItem value="all">All Profiles</SelectItem>
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
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="0-1">0-1 years</SelectItem>
            <SelectItem value="1-3">1-3 years</SelectItem>
            <SelectItem value="3-5">3-5 years</SelectItem>
            <SelectItem value="5+">5+ years</SelectItem>
          </SelectContent>
        </Select>

        <Select value={employmentType} onValueChange={onEmploymentTypeChange}>
          <SelectTrigger className="w-[150px] bg-card">
            <SelectValue placeholder="Employment Type" />
          </SelectTrigger>
          <SelectContent className="bg-popover">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="full-time">Full-time</SelectItem>
            <SelectItem value="part-time">Part-time</SelectItem>
            <SelectItem value="contract">Contract</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
