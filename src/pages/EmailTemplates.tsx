// EmailTemplates.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Quill's default snow theme
import { ChevronDownIcon } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

// Custom CSS to override Quill's default styles
const quillCustomStyles = `
  .ql-toolbar.ql-snow {
    border-top-left-radius: 0.375rem; /* rounded-md */
    border-top-right-radius: 0.375rem; /* rounded-md */
    border-color: var(--border);
    background-color: var(--muted);
  }
  .ql-container.ql-snow {
    border-bottom-left-radius: 0.375rem; /* rounded-md */
    border-bottom-right-radius: 0.375rem; /* rounded-md */
    border-color: var(--border);
    background-color: var(--background);
  }
  .ql-editor {
    color: var(--foreground);
    background-color: var(--background);
  }
  .ql-editor.ql-blank::before {
    color: var(--muted-foreground);
  }
  /* Ensure toolbar buttons match theme */
  .ql-snow .ql-stroke {
    stroke: var(--foreground);
  }
  .ql-snow .ql-fill {
    fill: var(--foreground);
  }
  .ql-snow .ql-picker-label {
    color: var(--foreground);
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: var(--border);
  }
  .ql-snow .ql-picker.ql-expanded .ql-picker-options {
    background-color: var(--popover);
    border-color: var(--border);
  }
  .ql-snow .ql-picker-options .ql-picker-item {
    color: var(--foreground);
  }
  .ql-snow .ql-picker-options .ql-picker-item:hover {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
`;

const placeholders = [
  { label: 'App Name', value: '{app_name}' },
  { label: 'Company Name', value: '{company_name}' },
  { label: 'App Url', value: '{app_url}' },
  { label: 'Email', value: '{email}' },
  { label: 'Password', value: '{password}' },
];

const EmailTemplates = () => {
  const [language, setLanguage] = useState('English');
  const [template, setTemplate] = useState('new_user'); // Use consistent values for select
  const [subject, setSubject] = useState('New User');
  const [from, setFrom] = useState('ERP');
  const [editorValue, setEditorValue] = useState(`
    <p>Hello,</p>
    <p>Welcome to {app_name}.</p>
    <p>Email : {email}</p>
    <p>Password : {password}</p>
    <p><br></p>
    <p>{app_url}</p>
    <p>Thanks,</p>
    <p>{app_name}</p>
  `);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'font',
    'align',
    'list',
    'bullet',
    'link',
  ];

  const insertPlaceholder = (value: string) => {
    setEditorValue((prev) => prev + value);
  };

  return (
    <div className="space-y-6">
      <style>{quillCustomStyles}</style> {/* Inject custom styles */}
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Email Templates</h1>
          <p className="text-sm text-muted-foreground">Manage your email templates here</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Hindi">Hindi</SelectItem>
              <SelectItem value="Spanish">Spanish</SelectItem>
            </SelectContent>
          </Select>

          <Select value={template} onValueChange={setTemplate}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new_user">New User</SelectItem>
              <SelectItem value="forgot_password">Forgot Password</SelectItem>
              <SelectItem value="order_confirmation">Order Confirmation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Main Content Card */}
      <div className="rounded-xl border border-border bg-card shadow-sm">
        {/* Placeholders */}
        <div className="border-b border-border p-5">
          <h2 className="mb-3 text-lg font-semibold text-foreground">Placeholders</h2>
          <div className="flex flex-wrap gap-3">
            {placeholders.map((ph) => (
              <Badge
                key={ph.value}
                variant="secondary"
                onClick={() => insertPlaceholder(ph.value)}
                className="cursor-pointer hover:bg-muted"
                title={`Click to insert ${ph.value}`}
              >
                {ph.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Subject & From */}
        <div className="grid grid-cols-1 gap-5 border-b border-border p-5 md:grid-cols-2">
          <div className="space-y-1">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="from">From</Label>
            <Input
              id="from"
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
        </div>

        {/* Email Message Editor */}
        <div className="p-5">
          <Label className="mb-1.5 block text-sm font-medium text-foreground">Email Message</Label>
          <div className="rounded-md border border-input focus-within:ring-1 focus-within:ring-ring">
            <ReactQuill
              theme="snow"
              value={editorValue}
              onChange={setEditorValue}
              modules={modules}
              formats={formats}
              className="h-64 md:h-96"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end border-t border-border p-5">
          <Button>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplates;