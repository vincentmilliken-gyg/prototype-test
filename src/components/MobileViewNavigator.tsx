'use client';

interface MobileView {
  id: string;
  label: string;
  component: React.ReactNode;
}

interface MobileViewNavigatorProps {
  views: MobileView[];
  currentViewIndex: number;
}

export default function MobileViewNavigator({ views, currentViewIndex }: MobileViewNavigatorProps) {
  return (
    <div className="w-full h-full">
      {views[currentViewIndex].component}
    </div>
  );
}

interface NavigationArrowsProps {
  currentViewIndex: number;
  totalViews: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function NavigationArrows({ currentViewIndex, totalViews, onPrevious, onNext }: NavigationArrowsProps) {
  return (
    <div className="flex justify-center gap-3 mt-6">
      <button
        onClick={onPrevious}
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
        onClick={onNext}
        disabled={currentViewIndex === totalViews - 1}
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all ${
          currentViewIndex === totalViews - 1
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-white hover:bg-gray-50'
        }`}
      >
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

