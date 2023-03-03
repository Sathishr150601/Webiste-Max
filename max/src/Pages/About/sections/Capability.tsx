import abtimg2 from "../../../assets/photos/BABU0235.jpg";
import Footer from "../../../components/Footer/Footer";
import Test from "../Menu1";

export default function Capability() {
  // window.scrollTo({
  //   top: 600,
  //   behavior: "smooth",
  // });

  return (
    <div className="Capability">
      <Test />

      <OurCapability />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/services"
      />
    </div>
  );
}

function OurCapability() {
  return (
    <div className="OurCapability my-[8vw] w-[90vw] h-max mx-auto">
      <div className="flex justify-between">
        <div className="imgSection w-[40vw]">
          <img src={abtimg2} alt="" className="w-[40vw] h-[40vw] rounded-3xl" />
        </div>
        <div className="textContent w-[45vw] text-black">
          <h2 className="clinic-title">Our Capability</h2>
          <p className="text-[14px] poppins text-justify">
            MAX Hair Clinic, since its inception in 2004, has already managed to
            win the reputation of being the Best Hair Solution Company in India.
            At MAX Hair, our highly experienced experts work ceaselessly to
            develop custom solutions. We have relentlessly added to our
            technique, Advanced technological and knowledge ensuring that we
            develop and deliver nothing less than the Best Hair Cosmetic
            Systems, Hair Transplant and Hair Replacement products and services.
            We have achieved the feat of being widely acclaimed in the USA and
            have managed to achieve the same in India, with our unparalleled
            services and products. Our Hair Replacement procedures offer the
            best possible natural look. We also take pride in our Human Skin
            Lace Cosmetic Systems that are fully undetectable and offer our
            customers 100% natural look with high comfort level.
          </p>
        </div>
      </div>
    </div>
  );
}
