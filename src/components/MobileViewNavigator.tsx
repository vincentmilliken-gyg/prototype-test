'use client';

import { useState } from 'react';

interface MobileView {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface MobileViewNavigatorProps {
  views: MobileView[];
}

export default function MobileViewNavigator({ views }: MobileViewNavigatorProps) {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  return (
    <div className="w-full h-full relative">
      {/* Content Area */}
      <div className="w-full h-full">
        {views[currentViewIndex].component}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 z-20">
        <button
          onClick={() => setCurrentViewIndex((prev) => Math.max(0, prev - 1))}
          disabled={currentViewIndex === 0}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
            currentViewIndex === 0
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentViewIndex((prev) => Math.min(views.length - 1, prev + 1))}
          disabled={currentViewIndex === views.length - 1}
          className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
            currentViewIndex === views.length - 1
              ? 'bg-gray-300 cursor-not-allowed'
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

