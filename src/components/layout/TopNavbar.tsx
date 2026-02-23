import { Bell, Globe, Search, ChevronDown, Menu } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { useIsMdAndSmaller } from "@/hooks/use-md-and-smaller";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";


export function TopNavbar({
  setSidebarCollapsed,
  sidebarCollapsed,
}: {
  setSidebarCollapsed: (collapsed: boolean) => void;
  sidebarCollapsed: boolean;
}) {
  const navigate = useNavigate();
  const isMdAndSmaller = useIsMdAndSmaller();
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          {isMdAndSmaller && (
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              <Menu className="h-4 w-4" />
            </button>
          )}
          {isMdAndSmaller ? (
            <button
              className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              onClick={() => setShowSearchDropdown(!showSearchDropdown)}
            >
              <Search className="h-4 w-4" />
            </button>
          ) : (
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 rounded-md w-[200px]"
              />
            </div>
          )}

          {/* {!isMobile && (
            <h2 className="text-lg font-semibold text-foreground">
              Good Morning, <span className="text-primary">Admin</span> 👋
            </h2>
          )} */}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">


          {/* Notifications */}
          <button onClick={() => navigate("/notifications")} className="relative flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive p-0 text-[10px] text-destructive-foreground">
              3
            </Badge>
          </button>

          {/* Profile */}
          <div onClick={() => navigate("/profile")} className="flex items-center gap-2 rounded-xl border border-border px-3 py-1.5 cursor-pointer hover:bg-muted transition-colors">
            <Avatar className="h-7 w-7">
              <AvatarFallback className="bg-primary text-xs text-primary-foreground">
                AD
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:block">
              <p className="text-xs font-medium text-foreground leading-none">Admin User</p>
              <p className="text-[10px] text-muted-foreground">Super Admin</p>
            </div>
            <ChevronDown className="h-3 w-3 text-muted-foreground" />
          </div>
        </div>
      </header>
      <AnimatePresence>
        {isMdAndSmaller && showSearchDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -20, scaleY: 0.8 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -20, scaleY: 0.8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="fixed top-16 z-30 w-full bg-card border-b border-border p-3"
          >
            <Input
              type="text"
              placeholder="Search..."
              className="w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
