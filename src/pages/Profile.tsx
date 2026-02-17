import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Building, Shield } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Profile() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Profile</h1>
        <p className="text-sm text-muted-foreground">Manage your account information</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-border bg-card p-6 card-shadow text-center md:col-span-1"
        >
          <Avatar className="mx-auto h-24 w-24">
            <AvatarFallback className="bg-primary text-2xl text-primary-foreground">AD</AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-lg font-semibold text-foreground">Admin User</h3>
          <p className="text-sm text-muted-foreground">Super Admin</p>
          <div className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-primary/10 px-3 py-1.5">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary">Administrator</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl border border-border bg-card p-6 card-shadow md:col-span-2"
        >
          <h3 className="mb-4 text-lg font-semibold text-foreground">Personal Information</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Full Name", value: "Admin User", icon: User },
              { label: "Email", value: "admin@erp.com", icon: Mail },
              { label: "Phone", value: "+91 9876543210", icon: Phone },
              { label: "Location", value: "Mumbai, India", icon: MapPin },
              { label: "Company", value: "ERP Solutions Pvt Ltd", icon: Building },
              { label: "Role", value: "Super Admin", icon: Shield },
            ].map((field) => (
              <div key={field.label} className="space-y-2">
                <Label className="flex items-center gap-1.5 text-muted-foreground">
                  <field.icon className="h-3.5 w-3.5" />
                  {field.label}
                </Label>
                <Input defaultValue={field.value} readOnly className="bg-muted/50" />
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-end">
            <Button className="rounded-xl">Save Changes</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
