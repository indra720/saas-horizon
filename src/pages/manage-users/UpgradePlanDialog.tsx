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

export function UpgradePlanDialog({
  open,
  onOpenChange,
  onUpgrade,
  userName,
}: UpgradePlanDialogProps) {
  const [selectedPlan, setSelectedPlan] = useState("padi_plain_month");

  const plans = [
    {
      id: "padi_plain_month",
      name: "Padi Plain Month",
      price: "$10/month",
      usersLimit: 5,
      customersLimit: 50,
      vendorsLimit: 5,
    },
    {
      id: "exclusive_month",
      name: "Exclusive Month",
      price: "$25/month",
      usersLimit: 20,
      customersLimit: 200,
      vendorsLimit: 20,
    },
    {
      id: "restropent_lifetime",
      name: "Restropent Lifetime",
      price: "$99/one-time",
      usersLimit: 999,
      customersLimit: 9999,
      vendorsLimit: 999,
    },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[92vw] sm:w-[85vw] lg:max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl p-4 sm:p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl">
            Upgrade Plan for {userName}
          </DialogTitle>
        </DialogHeader>

        <div className="py-4 sm:py-6">
          <p className="text-sm text-muted-foreground mb-5 sm:mb-6">
            Select a new plan for {userName}.
          </p>

          {/* Desktop/tablet header – hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-5 gap-4 px-4 py-3 font-semibold border-b border-border text-sm">
            <div>Plan</div>
            <div className="text-center">Users</div>
            <div className="text-center">Customers</div>
            <div className="text-center">Vendors</div>
            <div className="text-right">Action</div>
          </div>

          <RadioGroup
            value={selectedPlan}
            onValueChange={setSelectedPlan}
            className="space-y-4 md:space-y-3"
          >
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`
                  border rounded-xl p-4 sm:p-5 shadow-sm transition-all
                  ${
                    selectedPlan === plan.id
                      ? "border-primary/70 bg-primary/5"
                      : "hover:border-primary/40"
                  }
                `}
              >
                {/* Mobile layout (stacked) */}
                <div className="md:hidden space-y-4">
                  <div className="flex items-start gap-3">
                    <RadioGroupItem
                      value={plan.id}
                      id={plan.id}
                      className="mt-1 shrink-0"
                    />
                    <Label
                      htmlFor={plan.id}
                      className="flex flex-col flex-1 cursor-pointer"
                    >
                      <span className="font-bold text-base sm:text-lg">
                        {plan.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {plan.price}
                      </span>
                    </Label>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-sm text-center">
                    <div>
                      <div className="text-muted-foreground text-xs">Users</div>
                      <div className="font-medium">{plan.usersLimit}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">
                        Customers
                      </div>
                      <div className="font-medium">{plan.customersLimit}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground text-xs">Vendors</div>
                      <div className="font-medium">{plan.vendorsLimit}</div>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    onClick={() => onUpgrade(plan.id)}
                    disabled={selectedPlan === plan.id}
                    className="w-full"
                    variant={selectedPlan === plan.id ? "secondary" : "default"}
                  >
                    {selectedPlan === plan.id ? "Current Plan" : "Select & Upgrade"}
                  </Button>
                </div>

                {/* Desktop/tablet layout – table row style */}
                <div className="hidden md:grid md:grid-cols-5 md:items-center md:gap-4">
                  {/* Plan name + radio */}
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={plan.id} id={plan.id} className="shrink-0" />
                    <Label
                      htmlFor={plan.id}
                      className="flex flex-col cursor-pointer"
                    >
                      <span className="font-semibold">{plan.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {plan.price}
                      </span>
                    </Label>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    {plan.usersLimit}
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    {plan.customersLimit}
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    {plan.vendorsLimit}
                  </div>

                  <div className="flex justify-end">
                    <Button
                      size="sm"
                      onClick={() => onUpgrade(plan.id)}
                      disabled={selectedPlan === plan.id}
                      variant={selectedPlan === plan.id ? "secondary" : "default"}
                    >
                      {selectedPlan === plan.id ? "Current" : "Upgrade"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        </div>

        <DialogFooter className="gap-3 sm:gap-4 mt-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          {/* Optional: you can keep this if you want fallback upgrade, but per-plan buttons are better UX */}
          {/* <Button onClick={() => onUpgrade(selectedPlan)} disabled={true}>
            Upgrade Selected Plan
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}