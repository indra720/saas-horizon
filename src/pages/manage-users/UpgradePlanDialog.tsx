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
    { id: "padi_plain_month", name: "Padi Plain Month", price: "$10/month", usersLimit: 5, customersLimit: 50, vendorsLimit: 5 },
    { id: "exclusive_month", name: "Exclusive Month", price: "$25/month", usersLimit: 20, customersLimit: 200, vendorsLimit: 20 },
    { id: "restropent_lifetime", name: "Restropent Lifetime", price: "$99/one-time", usersLimit: 999, customersLimit: 9999, vendorsLimit: 999 },
  ];

  const handleUpgrade = () => {
    onUpgrade(selectedPlan);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] lg:max-w-5xl max-h-[90vh] overflow-y-auto rounded-md [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle>Upgrade Plan for {userName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <p className="text-sm text-muted-foreground">
            Select a new plan for {userName}.
          </p>

          {/* Header Row for the table */}
          <div className="grid grid-cols-5 gap-4 px-4 py-2 font-semibold border-b border-border">
            <div>Plan</div>
            <div className="text-center">Users</div>
            <div className="text-center">Customers</div>
            <div className="text-center">Vendors</div>
            <div className="text-right">Action</div>
          </div>

          <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="gap-2">
            {plans.map((plan) => (
              <div key={plan.id} className="grid grid-cols-5 items-center gap-4 p-4 border rounded-lg shadow-sm">
                {/* Column 1: Plan Details */}
                <div className="flex items-center space-x-4">
                  <RadioGroupItem value={plan.id} id={plan.id} className="shrink-0" />
                  <Label htmlFor={plan.id} className="flex flex-col flex-1 cursor-pointer">
                    <span className="font-semibold text-lg">{plan.name}</span>
                    <span className="text-muted-foreground text-sm">{plan.price}</span>
                  </Label>
                </div>

                {/* Column 2: Users Count */}
                <div className="text-sm text-muted-foreground text-center">
                  <span>{plan.usersLimit}</span>
                </div>

                {/* Column 3: Customers Count */}
                <div className="text-sm text-muted-foreground text-center">
                  <span>{plan.customersLimit}</span>
                </div>

                {/* Column 4: Vendors Count */}
                <div className="text-sm text-muted-foreground text-center">
                  <span>{plan.vendorsLimit}</span>
                </div>

                {/* Column 5: Upgrade Button */}
                <div className="flex justify-end">
                  <Button
                    size="sm"
                    onClick={() => onUpgrade(plan.id)}
                    disabled={selectedPlan === plan.id}
                    className="w-full sm:w-auto"
                  >
                    {selectedPlan === plan.id ? "Current Plan" : "Upgrade"}
                  </Button>
                </div>
              </div>
            ))}
          </RadioGroup>

        </div>
        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleUpgrade} disabled={true}> {/* Generic upgrade button disabled now that there are per-plan buttons */}
            Upgrade Plan
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
