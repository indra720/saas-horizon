import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface AddCouponDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (coupon: {
    name: string;
    limit: number;
    code: string;
    discount: number;
    description: string;
  }) => void;
}

export function AddCouponDialog({ open, onOpenChange, onSave }: AddCouponDialogProps) {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState<number>(0);
  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState<number>(0);
  const [description, setDescription] = useState("");
  const [isManualCode, setIsManualCode] = useState(false);

  const generateRandomCode = () => {
    return Math.random().toString(36).substring(2, 10).toUpperCase();
  };

  const handleManualCodeChange = (checked: boolean) => {
    setIsManualCode(checked);
    if (!checked) {
      setCode(generateRandomCode());
    } else {
      setCode(""); // Clear manual code when switching to auto-generate
    }
  };

  const handleSubmit = () => {
    if (!isManualCode && !code) { // Auto-generate if not manual and no code exists
        setCode(generateRandomCode());
    }
    onSave({ name, limit, code: isManualCode ? code : (code || generateRandomCode()), discount, description });
    setName("");
    setLimit(0);
    setCode("");
    setDiscount(0);
    setDescription("");
    setIsManualCode(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] lg:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Coupon</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4">
            <Label htmlFor="name" className="md:text-right">
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="md:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4">
            <Label htmlFor="limit" className="md:text-right">
              Limit
            </Label>
            <Input
              id="limit"
              type="number"
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="md:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4">
            <Label htmlFor="code" className="md:text-right">
              Code
            </Label>
            <Input
              id="code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="md:col-span-2"
              disabled={!isManualCode}
            />
            <div className="flex items-center space-x-2 md:col-span-1 md:justify-end">
              <Checkbox
                id="manual-code"
                checked={isManualCode}
                onCheckedChange={handleManualCodeChange}
              />
              <Label htmlFor="manual-code">Manual</Label>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-2 md:gap-4">
            <Label htmlFor="discount" className="md:text-right">
              Discount (%)
            </Label>
            <Input
              id="discount"
              type="number"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="md:col-span-3"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-2 md:gap-4">
            <Label htmlFor="description" className="md:text-right md:pt-2">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="md:col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create Coupon</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
