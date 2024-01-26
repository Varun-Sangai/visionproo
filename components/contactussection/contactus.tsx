import ContactUsForm from "./contactusform";

export default function Contactus() {
  return (
    <div id="contactus" className="flex mb-4 bg-[#c8c1e0] rounded-[6px] p-4">
      <div className="flex-1"></div>
      <div className="flex-1">
        <ContactUsForm></ContactUsForm>
      </div>
    </div>
  );
}
