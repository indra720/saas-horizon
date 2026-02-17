import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { date: "Jan", income: 4200 },
  { date: "Feb", income: 5800 },
  { date: "Mar", income: 4900 },
  { date: "Apr", income: 7200 },
  { date: "May", income: 6100 },
  { date: "Jun", income: 8400 },
  { date: "Jul", income: 7600 },
  { date: "Aug", income: 9200 },
  { date: "Sep", income: 8100 },
  { date: "Oct", income: 10500 },
  { date: "Nov", income: 9800 },
  { date: "Dec", income: 11200 },
];

export function RecentOrdersChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="rounded-2xl border border-border bg-card p-6 card-shadow"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly income trend</p>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            Monthly
          </button>
          <button className="rounded-lg px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted">
            Weekly
          </button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(173, 80%, 26%)" stopOpacity={0.15} />
              <stop offset="95%" stopColor="hsl(173, 80%, 26%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 92%)" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(215, 14%, 46%)", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "hsl(215, 14%, 46%)", fontSize: 12 }}
            tickFormatter={(v) => `₹${v / 1000}k`}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid hsl(214, 20%, 92%)",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              fontSize: "13px",
            }}
            formatter={(value: number) => [`₹${value.toLocaleString()}`, "Income"]}
          />
          <Area
            type="monotone"
            dataKey="income"
            stroke="hsl(173, 80%, 26%)"
            strokeWidth={2.5}
            fill="url(#incomeGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
