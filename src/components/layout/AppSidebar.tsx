import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  Settings,
  BarChart3,
  Package,
  ChevronLeft,
  ChevronRight,
  Layers,
  User,
  Bell,
  Mail, // New icon for Email Templates
  LayoutTemplate, // New icon for Landing Pages
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const menuItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Manage Users", path: "/users", icon: Users },
  { title: "Plans", path: "/plans", icon: CreditCard },
  { title: "Plan Requests", path: "/plan-requests", icon: FileText },
  { title: "Coupons", path: "/coupn", icon: FileText },
  { title: "Orders", path: "/orders", icon: Package },
  { title: "Email Templates", path: "/email-templates", icon: Mail }, // New menu item
  { title: "Landing Pages", path: "/landing-pages", icon: LayoutTemplate }, // New menu item
  { title: "Analytics", path: "/analytics", icon: BarChart3 },
  { title: "Notifications", path: "/notifications", icon: Bell },
  { title: "Profile", path: "/profile", icon: User },
  { title: "Settings", path: "/settings", icon: Settings },
];

export function AppSidebar({ collapsed, setCollapsed }: { collapsed: boolean; setCollapsed: (collapsed: boolean) => void }) {
  const location = useLocation();
  const isMobile = useIsMobile();

  return (
    <motion.aside
      animate={
        isMobile
          ? { x: collapsed ? -260 : 0 }
          : { width: collapsed ? 72 : 260 }
      }
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="fixed inset-y-0 left-0 top-0 z-30 flex flex-col border-r border-border bg-card h-screen"
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border px-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary">
          <Layers className="h-5 w-5 text-primary-foreground" />
        </div>
        <AnimatePresence>
          {!(collapsed && !isMobile) && ( // show title always on mobile, and when not collapsed on desktop
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-lg font-bold text-foreground whitespace-nowrap"
            >
              ERP Admin
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
              onClick={() => {
                // On mobile, close sidebar when a link is clicked
                if (isMobile && !collapsed) {
                  setCollapsed(true);
                }
                // On desktop, expand sidebar if it's collapsed when a link is clicked
                else if (!isMobile && collapsed) {
                  setCollapsed(false);
                }
              }}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <AnimatePresence>
                {!(collapsed && !isMobile) && ( // show title always on mobile, and when not collapsed on desktop
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="whitespace-nowrap"
                  >
                    {item.title}
                  </motion.span>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </nav>

      {/* Collapse toggle - only on desktop */}
      {!isMobile && (
        <div className="border-t border-border p-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex w-full items-center justify-center rounded-xl p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>
      )}
    </motion.aside>
  );
}
