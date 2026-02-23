import { useState } from "react";
import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";
import { useIsMdAndSmaller } from "@/hooks/use-md-and-smaller";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(true);
  const isMdAndSmaller = useIsMdAndSmaller();

  return (
    <div className="flex min-h-screen gradient-bg">
      <AppSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      {/* Main content area */}
      <div
        className={cn(
          "flex flex-1 flex-col transition-all duration-300",
          isMdAndSmaller ? "ml-0" : "",
          !isMdAndSmaller && (collapsed ? "ml-[72px]" : "ml-[260px]")
        )}
      >
        <TopNavbar setSidebarCollapsed={setCollapsed} sidebarCollapsed={collapsed} />
        <main className="flex-1 p-2">{children}</main>
      </div>

      {isMdAndSmaller && !collapsed && (
        <div
          className="fixed inset-0 z-20 bg-black/50"
          onClick={() => setCollapsed(true)}
        ></div>
      )}
    </div>
  );
}
