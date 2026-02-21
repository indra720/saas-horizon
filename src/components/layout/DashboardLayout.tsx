import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(true);
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen gradient-bg">
      <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      {/* Main content area */}
      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-300",
          isMobile ? "ml-0" : "",
          !isMobile && (collapsed ? "ml-[72px]" : "ml-[260px]")
        )}
      >
        <TopNavbar setSidebarCollapsed={setCollapsed} sidebarCollapsed={collapsed} />
        <main className="flex-1 p-2">{children}</main>
      </div>

      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 z-20 bg-black/50"
          onClick={() => setCollapsed(true)}
        ></div>
      )}
    </div>
  );
}
