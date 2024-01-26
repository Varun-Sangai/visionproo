import Link from "next/link";
// import "../navbar.css";
import { useState } from "react";
import Image from "next/image";
// import arrow from "@/public/arrow_forward.svg";
import cross from "@/public/cross.svg";
import digisignlogo from "@/public/vision_pro_logo.jpeg";
export default function Nav(props: any) {
  function Change() {
    props.func(false);
  }

//   const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className={`mobilenav bg-[#fff] z-10 ${props.value ? "shownav" : ""}`}>
      <div className="flex bg-[#fff] flex-col gap-[25px] pl-8 p-[20px]">
        <div onClick={Change} className="self-end cursor-pointer">
          <Image src={cross} alt="cross" width={24} height={24}></Image>
        </div>

        <Link href="/" className="no-underline flex justify-start">
          <Image
            src={digisignlogo}
            className="w-[100px]"
            alt="DigiSign"
          ></Image>
        </Link>

        <hr />

        <Link
          href="/"
          className="text-[16px] text-center w-[fit-content] font-medium leading-[150%] text-[#1E3146]"
          onClick={Change}
        >
          Home
        </Link>

        {/* <h2 className="font-bold ">Digisigns Ad Network</h2> */}
        <div className="">
          <Link
            href="/#chooseus"
            className="text-[16px] w-[fit-content] font-medium no-underline text-center leading-[150%] text-[#1E3146]"
            onClick={Change}
          >
            Services
          </Link>
        </div>
        <div className="">
          <Link
            href="/#team"
            className="text-[16px] w-[fit-content] font-medium no-underline text-center leading-[150%] text-[#1E3146]"
            onClick={Change}
          >
            About us
          </Link>
        </div>
        <div className="">
          <Link
            href="/#contactus"
            className="text-[16px] w-[fit-content] font-medium no-underline text-center leading-[150%] text-[#1E3146]"
            onClick={Change}
          >
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
}
