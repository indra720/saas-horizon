import { motion } from "framer-motion";
import { TrendingUp, Users, CreditCard, ShoppingCart } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 12000 }, { month: "Feb", revenue: 19000 }, { month: "Mar", revenue: 15000 },
  { month: "Apr", revenue: 22000 }, { month: "May", revenue: 28000 }, { month: "Jun", revenue: 25000 },
  { month: "Jul", revenue: 32000 }, { month: "Aug", revenue: 29000 },
];

const planData = [
  { name: "Starter", users: 45 }, { name: "Professional", users: 120 }, { name: "Enterprise", users: 38 },
];

const stats = [
  { label: "Total Revenue", value: "₹1,82,000", change: "+12.5%", icon: TrendingUp, color: "text-green-600" },
  { label: "Active Users", value: "1,234", change: "+8.2%", icon: Users, color: "text-primary" },
  { label: "Active Plans", value: "203", change: "+5.1%", icon: CreditCard, color: "text-blue-600" },
  { label: "Total Orders", value: "856", change: "+15.3%", icon: ShoppingCart, color: "text-purple-600" },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-sm text-muted-foreground">Overview of your business performance</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-border bg-card p-5 card-shadow">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{s.label}</p>
              <s.icon className={`h-5 w-5 ${s.color}`} />
            </div>
            <p className="mt-2 text-2xl font-bold text-foreground">{s.value}</p>
            <p className="mt-1 text-xs text-green-600 font-medium">{s.change} from last month</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl border border-border bg-card p-6 card-shadow">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(173, 80%, 26%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(173, 80%, 26%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 57%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 57%)" />
              <Tooltip />
              <Area type="monotone" dataKey="revenue" stroke="hsl(173, 80%, 26%)" fill="url(#revGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="rounded-2xl border border-border bg-card p-6 card-shadow">
          <h3 className="mb-4 text-lg font-semibold text-foreground">Users by Plan</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={planData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 57%)" />
              <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 16%, 57%)" />
              <Tooltip />
              <Bar dataKey="users" fill="hsl(173, 80%, 26%)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
