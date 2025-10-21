'use client';

import { useState } from 'react';
import PrototypeShowcase from "@/components/PrototypeShowcase";
import MobileViewNavigator, { NavigationArrows } from "@/components/MobileViewNavigator";
import ExampleMobileCard from "@/components/ExampleMobileCard";
import ExampleMobileCard2 from "@/components/ExampleMobileCard2";
import { PrototypeData } from "@/types/prototype";

const samplePrototype: PrototypeData = {
  title: "Prototype",
  description: "Interactive mobile prototype with multiple views. Click through different examples using the tabs or navigation arrows.",
  links: [
    {
      text: "Prototype 1 (opens in new tab)",
      url: "/prototype/view1",
    },
    {
      text: "Prototype 2 (opens in new tab)",
      url: "/prototype/view2",
    },
  ],
};

const views = [
  {
    id: 'view1',
    label: 'View 1',
    component: <ExampleMobileCard />,
  },
  {
    id: 'view2',
    label: 'View 2',
    component: <ExampleMobileCard2 />,
  },
];

export default function Home() {
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  return (
    <div>
      <div className="flex justify-center items-center -mt-8 h-[145px]"> 
        <NavigationArrows
          currentViewIndex={currentViewIndex}
          totalViews={views.length}
          onPrevious={() => setCurrentViewIndex((prev) => Math.max(0, prev - 1))}
          onNext={() => setCurrentViewIndex((prev) => Math.min(views.length - 1, prev + 1))}
        />
      </div>

      <PrototypeShowcase data={samplePrototype}>
        <MobileViewNavigator
          views={views}
          currentViewIndex={currentViewIndex}
        />
      </PrototypeShowcase>
      

    </div>
  );
}
