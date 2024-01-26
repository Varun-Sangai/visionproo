import { SocialProps, TeamCardProps } from "@/libs/type";
import Image from "next/image";
import Link from "next/link";
export default function TeamCard(props: TeamCardProps) {
  return (
    <div className="w-full border-opacity-[0.2] border-[2px] border-[grey]">
      <div></div>
      <div className="py-3 px-4 flex flex-col">
        <p className="mb-2 text-[18px] text-[#272727] font-bold leading-[150%]">
            {props.name}
        </p>
        <p className="mb-3 text-[14px] text-[#9998A6] font-normal leading-[150%]">
            {props.name}
        </p>
        <p className="mb-4 text-[14px] text-[#868DA0] font-normal leading-[150%]">
            {props.name}
        </p>
        <div className="flex justify-center gap-4">
        {props.socials.map((item: SocialProps, index: number) => {
          return (<Link key={index} href={item.sociallink}>
            <Image src={item.socialicon} className="w-[20px] h-[20px] rounded-[50%]" alt="icon"></Image>
            </Link>
            )
        })}
        </div>
      </div>
    </div>
  );
}
