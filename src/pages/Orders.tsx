import { motion } from "framer-motion";
import { Package, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const orders = [
  { id: "#ORD-001", customer: "Acme Corp", plan: "Professional", amount: "₹2,499", date: "2026-02-15", status: "Completed" },
  { id: "#ORD-002", customer: "TechStart Inc", plan: "Starter", amount: "₹999", date: "2026-02-14", status: "Completed" },
  { id: "#ORD-003", customer: "CloudSoft", plan: "Enterprise", amount: "₹4,999", date: "2026-02-13", status: "Pending" },
  { id: "#ORD-004", customer: "DataFlow Ltd", plan: "Professional", amount: "₹2,499", date: "2026-02-12", status: "Completed" },
  { id: "#ORD-005", customer: "NetWave", plan: "Starter", amount: "₹999", date: "2026-02-11", status: "Failed" },
  { id: "#ORD-006", customer: "PixelPro", plan: "Enterprise", amount: "₹4,999", date: "2026-02-10", status: "Completed" },
];

const statusColor: Record<string, string> = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Failed: "bg-red-100 text-red-700",
};

export default function Orders() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Orders</h1>
          <p className="text-sm text-muted-foreground">View and manage all orders</p>
        </div>
        <Button variant="outline" className="gap-2 rounded-xl"><Filter className="h-4 w-4" /> Filter</Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search orders..." className="pl-9 rounded-xl" />
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card card-shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Order ID</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Customer</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Plan</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Amount</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o, i) => (
                <motion.tr
                  key={o.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3 font-medium text-foreground">{o.id}</td>
                  <td className="px-4 py-3 text-foreground">{o.customer}</td>
                  <td className="px-4 py-3"><Badge variant="secondary">{o.plan}</Badge></td>
                  <td className="px-4 py-3 font-semibold text-foreground">{o.amount}</td>
                  <td className="px-4 py-3 text-muted-foreground">{o.date}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[o.status]}`}>{o.status}</span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
