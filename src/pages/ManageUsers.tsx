import { motion } from "framer-motion";
import { MoreVertical, Calendar, Mail, Building2, Crown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const users = [
  { name: "Rajesh Kumar", email: "rajesh@techcorp.com", company: "TechCorp", plan: "Enterprise", created: "12 Jan 2025", expiry: "12 Jan 2026", stats: { orders: 142, revenue: "₹4.2L" } },
  { name: "Priya Sharma", email: "priya@startupx.io", company: "StartupX", plan: "Professional", created: "05 Mar 2025", expiry: "05 Mar 2026", stats: { orders: 87, revenue: "₹2.8L" } },
  { name: "Amit Patel", email: "amit@globalinc.com", company: "Global Inc", plan: "Enterprise", created: "20 Nov 2024", expiry: "20 Nov 2025", stats: { orders: 234, revenue: "₹7.1L" } },
  { name: "Sneha Reddy", email: "sneha@nexgen.co", company: "NexGen", plan: "Starter", created: "15 Jun 2025", expiry: "15 Jun 2026", stats: { orders: 45, revenue: "₹1.2L" } },
  { name: "Vikram Singh", email: "vikram@cloudops.in", company: "CloudOps", plan: "Professional", created: "08 Aug 2025", expiry: "08 Aug 2026", stats: { orders: 112, revenue: "₹3.5L" } },
  { name: "Ananya Gupta", email: "ananya@datapulse.com", company: "DataPulse", plan: "Enterprise", created: "22 Feb 2025", expiry: "22 Feb 2026", stats: { orders: 198, revenue: "₹6.4L" } },
];

export default function ManageUsers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Users</h1>
          <p className="text-sm text-muted-foreground">View and manage all user accounts</p>
        </div>
        <button className="rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          + Add User
        </button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {users.map((user, i) => (
          <motion.div
            key={user.email}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="group rounded-2xl border border-border bg-card p-5 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-0.5"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <Badge variant="secondary" className="rounded-lg text-xs font-medium bg-accent text-accent-foreground">
                <Building2 className="mr-1 h-3 w-3" />
                {user.company}
              </Badge>
              <button className="rounded-lg p-1 text-muted-foreground transition-colors hover:bg-muted">
                <MoreVertical className="h-4 w-4" />
              </button>
            </div>

            {/* Profile */}
            <div className="flex flex-col items-center text-center mb-4">
              <Avatar className="h-14 w-14 mb-3">
                <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                  {user.name.split(" ").map(n => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="text-base font-semibold text-foreground">{user.name}</h3>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Mail className="h-3 w-3" />
                {user.email}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                <Calendar className="h-3 w-3" />
                Joined {user.created}
              </div>
            </div>

            {/* Plan */}
            <div className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3 mb-4">
              <div className="flex items-center gap-2">
                <Crown className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{user.plan}</span>
              </div>
              <span className="text-[11px] text-muted-foreground">Exp: {user.expiry}</span>
            </div>

            <button className="mb-4 w-full rounded-xl border border-primary bg-primary/5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Upgrade Plan
            </button>

            {/* Stats */}
            <div className="flex items-center justify-around border-t border-border pt-3 text-center">
              <div>
                <p className="text-sm font-bold text-foreground">{user.stats.orders}</p>
                <p className="text-[11px] text-muted-foreground">Orders</p>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <p className="text-sm font-bold text-foreground">{user.stats.revenue}</p>
                <p className="text-[11px] text-muted-foreground">Revenue</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
