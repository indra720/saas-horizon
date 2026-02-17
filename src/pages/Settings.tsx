import { motion } from "framer-motion";
import { Globe, Bell, Shield, Palette, Database, Mail } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const sections = [
  {
    title: "General",
    icon: Globe,
    items: [
      { label: "Application Name", type: "input", value: "ERP Admin" },
      { label: "Language", type: "select", options: ["English", "Hindi", "Spanish"] },
      { label: "Timezone", type: "select", options: ["IST (UTC+5:30)", "UTC", "EST (UTC-5)"] },
    ],
  },
  {
    title: "Notifications",
    icon: Bell,
    items: [
      { label: "Email Notifications", type: "switch", checked: true },
      { label: "Push Notifications", type: "switch", checked: false },
      { label: "Order Alerts", type: "switch", checked: true },
    ],
  },
  {
    title: "Security",
    icon: Shield,
    items: [
      { label: "Two-Factor Authentication", type: "switch", checked: false },
      { label: "Session Timeout (minutes)", type: "input", value: "30" },
    ],
  },
];

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Configure your application preferences</p>
      </div>

      <div className="space-y-6">
        {sections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: si * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 card-shadow"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <section.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
            </div>
            <div className="space-y-4">
              {section.items.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4">
                  <Label className="text-sm text-foreground">{item.label}</Label>
                  {item.type === "switch" && <Switch defaultChecked={item.checked} />}
                  {item.type === "input" && <Input defaultValue={item.value} className="max-w-xs rounded-xl" />}
                  {item.type === "select" && (
                    <Select defaultValue={item.options?.[0]}>
                      <SelectTrigger className="max-w-xs rounded-xl"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {item.options?.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end">
        <Button className="rounded-xl">Save Settings</Button>
      </div>
    </div>
  );
}
