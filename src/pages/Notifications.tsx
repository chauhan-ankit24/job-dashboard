import { Bell } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Notifications() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />

      {/* Main Content */}
      <main className="lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-[32px] tracking-widest lg:text-3xl font-bold text-foreground">
              NOTIFICATIONS
            </h1>
          </div>
          <ThemeToggle />
        </div>

        {/* Placeholder for notifications content */}
        <div className="text-center py-12">
          <Bell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">Notifications overview coming soon...</p>
        </div>
      </main>
    </div>
  );
}
