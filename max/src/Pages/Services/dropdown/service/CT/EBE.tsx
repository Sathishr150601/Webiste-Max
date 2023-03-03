import { Button1, Header, Heading } from "../../../../../components";
import Footer from "../../../../../components/Footer/Footer";
import Menu2 from "../../../Menu2";
import { Component } from "react";
import { ebht } from "../../../../../assets";

export default class EBE extends Component {
  componentDidMount() {
    window.scrollTo({
      top: 590,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div className="EBE">
        <Header />
        <Menu2 />
        <Service1 />
        <Footer
          fspeed={80}
          footercap="About Our Clinic"
          footercontent="Welcome to the Haven of Hair Regrowth"
          footerpath="/contact"
        />
      </div>
    );
  }
}

function Service1() {
  return (
    <div className="Service1 w-[90vw] mx-auto my-[20vh]">
      <div className="goBackBtn">
        <Button1
          btn1click=""
          btnLocation="/services/clinical-treatments"
          btnName="Go Back"
          spanClass1=""
          spanClass2=""
          spanClass3=""
        />
      </div>
      <div className="serviceContent w-[85vw] mx-auto text-black my-[5vh]">
        <div className="heading">
          <h2 className="">Eyebrow Microblading</h2>
        </div>
        <div className="flex justify-between">
          <div className="textSection w-[50vw]">
            <p className="text-justify text-[14px] xl:text-[20px]">
              MAX Hair Clinic provides FDA-approved medical-grade pigments and
              disposable blades for eyebrow microblading treatments. This is a
              cosmetic treatment procedure. The pigments are deposited in the
              upper region of the dermis. This method produces fine,
              high-quality strokes that mimic naturally occurring hair. Our
              skilled professional team assists you in obtaining well-defined
              shapes for brimming best results. We guarantee fuller brows and
              improved facial aesthetics. The pigment is scratched into the skin
              using a hand tool with a blade made of tiny needles. A
              semi-permanent technique for enhancing the appearance of the
              eyebrows. Some individuals may require follow-up sessions based on
              individual body acceptance. The microblading technique helps to
              reshape your appearance in terms of your eyebrows, both in shape
              and color. Microblading also carries other terms like “feather
              touch”,” 3D eyebrow embroidery,” and “hair-like strokes.” In the
              first stage, the eyebrow outline is marked. Followed by the
              technician applying numbing cream and leaving for at least 30
              minutes. Later, the procedure is started by tattooing the pigments
              in fine lines according to the angles and directions
            </p>
          </div>
          <div className="imgSection w-[30vw] flex justify-center">
            <img src={ebht} alt="" className="w-[30vw] h-[60vh]" />
          </div>
        </div>
      </div>
    </div>
  );
}
