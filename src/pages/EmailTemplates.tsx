// EmailTemplates.tsx
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Save, Eye } from 'lucide-react';
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

// ────────────────────────────────────────────────
// Custom Quill styles (modern + dark mode friendly)
const quillCustomStyles = `
  .ql-toolbar.ql-snow {
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-color: hsl(var(--border));
    background: hsl(var(--muted)/0.6);
    border-bottom: none;
  }
  .ql-container.ql-snow {
    border: 1px solid hsl(var(--border));
    border-top: none;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: hsl(var(--background));
  }
  .ql-editor {
    min-height: 420px;
    font-size: 15.5px;
    line-height: 1.65;
    padding: 1.25rem !important;
    color: hsl(var(--foreground));
  }
  .ql-editor.ql-blank::before {
    color: hsl(var(--muted-foreground));
    font-style: italic;
  }
  .ql-toolbar.ql-snow button,
  .ql-toolbar.ql-snow .ql-picker-label {
    color: hsl(var(--foreground));
  }
  .ql-toolbar.ql-snow button:hover,
  .ql-toolbar.ql-snow button.ql-active {
    background: hsl(var(--accent));
    color: hsl(var(--accent-foreground));
  }
  .ql-snow .ql-stroke { stroke: currentColor; }
  .ql-snow .ql-fill { fill: currentColor; }
  .ql-picker-options {
    background: hsl(var(--popover));
    border: 1px solid hsl(var(--border));
    color: hsl(var(--foreground));
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  .ql-picker-item:hover { background: hsl(var(--accent)); }
`;

// ────────────────────────────────────────────────
const placeholders = [
  { label: 'App Name',     value: '{app_name}'     },
  { label: 'Company Name', value: '{company_name}' },
  { label: 'App URL',      value: '{app_url}'      },
  { label: 'Email',        value: '{email}'        },
  { label: 'Password',     value: '{password}'     },
];

const EmailTemplates = () => {
  const [language, setLanguage] = useState('English');
  const [template, setTemplate] = useState('new_user');
  const [subject, setSubject] = useState('Welcome to {app_name} – Your Account is Ready');
  const [fromName, setFromName] = useState('{app_name} Team');
  const [editorValue, setEditorValue] = useState(`
    <p>Hello,</p>
    <p>Welcome to <strong>{app_name}</strong>!</p>
    <p>Your account has been successfully created.</p>
    <p><br></p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Password:</strong> {password}</p>
    <p><br></p>
    <p>Login here: <a href="{app_url}">{app_url}</a></p>
    <p><br></p>
    <p>Thanks,<br>{company_name} Team</p>
  `);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link'],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'color', 'background', 'align', 'list', 'bullet', 'link',
  ];

  const insertPlaceholder = (value: string) => {
    // Simple append — for better UX you can later use Quill API to insert at cursor
    setEditorValue((prev) => prev + ` ${value} `);
  };

  return (
    <>
      <style>{quillCustomStyles}</style>

      <div className="space-y-8 pb-12">

        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Email Templates</h1>
            <p className="text-muted-foreground mt-1">
              Customize transactional & notification emails
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-36">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="English">English</SelectItem>
                <SelectItem value="Hindi">Hindi</SelectItem>
                <SelectItem value="Spanish">Spanish</SelectItem>
              </SelectContent>
            </Select>

            <Select value={template} onValueChange={setTemplate}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Template" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="new_user">New User</SelectItem>
                <SelectItem value="forgot_password">New Support Ticket</SelectItem>
                <SelectItem value="order_confirmation">New Client</SelectItem>
                <SelectItem value="welcome_back">Lead Assigned</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Main Card */}
        <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">

          {/* Placeholders */}
          <div className="border-b bg-muted/40 px-6 py-5">
            <h2 className="mb-3.5 text-lg font-semibold">Placeholders (click to insert)</h2>
            <div className="flex flex-wrap gap-2.5">
              {placeholders.map((ph) => (
                <Badge
                  key={ph.value}
                  variant="outline"
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors px-3.5 py-1.5 text-sm font-medium"
                  onClick={() => insertPlaceholder(ph.value)}
                >
                  {ph.label} <span className="ml-1.5 text-xs opacity-70">{ph.value}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Subject + From */}
          <div className="grid gap-6 border-b px-6 py-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-base">Subject</Label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Welcome to {app_name} – Your Account is Ready"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="from" className="text-base">From Name</Label>
              <Input
                id="from"
                value={fromName}
                onChange={(e) => setFromName(e.target.value)}
                placeholder="{app_name} Team"
              />
            </div>
          </div>

          {/* Editor */}
          <div className="px-6 py-6">
            <Label className="mb-3 block text-base font-medium">Email Body</Label>

            <div className="rounded-lg border shadow-sm overflow-hidden focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background transition-all">
              <ReactQuill
                theme="snow"
                value={editorValue}
                onChange={setEditorValue}
                modules={modules}
                formats={formats}
                className="min-h-[480px] md:min-h-[560px]"
              />
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Tip: Click placeholders above or type them directly (e.g. <code>{`{email}`}</code>)
            </p>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col gap-4 border-t bg-muted/30 px-6 py-5 sm:flex-row sm:items-center sm:justify-end">
            <Button variant="outline" className="gap-2 w-full sm:w-auto">
              <Eye className="h-4 w-4" />
              Preview Email
            </Button>
            <Button className="gap-2 w-full sm:w-auto">
              <Save className="h-4 w-4" />
              Save Changes
            </Button>
          </div>

        </div>
      </div>
    </>
  );
};

export default EmailTemplates;  