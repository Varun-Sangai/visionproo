"use client";

import Link from "next/link";
import Image from "next/image";
// import Nav from "./components/mobile_view_navbar";

// import arrow from "@/public/arrow_081226.svg";
import { usePathname, useSearchParams } from "next/navigation";
// import digisignlogo from "@/public/digisignlogo.svg";
// import Dropdown from "@/components/Dropdown";
// import { Modal } from "antd";
// import advertiseLoginImg from "@/public/Monitor-pana.svg";
// import enterpriseLoginImg from "@/public/display.svg";
import { useEffect, useState } from "react";
// import advertisehomeimg from "@/public/advertisehome.png";
// import enterprisehomeimg from "@/public/enterprisehome.png";
import Nav from "./mobile_view_navbar";
import visionpro from "@/public/vision_pro_logo.jpeg";
const advertiseDropdownItems = [
  { label: "About", href: "/advertise/about" },
  { label: "Locations", href: "/advertise/locations" },
];

const enterpriseDropdownItems = [{ label: "About", href: "/enterprise/about" }];

export default function Navbar() {
  const [isOpen, setisOpen] = useState<boolean>(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

  function handleClick() {
    setisOpen(!isOpen);
  }
//   const params = usePathname();
  return (
    <div className="sticky top-0 z-[100] bg-white">
      <div
        className={`flex  max-w-[1500px] mx-auto sm:py-4 sm:px-12 px-4 py-2 justify-between items-center w-[100%]`}
      >
        <Link href="/" className="no-underline flex justify-start">
          <Image
            src={visionpro}
            className="w-[100px]"
            alt="DigiSign"
          ></Image>
        </Link>
        <div className="nav flex md:gap-[32px] gap-[16px] items-center">
          <Link
            href="/"
            className={`text-[16px] font-medium leading-[150%] text-[#1E3146]`}
          >
            Home
          </Link>
          <Link
            href="/#chooseus"
            className={` text-[16px] font-medium leading-[150%] text-[#1E3146]`}
          >
            Services
          </Link>
          <Link
            href="/#team"
            className={`text-[16px] font-medium leading-[150%] text-[#1E3146]`}
          >
            About Us
          </Link>
          <Link
            href="/#contactus"
            className={`text-[16px] font-medium leading-[150%] text-[#1E3146]`}
          >
            Contact Us
          </Link>
        </div>
        <div className="hamburger cursor-pointer" onClick={handleClick}>
          <div className="hamb"></div>
          <div className="hamb"></div>
          <div className="hamb"></div>
        </div>
        <Nav value={isOpen} func={setisOpen}></Nav>
      </div>
      </div>
  );
}
