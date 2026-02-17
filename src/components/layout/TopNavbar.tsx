import { Bell, Globe, Search, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

export function TopNavbar() {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-border bg-card/80 backdrop-blur-sm px-6">
      {/* Left */}
      <div>
        <h2 className="text-lg font-semibold text-foreground">
          Good Morning, <span className="text-primary">Admin</span> 👋
        </h2>
        <p className="text-xs text-muted-foreground">Here's what's happening today</p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button className="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Search className="h-4 w-4" />
        </button>

        {/* Language */}
        <button className="flex h-9 items-center gap-1.5 rounded-xl px-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">EN</span>
          <ChevronDown className="h-3 w-3" />
        </button>

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
  );
}
