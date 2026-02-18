// Coupons.tsx  (or Coupns.tsx — I corrected the typo in name)
import React, { useState } from 'react';
import { PlusIcon, PencilIcon, TrashIcon, Search as SearchIcon } from 'lucide-react'; // optional icons
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AddCouponDialog } from './coupns/AddCouponDialog';
import { Label } from '@/components/ui/label';

const coupons = []; // empty → shows "No entries found"

const Coupons = () => {
  const [isAddCouponDialogOpen, setIsAddCouponDialogOpen] = useState(false);

  const handleAddCoupon = (newCoupon: any) => {
    console.log("New coupon added:", newCoupon);
    setIsAddCouponDialogOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header + Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Manage Coupons</h1>
          <p className="text-sm text-muted-foreground">View and manage all coupons</p>
        </div>

        <Button onClick={() => setIsAddCouponDialogOpen(true)} className="rounded-xl">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Coupon
        </Button>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        {/* Top controls: Entries per page + Search */}
        <div className="flex flex-col gap-4 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Label htmlFor="entries" className="text-sm whitespace-nowrap">
              Entries per page
            </Label>
            <Select defaultValue="10">
              <SelectTrigger className="w-[80px] rounded-md">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="relative w-full max-w-sm">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full rounded-md border pl-9 pr-3 text-sm focus:ring-1 focus:ring-primary"
            />
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>

        {/* Table - Responsive with horizontal scroll on mobile */}
        <div className="overflow-x-auto">
          <Table className="min-w-full divide-y divide-border">
            <TableHeader>
              <TableRow>
                <TableHead className="px-4 py-3.5 text-left text-sm font-semibold text-foreground sm:px-6">
                  NAME
                </TableHead>
                <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                  CODE
                </TableHead>
                <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                  DISCOUNT (%)
                </TableHead>
                <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                  LIMIT
                </TableHead>
                <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                  USED
                </TableHead>
                 <TableHead className="px-3 py-3.5 text-left text-sm font-semibold text-foreground">
                  Action
                </TableHead>
                <TableHead className="relative px-4 py-3.5 sm:px-6">
                  <span className="sr-only">ACTION</span>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {coupons.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="py-16 text-center text-muted-foreground">
                    No entries found
                  </TableCell>
                </TableRow>
              ) : (
                coupons.map((coupon) => (
                  <TableRow key={coupon.id} className="hover:bg-muted/50">
                    <TableCell className="whitespace-nowrap px-4 py-4 text-sm font-medium text-foreground sm:px-6">
                      {coupon.name}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground">
                      {coupon.code}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground">
                      {coupon.discount}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground">
                      {coupon.limit}
                    </TableCell>
                    <TableCell className="whitespace-nowrap px-3 py-4 text-sm text-muted-foreground">
                      {coupon.used}
                    </TableCell>
                    <TableCell className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <div className="flex items-center justify-end gap-3">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-primary hover:text-primary-foreground">
                          <PencilIcon className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:text-destructive-foreground">
                          <TrashIcon className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      <AddCouponDialog open={isAddCouponDialogOpen} onOpenChange={setIsAddCouponDialogOpen} onSave={handleAddCoupon} />
    </div>
  );
};

export default Coupons;