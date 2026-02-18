import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Edit, Plus } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PlanData {
  name: string;
  price: string;
  duration: string;
  maxUsers: string;
  maxCustomers: string;
  maxVendors: string;
  maxClients: string;
  storageLimit: string;
  description: string;
  popular: boolean;
  features: string[];
  modules: { [key: string]: boolean };
}

const defaultModules = {
  CRM: true,
  Project: true,
  HRM: true,
  Account: true,
  POS: true,
  "Chat GPT": true,
  "Admin Office": true,
};

const initialPlans: PlanData[] = [
  {
    name: "Starter",
    price: "999",
    duration: "Per Month",
    maxUsers: "10",
    maxCustomers: "50",
    maxVendors: "5",
    maxClients: "50",
    storageLimit: "5",
    description: "Basic plan for small teams",
    popular: false,
    features: ["Up to 10 Users", "5 GB Storage", "Basic Reports", "Email Support", "CRM Module", "Invoice Module"],
    modules: { CRM: true, Project: false, HRM: false, Account: false, POS: false, "Chat GPT": false, "Admin Office": false },
  },
  {
    name: "Professional",
    price: "2499",
    duration: "Per Month",
    maxUsers: "50",
    maxCustomers: "200",
    maxVendors: "20",
    maxClients: "200",
    storageLimit: "25",
    description: "Best for growing businesses",
    popular: true,
    features: ["Up to 50 Users", "25 GB Storage", "Advanced Reports", "Priority Support", "CRM, HRM, POS Modules", "API Access"],
    modules: { CRM: true, Project: true, HRM: true, Account: false, POS: true, "Chat GPT": false, "Admin Office": false },
  },
  {
    name: "Enterprise",
    price: "4999",
    duration: "Per Month",
    maxUsers: "-1",
    maxCustomers: "-1",
    maxVendors: "-1",
    maxClients: "-1",
    storageLimit: "100",
    description: "Full access for large enterprises",
    popular: false,
    features: ["Unlimited Users", "100 GB Storage", "Custom Reports", "24/7 Support", "All Modules Included", "ChatGPT Integration"],
    modules: { CRM: true, Project: true, HRM: true, Account: true, POS: true, "Chat GPT": true, "Admin Office": true },
  },
];

const emptyPlan: PlanData = {
  name: "",
  price: "",
  duration: "Per Month",
  maxUsers: "",
  maxCustomers: "",
  maxVendors: "",
  maxClients: "",
  storageLimit: "",
  description: "",
  popular: false,
  features: [],
  modules: { ...defaultModules },
};

export default function PlansPage() {
  const [plans, setPlans] = useState<PlanData[]>(initialPlans);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [form, setForm] = useState<PlanData>(emptyPlan);

  const openEdit = (index: number) => {
    setEditingIndex(index);
    setForm({ ...plans[index] });
    setDialogOpen(true);
  };

  const openCreate = () => {
    setEditingIndex(null);
    setForm({ ...emptyPlan, modules: { ...defaultModules } });
    setDialogOpen(true);
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updated = [...plans];
      updated[editingIndex] = form;
      setPlans(updated);
    } else {
      setPlans([...plans, form]);
    }
    setDialogOpen(false);
  };

  const enabledModules = (m: { [key: string]: boolean }) =>
    Object.entries(m).filter(([, v]) => v).map(([k]) => k);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Pricing Plans</h1>
          <p className="text-sm text-muted-foreground">Manage and configure subscription plans</p>
        </div>
        <Button onClick={openCreate} className="gap-2 rounded-xl">
          <Plus className="h-4 w-4" />
          Create Plan
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name + i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className={`relative rounded-2xl border bg-card p-6 transition-all duration-300 ${
              plan.popular ? "border-primary card-glow" : "border-border card-shadow hover:card-shadow-hover"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6 text-center">
              <span className="inline-flex items-center gap-1 rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Sparkles className="h-3 w-3" />
                {plan.name}
              </span>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground">₹{plan.price}</span>
                <span className="text-sm text-muted-foreground">/{plan.duration.replace("Per ", "").toLowerCase()}</span>
              </div>
            </div>

            <ul className="mb-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mb-6">
              <p className="mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">Enabled Modules</p>
              <div className="flex flex-wrap gap-1.5">
                {enabledModules(plan.modules).map((m) => (
                  <span key={m} className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => openEdit(i)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Edit className="h-4 w-4" />
              Edit Plan
            </button>
          </motion.div>
        ))}
      </div>

      {/* Edit / Create Plan Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="w-[90vw] lg:max-w-4xl max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DialogHeader>
            <DialogTitle>{editingIndex !== null ? "Edit Plan" : "Create Plan"}</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Plan name" />
              </div>
              <div className="space-y-2">
                <Label>Price</Label>
                <Input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="799.00" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Duration</Label>
                <Select value={form.duration} onValueChange={(v) => setForm({ ...form, duration: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Per Month">Per Month</SelectItem>
                    <SelectItem value="Per Year">Per Year</SelectItem>
                    <SelectItem value="Lifetime">Lifetime</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Maximum Users</Label>
                <Input value={form.maxUsers} onChange={(e) => setForm({ ...form, maxUsers: e.target.value })} placeholder="100" />
                <p className="text-xs text-muted-foreground">Note: "-1" for Unlimited</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Maximum Customers</Label>
                <Input value={form.maxCustomers} onChange={(e) => setForm({ ...form, maxCustomers: e.target.value })} placeholder="100" />
                <p className="text-xs text-muted-foreground">Note: "-1" for Unlimited</p>
              </div>
              <div className="space-y-2">
                <Label>Maximum Vendors</Label>
                <Input value={form.maxVendors} onChange={(e) => setForm({ ...form, maxVendors: e.target.value })} placeholder="10" />
                <p className="text-xs text-muted-foreground">Note: "-1" for Unlimited</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Maximum Clients</Label>
                <Input value={form.maxClients} onChange={(e) => setForm({ ...form, maxClients: e.target.value })} placeholder="100" />
                <p className="text-xs text-muted-foreground">Note: "-1" for Unlimited</p>
              </div>
              <div className="space-y-2">
                <Label>Storage Limit</Label>
                <div className="flex gap-2">
                  <Input value={form.storageLimit} onChange={(e) => setForm({ ...form, storageLimit: e.target.value })} placeholder="9.99" />
                  <span className="flex items-center rounded-md border bg-muted px-3 text-sm text-muted-foreground">MB</span>
                </div>
                <p className="text-xs text-muted-foreground">Note: upload size (in MB)</p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Plan description..." />
            </div>

            <div>
              <Label className="mb-3 block">Modules</Label>
              <div className="grid grid-cols-4 gap-3">
                {Object.keys(form.modules).map((mod) => (
                  <div key={mod} className="flex items-center gap-2">
                    <Switch
                      checked={form.modules[mod]}
                      onCheckedChange={(checked) =>
                        setForm({ ...form, modules: { ...form.modules, [mod]: checked } })
                      }
                    />
                    <span className="text-sm text-foreground">{mod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSave}>{editingIndex !== null ? "Update" : "Create"}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
