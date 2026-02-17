import { Users, ShoppingCart, CreditCard } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentOrdersChart } from "@/components/dashboard/RecentOrdersChart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Users"
          value="12,482"
          subtitle="Paid Users"
          subtitleValue="8,240"
          icon={Users}
          iconBg="bg-primary"
          delay={0}
        />
        <StatCard
          title="Total Orders"
          value="3,672"
          subtitle="Total Amount"
          subtitleValue="₹24,58,000"
          icon={ShoppingCart}
          iconBg="bg-secondary"
          delay={0.1}
        />
        <StatCard
          title="Total Plans"
          value="12"
          subtitle="Most Purchased"
          subtitleValue="Enterprise Pro"
          icon={CreditCard}
          iconBg="bg-success"
          delay={0.2}
        />
      </div>
      <RecentOrdersChart />
    </div>
  );
}
