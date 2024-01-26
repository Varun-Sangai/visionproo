import ShowCaseData from "./showcasedata";
import Whychooseus from "./whychooseus";

export default function ChooseUs() {
  return (
    <div id="chooseus" className="flex gap-4 h-[400px] bg-[#F9F9F9]">
      <div className="flex-1 flex justify-center items-center">
        <ShowCaseData></ShowCaseData>
      </div>
      <div className="flex-1 flex items-center">
        <Whychooseus></Whychooseus>
      </div>
    </div>
  );
}
