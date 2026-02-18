import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import Plans from "./pages/Plans";
import PlanRequests from "./pages/PlanRequests";
import Orders from "./pages/Orders";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";
import Coupns from "./pages/Coupns";
import EmailTemplates from "./pages/EmailTemplates";
import LandingPages from "./pages/LandingPages";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/plan-requests" element={<PlanRequests />} />
            <Route path="/coupn" element={<Coupns/>}/>
            <Route path="/orders" element={<Orders />} />
            <Route path="/email-templates" element={<EmailTemplates />} />
            <Route path="/landing-pages" element={<LandingPages />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
