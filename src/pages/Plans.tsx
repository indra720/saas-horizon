import { motion } from "framer-motion";
import { Check, Sparkles, Edit } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹999",
    duration: "/month",
    popular: false,
    features: ["Up to 10 Users", "5 GB Storage", "Basic Reports", "Email Support", "CRM Module", "Invoice Module"],
    modules: ["CRM", "Invoice"],
  },
  {
    name: "Professional",
    price: "₹2,499",
    duration: "/month",
    popular: true,
    features: ["Up to 50 Users", "25 GB Storage", "Advanced Reports", "Priority Support", "CRM, HRM, POS Modules", "API Access"],
    modules: ["CRM", "HRM", "POS", "Projects"],
  },
  {
    name: "Enterprise",
    price: "₹4,999",
    duration: "/month",
    popular: false,
    features: ["Unlimited Users", "100 GB Storage", "Custom Reports", "24/7 Support", "All Modules Included", "ChatGPT Integration"],
    modules: ["CRM", "HRM", "POS", "Projects", "ChatGPT"],
  },
];

export default function PlansPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Pricing Plans</h1>
        <p className="text-sm text-muted-foreground">Manage and configure subscription plans</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className={`relative rounded-2xl border bg-card p-6 transition-all duration-300 ${
              plan.popular
                ? "border-primary card-glow"
                : "border-border card-shadow hover:card-shadow-hover"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge label="Most Popular" />
              </div>
            )}

            <div className="mb-6 text-center">
              <span className="inline-flex items-center gap-1 rounded-lg bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Sparkles className="h-3 w-3" />
                {plan.name}
              </span>
              <div className="mt-4">
                <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.duration}</span>
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
                {plan.modules.map((m) => (
                  <span
                    key={m}
                    className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              <Edit className="h-4 w-4" />
              Edit Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
      {label}
    </span>
  );
}
