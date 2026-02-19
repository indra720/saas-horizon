import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component

interface LandingPageSidebarProps {
  activeSubPage: string;
  onSelectSubPage: (page: string) => void;
}

const subPageItems = [
  { id: 'top-bar', label: 'Top Bar' },
  { id: 'custom-page', label: 'Custom Page' },
  { id: 'home', label: 'Home' },
  { id: 'features', label: 'Features' },
  { id: 'discover', label: 'Discover' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'pricing-plan', label: 'Pricing Plan' },
  { id: 'faq', label: 'FAQ' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'journal', label: 'Journal' },
];

const LandingPageSidebar: React.FC<LandingPageSidebarProps> = ({ activeSubPage, onSelectSubPage }) => {
  return (
    <aside className="w-100 lg:w-64 min-w-64  border-r border-border bg-card p-4 space-y-2">
      <h3 className="text-lg font-semibold mb-4 text-foreground">Mini-Project Sidebar</h3>
      {subPageItems.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={cn(
            "w-full justify-start",
            activeSubPage === item.id ? "bg-muted hover:bg-muted" : ""
          )}
          onClick={() => onSelectSubPage(item.id)}
        >
          {item.label}
        </Button>
      ))}
    </aside>
  );
};

export default LandingPageSidebar;
