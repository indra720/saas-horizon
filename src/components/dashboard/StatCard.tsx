import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  subtitleValue: string | number;
  icon: LucideIcon;
  iconBg: string;
  delay?: number;
}

export function StatCard({ title, value, subtitle, subtitleValue, icon: Icon, iconBg, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="group rounded-2xl border border-border bg-card p-6 card-shadow transition-all duration-300 hover:card-shadow-hover hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
        </div>
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBg}`}>
          <Icon className="h-6 w-6 text-primary-foreground" />
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs">
        <span className="text-muted-foreground">{subtitle}:</span>
        <span className="font-semibold text-primary">{subtitleValue}</span>
      </div>
    </motion.div>
  );
}
