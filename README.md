# Job Dashboard

## Features

- **Fully Responsive Design**: Optimized for all screen sizes with a collapsible sidebar on mobile devices
- **Dark/Light Mode Toggle**: Switch between dark and light themes for better user experience
- **Search Functionality**: Search jobs by title with real-time filtering
- **Loading Skeletons**: Smooth loading experience with skeleton placeholders during data fetch
- **Advanced Filtering**: Filter jobs by employment type (full-time, part-time, contract, etc.)
- **Job Status Management**: View active jobs, closed jobs, and draft jobs with dedicated toggles

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd job-dashboard
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Tech/Styling Choices

- **Framework**: React 18 with TypeScript for type safety and better development experience
- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and dark/light mode support
- **UI Components**: Radix UI primitives with shadcn/ui for accessible, customizable components
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack Query for server state management and caching
- **Theme Management**: next-themes for seamless dark/light mode switching
- **Icons**: Lucide React for consistent, scalable iconography
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Typography**: Gilroy font family for modern, professional appearance

## Data Assumptions

- Job data is sourced from mock data (`src/data/mockJobs.ts`) simulating a real API response
- Jobs have three statuses: 'active', 'closed', and 'draft'
- Each job includes metrics for applications received, clicks, and candidates under process
- Salary ranges and experience levels are provided as strings for display purposes
- Posted times are relative (e.g., "2 hours ago") and not dynamically calculated
- Draft jobs have zero metrics as they haven't been published yet

## Component Structure Overview

The application follows a modular component architecture:

- **Pages**: Main route components (`Index.tsx`, `NotFound.tsx`)
- **Dashboard Components**: Core dashboard functionality
  - `Sidebar.tsx`: Navigation sidebar with collapsible menu
  - `SearchFilters.tsx`: Search and filter controls
  - `JobCard.tsx`: Individual job listing display
  - `StatsCard.tsx`: Statistics display cards
  - `DashboardSkeleton.tsx`: Loading state skeletons
- **UI Components**: Reusable UI elements from shadcn/ui (buttons, inputs, dialogs, etc.)
- **Hooks**: Custom hooks for mobile detection (`use-mobile.tsx`) and toast notifications (`use-toast.ts`)
- **Utilities**: Helper functions and configurations (`utils.ts`, theme setup)
