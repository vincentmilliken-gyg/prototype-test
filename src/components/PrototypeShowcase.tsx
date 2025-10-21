import { PrototypeData } from "@/types/prototype";
import IPhoneMockup from "./IPhoneMockup";
import PrototypeInfoCard from "./PrototypeInfoCard";

interface PrototypeShowcaseProps {
  data: PrototypeData;
  children?: React.ReactNode;
}

export default function PrototypeShowcase({ data, children }: PrototypeShowcaseProps) {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center px-[202px] py-[65px]">
      <div className="flex gap-[133px] items-start justify-center w-full">
        {/* iPhone Preview Area */}
        <IPhoneMockup>
          {children}  1
        </IPhoneMockup>

        {/* Context/Info Card */}
        <PrototypeInfoCard data={data} />
      </div>
    </div>
  );
}

