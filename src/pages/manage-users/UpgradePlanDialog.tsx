import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Crown } from "lucide-react";

interface UpgradePlanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onUpgrade: (plan: string) => void;
  userName: string;
}

export function UpgradePlanDialog({ open, onOpenChange, onUpgrade, userName }: UpgradePlanDialogProps) {
  const [selectedPlan, setSelectedPlan] = useState("padi_plain_month");

  const plans = [
    { id: "padi_plain_month", name: "Padi Plain Month", price: "$10/month" },
    { id: "exclusive_month", name: "Exclusive Month", price: "$25/month" },
    { id: "restropent_lifetime", name: "Restropent Lifetime", price: "$99/one-time" },
  ];

  const handleUpgrade = () => {
    onUpgrade(selectedPlan);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] lg:max-w-md max-h-[90vh]">
        <DialogHeader>
          <DialogTitle>Upgrade Plan for {userName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            Select a new plan for {userName}.
          </p>

          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="grid gap-2">
            {plans.map((plan) => (
              <div key={plan.id} className="flex items-center space-x-2 p-2 border rounded-md">
                <RadioGroupItem value={plan.id} id={plan.id} />
                <Label htmlFor={plan.id} className="flex-1">
                  <span className="font-medium">{plan.name}</span>
                  <span className="ml-2 text-muted-foreground">{plan.price}</span>
                </Label>
                <Crown className="h-4 w-4 text-primary" />
              </div>
            ))}
          </RadioGroup>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">Features Included:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Manage unlimited users</li>
              <li>Dedicated customer support</li>
              <li>Access to premium templates</li>
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="font-semibold mb-2">User Types:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Users</li>
              <li>Customers</li>
              <li>Vendors</li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpgrade}>Upgrade Plan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
