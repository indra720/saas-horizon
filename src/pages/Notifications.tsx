import { motion } from "framer-motion";
import { Bell, CheckCircle, AlertCircle, Info, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const notifications = [
  { id: 1, title: "New user registered", desc: "John Doe created an account", time: "2 min ago", type: "info", read: false },
  { id: 2, title: "Payment received", desc: "₹2,499 from Acme Corp for Professional plan", time: "1 hour ago", type: "success", read: false },
  { id: 3, title: "Plan expired", desc: "TechStart Inc plan expired today", time: "3 hours ago", type: "warning", read: true },
  { id: 4, title: "Server maintenance", desc: "Scheduled maintenance at 2 AM IST", time: "5 hours ago", type: "info", read: true },
  { id: 5, title: "New order placed", desc: "Order #1234 placed by CloudSoft", time: "1 day ago", type: "success", read: true },
];

const iconMap = { info: Info, success: CheckCircle, warning: AlertCircle };

export default function Notifications() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
          <p className="text-sm text-muted-foreground">Stay updated with latest activities</p>
        </div>
        <Badge variant="secondary" className="gap-1"><Bell className="h-3 w-3" /> {notifications.filter(n => !n.read).length} Unread</Badge>
      </div>

      <div className="space-y-3">
        {notifications.map((n, i) => {
          const Icon = iconMap[n.type as keyof typeof iconMap] || Info;
          return (
            <motion.div
              key={n.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-start gap-4 rounded-2xl border bg-card p-4 card-shadow transition-all hover:card-shadow-hover ${!n.read ? "border-primary/30" : "border-border"}`}
            >
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${n.type === "success" ? "bg-green-100 text-green-600" : n.type === "warning" ? "bg-amber-100 text-amber-600" : "bg-primary/10 text-primary"}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-foreground">{n.title}</p>
                  {!n.read && <span className="h-2 w-2 rounded-full bg-primary" />}
                </div>
                <p className="text-xs text-muted-foreground">{n.desc}</p>
              </div>
              <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap">
                <Clock className="h-3 w-3" /> {n.time}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
