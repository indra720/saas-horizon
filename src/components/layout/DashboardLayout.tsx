import { AppSidebar } from "./AppSidebar";
import { TopNavbar } from "./TopNavbar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen gradient-bg">
      <AppSidebar />
      {/* Main content area - sidebar is 260px max, but animated */}
      <div className="flex flex-1 flex-col ml-[72px] sm:ml-[260px] transition-all duration-300">
        <TopNavbar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
