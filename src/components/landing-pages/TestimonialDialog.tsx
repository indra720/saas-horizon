import React, { useState, useEffect } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Card } from "../ui/card";
import { Save } from "lucide-react";

interface MenuDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onSave: (data: any) => void;
    editData?: any;
    showBuyNow?: boolean;
    hideDescription?: boolean;
}

export function TestimonialDialog({ open, onOpenChange, onSave, editData, showBuyNow, hideDescription }: MenuDialogProps) {
    const [name, setName] = useState("");
    const [buyNowLink, setBuyNowLink] = useState("");
    const [description, setDescription] = useState("");
    const [logo, setLogo] = useState<string | null>(null);

    useEffect(() => {
        if (editData) {
            setName(editData.name || "");
            setBuyNowLink(editData.buyNowLink || "");
            setDescription(editData.description || "");
        } else {
            setName("");
            setBuyNowLink("");
            setDescription("");
        }
    }, [editData, open]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setLogo(URL.createObjectURL(file));
        }
    };

    const handleSubmit = () => {
        onSave({
            name,
            buyNowLink: showBuyNow ? buyNowLink : undefined,
            description: hideDescription ? undefined : description, // Conditionally pass description
            logo
        });
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[90vw] lg:max-w-3xl rounded-md max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        {editData ? "Edit Page" : "Create New Page"}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 py-4">
                    {/* Page Name */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-sm font-medium">Title</Label>
                        <Input
                            id="name"
                            placeholder="Tbistone"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-10"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="Designation" className="text-sm font-medium">Designation</Label>
                        <Input
                            id=""
                            type="number"
                            placeholder="Designation"
                            value=""

                            className="h-10"
                        />
                    </div>
                    <div className="flex flex-col col-span-2 gap-2">
                        <Label htmlFor="Description" className="text-sm font-medium">Description</Label>
                        <Textarea
                            id="Description"
                            placeholder="Very quick customer support, installing this application on my machine locally, within 5 minutes of creating a ticket, the developer was able to fix the issue I had within 10 minutes. EXCELLENT! Thank you very much"
                            value=""

                            className="min-h-[200px] font-mono text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-sm font-medium">user</Label>
                        <Input
                            id="name"
                            placeholder="Enter user name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="h-10"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="star" className="text-sm font-medium">Designation</Label>
                        <Input
                            id=""
                            type="text"
                            placeholder="Designation"
                            value=""

                            className="h-10"
                        />
                    </div>


                    <div className='flex flex-col col-span-2 gap-2'>
                        <span className='text-sm'>Logo</span>
                        <label className="cursor-pointer">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="p-2 border rounded-md border-gray-300 outline-none w-full"
                            />
                        </label>

                    </div>


                </div>

                <hr className="border-gray-200" />

                <DialogFooter className="gap-2 sm:gap-0">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        className="bg-[#0d786b] hover:bg-[#0a5e54] text-white"
                    >
                        {editData ? "Update" : "Create"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
