import abtimg2 from "../../../assets/photos/BABU0235.jpg";
import Footer from "../../../components/Footer/Footer";
import Test from "../Menu1";

export default function Forte() {
  return (
    <div className="OurForte">
      <Test />
      <OurForte />

      <Footer
        fspeed={80}
        footercap="About Our Clinic"
        footercontent="Welcome to the Haven of Hair Regrowth"
        footerpath="/services"
      />
    </div>
  );
}

function OurForte() {
  return (
    <div className="OurForte my-[8vw] w-[90vw] h-max mx-auto">
      <div className="flex justify-between items-center">
        <div className="textContent w-[45vw] text-black">
          <h2 className="clinic-title">Our Forte</h2>
          <p className="text-[14px] poppins text-justify">
            Practicing the latest in FUE Hair Transplant, MAX Hair Clinic has
            set a benchmark with its Sapphire+ Hair Transplant treatment. MAX
            Hair Clinic specialises in Hair Transplantation, Beard
            transplantation, Hair Restoration, Hair Replacement, Hair Retention
            programmes like CC-PRP, Dr. Regrowth, SLS, QR 678 and much more. No
            doubt our experienced professionals and experts recommend you the
            best treatment that matches your needs and achieve the desired
            results that you have always longed for.
          </p>
        </div>
        <div className="imgSection w-[40vw]">
          <img src={abtimg2} alt="" className="w-[40vw] h-[40vw] rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
