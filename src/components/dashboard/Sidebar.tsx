import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Bell,
  Briefcase,
  Users,
  ChevronDown,
  ChevronRight,
  Settings,
  LogOut,
  Menu,
  X,
  LayoutDashboardIcon,
  MoveDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import RegisteredIcon from "/public/qlementine-icons_resume-16.png";
import FraShortlistedIcon from "/public/qlementine-icons_resume-16 (1).png";
import Frame from "/public/Frame.png";
import Line262Icon from "/public/Line 262.png";

interface NavItem {
  label: string;
  icon: React.ElementType | string;
  href: string;
  badge?: number;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboardIcon, href: "/dashboard" },
  { label: "Notifications", icon: Bell, href: "/notifications" },
  {
    label: "Jobs",
    icon: Briefcase,
    href: "/",
  },
  {
    label: "Candidates",
    icon: Users,
    href: "/candidates",
    children: [
      {
        label: "Registered",
        icon: RegisteredIcon,
        href: "/candidates",
        badge: 101,
      },
      {
        label: "Shortlisted",
        icon: FraShortlistedIcon,
        href: "/candidates/shortlisted",
        badge: 86,
      },
    ],
  },
];

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>(["Jobs"]);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((i) => i !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => location.pathname === href;
  const isParentActive = (item: NavItem) =>
    item.children?.some((child) => location.pathname === child.href) ||
    location.pathname === item.href;

  return (
    <>
      {/* Mobile toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        {isMobileOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {/* Overlay */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-full w-64 dark:bg-sidebar-background flex flex-col z-50 transition-transform duration-300",
          "lg:translate-x-0",
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="p-7">
          <div className="flex items-center gap-3">
            <img src={Frame} alt="" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-lg text-sm font-medium transition-colors",
                      isParentActive(item)
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon
                        className="w-5 h-5"
                        fill={isParentActive(item) ? "none" : "currentColor"}
                      />
                      <span>{item.label}</span>
                    </div>
                    {expandedItems.includes(item.label) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  {expandedItems.includes(item.label) && (
                    <div className="ml-8 mt-1">
                      {item.children.map((child) => (
                        <div key={child.label} className="flex">
                          <img
                            src={Line262Icon}
                            alt="Line 262"
                            className="w-px h-12"
                          />
                          <NavLink
                            key={child.href}
                            to={child.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={cn(
                              "flex items-center justify-between p-4 rounded-lg text-sm transition-colors",
                              isActive(child.href)
                                ? "text-primary  font-medium"
                                : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              {typeof child.icon === "string" ? (
                                <img
                                  src={child.icon}
                                  alt={child.label}
                                  className="w-5 h-5"
                                />
                              ) : (
                                <child.icon
                                  className="w-5 h-5"
                                  fill={
                                    isParentActive(item)
                                      ? "none"
                                      : "currentColor"
                                  }
                                />
                              )}
                              <span>{child.label}</span>
                            </div>
                            {child.badge && (
                              <span className="bg-[#2A2A2A] text-white text-xs px-2 py-0.5 rounded-full">
                                {child.badge}
                              </span>
                            )}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-lg text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : item.label === "Notifications"
                      ? "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon
                      className="w-5 h-5"
                      fill={isActive(item.href) ? "none" : "currentColor"}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4">
          <div className="flex items-center gap-3 p-1 pr-2 rounded-xl bg-[#232324]">
            <Avatar className="w-11 h-10 rounded-xl">
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-accent-foreground truncate">
                User name
              </p>
              <p className="text-[11px] text-sidebar-muted truncate">
                Hiring manager
              </p>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-sidebar-foreground hover:text-sidebar-accent-foreground"
              >
                <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
