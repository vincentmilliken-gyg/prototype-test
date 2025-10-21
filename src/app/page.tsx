import PrototypeShowcase from "@/components/PrototypeShowcase";
import MobileViewNavigator from "@/components/MobileViewNavigator";
import ExampleMobileCard from "@/components/ExampleMobileCard";
import ExampleMobileCard2 from "@/components/ExampleMobileCard2";
import { PrototypeData } from "@/types/prototype";

const samplePrototype: PrototypeData = {
  title: "Prototype",
  description: "Interactive mobile prototype with multiple views. Click through different examples using the tabs or navigation arrows.",
  links: [
    {
      text: "Open View 1 in new tab",
      url: "/prototype/view1",
    },
    {
      text: "Open View 2 in new tab",
      url: "/prototype/view2",
    },
  ],
};

export default function Home() {
  return (
    <PrototypeShowcase data={samplePrototype}>
      <MobileViewNavigator
        views={[
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
        ]}
      />
    </PrototypeShowcase>
  );
}
