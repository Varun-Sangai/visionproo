import ChooseUs from "@/components/chooseussection/chooseus";
import Contactus from "@/components/contactussection/contactus";
import ContactUsForm from "@/components/contactussection/contactusform";
import Home from "@/components/homesection/home";
import Team from "@/components/teamsection/team";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Home></Home>
      <div className="p-4 flex flex-col gap-4">
        <Team></Team>
        <ChooseUs></ChooseUs>
        <Contactus></Contactus>
      </div>
    </div>
  );
}
