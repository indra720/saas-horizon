// import { motion } from "framer-motion";
// import { Package, Search, Filter } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// const orders = [
//   { id: "#ORD-001", customer: "Acme Corp", plan: "Professional", amount: "₹2,499", date: "2026-02-15", status: "Completed" },
//   { id: "#ORD-002", customer: "TechStart Inc", plan: "Starter", amount: "₹999", date: "2026-02-14", status: "Completed" },
//   { id: "#ORD-003", customer: "CloudSoft", plan: "Enterprise", amount: "₹4,999", date: "2026-02-13", status: "Pending" },
//   { id: "#ORD-004", customer: "DataFlow Ltd", plan: "Professional", amount: "₹2,499", date: "2026-02-12", status: "Completed" },
//   { id: "#ORD-005", customer: "NetWave", plan: "Starter", amount: "₹999", date: "2026-02-11", status: "Failed" },
//   { id: "#ORD-006", customer: "PixelPro", plan: "Enterprise", amount: "₹4,999", date: "2026-02-10", status: "Completed" },
// ];

// const statusColor: Record<string, string> = {
//   Completed: "bg-green-100 text-green-700",
//   Pending: "bg-amber-100 text-amber-700",
//   Failed: "bg-red-100 text-red-700",
// };

// export default function Orders() {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-foreground">Orders</h1>
//           <p className="text-sm text-muted-foreground">View and manage all orders</p>
//         </div>
//         <Button variant="outline" className="gap-2 rounded-xl"><Filter className="h-4 w-4" /> Filter</Button>
//       </div>

//       <div className="relative max-w-sm">
//         <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//         <Input placeholder="Search orders..." className="pl-9 rounded-xl" />
//       </div>

//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-2xl border border-border bg-card card-shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full text-sm">
//             <thead>
//               <tr className="border-b border-border bg-muted/50">
//                 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Order ID</th>
//                 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Customer</th>
//                 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Plan</th>
//                 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Amount</th>
//                 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Date</th>
//                 <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((o, i) => (
//                 <motion.tr
//                   key={o.id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: i * 0.05 }}
//                   className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
//                 >
//                   <td className="px-4 py-3 font-medium text-foreground">{o.id}</td>
//                   <td className="px-4 py-3 text-foreground">{o.customer}</td>
//                   <td className="px-4 py-3"><Badge variant="secondary">{o.plan}</Badge></td>
//                   <td className="px-4 py-3 font-semibold text-foreground">{o.amount}</td>
//                   <td className="px-4 py-3 text-muted-foreground">{o.date}</td>
//                   <td className="px-4 py-3">
//                     <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${statusColor[o.status]}`}>{o.status}</span>
//                   </td>
//                 </motion.tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </motion.div>
//     </div>
//   );
// }









import { motion } from "framer-motion";
import { Search, Filter, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const orders = [
  {
    orderId: "699801C64D5D878191019",
    name: "Ajit singh",
    planName: "Paid Plan",
    price: "₹0",
    status: "Success",
    paymentType: "Manually",
    date: "20 Feb 2026",
    coupon: "-",
    note: "Manually plan upgraded by Super Admin",
  },
  {
    orderId: "699801BE652E6842367381",
    name: "Ajit singh",
    planName: "exculsive",
    price: "₹799",
    status: "Success",
    paymentType: "Manually",
    date: "20 Feb 2026",
    coupon: "-",
    note: "Manually plan upgraded by Super Admin",
  },
  {
    orderId: "6866FDD18AB8303690977",
    name: "ERP",
    planName: "restroent",
    price: "₹399",
    status: "Success",
    paymentType: "Manually",
    date: "04 Jul 2025",
    coupon: "-",
    note: "Manually plan upgraded by Super Admin",
  },
  {
    orderId: "680203868935358054204",
    name: "ERP",
    planName: "excusive",
    price: "₹799",
    status: "Success",
    paymentType: "Manually",
    date: "18 Apr 2025",
    coupon: "-",
    note: "Manually plan upgraded by Super Admin",
  },
  {
    orderId: "6798F36E100797198883",
    name: "ERP",
    planName: "excusive",
    price: "₹799",
    status: "Success",
    paymentType: "Manually",
    date: "28 Jan 2025",
    coupon: "-",
    note: "Manually plan upgraded by Super Admin",
  },
  {
    orderId: "676AC0A2F64635150443",
    name: "ERP",
    planName: "excusive",
    price: "₹799",
    status: "Success",
    paymentType: "Manually",
    date: "24 Dec 2024",
    coupon: "-",
    note: "Manually plan upgraded by Super Admin",
  },
];

export default function Orders() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Orders</h1>
          <p className="text-sm text-muted-foreground">
            View and manage all subscription orders
          </p>
        </div>
        <Button variant="outline" className="gap-2 rounded-xl">
          <Filter className="h-4 w-4" /> Filter
        </Button>
      </div>

      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Search orders..." className="pl-9 rounded-xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
      >
        <div className="overflow-x-auto w-[300px] md:w-[700px] lg:w-full">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/60">
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">ORDER ID</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">NAME</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">PLAN NAME</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">PRICE</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">STATUS</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">PAYMENT TYPE</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">DATE</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">COUPON</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">INVOICE</th>
                <th className="px-5 py-3.5 text-left font-medium text-muted-foreground">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <motion.tr
                  key={order.orderId}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-5 py-4 font-medium text-foreground">{order.orderId}</td>
                  <td className="px-5 py-4 text-foreground">{order.name}</td>
                  <td className="px-5 py-4">
                    <Badge variant="outline" className="font-normal">
                      {order.planName}
                    </Badge>
                  </td>
                  <td className="px-5 py-4 font-semibold text-foreground">{order.price}</td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{order.paymentType}</td>
                  <td className="px-5 py-4 text-muted-foreground">{order.date}</td>
                  <td className="px-5 py-4 text-muted-foreground">{order.coupon}</td>
                  <td className="px-5 py-4 text-muted-foreground">
                    {order.note.includes("invoice") ? "View" : "-"}
                  </td>
                  <td className="px-5 py-4">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-600">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      <div className="text-sm text-muted-foreground">
        Showing 1 to {orders.length} of {orders.length} entries
      </div>
    </div>
  );
}
