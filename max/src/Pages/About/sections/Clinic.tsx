import Menu1 from "../Menu1";
import Heading1 from "../../../components/Heading/Heading1";
import Content from "../../../components/content/Content";
import abtimg1 from "../../../assets/photos/BABU0191.jpg";
import abtimg2 from "../../../assets/photos/BABU0235.jpg";
import abtimg3 from "../../../assets/photos/Max 01.png";
import abtimg4 from "../../../assets/photos/Max 02.png";

export default function Clinic() {
  return (
    <div className="Clinic">
      <Menu1 />
      <OurClinic />
      {/* <ClinicImages /> */}
    </div>
  );
}

function OurClinic() {
  return (
    <div className="OurClinic my-[8vw] w-[90vw] h-max mx-auto">
      <div className="flex justify-between items-center">
        <div className="textContent w-[45vw] text-black">
          <h2 className="clinic-title">Our Clinic</h2>
          <p className="text-[14px] xl:text-[18px] poppins text-justify">
            MAX hair clinic is one of the finest hair transplant clinics since
            2004. Has gained high trust & reputation all over India for the best
            results on the complete hair growth treatments. We are one of a kind
            and are proud to pioneer the SAPPHIRE HAIR TRANSPLANT. An elite
            advancement, imported from Europe. We provide clinical and
            non-clinical hair loss solutions for both MEN and Women. MAX hair
            clinic is well known for its quality service by our highly skilled
            and experienced panel of surgeons and hair experts.
          </p>
        </div>
        <div className="imgSection w-[40vw]">
          <img src={abtimg2} alt="" className="w-[40vw] h-[40vw] rounded-3xl" />
        </div>
      </div>
    </div>
  );
}

function ClinicImages() {
  return (
    <div className="w-[90vw] lg:w-[70vw] mx-auto my-[8vh]">
      <div className="flex">
        <img src={abtimg1} alt="" className="w-[65%]" />
        <img src={abtimg3} alt="" className="w-[34%]" />
      </div>
      <div className="flex">
        <img src={abtimg4} alt="" className="w-[34%]" />
        <img src={abtimg2} alt="" className="w-[65%]" />
      </div>
    </div>
  );
}
