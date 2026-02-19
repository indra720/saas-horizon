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

interface MenuDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (data: any) => void;
  editData?: any;
}

export function MenuDialog({ open, onOpenChange, onSave, editData }: MenuDialogProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState("page-content");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    if (editData) {
      setName(editData.name || "");
      setType(editData.type || "page-content");
      setContent(editData.content || "");
      setUrl(editData.url || "");
      setShowHeader(editData.showHeader !== undefined ? editData.showHeader : true);
      setShowFooter(editData.showFooter !== undefined ? editData.showFooter : true);
      setShowLogin(editData.showLogin !== undefined ? editData.showLogin : true);
    } else {
      setName("");
      setType("page-content");
      setContent("");
      setUrl("");
      setShowHeader(true);
      setShowFooter(true);
      setShowLogin(true);
    }
  }, [editData, open]);

  const handleSubmit = () => {
    onSave({
      name,
      type,
      content: type === "page-content" ? content : "",
      url: type === "page-url" ? url : "",
      showHeader,
      showFooter,
      showLogin
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

        <div className="grid gap-6 py-4">
          {/* Page Name */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm font-medium">Page Name</Label>
            <Input
              id="name"
              placeholder="Enter page name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-10"
            />
          </div>

          {/* Type Selection */}
          <div className="flex flex-col gap-3">
            <Label className="text-sm font-medium">Type</Label>
            <RadioGroup
              value={type}
              onValueChange={setType}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="page-content" id="page-content" />
                <Label htmlFor="page-content" className="font-normal cursor-pointer">Page Content</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="page-url" id="page-url" />
                <Label htmlFor="page-url" className="font-normal cursor-pointer">Page URL</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Conditional Input */}
          {type === "page-content" ? (
            <div className="flex flex-col gap-2">
              <Label htmlFor="content" className="text-sm font-medium">Page Content</Label>
              <Textarea
                id="content"
                placeholder="Enter the full HTML/Markdown content here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[200px] font-mono text-sm"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Label htmlFor="url" className="text-sm font-medium">Page URL</Label>
              <Input
                id="url"
                type="url"
                placeholder="Enter page URL (e.g., https://example.com)"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-10"
              />
            </div>
          )}

          {/* Toggles */}
          <div className="flex flex-wrap gap-8 py-2">
            <div className="flex items-center gap-3">
              <Switch
                id="header"
                checked={showHeader}
                onCheckedChange={setShowHeader}
              />
              <Label htmlFor="header" className="cursor-pointer">Header</Label>
            </div>

            <div className="flex items-center gap-3">
              <Switch
                id="footer"
                checked={showFooter}
                onCheckedChange={setShowFooter}
              />
              <Label htmlFor="footer" className="cursor-pointer">Footer</Label>
            </div>

            <div className="flex items-center gap-3">
              <Switch
                id="login"
                checked={showLogin}
                onCheckedChange={setShowLogin}
              />
              <Label htmlFor="login" className="cursor-pointer">Login</Label>
            </div>
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
