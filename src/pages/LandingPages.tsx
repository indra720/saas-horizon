import React, { useState, useEffect } from 'react'; // Added useEffect
import LandingPageSidebar from '@/components/landing-pages/LandingPageSidebar';
import TopBarContent from '@/components/landing-pages/TopBarContent';
import CustomPageContent from '@/components/landing-pages/CustomPageContent';


import DiscoverContent from '@/components/landing-pages/DiscoverContent';
import ScreenshotsContent from '@/components/landing-pages/ScreenshotsContent';
import PricingPlanContent from '@/components/landing-pages/PricingPlanContent';
import FaqContent from '@/components/landing-pages/FaqContent';
import TestimonialContent from '@/components/landing-pages/TestimonialContent';
import JournalContent from '@/components/landing-pages/JournalContent';
import FeatureContent from '@/components/landing-pages/FeatureContent';
import HomeContent from '@/components/landing-pages/HomeContent';

const LandingPages = () => {
  // Initialize state from localStorage or default to 'home'
  const [activeSubPage, setActiveSubPage] = useState(() => {
    const storedPage = localStorage.getItem('landingPageActiveSubPage');
    return storedPage || 'home';
  });

  // Save activeSubPage to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('landingPageActiveSubPage', activeSubPage);
  }, [activeSubPage]);

  const renderContent = () => {
    switch (activeSubPage) {
      case 'top-bar':
        return <TopBarContent />;
      case 'custom-page':
        return <CustomPageContent />;
      case 'home':
        return <HomeContent/>;
      case 'features':
        return <FeatureContent/>;
      case 'discover':
        return <DiscoverContent />;
      case 'screenshots':
        return <ScreenshotsContent />;
      case 'pricing-plan':
        return <PricingPlanContent />;
      case 'faq':
        return <FaqContent />;
      case 'testimonial':
        return <TestimonialContent />;
      case 'journal':
        return <JournalContent />;
      default:
        return <HomeContent />; // Fallback
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full gap-2"> {/* Use flex to arrange sidebar and content */}
      <LandingPageSidebar activeSubPage={activeSubPage} onSelectSubPage={setActiveSubPage} />
      <div className="flex-1 overflow-auto"> {/* Main content area */}
        {renderContent()}
      </div>
    </div>
  );
};

export default LandingPages;
