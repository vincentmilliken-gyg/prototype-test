import Image from "next/image";
import { PrototypeData } from "@/types/prototype";

interface PrototypeInfoCardProps {
  data: PrototypeData;
}

export default function PrototypeInfoCard({ data }: PrototypeInfoCardProps) {
  return (
    <div className="flex flex-col gap-[29px] items-start w-[458px]">
      <div className="bg-white border border-[#eaecf0] rounded-[12px] p-[28px] flex flex-col gap-[20px] w-full">
        {/* Title */}
        <p className="font-medium text-[20px] leading-[22px] text-[#101828]">
          {data.title}
        </p>

        {/* Divider */}
        <div className="h-0 w-full relative">
          <div className="absolute left-0 right-0 top-[-1px] bottom-0">
            <Image
              src="/divider.svg"
              alt=""
              width={402}
              height={1}
              className="w-full"
            />
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col gap-[8px] min-h-[32px] w-full">
          <p className="text-[12px] text-black leading-normal">
            {data.description}
          </p>
        </div>

        {/* Divider */}
        <div className="h-0 w-full relative">
          <div className="absolute left-0 right-0 top-[-1px] bottom-0">
            <Image
              src="/divider.svg"
              alt=""
              width={402}
              height={1}
              className="w-full"
            />
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-semibold text-[14px] leading-[1.2] text-[#1e1e1e] tracking-[-0.28px]">
            Links
          </p>
        </div>

        {/* Links List */}
        <div className="flex flex-col gap-[8px]">
          {data.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#eff8ff] rounded-[4px] px-[8px] py-[4px] flex gap-[4px] items-center hover:bg-[#d0ebff] transition-colors"
            >
              <div className="w-[20px] h-[20px] relative">
                <Image
                  src="/link-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <span className="text-[14px] leading-[24px] text-[#1971c2]">
                {link.text}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

