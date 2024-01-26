import CustomButton from "../button";

export default function Home() {
  return (
    <div id="home" style={{backgroundImage:'url(https://st4.depositphotos.com/1005097/24971/v/600/depositphotos_249717142-stock-video-3d-render-abstract-plexus-shapes.jpg)'}} className="py-10 flex flex-col gap-8 items-center">
      <p className="max-w-[550px] text-center text-[48px] text-[#fff] font-bold leading-[150%]">
        PLugging Great Ideas Into Your Brand
      </p>
      <p className="max-w-[500px] text-center text-[16px] text-[#fff] font-medium leading-[150%]">
        We are the #1 Developer of Custom Mobile Applications in the United States for small to medium sized organizations
      </p>
      <CustomButton
        className="text-[16px] font-normal leading-[150%] text-[#fff] px-4 py-3 bg-[#46295f] hover:bg-[#c8c1e0]"
      >
        Free Consultation
      </CustomButton>
    </div>
  );
}
