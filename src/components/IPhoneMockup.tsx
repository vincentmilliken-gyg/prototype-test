import Image from "next/image";

interface IPhoneMockupProps {
  children?: React.ReactNode;
}

export default function IPhoneMockup({ children }: IPhoneMockupProps) {
  return (
    <div className="relative flex items-start gap-[133px]">
      {/* Interactive preview area with placeholder background */}
      <div className="relative w-[393px] h-[852px]">
        {/* Placeholder area for dynamic content */}
        <div className="bg-[#d1fae5] w-full h-full">
          {children}
        </div>
        
        {/* iPhone 15 frame overlay */}
        <div className="absolute left-[-18px] top-[-17px] w-[432px] h-[886px] pointer-events-none">
          <Image
            src="/iphone-15-frame.png"
            alt="iPhone 15 frame"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

